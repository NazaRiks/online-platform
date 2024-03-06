import React, { useState } from 'react';
import "./MyEducationPage.css"
import CourseListIems from "../Courses/CourseListItems.jsx";
import CourseObject from "../Courses/CourseObject.jsx";
import courseData from "../../../Data's/courseData.js";
export default function MyEducationPage({changeMainRenderedPage}) {
    const [selectedDate, setSelectedDate] = useState(new Date('2024-02-29'));

    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

    const scheduleData = [
        {
            day: '2024-02-29',
            classes: [
                {
                    name: 'Основи програмування',
                    time: '10:00 - 11:30',
                    location: 'Код класу: das24g',
                    link: "https://meet.google.com/jnt-xxig-epg?authuser=0"
                },
                {
                    name: 'Інженерія програмного забезпеечення',
                    time: '12:00 - 13:30',
                    location:'Код класу: sdfg35',
                    link: "https://meet.google.com/jnt-xxig-epg?authuser=0"
                },
            ],
        }
    ];

    const activeClasses = [
        {
            name: 'Основи програмування',
            description: 'Вступ до теорії пртограмуання',
            tasks: [
                {
                    title: 'Вирішити задачі з підручника',
                    deadline: '2024-03-05',
                },
                {
                    title: 'Підготуватися до семінару з теми "Типи даних"',
                    deadline: '2024-03-07',
                },
            ],
        },
        {
            name: ' Інженерія програмного забезпеечення',
            description: 'Методології розробки',
            tasks: [
                {
                    title: 'Провести лабораторну роботу "Методології розробки"',
                    deadline: '2024-03-03',
                },
                {
                    title: 'Підготувати реферат на тему "Методології розробки"',
                    deadline: '2024-03-10',
                },
            ],
        },
    ];
    const [selectedCourse, setSelectedCourse] = useState('');
    const boughtCourse = courseData.filter(item => item.paid);
    const handleChoose = (id) => {
        const course = boughtCourse.find((item) => item.id === id);
        setSelectedCourse(course);
    };
    const handleDateChange = (event) => {
        setSelectedDate(new Date(event.target.value));
    };

    if (selectedCourse)

        changeMainRenderedPage(
            <CourseObject
                id={selectedCourse.id}
                image={selectedCourse.image}
                description={selectedCourse.description}
                title={selectedCourse.title}
                author={selectedCourse.author}
                price = {selectedCourse.price}
                userCourseCount={selectedCourse.userCourseCount}
                mainDescription={selectedCourse.mainDescription}
                lessons={selectedCourse.lessons}
                countOfLessons={selectedCourse.countOfLessons}
            />
        );
    return (
        <div className="my-education-page">

            <div className="main-content">
                <div className="schedule-section">
                    <h2>Розклад</h2>
                    <div className="filter-section">
                        <select value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange}>
                            {daysOfWeek.map((day) => (
                                <option key={day} value={day}>
                                    {day}
                                </option>
                            ))}
                        </select>
                    </div>
                    {scheduleData.find((item) => item.day === selectedDate.toISOString().split('T')[0])?.classes.map(
                        (course) => (
                            <div className="shedule-item" key={course.name}>
                                <div className="shedule-details">
                                    <h2>Предмет: {course.name}</h2>
                                    <p>Час: {course.time}</p>
                                    <p>Місце: {course.location}</p>
                                    <a href={course.link}>Посилання на урок</a>
                                </div>
                            </div>
                        )
                    )}
                </div>
                <div className="classes-section">
                    <h2>Актуальні класи</h2>
                    {activeClasses.map((course) => (
                        <div className="classes-item" key={course.name}>
                            <div className="classes-details">
                                <h2>{course.name}</h2>
                                <p>{course.description}</p>
                                <div className="classes-button-check">
                                    <button>Перейти до класу</button>
                                </div>
                                <ul className="tasks-list">
                                    {course.tasks.map((task) => (
                                        <li key={task.title}>
                                            <p className="task-deadline">Виконати до: {task.deadline}  </p>
                                            <p className="task-title">{task.title}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h2>Придбані курси</h2>
                    {boughtCourse.length===0 ? <p>Ви ще не придбали  жодного курсу</p>:<CourseListIems courseData={boughtCourse} onAction={handleChoose}/> }
                </div>
            </div>
        </div>
    );
}