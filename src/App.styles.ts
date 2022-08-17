import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(https://ikarochagas.github.io/Aviation-WX/images/clouds.jpg);
    background-size: cover;
    font-weight: bold;
    color: #FFF;
    background-blend-mode: darken;
    background-color: rgba(0, 0, 0, 0.75);
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;


export const header = styled.h1`
    color: #FFF;
    margin: -50px;
    font-size: 45px;
`;
    
export const input = styled.input`
   display: flex;
   margin: 10px;
   width: 200px;
   height: 40px;
   font-size: 15px;
   border-radius: 5px;
`;


export const button = styled.button`
    display: flex;
    padding: 10px;
    font-size: 15px;
    border: 0;
    background-color: #555;
    color: #FFF;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
`;



