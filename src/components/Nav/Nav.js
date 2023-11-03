import './Nav.scss';
import { useNavigate } from 'react-router-dom';

function Nav(){
    const navigate = useNavigate();

    return(
        <div className='Nav'>
            <span class="material-symbols-rounded" onClick={() => window.history.back()}>close</span>
            <h1 onClick={() => navigate('/')}>Home</h1>
            <h2 onClick={() => navigate('/Contact')}>Contact Page</h2>
        </div>
    )
}

export default Nav;