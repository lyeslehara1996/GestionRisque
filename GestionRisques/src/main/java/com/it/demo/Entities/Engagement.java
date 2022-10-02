package com.it.demo.Entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.Cascade;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Engagement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long ACCOUNT_NUMBER;
@Enumerated(EnumType.STRING)
	private TypeEngagement typeEnga;
	private Boolean FACILITY_ID;
	private double NOMINAL_EXPOSURE;
	private double EFFECTIVE_PROV_AMT;
	private  double INT_RESV;
	private double PCA;
	private double PART_20700_20710;
	private double ISLAMIC;
	private double LEASING;
	private Date MATURITY_DATE; 
	private float MATURITY_DAYS;
	private Integer LC_Number;
	private String INSTALLEMENT_PAYEMENT_CYCLE;
	private String ISO_CUR_CODE;
	private float AGE_OF_LOAN;
	private Date FIRST_INSTAL;
	private  double Solde_Balance;
	
	@ManyToOne
	@JoinColumn(name = "id_risque",referencedColumnName = "id")
	
	private Risque  risque;
	
	@OneToOne (mappedBy = "engagement" ,cascade = CascadeType.ALL,fetch = FetchType.LAZY)	
	private Impaye impaye;
	
	@OneToOne
	private Produit produit;
	
	@ManyToMany(mappedBy = "lisEngagement",fetch = FetchType.EAGER)
	 private List<Garantie>listgarantie = new ArrayList<>();
}
