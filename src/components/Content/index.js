import { Container, InfosUser, InfosValue, TextInfos } from "./styled"
import { AiOutlineUpCircle, AiOutlineDownCircle } from 'react-icons/ai'
import { MdAttachMoney } from 'react-icons/md'
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const Content = () =>{

    const transitionsState = useSelector(state => state.TransitionReducer)
    const transitions = transitionsState.transitions
    const [totalEntry, setTotalEntry] = useState(0)
    const [totalExit, setTotalExit] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        sumEntry()
        subExit()
        totalMoney()
    })

    function sumEntry(){
        let total = 0

        const entryTransitions = transitions.filter(transition => transition.type === 'Entrada')

        entryTransitions.forEach(transition => {
            total += transition.value
        })

        setTotalEntry(total)
    }

    function subExit(){
        let total = 0

        const exitTransitions = transitions.filter(transition => transition.type === 'Saída')

        exitTransitions.forEach(transition => {
            total += transition.value
        })

        setTotalExit(total)
    }

    function totalMoney(){
        setTotal(totalEntry - totalExit)
    }

    return (
        <Container>
            <InfosUser>
                <TextInfos>
                    Entradas

                    <AiOutlineUpCircle size='20' color="green"/>
                </TextInfos>

                <InfosValue>{totalEntry.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</InfosValue>
            </InfosUser>
            <InfosUser>
                <TextInfos>
                    Saídas

                    <AiOutlineDownCircle size='20' color="red"/>
                </TextInfos>

                <InfosValue>{totalExit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</InfosValue>
            </InfosUser>
            <InfosUser conditionCount={total}>
                <TextInfos>
                    Total

                    <MdAttachMoney size='20' color={total === 0 ? 'green' : 'white'}/>
                </TextInfos>

                <InfosValue>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</InfosValue>
            </InfosUser>
        </Container>
    )
}

export default Content