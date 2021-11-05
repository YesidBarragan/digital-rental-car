package com.dh.DigitalBooking.Model;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name= "characteristic")
public class Characteristic {

    // ================= ATRIBUTOS ======================== //
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "characteristic_sequence")
    @SequenceGenerator(name= "characteristic_sequence", sequenceName = "characteristic_sequence")
    @Column(name = "id_characteristic")
    private long id;
    private String name;
    private String icon;

    @ManyToMany(mappedBy = "characteristics")
    private List<Product> products = new ArrayList<>();

    // ================= CONSTRUCTOR ========================//
    public Characteristic(String name, String icon, List<Product> products) {
        this.name = name;
        this.icon = icon;
        this.products = products;
    }

    public Characteristic(String name, String icon) {
        this.name = name;
        this.icon = icon;
    }

    public Characteristic() {
    }

    // ================= GETTERS AND SETTERS ========================//
    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
