package cactusCollege.service;

import java.util.LinkedList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cactusCollege.Controller.Model.CourseData;
import cactusCollege.Controller.Model.DepartmentData;
import cactusCollege.Controller.Model.InstructorData;
import cactusCollege.Controller.Model.SectionData;
import cactusCollege.dao.CourseDao;
import cactusCollege.entity.Course;
import cactusCollege.entity.Department;
import cactusCollege.entity.Instructor;
import cactusCollege.entity.Section;

@Service
public class CactusCollegeService {

	@Autowired 
	private CourseDao courseDao;
	
	@Transactional(readOnly = true)
	private Course findCourseById(Long courseID) 
	{
		return courseDao.findById(courseID).orElseThrow(()-> new NoSuchElementException
				("Instructor with ID " + courseID + " not found!"));
	}
	
	@Transactional(readOnly = true)
	public List<CourseData> retrieveAllCourses() 
	{
		//retrieve all course entities
		List<Course> courses = courseDao.findAll();
		//create list to hold all of the entities converted into data 
		List<CourseData> courseData = new LinkedList<>();
		
		for(Course course: courses)
		{
			courseData.add(new CourseData(course));
		}
		
		return courseData;
	}
	
	@Transactional(readOnly = true)
	public CourseData retrieveCourseById(Long courseID)
	{
		Course course = findCourseById(courseID);
		return new CourseData(course); //convert course entity to data to return it
	}

	public List<CourseData> retrieveCourseByName(String courseName) 
	{
		List<Course> courses = courseDao.findByCourseNameIgnoreCaseContaining(courseName);
		List<CourseData> courseData = new LinkedList<>();
		for(Course course: courses)
		{
			courseData.add(new CourseData(course));
		}
		
		return courseData;
	}
	
	


}
