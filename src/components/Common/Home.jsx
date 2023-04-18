import { Link } from "react-router-dom";

export default function Home () {
    return(
        <div className="App">
            <h1>My Posts App</h1>
            <div className="card">
                <button >
                    <Link to={`/login`}>Login</Link>
                </button>
            </div>
            <p className="read-the-docs">
                Welcome My App
            </p>
        </div>
    )
}