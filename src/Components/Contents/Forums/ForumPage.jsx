import React, { useRef, useState } from "react";
import forumData from "../../../Datas/forumData.js";
import forumLogo from "../../../Pictures/c847840-online-kursi1320.jpg";
import filterPicture from "../../../Pictures/107799.png";
import ForumListItems from "./ForumListItems.jsx";
import ForumObject from "./ForumObject.jsx";
import "./Styles/ForumPage.css"

export default function ForumPage({ changeMainRenderedPage }) {
    const [selectedForum, setSelectedForum] = useState(null);
    const subscribedForums = useRef(forumData.filter((forum) => forum.sub === true));

    const handleAddSubForum = (id) => {
        // Знаходимо індекс елемента масиву, який має вказаний id
        const index = forumData.findIndex((item) => item.id === id);
        if (index !== -1) {
            forumData[index].sub = true;
            console.log(forumData[index].sub);
        } else {
            console.error(`Елемент з id ${id} не знайдено в масиві forumData`);
        }
    };
    const handleCancelSubForum = (id) => {
        const index = forumData.findIndex((item) => item.id === id);
        if (index !== -1) {
            forumData[index].sub = false;
            console.log(forumData[index].sub);
        } else {
            console.error(`Елемент з id ${id} не знайдено в масиві forumData`);
        }
    };

    const handleChoose = (id) => {
        const forum = forumData.find((item) => item.id === id);
        setSelectedForum(forum);
    };

    if (selectedForum)
        changeMainRenderedPage(
            <ForumObject
                sub={selectedForum.sub}
                onAddSub={handleAddSubForum}
                onCancelSub={handleCancelSubForum}
                author={selectedForum.author}
                description={selectedForum.description}
                mainDescription={selectedForum.mainDescription}
                title={selectedForum.title}
                image={selectedForum.image}
                id={selectedForum.id}
                topics={selectedForum.topics}
                userForumCount={selectedForum.userForumCount}
            />
        );

    return (
        <div className="forum-page-container">
            <div>
                <img className="forum-logo" src={forumLogo} alt="Forum picture"/>
            </div>
            <h2 className="forum-welcome-message">Приєднуйся до Великої родини, де ти знайдеш нові знайомства і завжди
                актуальну інформацію. </h2>
            <div className="button-container">
                <button>Почати спілкування</button>
                <button>Продовжити спілкування</button>
            </div>
            <h2 className="forum-your-sub-mes">Мої підписки</h2>
            <div>
                {subscribedForums.current.length !== 0 ? (
                    <ForumListItems forumData={subscribedForums.current} onAction={handleChoose}/>
                ) : (
                    <p>Ви ще не приєднались до жодного форуму.</p>
                )}
            </div>
            <h2>Бажаєте приєданитися до родини? </h2>
            <h2>Обери відповідний форум, або скористайся налаштуванням фільтру</h2>
            <div>
                <h2>Популярні теми для спілкування</h2>
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
            <ForumListItems forumData={forumData} onAction={handleChoose}/>
        </div>
    );
}
