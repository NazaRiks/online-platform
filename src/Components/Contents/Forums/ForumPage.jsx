import forumData from "../../../Data's/forumData.js";
import forumLogo from "../../../Pictures/c847840-online-kursi1320.jpg";
import filterPicture from "../../../Pictures/107799.png";
import ForumListItems from "./ForumListItems.jsx";
import { useNavigate } from 'react-router-dom';
import "./Styles/ForumPage.css"


export default function ForumPage() {
    const navigate = useNavigate();
    const subscribedForums =forumData.filter((forum) => forum.sub === true);

    const handleChoose = (id) => {
        const forum = forumData.find((item) => item.id === id);
        const queryParams = {
            sub: forum.sub,
            author: forum.author,
            description: forum.description,
            mainDescription: forum.mainDescription,
            title: forum.title,
            image: forum.image,
            id: forum.id,
            topics: forum.topics,
            userForumCount: forum.userForumCount
        };
        navigate("/forums/forum-object", {
            state: queryParams,
        });
    };


    return (
        <div className="forum-page-container">
            <div>
                <img className="forum-logo" src={forumLogo} alt="Forum picture"/>
            </div>
            <h2 className="forum-welcome-message">Приєднуйся до Великої родини, де ти знайдеш нові знайомства і завжди  актуальну інформацію. </h2>
            <div className="button-container">
                <button>Почати спілкування</button>
                <button>Продовжити спілкування</button>
            </div>
            <h2 className="forum-your-sub-mes">Мої підписки</h2>
            <div>
                {subscribedForums.length !== 0 ? (
                    <ForumListItems forumData={subscribedForums} onAction={handleChoose}/>
                ) : (
                    <p>Ви ще не приєднались до жодного форуму.</p>
                )}
            </div>
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
