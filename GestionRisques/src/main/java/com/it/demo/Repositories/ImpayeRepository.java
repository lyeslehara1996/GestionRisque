package com.it.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.it.demo.Entities.Impaye;
@RepositoryRestResource
public interface ImpayeRepository extends JpaRepository<Impaye, Long>{

}
