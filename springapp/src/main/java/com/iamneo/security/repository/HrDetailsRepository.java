package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.HrDetails;

@Repository
public interface HrDetailsRepository extends JpaRepository<HrDetails,Integer> {

}
