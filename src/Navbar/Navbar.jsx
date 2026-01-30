import './Navbar.css';
import RippleButton from './RippleButton';

export default function NavBar ({onAddList}) {
    return (
        <div className="nav-bar">
            <span className='title'>My Lists</span>
            <RippleButton className='add-list' onClick={onAddList}>+</RippleButton>
        </div>
    )
}