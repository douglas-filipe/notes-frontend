import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    width: 100vw;
    height: 100vh;
    
    
    .selected{
        color: white;
    }

    .Plus{
        position: fixed;
        right: 5%;
        bottom: 10px;
        width: 50px;
        height: 50px;
        color: #FCCA46;
    }
`

export const Search = styled.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-top: 30px;
    margin-bottom: 20px;
    

    .Input{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #1a212f;
        width: 60vw;
        height: 100%;
        margin-right: 10px;
        border-radius: 20px;
    }

    .Input svg{
        width: 30px;
        height: 30px;
        margin-left: 10px;
        color: #AB9BE7;
    }

    .Menu{
        margin-left: 10px;
        width: 30px;
        height: 30px;
        color: #AB9BE7;
    }

    input{
        width: 90%;
        background: none;
        border: none;
        height: 100%;
        outline: none;
        color: white;
        padding-left: 10px;
    } 
`

export const Main = styled.main`
    width: 100vw;
    overflow: hidden;
    background: #0e121b;
    .Editar{
        width: 100px;
        height: 100px;
        background-color: white;
        color: black;
    }
`

export const Notes = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;
    overflow: scroll;

    @keyframes animateNotes{
        0%{
            opacity: 0;
           
        }
    }

    ::-webkit-scrollbar {
        display: none;
    }

    p{
        padding: 10px;
        margin: 0;
    }

    a{
        text-decoration: none;
        color: #858585;
        background: #151A28;
        padding: 10px 0;
        margin-bottom: 10px;
        width: 100%;
        color: white;
        border-radius: 10px;
        animation: 500ms animateNotes;
    }

    

    .Close{
        width: 30px;
        height: 30px;
        position: absolute;
        right: 0;
    }

    .Close svg{
        color: #AB9BE7;
    }
`