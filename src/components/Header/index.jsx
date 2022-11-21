import React, { useState } from 'react'
import { MenuContent } from './styles'
import { IoBagOutline } from "react-icons/io5";

import logo50x50 from '../../asset/logo-50x50.svg'


import { useNavigate } from 'react-router-dom';
import Menu from '../Menu';



const Header = () => {
    const navigate = useNavigate();
    function checkUserCredentials() {
        navigate('/');
    }

    const [ isOpen, setIsOpen ] = useState(false)
    const handleMenu = () => {
        setIsOpen(!isOpen)
    } 
    
    return (
        <>
            <MenuContent isOpen={isOpen}>
                <div className='menu_boxes'>
                    <img src={logo50x50} onClick={checkUserCredentials} style={{zIndex: 100}}/>
                </div>
                <div className='menu_boxes'>

                </div>
                <div className='menu_boxes'>
                    <IoBagOutline className='menu_icon' size={25} color={"#fff"} />
                    <div className='btn_menu' onClick={handleMenu} style={{zIndex: 100}}>
                        <div className='--i'></div>
                        <div className='--i'></div>
                        <div className='--i'></div>
                        <div className='--i'></div>
                    </div>
                </div>
            </MenuContent>
            <Menu state={isOpen} fun={handleMenu}/>
        </>
    )
}

export default Header