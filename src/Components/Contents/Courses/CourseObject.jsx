import React, { useState } from "react";
import "./Styles/CourseObject.css";
import courseData from "../../../Data\'s/courseData.js";


export default function CourseObject({onPayment,countOfLessons, author, price, userCourseCount,description, mainDescription, title, image, id, lessons }) {
    const paid = courseData[id].paid;
    const [alreadyPaid, setAlreadyPaid] = useState(paid ? "Ви вже придаби даний курс" : "Придбати");

    const handleActionButtonClick = () => {
        setAlreadyPaid("Ви вже придбали даний курс");
        onPayment(id);
    };
    const lessonsContent = paid ? <div className="course-object-lessons">
        <h2>Почни навчання прямо зараз! </h2>
        {lessons.map((item) => (
            <div key={item.id}>
                <button>{item.title}</button>
            </div>
        ))}
    </div> : null

    return (
        <div className="course-object">
            <div className="course-object-left-details">
                <h2>{title}</h2>
                <p>Автор:{author}</p>
                <p>Кількість уроків{countOfLessons}</p>
                <p>{mainDescription}</p>
            </div>
            <div className="course-object-right-details">
                <img src={image} alt={title}/>
                <p>{description}</p>
                <p>Кількість учасників:{userCourseCount}</p>
                <p>Ціна: {price}</p>
                <div className="course-object-acion">
                    <button disabled={paid} onClick={handleActionButtonClick}>{alreadyPaid}</button>
                </div>
            </div>
            {lessonsContent}
        </div>
    );
}
