 import styled from "styled-components";

export const Perfil = styled.div`
    display: flex;
    background-color: lightgray;;
    align-items: center;
    font-family: sans-serif;
    font-size: 14px;
    margin:0;
`
export const PerfilInfo = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        font-size: 24px;
    }

    div{
        display:flex;
        justify-content: baseline;

    }

    h3{
        font-size: 16px;
        margin:0;
    }

    a{
        margin: 0 0 0 5px;
    }
`


export const PerfilImagem = styled.img`
    border-radius: 50%;
    width: 150px;
    margin: 0 10px;
    justify-content: flex-start;
`

export const StatusPerfil = styled.div`
    display: flex;
    margin: 20px 0;

`

export const StatusPerfilItem = styled.div`
    margin-right: 5px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`