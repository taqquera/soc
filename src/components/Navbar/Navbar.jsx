import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'
import Friends from "../Friends/Friends";
import state from "../../redux/state";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
            <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </div>
            <Friends />
        </nav>
    )
}

export default Navbar