package com.dh.DigitalBooking.DTO;

public class ProductDTO {

    // ================= ATRIBUTOS ======================== //
    private Long id;

    private String name;
    private String description;

    // ================= CONSTRUCTOR ======================== //

    public ProductDTO(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public ProductDTO() {
    }

    // ================= GETTERS AND SETTERS ======================== //

    public Long getId() {
        return id;
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


}
