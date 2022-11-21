import styled from "styled-components";

export const Conteiner = styled.div`
    position: absolute;
    display: flex;
    transition: all .5s;
    width: ${({ state }) => state ? '100vw' : '0vw'};
    height: 100vh;
    top: 0;
    right: 0;
    /* background: linear-gradient(90deg, #1d1f20 20%, #ffbf01 0%); */
    background:  #ffbf01;
    overflow: hidden;




    ul{
        display: flex;
        flex-direction: column;
        width: 200px;
        height: auto;
        margin: auto;
        margin-right: 0;
        /* background: red; */
    }
    ul li{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 40px;
        margin: 5px 0;
        padding-right: 20px;
        
        text-align: right;
        
        
        
    }   
    ul li .links{
        text-decoration: none;
        color: white;
        font-size: 1.2em;
        font-weight: 600;
        


    }




    .avatar_content{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        margin: 100px auto;
        right: 50px;
        background: #1d1f20;
        border-radius: 100px;
        opacity: 0;
        animation-delay: 1s !important;
        animation: avatar_efects .5s ease forwards;
    }
    .avatar_content .avatar{
        border: 2px solid #ffbf01 ;
        width: 110px;
        height: 110px;
        right: 50px;
        background: #1d1f20;
        border-radius: 100px;
        transition: all .3s;
        z-index: 3;
    }
    .avatar_content .avatar img{
        margin: -6px auto;
        width: 100%;
        opacity: .5;
        z-index: 1;
    }


    @keyframes avatar_efects {
     0%{
        opacity: 0;
     }  
     to{
        opacity: 1;
     } 
    }




   

    &:after {
        content: " 🦄";
        position: absolute;
        width: 400px;
        height: 400px;
        top: -50px;
        right: -80px;
        border-radius: 50%;
        background: #0b090e;
        z-index: 2;
        transition: .5s all;
        animation-delay: 1s !important;
        ${({state}) =>  state ? 'animation: reverse menubgefects 1s ease-in-out   !important ;' : 'transform: scale(5)' }
        
    }
    @keyframes menubgefects {
        0%{
            transform: scale(1);
            opacity: 1;
        }
        100%{
            opacity: 1;
            transform: scale(5);
        }
    }
`