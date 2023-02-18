import styled from "styled-components";

export const Content = styled.div`
    position: absolute;
    z-index: 9990;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    text-align: center;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.majorColor};
    padding: 30px;

    h1{
        margin-bottom: 10px;
        color: #f7206f;
        color: ${(props) => props.theme.colors.minorColor}
    }

    p{
        font-weight: bold;
        margin-bottom: 10px;
        color: ${(props) => props.theme.colors.minorColor}
    }
`