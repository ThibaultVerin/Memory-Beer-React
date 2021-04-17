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