import React from "react";
import CourseItem from "./CourseItem.jsx";


export  default function CourseListItems({ courseData, onAction }) {
    return (
        <div className="course-container">
            <div className="course-list">
                {courseData.map((item) => (
                    <CourseItem
                        key={item.id}
                        onAction ={onAction}
                        countOfLessons={item.countOfLessons}
                        author={item.author}
                        price={item.price}
                        userCourseCount={item.userCourseCount}
                        description={item.description}
                        title={item.title}
                        image={item.image}
                        id={item.id}
                        paid={item.paid}
                    />
                ))}
            </div>
        </div>

    );
}
