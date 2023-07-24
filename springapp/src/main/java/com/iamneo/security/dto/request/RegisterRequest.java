package com.iamneo.security.dto.request;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {
    
	@Id
	@GeneratedValue
	private int id;
	private String fname;
	private String lname;
	private String address;
	private String contactno;
	private String degree;
	private String specialization;
	private int passyr;
	private float cgpa;
	private int miniexp;
	private String email;
	private String password;
}
