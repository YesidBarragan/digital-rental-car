package com.dh.DigitalBooking.DTO;

public class CityDTO {

    // ================= ATRIBUTOS ======================== //
    private Long id;
    private String name;
    private String country;


    // ================= CONSTRUCTOR ======================== //

    public CityDTO(String name, String country) {
        this.name = name;
        this.country = country;
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
}
