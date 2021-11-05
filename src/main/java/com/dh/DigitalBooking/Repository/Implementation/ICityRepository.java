package com.dh.DigitalBooking.Repository.Implementation;

import com.dh.DigitalBooking.Model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ICityRepository extends JpaRepository <City,Long> {

    @Query("SELECT city FROM City city WHERE city.name = ?1")
    Optional<City> findCityByName(String name);
}
