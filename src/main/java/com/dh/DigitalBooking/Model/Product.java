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
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    @SequenceGenerator(name= "product_sequence", sequenceName = "product_sequence")
    @Column(name = "id_product")
    private long id;

    private String name;
    private String description;


    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "product_characteristc",

            joinColumns = @JoinColumn(name = "id_product"),
            inverseJoinColumns = @JoinColumn(name = "id_characteristc")
    )
    private List<Characteristic> characteristics= new ArrayList<>();

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    private List<Image> images = new ArrayList<>();

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name="id_city", nullable = false)
    private City city;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name="id_category", nullable = false)
    private Category category;

    //===============CONSTRUCTOR ============================//


    public Product(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Product(String name, String description, List<Characteristic> characteristics) {
        this.name = name;
        this.description = description;
        this.characteristics = characteristics;
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
