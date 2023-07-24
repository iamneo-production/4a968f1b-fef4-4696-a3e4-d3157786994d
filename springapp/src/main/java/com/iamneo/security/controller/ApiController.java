package com.iamneo.security.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.HrDetails;
import com.iamneo.security.entity.Interview;
import com.iamneo.security.entity.JobDetails;
import com.iamneo.security.entity.Notification;
import com.iamneo.security.entity.ParseData;
import com.iamneo.security.entity.User;
import com.iamneo.security.repository.UserRepository;
import com.iamneo.security.service.ApiService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins="*",allowedHeaders="*")
@RequestMapping("/api/v1/")
@RequiredArgsConstructor
public class ApiController {

	private final ApiService apiService;
	private final UserRepository userrepo;
	@GetMapping("/user/get")
	public List<User>getuser() {
        return 	apiService.findAllUser();
    }
	@GetMapping("/user/gets/{id}")
	public List<JobDetails>gets(@PathVariable int id) {
        User u=userrepo.findById(id).orElse(null);
        return u.getSaved();
    }
	@GetMapping("/user/get/{id}")
	public User getuser(@PathVariable int id) {
        return 	apiService.getUser(id);
    }
	@GetMapping("/user/getemail/{email}")
	public Optional<User> getUserByEmail(@PathVariable String email) {
        return 	apiService.getUserByEmail(email);
    }
	@PostMapping("/user/post")
	public void postUser(@RequestBody User user) {
         	apiService.postUser(user);
    }
	@PutMapping("/user/put/{id}")
	public void updateUser(@PathVariable int id,@RequestBody User user) {
		 apiService.updateUser(id,user);
	}
	@PutMapping("/user/putsaved/{id}")
	public void updateUserSaved(@PathVariable int id,@RequestBody JobDetails user) {
		 apiService.updateUserSaved(id,user);
	}
	
	
	@PutMapping("/user/putint/{id}")
	public void updateUserInt(@PathVariable int id,@RequestBody User user) {
		 apiService.updateUserInt(id,user);
	}
	@PutMapping("/user/putnotification/{id}")
	public void updateUserNoti(@PathVariable int id,@RequestBody User user) {
		 apiService.updateUserNoti(id,user);
	}
	@DeleteMapping("/user/del/{id}")
	public void deleteUser(@PathVariable int id) {
        apiService.deleteUser(id);
    }
	@GetMapping("/job/get")
	public List<JobDetails>getJob() {
        return 	apiService.findAllJob();
    }
	@GetMapping("/job/get/{id}")
	public JobDetails getJob(@PathVariable int id) {
        return 	apiService.getJobDetails(id);
    }
	@GetMapping("/savedjob/getbyemail/{email}")
	public List<JobDetails>getusersavedjob(@PathVariable String email) {
		User user = apiService.getUserByEmail(email).orElse(null);
		return 	(user.getSaved());
	}
	@PutMapping("/savedjob/putbyemail/{email}/{id}")
	public void putusersavedjob(@PathVariable String email,@PathVariable int id) {
		User user = apiService.getUserByEmail(email).orElse(null);
		List<JobDetails> saved=user.getSaved();
		List<JobDetails> temp = new ArrayList<>();
		for(JobDetails s: saved) {
			if(s.getId()== id) {
				 
			}
			else {
				temp.add(s);
			}
		}
		System.out.print(temp);
		user.setSaved(temp);
		userrepo.save(user);
	}
	@GetMapping("/applied/getbyemail/{email}")
	public List<JobDetails>getappliedjobbyemail(@PathVariable String email) {
		User user = apiService.getUserByEmail(email).orElse(null);
		return 	(user.getApplied());
	}
	
	@PutMapping("/applied/put/{email}/{id}")
	public void updateUserapplied(@PathVariable String email,@PathVariable int id) {
		 User user=apiService.getUserByEmail(email).orElse(null);
		 List<JobDetails> jobs=apiService.findAllJob();
		 List<JobDetails> temp=user.getApplied();
		 for(JobDetails j:jobs) {
			 if(j.getId()==id) {
				 temp.add(j);
			 }
		 }
		 user.setApplied(temp);
		 userrepo.save(user);
	}
	@PutMapping("/interview/put/{email}")
	public void updateUserint(@PathVariable String email,@RequestBody Interview  interview) {
		 User user=apiService.getUserByEmail(email).orElse(null);
		 List<Interview> jobs=user.getInterview();
		 jobs.add(interview);
		 user.setInterview(jobs);
		 userrepo.save(user);
	}
	
	@PostMapping("/job/post")
	public void postJob(@RequestBody JobDetails jobDetails) {
         	apiService.postJob(jobDetails);
    }
	@DeleteMapping("/job/del/{id}")
	public void deleteJob(@PathVariable int id) {
        apiService.deleteJob(id);
    }
	@GetMapping("/notification/get")
	public List<Notification> getNotification() {
        return 	apiService.findAllNotification();
    }
	@GetMapping("/notification/get/{id}")
	public Notification getNotification(@PathVariable int id) {
        return 	apiService.getNotification(id);
    }
	@GetMapping("/notification/getbyemail/{email}")
	public List<Notification> getNotification(@PathVariable String email) {
		User user=apiService.getUserByEmail(email).orElse(null);
		return user.getNotification();
		
    }
	@PostMapping("/notification/post")
	public void postNotification(@RequestBody Notification notification) {
         	apiService.postNotification(notification);
    }
	@DeleteMapping("/notification/del/{id}")
	public void deleteNotification(@PathVariable int id) {
        apiService.deleteNotification(id);
    }
	@GetMapping("/parseData/get")
	public List<ParseData> getParseData() {
        return 	apiService.findAllParseData();
    }
	@GetMapping("/parseData/get/{id}")
	public ParseData getParseData(@PathVariable int id) {
        return 	apiService.getParseData(id);
    }
	@PostMapping("/parseData/post")
	public void postParseData(@RequestBody ParseData parseData) {
         	apiService.postParseData(parseData);
    }
	@DeleteMapping("/parseData/del/{id}")
	public void deleteParseData(@PathVariable int id) {
        apiService.deleteParseData(id);
    }
	@GetMapping("/hrDetails/get")
	public List<HrDetails> getrHDetails() {
        return 	apiService.findAllHrDetails();
    }
	@GetMapping("/hrDetails/get/{id}")
	public HrDetails getrHDetails(@PathVariable int id) {
        return 	apiService.getHrDetails(id);
    }
	@PostMapping("/hrDetails/post")
	public void postHrDetails(@RequestBody HrDetails hrDetails) {
         	apiService.postHrDetails(hrDetails);
    }
	@DeleteMapping("/hrDetails/del/{id}")
	public void deleteHrDetails(@PathVariable int id) {
        apiService.deleteHrDetails(id);
    }
	@GetMapping("/interview/get")
	public List<Interview> getInterview() {
        return 	apiService.findAllInterview();
    }
	@GetMapping("/interview/get/{id}")
	public Interview getInterview(@PathVariable int id) {
        return 	apiService.getInterview(id);
    }
	@GetMapping("/interview/getbyemail/{email}")
	public List<Interview>getuserinterview(@PathVariable String email) {
		User user = apiService.getUserByEmail(email).orElse(null);
		return 	(user.getInterview());
	}
	@PostMapping("/interview/post")
	public void postInterview(@RequestBody Interview interview) {
         	apiService.postInterview(interview);
    }
	@DeleteMapping("/interview/del/{id}")
	public void deleteInterview(@PathVariable int id) {
        apiService.deleteInterview(id);
    }
	
}
