import { Table, ValueTd, TypeTd, DataTd, TransitionsMobile, ElementMobile, DescriptionMobile, TitleMobile, RowTable } from './styled'
import { AiOutlineUpCircle, AiOutlineDownCircle, AiFillDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTransitionsRequest, deleteTransitionRequest } from '../../store/modules/transition/TransitionActions'

const TableTransition = () =>{

    const transitions = useSelector(state => state.TransitionReducer)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [showMobileDescription, setShowMobileDescription] = useState(null)
    const [opacityDelete, setOpacityDelete] = useState(false)

    useEffect(() =>{
        dispatch(getTransitionsRequest)
        setLoading(false)
    }, [transitions])

    function formatData(data){
        const day = data.slice(8, 10)
        const month = data.slice(5, 7)
        const year = data.slice(0, 4)

        return `${day}/${month}/${year}`
    }

    function formatValue(value){
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return(
        <>
            <Table>
            <thead>
                <RowTable>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </RowTable>
            </thead>
            <tbody>
                {transitions.map(transition => {
                    return (
                        <RowTable key={transition._id} opacity={opacityDelete === transition._id}>
                            <td>{transition.title}</td>
                            <ValueTd>{formatValue(transition.value)}</ValueTd>
                            <TypeTd type={transition.type} color={transition.type === 'Entrada' ? 'green' : 'red'}>{transition.type}<span>{transition.type === 'Entrada' ? <AiOutlineUpCircle size='20'/> : <AiOutlineDownCircle size='20'/>}</span></TypeTd>
                            <DataTd>{formatData(transition.createdAt)}</DataTd>
                            <td><AiFillDelete color='red' cursor='pointer' onClick={() => {
                                setOpacityDelete(transition._id)
                                dispatch(deleteTransitionRequest(transition._id))
                            }}/></td>
                        </RowTable>
                    )
                })}
            </tbody>
        </Table>
        <TransitionsMobile>
        <h2>Transições</h2>
        {transitions.map((transition, index) => {
                return (
                    <ElementMobile key={transition._id}>
                        <TitleMobile 
                        type={transition.type} 
                        color={transition.type === 'Entrada' ? 'green' : 'red'}
                        onClick={ () => {
                            if(showMobileDescription === transition._id){
                                setShowMobileDescription(null)
                                return
                            }
                            setShowMobileDescription(transition._id)
                        } }
                        >
                            {transition.title}
                        </TitleMobile>
                        <DescriptionMobile show={transition._id === showMobileDescription ? true : false } type={transition.type} color={transition.type === 'Entrada' ? 'green' : 'red'}>
                            <p><span>Título:</span> {transition.title}</p>
                            <p><span>Valor:</span> {formatValue(transition.value)}</p>
                            <p><span>Categoria:</span> {transition.type}</p>
                            <p><span>Data:</span> {formatData(transition.createdAt)}</p>
                        </DescriptionMobile>
                    </ElementMobile>
                )
            })}
        </TransitionsMobile>
        </>
    )
}

export default TableTransition