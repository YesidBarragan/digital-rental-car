package com.dh.DigitalBooking.Model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name= "cities")
public class City {
    // ================= ATRIBUTOS ======================== //
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_city")
    private long id;
    private String name;
    private String country;

    @OneToMany(mappedBy = "city", orphanRemoval = true)
    private List<Product> products = new ArrayList<>();

    // ================= COSNTRUCTOR ======================== //


    public City(String name, String country, List<Product> products) {
        this.name = name;
        this.country = country;
        this.products = new ArrayList<>();
    }

    public City(String name, String country) {
        this.name = name;
        this.country = country;
    }

    public City() {
    }

    // ================= GETTERS AND SETTERS ======================== //

    public long getId() {
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
    }       //REVISAR SI VAN GETTERS Y SETTERS PARA PRODUCTOS

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
