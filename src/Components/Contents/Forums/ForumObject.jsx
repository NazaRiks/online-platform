import React, { useState } from "react";
import "./Styles/ForumObject.css";
import forumData from "../../../Data's/forumData.js";
import { useLocation } from 'react-router-dom';

export default function ForumObject() {
    const location = useLocation();
    const { author, description, mainDescription, title, image, id, userForumCount, topics } = location.state;
    const sub = forumData[id].sub
    const [actionSub, setActionSub] = useState(sub ? "Відписатися" : "Підписатися");
    const addSubForum = (id) => {
        // Знаходимо індекс елемента масиву, який має вказаний id
        const index = forumData.findIndex((item) => item.id === id);
        if (index !== -1) {
            forumData[index].sub = true;
            console.log(forumData[index].sub);
        } else {
            console.error(`Елемент з id ${id} не знайдено в масиві forumData`);
        }
    };
    const cancelSubForum = (id) => {
        const index = forumData.findIndex((item) => item.id === id);
        if (index !== -1) {
            forumData[index].sub = false;
            console.log(forumData[index].sub);
        } else {
            console.error(`Елемент з id ${id} не знайдено в масиві forumData`);
        }
    };

    const handleActionButtonClick = () => {
        setActionSub(sub ? "Підписатися" : "Відписатися");
        sub ? cancelSubForum(id) : addSubForum(id);
    };

    return (
        <div className="forum-object">
            <div className="forum-object-left-details">
                <h2>{title}</h2>
                <p>Автор:{author}</p>
                <p>{mainDescription}</p>
            </div>
            <div className="forum-object-right-details">
                <img src={image} alt={title} />
                <p>{description}</p>
                <p>Кількість учасників: {userForumCount}</p>
                <div className="forum-object-acion">
                    <button onClick={handleActionButtonClick}>{actionSub}</button>
                </div>
            </div>
            <div className="forum-object-topics">
                <h2>Актуальні топіки</h2>
                {topics.map((item) => (
                    <div key={item.id}>
                        <button>{item.title}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
