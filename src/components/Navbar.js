import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

     const [currentRoute, setCurrentRoute]=useState()

    useEffect(()=>{
        const path=window.location.pathname.toLocaleLowerCase()
        setCurrentRoute(path.slice(1, path.length))
    }, [])

    return (
        <nav className="m-1 p-1 border border-1">
            <ul className="nav nav-pills">
                <li>
                    <Link
                        onClick={()=>setCurrentRoute("home")}
                        className={currentRoute=='home'?'btn btn-info ms-1':'btn btn-outline-info ms-1'} to={"/home"}>Home</Link>
                </li>
                <li>
                    <Link
                        onClick={()=>setCurrentRoute("users")}
                        className={currentRoute=='users'?'btn btn-info ms-1':'btn btn-outline-info ms-1'} to={"/users"}>Users</Link>
                </li>
                <li>
                    <Link
                        onClick={()=>setCurrentRoute("newuser")}
                        className={currentRoute=='newuser'?'btn btn-info ms-1':'btn btn-outline-info ms-1'} to={"/newuser"}>New User</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;