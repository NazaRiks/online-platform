import React from "react";
import "./Styles/CourseItem.css"
export default function CourseItem({ paid,onAction,countOfLessons, author, price, userCourseCount,description, title, image, id }) {
    return (
        <div className="course-item">
            <div className="course-item-image">
                <img src={image} alt="" />
            </div>
            <div className="course-details">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Автор:{author}</p>
                <p>Кількість уроків: {countOfLessons}</p>
                <p>Кількість учасників:{userCourseCount}</p>
                <p>Ціна: {price}</p>
            </div>
            <div className="course-button-check">
                <button onClick={() => onAction(id)}>
                    {paid ? <p> Продовжити навчання</p>: <p>Переглянути</p>}
                </button>
            </div>
        </div>
    );
}
