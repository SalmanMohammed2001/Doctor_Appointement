import logo from '../../assets/images/logo.png'
import {Link, NavLink} from "react-router-dom";

import {BiMenu} from 'react-icons/bi'
import {useContext, useEffect, useRef} from "react";
import {authContext} from "../../context/AuthContext.tsx";

const navLink = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/doctors',
        display: 'Find a Doctors'
    },
    {
        path: '/service',
        display: 'Service'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
]
const Header = () => {
    // @ts-ignore
    const {user,token,role}=useContext(authContext)



    const headerRef=useRef<any>()
    const menuRef=useRef<any>()
    const toggleMenu=()=>{
        menuRef.current.classList.toggle('show_menu')
    }

    const handleStickHeader=()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 100  || document.documentElement.scrollTop > 100){
                headerRef.current.classList.add('sticky_header')
            }else {
                headerRef.current.classList.remove('sticky_header')
            }
        })

    }

    useEffect(()=>{
        handleStickHeader()
        return()=>window.removeEventListener('scroll',handleStickHeader)

    })

    return (
        <header className="header flex items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    {/*===============logo=====================*/}
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                    {/*============menu==============================*/}
                    <div className="navigation " ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLink.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={link.path}
                                                 className={navClass => navClass.isActive ? "text-primaryColor text-[16px] leading-7" +
                                                     "font-[600]" : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"}>{link.display}</NavLink>
                                    </li>
                                )
                            })

                            }
                        </ul>
                    </div>

                    {/*==================nav right===================*/}

                <div className={"flex items-center gap-4"}>

                    {
                        token && user ? (
                            <>
                                <div>
                                    <Link to={`${role === 'doctor' ? '/doctor/profile/me' : '/user/profile/me'}`}>
                                        <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                                            <img src={user?.photo} className="w-full rounded-full" alt=""/>
                                        </figure>

                                    </Link>

                                </div>
                                <h1>{user?.name}</h1>
                            </>
                        ):(
                            <Link to={"/login"}>
                                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center
                        justify-center rounded-[50px]">
                                    Login
                                </button>
                            </Link>
                        )}







                    <span className={"md:hidden"} onClick={toggleMenu}>
                        <BiMenu className={"w-6 h-6 cursor-pointer"}/>
                    </span>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

