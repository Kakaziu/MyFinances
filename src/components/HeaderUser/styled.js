import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index: 9998;
    right: 9%;
    top: 80%;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.minorColor};
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    padding: 20px;
    display: ${(props) => props.showUser ? 'flex' : 'none'};
    width: 180px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.2s;
    box-shadow: 1px 1px 15px ${(props) => props.theme.colors.minorColor};

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: auto;
        justify-content: space-between;
        width: 45%;
        margin-top: 10px;
        font-size: 22px;

        svg{
            margin-top: 3px;
            cursor: pointer;
        }
    }

    strong{
        color: ${(props) => props.theme.colors.minorColor};
    }

    img{
        width: 70px;
        margin-top: 20px;
    }

    p{
        font-size: 13px;
        text-align: center;
    }

    a, button{
        margin-top: 15px;
        padding: 8px 0px;
        width: 80%;
        font-size: 17px;
        border: none;
        border-radius: 4px;
        background-color: #f7206f;
        color: white;
        cursor: pointer;
        text-decoration: none;
        text-align: center;

        @media (max-width: 850px){
            padding: 12px 0px;
        }
    }

    a, button:hover{
        background-color: #d91c61;
    }

    /* @media (max-width: 850px){
        top: 70px;
    } */
` 

export const MobileBtnTransition = styled.button`
    display: none;

    @media (max-width: 850px){
        display: block;
    }
`