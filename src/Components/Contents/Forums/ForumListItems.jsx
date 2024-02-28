import React from "react";
import ForumItem from "./ForumItem.jsx";
import "./Styles/ForumListItems.css"
export default function ForumListItems({ forumData, onAction }) {
    return (
        <div className="forums-container">
            <div className="forum-list">
                {forumData.map((item) => (
                    <ForumItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        description={item.description}
                        title={item.title}
                        author={item.author}
                        userForumCount={item.userForumCount}
                        onAction={onAction}
                    />
                ))}
            </div>
        </div>

    );
}
