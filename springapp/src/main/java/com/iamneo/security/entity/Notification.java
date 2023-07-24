package com.iamneo.security.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data	
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter

public class Notification {

	@Id
	@GeneratedValue
	private int id;
	private String title;
	private String description;
	private String date;
	private String department;
	
}
