import styled from "styled-components"
import sr20 from './images/sr20.jpg'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${sr20});
    background-size: cover;
    font-weight: bold;
    font-size: 18px;
    color: #888;
    background-blend-mode: darken;
    background-color: rgba(0, 0, 0, 0.80);
    font-family: sans-serif;

    @media(max-width:414px) {
        display: flex;
        max-width: 414px;
        max-height: 736px;
        overflow-x: hidden;
        overflow-y: hidden;
        flex-direction: column;
        font-size: 15px;
        background-size: cover;
        background-position: 15%;
        background-blend-mode: darken;
        background-color: rgba(0, 0, 0, 0.80);
    }
`;


export const header = styled.h1`
    color: #777;
    margin: -50px;
    font-size: 45px;

    @media(max-width:414px){
        display: flex;
        font-size: 25px;
        margin-bottom: 5px;
    }
`;
    
export const input = styled.input`
   display: block;
   margin: auto;
   width: 200px;
   height: 40px;
   color: #fff;
   font-size: 15px;
   border-radius: 5px;
   background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 0;

    @media(max-width:414px){
        height: 50px;
        margin: auto;
    }
`;


export const button = styled.button`
    display: flex;
    padding: 10px;
    font-size: 15px;
    margin: auto;
    margin-top: 20px;
    border: 0;
    background-color: #555;
    color: #FFF;
    border-radius: 5px;
    cursor: pointer;

    @media(max-width:414px){
        width: 70px;
        display: flex;
    }
`;

export const load = styled.div`
    margin: auto;
    margin-top: 10px;

    @media(max-width:414px){
        margin: auto;
        margin-top: 10px;
    }
`;


export const msg = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

export const textmetar = styled.div`
    margin: auto;

    @media(max-width:414px){
        margin-left: 22px;
    }
`
export const texttaf = styled.div`
    margin: auto;
    margin-left: 26px;

    @media(max-width:414px){
        margin: auto;
        margin-left: 24px;
    }
`



