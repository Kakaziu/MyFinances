import styled from "styled-components";

export const Table = styled.table`
    position: absolute;
    transform: translateX(-50%);
    z-index: 9990;
    top: 55%;
    left: 50%;
    width: 80%;
    margin: auto;
    text-align: center;

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

    @media (max-width: 850px){
        position: static;
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