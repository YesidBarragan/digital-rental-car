package com.dh.DigitalBooking.Model;


import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category {

    // ================= ATRIBUTOS ========================//

    @Id
    @SequenceGenerator(name = "category_sequence", sequenceName = "category_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id_category")
    private Long id;

    private String name;
    private String description;
    private String imgUrl;

    // ================= ATRIBUTOS ========================//

    public Category() { }

    public Category(String name, String description, String imgUrl) {
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
    }

    // ================= ATRIBUTOS ========================//


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

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}
