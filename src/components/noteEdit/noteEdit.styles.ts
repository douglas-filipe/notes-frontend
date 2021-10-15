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
    height: 35px;
    color: white;
    position: fixed;
    border-bottom: 1px solid #5F77AB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0e121b;

    .Back{
        margin-left: 15px;
        margin-right: 15px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .More{
        margin-right: 15px;
        margin-left: 15px;
    }


    input{
        height: 100%;
        border: none;
        color: white;
        background: none;
        outline: none;
        font-size: 1rem;
        width: 50%;
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
        padding-top: 50px;
        padding-left: 5px;
        font-size: 1.5rem;
        height: 100vh;
        overflow: auto;
        resize: none;

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