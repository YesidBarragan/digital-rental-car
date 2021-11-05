package com.dh.DigitalBooking.Repository.Implementation;

import com.dh.DigitalBooking.Model.Characteristic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ICharacteristicRepository extends JpaRepository <Characteristic, Long> {

    @Query("SELECT characteristic FROM Characteristic characteristic WHERE characteristic.name = ?1")
    Optional<Characteristic> findCharacteristicByName(String name);
}
