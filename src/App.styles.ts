import styled from "styled-components";

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
    margin: 20px 0;
    font-size: 45px;
`;
    

export const searchInput = styled.input`
    display: flex;
    width: 300px;
`;


export const button = styled.button`
    padding: 10px;
    font-size: 15px;
    border: 0;
    background-color: #555;
    color: #FFF;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
`;



