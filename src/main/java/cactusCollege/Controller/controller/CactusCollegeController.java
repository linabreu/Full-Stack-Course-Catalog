package cactusCollege.Controller.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import cactusCollege.Controller.Model.CourseData;
import cactusCollege.Controller.Model.DepartmentData;
import cactusCollege.Controller.Model.InstructorData;
import cactusCollege.Controller.Model.SectionData;
import cactusCollege.service.CactusCollegeService;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/cactus_college")
@Slf4j
public class CactusCollegeController {
	
	@Autowired //managed bean
	private CactusCollegeService cactusCollegeService;
	

//-------------------------------- READ ---------------------------------------------
	
	//read all entities

	//@GetMapping("/course")
	/*public List<CourseData> retrieveAllCourses()
	{
		log.info("Retrieving all courses offered by Cactus College");
		return cactusCollegeService.retrieveAllCourses();
	}*/
	@GetMapping("/course")
	public List<CourseData> retrieveCourseByName(@RequestParam (required = false) String name)
	{
		return cactusCollegeService.retrieveCourseByName(name);
	}
	

	
	
	//read a specific entity
	@GetMapping("/course/{courseID}")
	public CourseData retrieveCourseById(@PathVariable Long courseID)
	{
		log.info("Retrieving course with ID = {}");
		return cactusCollegeService.retrieveCourseById(courseID);	
	}
	
	  /*@GetMapping("/course/{courseName}")
	  public List<CourseData> retrieveCoursesByName(@PathVariable("courseName") String courseName) 
	  {
	   return cactusCollegeService.retrieveCourseByName(courseName);
	  }
	  
	/*  @RequestMapping(value="user", method = RequestMethod.GET)
	  public @ResponseBody Item retrieveCoursesByName(@RequestParam("data") String courseName)
	  {

		  return cactusCollegeService.retrieveCourseByName(courseName);
	  }*/
	  

	  
	  

}
