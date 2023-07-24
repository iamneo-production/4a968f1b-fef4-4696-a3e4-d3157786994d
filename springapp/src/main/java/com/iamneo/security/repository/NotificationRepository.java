package com.iamneo.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.Notification;
import com.iamneo.security.entity.User;

@Repository
public interface NotificationRepository extends JpaRepository<Notification,Integer> {
}
