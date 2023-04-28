import { useRef } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

// import { FaBars FaTimes } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logonav from '../image/logonav.avif';

function Navbar() {
    const navRef = useRef();

    const ShowNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }


    return (
        <>
            <header>
                <div className="header-img"><img src={logonav} alt="" /></div>

                <nav ref={navRef}>
                    <h4><NavLink to="/" onClick={ShowNavbar}>Home</NavLink></h4>
                    <h4><NavLink to="/projects" onClick={ShowNavbar}>Projects</NavLink></h4>
                    <h4><NavLink to="/blogs" onClick={ShowNavbar}>Blogs</NavLink></h4>
                    <h4><NavLink to="/about" onClick={ShowNavbar}>About</NavLink></h4>
                    <h4><NavLink to="/contact" onClick={ShowNavbar}>Contact</NavLink></h4>
                    <button className="nav-btn nav-close-btn onClick" onClick={ShowNavbar}><CloseIcon /></button>
                </nav>
                <button className="nav-btn" onClick={ShowNavbar}><MenuIcon /></button>
            </header>



        </>
    )
}

export default Navbar