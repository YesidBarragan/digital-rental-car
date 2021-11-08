package com.dh.DigitalBooking.DTO;

import java.util.List;

public class ProductDTO {

    // ================= ATRIBUTOS ======================== //
    private Long id;

    private String name;
    private String description;
    private List<CharacteristicDTO> characteristicDTOList;
    private List<ImageDTO> imageDTOS;
    private CityDTO cityDTO;
    private CategoryDTO categoryDTO;

    // ================= CONSTRUCTOR ======================== //

    public ProductDTO(String name, String description, List<CharacteristicDTO> characteristicDTOList, List<ImageDTO> imageDTOS, CityDTO cityDTO, CategoryDTO categoryDTO) {
        this.name = name;
        this.description = description;
        this.characteristicDTOList = characteristicDTOList;
        this.imageDTOS = imageDTOS;
        this.cityDTO = cityDTO;
        this.categoryDTO = categoryDTO;
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


}
