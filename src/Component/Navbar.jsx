import { useRef } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

// import { FaBars FaTimes } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
    const navRef = useRef();

    const ShowNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }


    return (
        <>
            <header>
                <h2>Logo</h2>
                <nav ref={navRef}>
                    <h4><NavLink to="/">Home</NavLink></h4>
                    <h4><NavLink to="/projects">Projects</NavLink></h4>
                    <h4><NavLink to="/blogs">Blogs</NavLink></h4>
                    <h4><NavLink to="/about">About</NavLink></h4>
                    <h4><NavLink to="/contact">Contact</NavLink></h4>
                    <button className="nav-btn nav-close-btn onClick" onClick={ShowNavbar}><CloseIcon /></button>
                </nav>
                <button className="nav-btn" onClick={ShowNavbar}><MenuIcon /></button>
            </header>



        </>
    )
}

export default Navbar