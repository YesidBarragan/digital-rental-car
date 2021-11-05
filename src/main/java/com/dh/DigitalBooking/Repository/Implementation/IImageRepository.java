package com.dh.DigitalBooking.Repository.Implementation;

import com.dh.DigitalBooking.Model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface IImageRepository extends JpaRepository<Image, Long> {

    @Query("SELECT img FROM Image img WHERE img.name = ?1")
    Optional<Image> findImageByName(String name);
}
