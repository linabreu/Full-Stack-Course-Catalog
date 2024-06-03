package cactusCollege.Controller.Model;

import cactusCollege.entity.Course;
import cactusCollege.entity.Instructor;
import cactusCollege.entity.Section;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SectionData {
	
	private Long sectionId;
	private String semester;
	private String day;
	private String time;
	private String dates;
	private String delivery;
	private String room;

	//private Long instructorId;
	private String instructorName;
	
	
	//convert from section entity to section data
	public SectionData(Section section)
	{
		sectionId = section.getSectionId();
		semester = section.getSemester();
		day = section.getDay();
		time = section.getTime();
		dates = section.getDates();
		delivery = section.getDelivery();
		room = section.getRoom();
		//instructorId = section.getInstructor().getInstructorId();
		instructorName = section.getInstructor().getFirstName() + " " + section.getInstructor().getLastName();
	}

}
