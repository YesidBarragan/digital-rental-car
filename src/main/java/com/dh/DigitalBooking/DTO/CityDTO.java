package com.dh.DigitalBooking.DTO;

import com.dh.DigitalBooking.Model.Product;

import java.util.ArrayList;
import java.util.List;

public class CityDTO {

    // ================= ATRIBUTOS ======================== //
    private Long id;
    private String name;
    private String country;
    private List<Product> products;


    // ================= CONSTRUCTOR ======================== //

    public CityDTO(String name, String country) {
        this.name = name;
        this.country = country;
    }

    public CityDTO(String name, String country, List<Product> products) {
        this.name = name;
        this.country = country;
        this.products = new ArrayList<>();
    }

    public CityDTO() {
    }

    // ================= GETTER AND SETTERS ======================== //


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
