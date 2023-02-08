import styled from "styled-components";

export const StyledDiv = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 180px;
    z-index: 0;
    transition: 0.2s;
    background-color: ${(props) => props.theme.colors.primary};
`