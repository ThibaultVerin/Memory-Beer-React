import styled from 'styled-components';

export const HomeContainer = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 13px;
    @media screen and (min-width: 532px) {
        height: 85%;
    }
`
// ---- Player Info Component

export const PlayerInfoContainer = styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #6e0b14;
    font-weight: bolder;
    border: solid;
    border-radius: 15px;
    box-shadow: 10px 10px 5px 1px rgba(0, 0, 0, 0.2);
    padding: 20px 0;
    margin-bottom: 25px;

    @media screen and (min-width: 768px) {
        width: 625px;
    }
`

export const PlayerInfoMode = styled.h2`
    font-size: 23px;
    margin: 0 0 10px;
`

// ---- Player Number Component

export const PlayerNumberContainer = styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #6e0b14;
    border: solid;
    border-radius: 15px;
    box-shadow: 10px 10px 5px 1px rgba(0, 0, 0, 0.2);
    padding: 20px 0;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        width: 625px;
        margin-bottom: 0;    
    }
`

export const PlayerNumberTitle = styled.h1`
    font-size: 23px;
    margin: 0 0 10px;
`

export const PlayerNumberSelect = styled.select`
        width: 80%;
        height: 20%;
        background-color: #292929;
        color: #ffffd4;
        font-family: 'Patrick Hand SC';
        font-size: 22px;
        border: solid 2px;
        border-radius: 20px;
        padding: 10px;
        margin-top: 20px;
        outline: none;
        box-shadow: 0 5px rgba(0, 0, 0, 0.2);
        cursor: pointer;

        @media screen and (min-width: 532px) {
            width: 350px;
            height: 22%;
        }
`

export const PlayerNumberButtonContainer = styled.div`
        width: 85%;
        display: flex;
        justify-content: space-around;
        margin-top: 10px;

        @media screen and (min-width: 532px) {
            width: 380px;
        }

`