import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    z-index: 9990;
    top: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextInfos = styled.span`
    margin: auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const InfosUser = styled.div`
    background-color: ${(props) => !props.conditionCount ? props.theme.colors.majorColor : props.conditionCount > 0 ? '#1ff25c' : 'red' };
    color: ${(props) => !props.conditionCount ? props.theme.colors.minorColor : 'white'};
    width: 300px;
    margin: 0 10px;
    padding: 25px;
    border-radius: 4px;
    overflow: hidden;
    transition: 0.2s;

    ${TextInfos}{
        color: ${(props) => props.conditionCount ? 'white' : '#82838f'};
    }
`


export const InfosValue = styled.span`
    font-weight: bold;
    font-size: 30px;
    display: block;
    margin-top: 15px;
`