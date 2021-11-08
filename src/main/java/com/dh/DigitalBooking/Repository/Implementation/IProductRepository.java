package com.dh.DigitalBooking.Repository.Implementation;

import com.dh.DigitalBooking.Model.Image;
import com.dh.DigitalBooking.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface IProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM product p WHERE p.name = ?1")
    Optional<Product> findProductByName(String name);

}
