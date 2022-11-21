import styled from "styled-components";

export const MenuContent = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    /* background: white; */


    .menu_boxes{
        display: flex;
        height: 100%;
    }
    .menu_boxes:nth-child(1){
        justify-content: center;
        align-items: center;
        width: 30%;
        /* background: yellowgreen; */
    }
    /* Logo */
    .menu_boxes:nth-child(1) img{
        width: 40px;
        margin-top: 8px;
        margin-left: -40px;
    }
    .menu_boxes:nth-child(2){
        width: 40%;
        /* background: burlywood; */
    }
    .menu_boxes:nth-child(3){
        justify-content: flex-end;
        align-items: center;
        width: 30%;
        /* background: yellowgreen; */
    }
    .menu_boxes:nth-child(3) .menu_icon{
        margin-right: 30px;
    }
    /* Botao Mobile */
    .btn_menu {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        margin: auto;
        margin-right: 30px;
        background: #09080c9d;
        border-radius: 20px;
        cursor: none;
    }    
    .btn_menu .--i {
        position: absolute;
        width: 60%;
        height: 3px;
        background: white;
        border-radius: 2px;
        transition: all .5s;
    }
    .btn_menu .--i:nth-child(1) {
        transform: rotate(${({ isOpen }) => isOpen ? '45deg' : '0deg'}) ;
        
    }
    .btn_menu .--i:nth-child(2) {
        transform: rotate(${({ isOpen }) => isOpen ? '-45deg' : '0deg'}) ;
    }
    .btn_menu .--i:nth-child(3) {
        transform: translateY(${({ isOpen }) => isOpen ? '0' : '-5px'}) ;
        opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }
    .btn_menu .--i:nth-child(4) {
        transform: translateY(${({ isOpen }) => isOpen ? '0' : '5px'}) ;
        opacity: ${({ isOpen }) => isOpen ? '0' : '1'};   
    }





`