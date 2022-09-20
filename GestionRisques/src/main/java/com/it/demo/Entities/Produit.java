package com.it.demo.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Produit {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long PRODUCT_CODE;
  private  String MAIN_PRODUC_DESC;
  private String PRODUCT_CODE_DESC;
  private String GL_SUBHEAD;
  private String GL_DESCRIPTION;
  
  @OneToOne(mappedBy = "produit")
  private Engagement engagementPro;
}
