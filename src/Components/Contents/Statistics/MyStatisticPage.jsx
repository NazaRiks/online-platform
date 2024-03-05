import "./MyStatisticPage.css"
export default function MyStatisticsPage() {
    const coursesCompleted = 3;
    const lessonsCompleted = 15;
    const quizzesPassed = 12;
    const averageScore = 87;

    return (
        <>
            <h1>Моя статистика</h1>
            <div className="statistics-container">

                <div className="stats-card">
                    <h2>Курси завершено</h2>
                    <p>{coursesCompleted}</p>
                </div>
                <div className="stats-card">
                    <h2>Уроків пройдено</h2>
                    <p>{lessonsCompleted}</p>
                </div>
                <div className="stats-card">
                    <h2>Тестів пройдено</h2>
                    <p>{quizzesPassed}</p>
                </div>
                <div className="stats-card">
                    <h2>Середній бал</h2>
                    <p>{averageScore}%</p>
                </div>
            </div>
        </>

    );
}
