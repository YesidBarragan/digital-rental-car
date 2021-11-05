package com.dh.DigitalBooking.DTO;

public class CharacteristicDTO {

    // ================= ATRIBUTOS ======================== //
    private Long id;
    private String name;
    private String icon;

    // ================= GETTERS AND SETTERS ======================== //


    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    // ================= CONSTRUCTOR ======================== //


    public CharacteristicDTO(String name, String icon) {
        this.name = name;
        this.icon = icon;
    }

    public CharacteristicDTO() {
    }
}
