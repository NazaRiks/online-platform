import React from "react";
import "./Styles/ForumObject.css"
export default function ForumObject({ sub, onAddSub, onCancelSub, author, description, mainDescription, title, image, id, userForumCount, topics }) {
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
                    {sub ? (
                        <button onClick={() => onCancelSub(id)}>Відписатися</button>
                    ) : (
                        <button onClick={() => onAddSub(id)}>Підписатися</button>
                    )}
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