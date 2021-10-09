import styled from 'styled-components'

export const Container = styled.div`


    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    transition: 0.5s;
    overflow: hidden;
    

    form{
        display: flex;
        flex-direction: column;
        width: 230px;
        background-color: #201a31;
        color: white;
        margin: auto;
        padding: 30px;
        border-radius: 10px;
        animation: 0.5s login;
    }


    @keyframes login{
        0%{
            transform: translateX(100%);
            opacity: 0;
        }
    }


    form h2{
        font-size: 1.4rem;
        text-align: center;
        margin: 10px 0;
    }

    form label{
        font-size: 0.9rem;
        margin: 20px 0 5px 0;
    }

    form input{
        padding: 10px 0;
        border: none;
        border-bottom: 2px solid #38304e;
        background: none;
        color: white;
        outline: none;
        transition: 0.2s;
    }

    form input:-webkit-autofill,
    form input:-webkit-autofill:hover, 
    form input:-webkit-autofill:focus,
    form textarea:-webkit-autofill,
    form textarea:-webkit-autofill:hover,
    form textarea:-webkit-autofill:focus,
    form select:-webkit-autofill,
    form select:-webkit-autofill:hover,
    form select:-webkit-autofill:focus {
        border: 0px solid #38304e;
        -webkit-text-fill-color: white;
        -webkit-box-shadow: 0 0 0px 1000px #38304e inset;
        transition: background-color 5000s ease-in-out 0s;
        padding: 10px 10px;
        border-radius: 5px;
    }

    form input:focus{
        background: #38304e;
        padding: 10px 10px;
        border-radius: 10px;
    }

    form input::placeholder{
        color: #626069;
    }

    form input:focus::placeholder{
        color: white;
    }

    form button{
        background: #42BFDD;
        color: black;
        padding: 10px;
        font-size: 1rem;
        width: 150px;
        margin: 20px auto;
        border: none;
        border-radius: 20px;
        font-weight: bold;
        transition: 0.5s;
    }

    form button:hover{
        background: #155380;
        color: white;
        cursor: pointer
    }

    p{
        color: #626069;
        font-size: 0.9rem;
        text-align: center
    }

    p a{
        color: #42BFDD;
        text-decoration: none;
        
    }

    
    
`
