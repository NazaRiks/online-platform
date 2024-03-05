import filterPicture from "../../../Pictures/107799.png";
import courseData from "../../../Data's/courseData.js";
import { useNavigate } from 'react-router-dom';
import CourseListItems from "./CourseListItems.jsx";
import "./Styles/CoursePage.css"
export default function MyCoursePage( ) {
    const navigate = useNavigate();



    const handleChoose = (id) => {
        const course = courseData.find((item) => item.id === id);
        const queryParams = {
            id: course.id,
            image: course.image,
            description: course.description,
            title: course.title,
            author: course.author,
            price: course.price,
            userCourseCount: course.userCourseCount,
            mainDescription: course.mainDescription,
            lessons: course.lessons,
            countOfLessons: course.countOfLessons
        };



        navigate('/courses/course-object', {
            state: queryParams,
        });
    };

    return (
        <div className="course-page-container">
            <div>
                <img className="course-logo" src="https://i0.wp.com/www.al-fanarmedia.org/wp-content/uploads/2019/04/online-3412473_1280.jpg?fit=1280%2C853&ssl=1" alt="Course picture"/>
            </div>
            <h2 className="course-welcome-message">Готовий до нових знань? Давай почнемо прямо зараз!</h2>
            <div>
                <h2>Популярні теми для вивчння</h2>
                <div className="filter-popular-section">
                    <button>Веб розробка</button>
                    <button>Бек-енд розробка</button>
                    <button>Дата аналітика</button>
                    <button>QA Інженрія</button>
                    <button>UI-UX Дизайн</button>
                    <button>Бізнес аналітика</button>
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
            <h2 className="actual-course">Актуальні курси</h2>
            <CourseListItems courseData={courseData} onAction={handleChoose}/>
        </div>
    );
}