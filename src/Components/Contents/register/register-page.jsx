export default function RegisterPage() {
    return (
        <div className="container">
            <form action="#" className="form">
                <div className="field">
                    <label htmlFor="">Email</label>
                    <input type="email"/>
                </div>
                <div className="field">
                    <label htmlFor="">Студенський квиток</label>
                    <input type="file" accept=".png"/>
                </div>
                <button className="auth-btn">Вiдправити</button>
            </form>
        </div>
    )
}