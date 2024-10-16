import React from 'react';

const CourseCard = () => {
  return (
    <div className="course-card">
      <h3>Course Title</h3>
      <img src="https://via.placeholder.com/300x200" alt="Course" />
      <p>Description of the course goes here. Learn more about this course.</p>
      <button>Enroll Now</button>
    </div>
  );
};

export default CourseCard;
