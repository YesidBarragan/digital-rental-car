package com.dh.DigitalBooking.Model;

import javax.persistence.*;

@Entity
@Table(name= "images")
public class Image {
    // ================= ATRIBUTOS ======================== //
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_sequence")
    @SequenceGenerator(name= "image_sequence", sequenceName = "image_sequence")
    @Column(name = "id_image")
    private long id;
    private String title;
    private String url;
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name="id_producto", nullable = false)
    private Product product;

    // ================= CONSTRUCTOR ======================== //

    public Image(String title, String url, Product product) {
        this.title = title;
        this.url = url;
        this.product = product;
    }

    public Image(String title, String url) {
        this.title = title;
        this.url = url;
    }

    public Image() {
    }

    // ================= GETTERS AND SETTERS ======================== //
    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
