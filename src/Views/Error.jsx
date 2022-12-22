import './Error.scss'
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="error-container">
            <h1>Whoops, parece que esa página no existe</h1>
            <button onClick={() => navigate("/")}>Volver a inicio</button>
        </div>
    )
}

export default Error