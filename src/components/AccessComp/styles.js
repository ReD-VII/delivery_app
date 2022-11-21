import styled from "styled-components";

export const AccessContent = styled.div`
    width: 90%;
    height: auto;
    margin: 50px auto;
    padding: 50px 20px 50px 20px;
    background: #161B22;
    border-radius: 8px;
    

    .logo_access{
        width: 200px;
    }

    h1{
        font-size: 2rem;
        text-align: center;
        margin-bottom: 30px;
    }













    form{
        display: flex;
        flex-direction: column;
        margin: auto;
        /* background: beige; */
    }
    form label{
        display: flex;

    }
    form input{
        width: 80%;
        height: 35px;
        margin: 8px auto;
        padding-left: 15px;
        border: none;
        border-radius: 40px;
    }
    button{
        width: 80%;
        height: 35px;
        margin: 30px auto 0px;
        border-radius: 40px;
        border: none;
    }




    .access_link{
        margin-top: 40px;
        font-size: .9rem;
        text-align: center;
        text-decoration: underline;
    }


`