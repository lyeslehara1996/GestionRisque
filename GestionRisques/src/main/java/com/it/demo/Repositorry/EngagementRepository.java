package com.it.demo.Repositorry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.it.demo.Entities.Engagement;
@RepositoryRestResource
public interface EngagementRepository extends JpaRepository<Engagement, Long>{

}
