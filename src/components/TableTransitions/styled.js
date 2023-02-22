import styled, { keyframes } from "styled-components";

export const Table = styled.table`
    position: absolute;
    transform: translateX(-50%);
    z-index: 9990;
    top: 55%;
    left: 50%;
    width: 80%;
    margin: auto;
    text-align: center;


    @media (max-width: 850px){
        position: static;
        width: 100%;
        transform: translateX(0%);
    }

    @media (max-width: 680px){
        display: none;
    }
`

export const RowTable = styled.tr`
    th{
        color: #82838f;
    }

    td, th{
        padding: 15px;
    }

    td{
        margin-top: 10px;
        color: ${(props) => props.theme.colors.minorColor};
        transition: 0.2s;
    }
`

export const ValueTd = styled.td`
    color: gold !important;
`

export const TypeTd = styled.td`
    color: ${(props) => props.type ? props.color : props.theme.colors.minorColor } !important;
    display: flex;
    align-items: center;
    justify-content: center;
    
    span{
        margin-left: 10px;
        margin-bottom: -6px;
    }
`

export const DataTd = styled.td`
    color:#82838f !important;
`

export const TransitionsMobile = styled.div`
    display: none;

    @media (max-width: 680px){
        display: block;
        padding: 10px;

        h2{
            text-align: center;
            color: ${(props) => props.theme.colors.primary}
        }
    }
`

export const ElementMobile = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleMobile = styled.div`
    padding: 15px;
    border-radius: 4px;
    text-align: center;
    margin-top: 15px;
    border: 2px solid ${(props) => props.type ? props.color : props.theme.colors.minorColor };
    color: ${(props) => props.type ? props.color : props.theme.colors.minorColor };
    font-weight: bold;
    width: 90%;
    cursor: pointer;
`

const smoothShow = keyframes`
    from{
        height: 0px;
        opacity: 0;
    }

    to{
        height: 120px;
        opacity: 1;
    }
`

const smoothHide = keyframes`
    from{
        height: 120px;
        opacity: 1;
    }

    to{
        height: 0px;
        opacity: 0;
    }
`

export const DescriptionMobile = styled.div`
    padding: ${(props) => props.show ? '15px' : '0px'};
    width: 80%;
    margin: auto;
    background-color: ${(props) => props.type ? props.color : props.theme.colors.minorColor };
    height: 0px;
    animation-name: ${(props) => props.show ? smoothShow : smoothHide};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    overflow: hidden;
    color: white;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    p{
        margin-top: 10px;
        font-size: 13px;

        span{
            font-weight: bold;
        }
    }
`