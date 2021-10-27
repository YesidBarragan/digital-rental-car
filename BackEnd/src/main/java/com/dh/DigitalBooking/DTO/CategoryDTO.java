package com.dh.DigitalBooking.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CategoryDTO {

    // ================= ATRIBUTOS ========================
    private Long id;
    private String name;
    private String description;
    private String imgUrl;


    // ================= CONSTRUCTOR ========================

    public CategoryDTO() { }

    public CategoryDTO(String name, String description, String imgUrl) {
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
    }

    // ================= GETTERS AND SETTERS ========================


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    // ================= METODOS ========================

}
