import React, { useRef, useState } from "react";
import filterPicture from "../../../Pictures/107799.png";
import courseData from "../../../Datas/courseData.js";


export default function MyCorusePage({ changeMainRenderedPage }) {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleAddPayment = (id) => {
        // Знаходимо індекс елемента масиву, який має вказаний id
        const index = courseData.findIndex((item) => item.id === id);
        if (index !== -1) {
            courseData[index].paid = true;
            console.log(courseData[index].sub);
        } else {
            console.error(`Елемент з id ${id} не знайдено в масиві courseData`);
        }
    };


    const handleChoose = (id) => {
        const course = courseData.find((item) => item.id === id);
        selectedCourse(course);
    };

    if (selectedCourse)
        changeMainRenderedPage(
            <CourseObject>

            </CourseObject>
        );

    return (
        <div className="course-page-container">
            <div>
                <img className="course-logo" src="https://i0.wp.com/www.al-fanarmedia.org/wp-content/uploads/2019/04/online-3412473_1280.jpg?fit=1280%2C853&ssl=1" alt="Course picture"/>
            </div>
            <h2 className="course-welcome-message">Приєднуйся до Великої родини, де ти знайдеш нові знайомства і завжди  актуальну інформацію. </h2>
            <div>
                <h2>Популярні теми для вивчння</h2>
                <div className="filter-popular-section">
                    <button>Освіта</button>
                    <button>Абітурієнт</button>
                    <button>Магістр</button>
                    <button>Допомога</button>
                    <button>Відпочинок</button>
                    <button>Освіта</button>
                </div>
            </div>
            <div className="filter-section">
                <div className="search-section">
                    <span className="search-text">Я шукаю</span>
                    <input className="filter-input" type="text"/>
                </div>
                <div className="image-section">
                    <img className="filter-image" src={filterPicture} alt="Filter picture"/>
                </div>
            </div>
            <h2 className="actual-forum">Актуальні форуми</h2>
            <ForumListItems forumData={courseData} onAction={handleChoose}/>
        </div>
    );
}

