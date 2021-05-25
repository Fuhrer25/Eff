import React, { useContext } from 'react';
import Course from './components/course';
import { CourseContext } from './data';

const Courses = () => {
    const [courses, setCourses] = useContext(CourseContext);
    return (
    <div>
        <div className="Header" id="Header">
                <a className="btn btn-info" href="#Courses">გაიგეთ მეტი</a>
        </div>
        
        <div className="Courses" id="Courses">
            <h1 className="courseMain">კურსები</h1>
            <div className="container">
                {courses.map(course => (
                    <Course 
                    key={course.id}
                    id={course.id}
                    image={course.image}
                    title={course.title}
                    description={course.description}
                    price={course.price}
                    />
                ))}
            </div>
        </div>
    </div>
    );
}

export default Courses;