package com.dh.DigitalBooking.DTO;

import com.dh.DigitalBooking.Model.Category;
import com.dh.DigitalBooking.Model.Characteristic;
import com.dh.DigitalBooking.Model.City;
import com.dh.DigitalBooking.Model.Image;

import java.util.ArrayList;
import java.util.List;

public class ProductDTO {

    // ================= ATRIBUTOS ======================== //
    private Long id;

    private String name;
    private String description;
    private String latitude;
    private String longitude;
    private List<Characteristic> characteristics;
    private List<Image> images;
    private City city;
    private Category category;

    // ================= CONSTRUCTOR ======================== //


    public ProductDTO(String name, String description, String latitude, String longitude, List<Image> images) {
        this.name = name;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.images = new ArrayList<>();
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

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public List<Characteristic> getCharacteristics() {
        return characteristics;
    }

    public void setCharacteristics(List<Characteristic> characteristics) {
        this.characteristics = characteristics;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
