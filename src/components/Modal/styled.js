import styled from "styled-components";

export const ModalDiv = styled.div`
    position: fixed;
    z-index: 9998;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${(props) => props.show ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
`

export const ModalForm = styled.form`
    background-color: ${(props) => props.theme.colors.majorColor};
    border-radius: 4px;
    padding: 40px;
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.minorColor};

    p{
        font-size: 10px;
        color: red;
    }
`

export const Title = styled.h2`
    text-align: center;
`

export const Input = styled.input`
    font-size: 17px;
    padding: 15px 0px 10px 0px;
    text-align: center;
    width: 100%;
    background-color: #ebebeb;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: auto;
    margin-top: 15px;
    outline: 0;
`

export const Controller = styled.div`
    display: flex;
    margin-top: 15px;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const InputType = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin: 0 10px;
    background-color: ${(props) => props.select ? props.colorSelected : props.theme.colors.secondary};
    border-radius: 4px;
    padding: 15px 10px;
    transition: 0.1s;
    cursor: pointer;

    span{
        margin-right: 15px;
        margin-bottom: 1px;
    }
`

export const Button = styled.button`
    padding: 10px 0px;
    color: white;
    font-size: 18px;
    width: 100%;
    background-color: #09eb2f;
    border: none;
    border-radius: 4px;
    margin-top: 35px;
    outline: 0;
    cursor: pointer;

    &:hover{
        background-color: #06cf28;
    }
`