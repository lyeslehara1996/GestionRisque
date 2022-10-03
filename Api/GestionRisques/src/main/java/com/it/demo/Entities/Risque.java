package com.it.demo.Entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Risque {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id ;
private String RISK_RATE;
private Date FINANCIAL_STATEMENT_DATE;
private String PD;

@OneToMany(mappedBy = "risque",cascade = CascadeType.ALL)
private List<Engagement> engagementList;


@OneToMany(mappedBy = "risquestres",cascade = CascadeType.ALL)
private List<SenarioStre> senarioStres;

}
