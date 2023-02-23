import { useState } from "react"
import { Input, InputType ,ModalDiv, ModalForm, Title, Controller, Button, MobileBtnModal } from "./styled"
import { AiOutlineUpCircle, AiOutlineDownCircle } from 'react-icons/ai'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { hideModal } from "../../store/modules/modal/ModalActions"
import { addTransitionRequest } from '../../store/modules/transition/TransitionActions'
import { toast } from "react-toastify"

const Modal = () =>{
    
    const dispatch = useDispatch()
    const modal = useSelector(state => state.ModalReducer)

    const [inputTitle, setInputTitle] = useState({ value: '', error: '' })
    const [inputValue, setInputValue] = useState({ value: '', error: '' })
    const [type, setType] = useState('')
    const [selectedEntry, setSelectedEntry] = useState(false)
    const [selectedExit, setSelectedExit] = useState(false)

    function handleType(type, setFunc, setFunc2){
        setType(type)
        setFunc(true)
        setFunc2(false)
    }

    function offModal(e){
        if(e.target.id === 'modal'){
            dispatch(hideModal)
            setCamps()
        }
    }

    function handleSubmit(e){
        e.preventDefault()

        validCamps(inputTitle.value, setInputTitle, 'Título')
        validCamps(inputValue.value, setInputValue, 'Valor')

        if(!type){
            toast.warn('A transição deve conter um tipo.')
        }

        const data = {
            title: inputTitle.value,
            value: Number(inputValue.value),
            type: type
        }

        if(inputTitle.value && inputValue.value && type){
            dispatch(addTransitionRequest(data))
            dispatch(hideModal)
            setCamps()
        }
    }

    function validCamps(value, setFunc, camp){
        if(!value){
            setFunc({ value: '', error: `* O campo "${camp}" está vazio.` })
        }
    }

    function setCamps(){
        setType('')
        setInputTitle({ value: '', error: '' })
        setInputValue({ value: '', error: '' })
        setSelectedEntry(false)
        setSelectedExit(false)
    }

    return (
        <ModalDiv show={modal} onClick={offModal} id='modal'>
            <ModalForm onSubmit={handleSubmit}>
                <Title>Nova transação</Title>
                
                <Input type='text' placeholder="Título" value={inputTitle.value} onChange={(e) => setInputTitle({ value: e.target.value, error: '' })}/>
                <p>{inputTitle.error}</p>
                <Input type='text' placeholder="Valor" value={inputValue.value} onChange={(e) => setInputValue({ value: e.target.value, error: '' })}/>
                <p>{inputValue.error}</p>
                <Controller>
                    <InputType onClick={() => handleType('Entrada', setSelectedEntry, setSelectedExit)} select={selectedEntry} colorSelected={'#1ff25c'}><span>Entrada</span> <AiOutlineUpCircle size='22' color="green"/></InputType>
                    <InputType onClick={() => handleType('Saída', setSelectedExit, setSelectedEntry)} select={selectedExit} colorSelected={'#f2294b'}><span>Saída</span> <AiOutlineDownCircle size='22' color="red"/></InputType>
                </Controller>
                <input type='hidden' value={type}/>
                <Button>Salvar</Button>
            </ModalForm>
        </ModalDiv>
    )
}

export default Modal