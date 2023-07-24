package com.iamneo.security.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.iamneo.security.entity.HrDetails;
import com.iamneo.security.entity.Interview;
import com.iamneo.security.entity.JobDetails;
import com.iamneo.security.entity.Notification;
import com.iamneo.security.entity.ParseData;
import com.iamneo.security.entity.User;
import com.iamneo.security.repository.HrDetailsRepository;
import com.iamneo.security.repository.InterviewRepository;
import com.iamneo.security.repository.JobDetailsRepository;
import com.iamneo.security.repository.NotificationRepository;
import com.iamneo.security.repository.ParseDataRepository;
import com.iamneo.security.repository.UserRepository;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Service
@Setter
@Getter
@RequiredArgsConstructor
public class ApiService {


	private final UserRepository userRepository;
	private final JobDetailsRepository jobDetailsRepository;
	private final NotificationRepository notificationRepository;
	private final ParseDataRepository parseDataRepository;
	private final InterviewRepository interviewRepository;
	private final HrDetailsRepository hrDetailsRepository;
	
	public List<User> findAllUser(){
		return userRepository.findAll();
	}	
	public User getUser(int id){
		return userRepository.findById(id).orElse(null);
	}
	public void postUser(User user) {
		
		userRepository.save(user);
	}
	public User saveUser(User user) {
        return userRepository.save(user);
    }
	public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
	public void updateUser(int id, User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setFname(user.getFname());
            existingUser.setLname(user.getLname());
            existingUser.setContactno(user.getContactno());
            existingUser.setDegree(user.getDegree());
            existingUser.setSpecialization(user.getSpecialization());
            existingUser.setAddress(user.getAddress());
            existingUser.setPassyr(user.getPassyr());
            existingUser.setCgpa(user.getCgpa());
             userRepository.save(existingUser);
        }

        }
	public void updateUserSaved(int id, JobDetails user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
        	
        	List<JobDetails> existingsaved=existingUser.getSaved();
        	
        	existingsaved.add(user);
//        	
        	
        	existingUser.setSaved(existingsaved);
             userRepository.save(existingUser);
        }

        }
	public void updateUserInt(int id, User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
        	
        	List<Interview> existinginterview=existingUser.getInterview();
        	for(Interview interview: user.getInterview()) {
        	existinginterview.add(interview);
        	}
        	
        	existingUser.setInterview(existinginterview);
             userRepository.save(existingUser);
        }

        }
	public void updateUserNoti(int id, User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
        	
        	List<Notification> existingnotification=existingUser.getNotification();
        	for(Notification notification: user.getNotification()) {
        		existingnotification.add(notification);
        	}
        	
        	existingUser.setNotification(existingnotification);
             userRepository.save(existingUser);
        }

        }
	public void updateUserapplied(int id, User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
        	
        	List<JobDetails> existingapplied=existingUser.getApplied();
        	for(JobDetails applied: user.getApplied()) {
        		existingapplied.add(applied);
        	}
        	
        	existingUser.setApplied(existingapplied);
             userRepository.save(existingUser);
        }

        }
	public void deleteUser(int id) {
		userRepository.deleteById(id);
		
	}
	public List<JobDetails> findAllJob(){
		return jobDetailsRepository.findAll();
	}
	public JobDetails getJobDetails(int id){
		return jobDetailsRepository.findById(id).orElse(null);
	}
	public void postJob(JobDetails jobDetails) {
		jobDetailsRepository.save(jobDetails);
	}
	public void deleteJob(int id) {
		jobDetailsRepository.deleteById(id);
		
	}
	public List<Notification> findAllNotification(){
		return notificationRepository.findAll();
	}
	public Notification getNotification(int id){
		return notificationRepository.findById(id).orElse(null);
	}
	
	public void postNotification(Notification notification) {
		notificationRepository.save(notification);
	}
	public void deleteNotification(int id) {
		notificationRepository.deleteById(id);
		
	}
	public List<ParseData> findAllParseData(){
		return parseDataRepository.findAll();
	}
	public ParseData getParseData(int id){
		return parseDataRepository.findById(id).orElse(null);
	}
	public void postParseData(ParseData parseData) {
		parseDataRepository.save(parseData);
	}
	public void deleteParseData(int id) {
		parseDataRepository.deleteById(id);
		
	}
	public List<Interview> findAllInterview(){
		return interviewRepository.findAll();
	}
	public Interview getInterview(int id){
		return interviewRepository.findById(id).orElse(null);
	}
	public void postInterview(Interview interview) {
		interviewRepository.save(interview);
	}
	public void deleteInterview(int id) {
		interviewRepository.deleteById(id);
		
	}
	public List<HrDetails> findAllHrDetails(){
		return hrDetailsRepository.findAll();
	}
	public HrDetails getHrDetails(int id){
		return hrDetailsRepository.findById(id).orElse(null);
	}
	public void postHrDetails(HrDetails hrDetails) {
		hrDetailsRepository.save(hrDetails);
	}
	public void deleteHrDetails(int id) {
		hrDetailsRepository.deleteById(id);
		
	}

}