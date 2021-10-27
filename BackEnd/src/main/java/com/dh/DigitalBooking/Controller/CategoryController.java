package com.dh.DigitalBooking.Controller;


import com.dh.DigitalBooking.DTO.CategoryDTO;
import com.dh.DigitalBooking.Model.Category;
import com.dh.DigitalBooking.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@CrossOrigin
@RestController
@RequestMapping("/category")
public class CategoryController {

    // ================= ATRIBUTOS ========================//
    private CategoryService categoryService;
    Logger logger = Logger.getLogger(String.valueOf(CategoryController.class));

    // ================= CONSTRUCTOR ========================//
    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // ================= METODO POST ========================//
    @PostMapping("/save")
    public ResponseEntity save(@RequestBody CategoryDTO category) {
        ResponseEntity response;
        if(categoryService.findCategoryByName(category.getName()) != null) {
            response = new ResponseEntity("Category already exist!", HttpStatus.CONFLICT);
        }
        else if(category.getName().isEmpty() || category.getDescription().isEmpty() || category.getImgUrl().isEmpty()){
            response = new ResponseEntity("Cannot have empty/void spaces", HttpStatus.BAD_REQUEST);
        } else {
            response = new ResponseEntity(categoryService.save(category), HttpStatus.OK);
        }
        return response;
    }

    // ================= METODO GET ========================//
    @GetMapping("/id/{id}")
    public CategoryDTO findById(@PathVariable Long id) {
        logger.info("Searching category by ID");
        return categoryService.findById(id).orElse(null);
    }

    @GetMapping("/name/{name}")
    public CategoryDTO findCategoryByName(@PathVariable String name) {
        logger.info("Searching category by name");
        return categoryService.findCategoryByName(name);
    }

    @GetMapping()
    public List<CategoryDTO> findAll() {
        logger.info("Category List");
        return categoryService.findAll();
    }

    // ================= METODO UPDATE ========================//
    @PutMapping("/update")
    public ResponseEntity updateCategory (@RequestBody CategoryDTO categoryUpdate)  {
        ResponseEntity respuesta;

        if(categoryService.findById(categoryUpdate.getId()).isPresent()) {
            respuesta = new ResponseEntity(categoryService.update(categoryUpdate), HttpStatus.OK);
        } else {
            logger.info("Category");
            respuesta = new ResponseEntity("Category not found!", HttpStatus.NOT_FOUND);
        }
        return respuesta;
    }

    // ================= METODO DELETE ========================//
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteCategory (@PathVariable Long id) {
        ResponseEntity respuesta;

        if(categoryService.findById(id).isPresent()) {
            categoryService.delete(id);
            respuesta = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Category has been successfully eliminated!");
        } else {
            respuesta = new ResponseEntity("Category not found!", HttpStatus.NOT_FOUND);
        }
        return respuesta;
    }

    // ================= SOME TEST ========================//
    @PostMapping("/test")
    public List<CategoryDTO> categoryTest(){
        CategoryDTO category1 = new CategoryDTO("LUJOSOS", "Carros lujosos y caros", "url1");
        CategoryDTO category2 = new CategoryDTO("DEPORTIVOS", "Carros deportivos y bonitos", "url2");
        CategoryDTO category3 = new CategoryDTO("ECONOMICOS", "Carros buenos, bonitos y baratos", "url3");

        ArrayList<CategoryDTO> categories = new ArrayList<>();
        categories.add(categoryService.save(category1));
        categories.add(categoryService.save(category2));
        categories.add(categoryService.save(category3));

        return categories;

    }









}
