package com.it.demo.Entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
@Entity
@Data
public class Engagement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ACCOUNT_NUMBER")
	private long ACCOUNT_NUMBER;
	@Column(name="FACILITY_ID")
	private TypeEngagement FACILITY_ID;
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

	 
}
