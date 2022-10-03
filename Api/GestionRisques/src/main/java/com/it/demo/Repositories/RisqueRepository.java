package com.it.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.it.demo.Entities.Risque;
@RepositoryRestResource
public interface RisqueRepository extends JpaRepository<Risque, Long>{

}
