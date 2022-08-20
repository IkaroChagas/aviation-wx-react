import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url(/images/clouds.jpg);
    background-size: cover;
    font-weight: bold;
    font-size: 18px;
    color: #FFF;
    background-blend-mode: darken;
    background-color: rgba(0, 0, 0, 0.75);
    font-family: sans-serif;
    box-sizing: border-box;
`;


export const header = styled.h1`
    color: #FFF;
    margin: -50px;
    font-size: 45px;
`;
    
export const input = styled.input`
   display: block;
   margin: auto;
   width: 200px;
   height: 40px;
   font-size: 15px;
   border-radius: 5px;
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
`;

export const msg = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

export const textmetar = styled.div`
    margin: auto;
`
export const texttaf = styled.div`
    margin: auto;
    margin-left: 26px;
`



