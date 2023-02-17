import { Table, ValueTd, TypeTd, DataTd, TransitionsMobile, ElementMobile, DescriptionMobile, TitleMobile} from './styled'
import { AiOutlineUpCircle, AiOutlineDownCircle, AiFillDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTransitionsRequest, deleteTransitionRequest } from '../../store/modules/transition/TransitionActions'

const TableTransition = () =>{

    const transitions = useSelector(state => state.TransitionReducer)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [showMobileDescription, setShowMobileDescription] = useState(null)

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

    // function handleShowMobileDescription(id){
    //     if(id === showMobileDescription){
    //         console.log('Boa')
    //         return true
    //     }
    //     console.log('Noe')
    //     return false
    // }

    if(loading){
        return <h1>Loading...</h1>
    }

    return(
        <>
            <Table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {transitions.map(transition => {
                    return (
                        <tr key={transition._id}>
                            <td>{transition.title}</td>
                            <ValueTd>{formatValue(transition.value)}</ValueTd>
                            <TypeTd type={transition.type} color={transition.type === 'Entrada' ? 'green' : 'red'}>{transition.type}<span>{transition.type === 'Entrada' ? <AiOutlineUpCircle size='20'/> : <AiOutlineDownCircle size='20'/>}</span></TypeTd>
                            <DataTd>{formatData(transition.createdAt)}</DataTd>
                            <td><AiFillDelete color='red' cursor='pointer' onClick={() => dispatch(deleteTransitionRequest(transition._id))}/></td>
                        </tr>
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

<tr>
    <td>Salário</td>
    <ValueTd>R$6.000</ValueTd>
    {/* <TypeTd type={type} color={type === 'Entry' ? 'green' : 'red'}>Entrada</TypeTd> */}
    <DataTd>26/01/2023</DataTd>
</tr>

export default TableTransition