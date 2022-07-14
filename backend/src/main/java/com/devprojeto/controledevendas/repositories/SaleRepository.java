package com.devprojeto.controledevendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devprojeto.controledevendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
