package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.JobDetails;

@Repository
public interface JobDetailsRepository extends JpaRepository<JobDetails,Integer> {

}
