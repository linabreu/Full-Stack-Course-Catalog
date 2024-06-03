package cactusCollege.Controller.Model;

import java.util.HashSet;
import java.util.Set;

import cactusCollege.entity.Course;
import cactusCollege.entity.Instructor;
import cactusCollege.entity.Section;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class CourseData {
	
	private Long courseId;
	private String courseName;
	private String courseDesc;
	private int credits;
	
	//one to many relationship. One course has multiple sections like contributor from the lesson
	private Set<SectionData> sections = new HashSet<>();
	
	//many to many relationship. multiple instructors teach multiple courses
	//private Set<InstructorData> instructors = new HashSet<>();
	//private Instructor instructor;
	
	//constructor to create courseData object from course entity
	public CourseData (Course course)
	{
		courseId = course.getCourseId();
		courseName = course.getCourseName();
		courseDesc = course.getCourseDesc();
		credits = course.getCredits();
		
		
		for (Section section: course.getSections())
		{
			sections.add(new SectionData(section));
		}


	}
	
}
