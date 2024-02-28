import React from "react";
import "./Styles/ForumItem.css"
export default function ForumItem({ id, onAction, title, image, description, author, userForumCount }) {
    return (
        <div className="forum-item">
            <div className="forum-item-image">
                <img src={image} alt="" />
            </div>
            <div className="forum-details">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Автор:{author}</p>
                <p>Кількість учасників: {userForumCount}</p>
            </div>
            <div className="forum-button-check">
                <button onClick={() => onAction(id)}>
                    <p>Переглянути</p>
                </button>
            </div>
        </div>
    );
}
