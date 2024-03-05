import React, { useState } from "react";
import "./Styles/ForumObject.css";
import forumData from "../../../Data's/forumData.js";

export default function ForumObject({onAddSub, onCancelSub, author, description, mainDescription, title, image, id, userForumCount, topics }) {
    const sub = forumData[id].sub
    const [actionSub, setActionSub] = useState(sub ? "Відписатися" : "Підписатися");

    const handleActionButtonClick = () => {
        setActionSub(sub ? "Підписатися" : "Відписатися");
        sub ? onCancelSub(id) : onAddSub(id);
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
