package cactusCollege.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import cactusCollege.entity.Course;

public interface CourseDao extends JpaRepository<Course, Long> 
{
	List<Course> findByCourseNameIgnoreCaseContaining(String courseName);
	
	
	
}
