package com.dh.DigitalBooking.Controller;
import com.dh.DigitalBooking.DTO.ProductDTO;
import com.dh.DigitalBooking.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@CrossOrigin
@RestController
@RequestMapping("/product")
public class ProductController {

    // ======= ATRIBUTOS ==========//
    private ProductService productService;
    Logger logger = Logger.getLogger(String.valueOf(ImageController.class));

    // ======= CONSTRUCTOR ==========//
    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // ===== METODO POST ===== //
    @PostMapping("/save")
    public ResponseEntity save(@RequestBody ProductDTO productDTO) {
        ResponseEntity response;
        if (productService.findProductByName(productDTO.getName()) != null) {
            response = new ResponseEntity("Product already exist!", HttpStatus.CONFLICT);
        } else if (productDTO.getName().isEmpty() || productDTO.getDescription().isEmpty()) {
            response = new ResponseEntity("Cannot have empty/void spaces", HttpStatus.BAD_REQUEST);
        } else {
            response = new ResponseEntity(productService.save(productDTO), HttpStatus.OK);
        }
        return response;
    }

    // ===== METODOS GET ===== //
    @GetMapping("/id/{id}")
    public ProductDTO findById(@PathVariable Long id) {
        logger.info("Searching product by ID");
        return productService.findById(id).orElse(null);
    }

    @GetMapping("/name/{name}")  //PARA IMAGEN USO TITLE YA QUE NO TIENE ATRIBUTO NAME
    public ProductDTO findProductByName (@PathVariable String name) {
        logger.info("Searching product by name");
        return productService.findProductByName(name);
    }

    @GetMapping()
    public List<ProductDTO> findAll() {
        logger.info("product List");
        return productService.findAll();
    }







}
