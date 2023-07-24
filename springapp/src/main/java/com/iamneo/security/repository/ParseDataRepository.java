package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.ParseData;

@Repository
public interface ParseDataRepository extends JpaRepository<ParseData,Integer> {

}
