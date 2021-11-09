package com.dh.DigitalBooking.Model;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name= "product")
public class Product {

    // ================= ATRIBUTOS ======================== //
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    private long id;

    private String name;
    private String description;
    private String latitude;
    private String longitude;


    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "product_characteristc",

            joinColumns = @JoinColumn(name = "id_product", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "id_characteristc", nullable = false)
    )
    private List<Characteristic> characteristics= new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    private List<Image> images = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_city", nullable =false)
    private City city;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id_category", nullable = false)
    private Category category;

    //===============CONSTRUCTOR ============================//


    public Product(String name, String description, String latitude, String longitude, City city, Category category) {
        this.name = name;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.city = city;
        this.category = category;
    }

    public Product() {
    }

    //===============GETTERS AND SETTERS============================//


    public long getId() {
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
