package com.it.demo.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.it.demo.Entities.Produit;
@RepositoryRestResource
public interface ProduitRepository extends  JpaRepository<Produit, String> {

}
