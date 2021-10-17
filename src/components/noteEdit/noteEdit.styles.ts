import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #0e121b;
    overflow: auto;
    

    ::-webkit-scrollbar {
        display: none;
    }

    .Hidden{
        display: none;
    }

    
`

export const Header = styled.header`
    width: 100vw;
    height: 60px;
    color: white;
    border-bottom: 1px solid #5F77AB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0e121b;
    margin-top: 10px;
    position: fixed;
    top: 25px;

    .Delete{
        padding-right: 5px;
        width: 25px;
        height: 25px;
        color: #931F1D;
        cursor: pointer;
    }


    input{
        height: 100%;
        border: none;
        color: white;
        background: none;
        outline: none;
        font-size: 1rem;
        width: 50%;
        padding-left: 10px;
    }

    svg{
        width: 20px;
        height: 20px;
    }

`

export const Icons = styled.div`

    display: flex;

`

export const NoteEditSection = styled.section`
    textarea{
        width: 97vw;
        border: none;
        outline: none;
        background: none;
        color: white;
        padding-top: 10px;
        padding-left: 10px;
        font-size: 1.5rem;
        height: 100vh;
        overflow: auto;
        resize: none;
        margin-top: 100px;

        ::-webkit-scrollbar {
        display: none;
        }

        
    
    }



`

export const Save = styled.div`
    position: fixed;
    bottom: 20px;
    color: white;
    width: 30px;
    height: 30px;
    right: 20px;
    background: #232C43;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    

    svg{
        color: white;
        width: 30px;
        height: 30px;
    }

`