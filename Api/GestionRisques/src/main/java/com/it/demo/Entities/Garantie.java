package com.it.demo.Entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Garantie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id ;
private double REAL_ESTATE_COL_VALUE;
private  String CURRENCY_REAL_ESTATE_COL_VALUE;
private double VALEUR_EXPERTISE;
private String CURRENCY_VALEUR_EXPERTISE;
private double CASH_COL_VALUE;
private String CURRENCY_CASH_COL_VALUE;
private double DEPBDZD;
private double DEPBDEVISE;
@ManyToMany
 private List<Engagement> lisEngagement;

}
