package com.it.demo.Entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Impaye {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private Date DEFAULT_DATE;
private  float DPD;
private  boolean RESTRCUTRED_FLAG;
private Date RESTRUCTURED_DATE;
private boolean  RESCHEDULE_FLAG;
private Date RESCHDULE_DATE;
private float OVER_DUE;
@OneToOne(cascade = {CascadeType.ALL})
@JoinColumn(name = "engagement_id")
 private Engagement engagement;


public String getRESCHEDULE_FLAGAsString() {
	return this.RESCHEDULE_FLAG ?"Oui" :"Non";
}

public String getRESTRCUTRED_FLAGAsString() {
	return this.RESTRCUTRED_FLAG ?"Oui" :"Non";
}




}

