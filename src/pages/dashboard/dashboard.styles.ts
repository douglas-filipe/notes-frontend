import styled from "styled-components";

interface iVisible{
    visible: Boolean
}

export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #0e121b;
    .Editar{
        width: 100px;
        height: 100px;
        background-color: white;
        color: black;
    }

    .Header {
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        background-color: #0e121b;
    }

    .Header svg{
        color: #AB9BE7;
        width: 30px;
        height: 30px;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 5px;
        cursor: pointer;
    }

    .SelectNote{
        color: white;
        text-align: center;
        font-size: 1.5rem;
        margin-top: 100px;
    }

    
`

export const Container = styled.section<iVisible>`
    color: white;
    width: 100vw;
    height: 100vh;
    background: rgb(1, 1, 1, 0.8);
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 700;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    animation: ${props => props.visible ? 'background 0.3s' : 'none'};
    opacity: ${(props) => `${props.visible ? "1" : "0"}`};
    transition: 0.3s;

    ::-webkit-scrollbar {
        display: none;
    }
    
    
    
    .selected{
        color: white;
        background-color: #38466B;
    }


    @keyframes background{
        from {
            opacity: 0;
        }
    }



    
    
`

export const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    margin: 10px 0;
    

    .Input{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #38466B;
        height: 100%;
        margin-right: 10px auto;
        border-radius: 20px;
        width: 90%;
    }

    .Input svg{
        width: 25px;
        height: 25px;
        margin-left: 10px;
        color: #AB9BE7;
    }

    

    input{
        background: none;
        border: none;
        height: 100%;
        outline: none;
        color: white;
        padding-left: 5px;
        padding-right: 10px;
        width: 130px;
    } 

    input::placeholder{
        color: white;
    }


`



export const Notes = styled.div<iVisible>`
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 200px;
    height: 100vh;
    overflow: auto;
    background: #151A28;
    left: 0;
    animation: ${props => props.visible ? 'menu 0.4s' : 'none'};
    opacity: ${(props) => `${props.visible ? "1" : "0"}`};
    transition: 0.3s;

    @keyframes menu{
        from {
            opacity: 0;
            transform: translateX(-400%);
        }
    }


    .Close{
        margin-top: 10px;
        width: 40px;
        height: 40px;
        color: #931F1D;
        transform: translateX(50%);
        position: relative;
        left: 65%;
        cursor: pointer;
    }

    .Close::active{
        background: none;
    }



    h1{
        margin: 10px 0;
        text-align: center;
    }

    h3{
        background: #126936;
        width: 170px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
        cursor: pointer;
        border-radius: 20px;
    }

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
        color: #93A3C8;
        background: #151A28;
        padding: 10px 0;
        width: 100%;
        border-bottom: 1px solid #93A3C8;
        animation: 500ms animateNotes;
        position: relative;
        
    }


    .Delete{
        color: #DB5461;
        position: absolute;
        transform: translateY(50%);
        bottom: 50%;
        right: 10px;
        width: 20px;
        height: 20px;
        
    }

    @media(min-width: 768px){
        width: 300px;

        .Close{
            transform: translateX(50%);
            left: 75%;
        }
    }

    
`