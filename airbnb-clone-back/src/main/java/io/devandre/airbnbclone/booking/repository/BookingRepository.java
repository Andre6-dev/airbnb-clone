package io.devandre.airbnbclone.booking.repository;

import io.devandre.airbnbclone.booking.domain.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}