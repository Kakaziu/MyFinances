import { useEffect, useState } from "react"
import Header from "../../components/Header"
import Content from "../../components/Content"
import Modal from "../../components/Modal"
import { StyledDiv } from './styled'
import TableTransition from "../../components/TableTransitions"
import { useSelector } from "react-redux"
import ContentNoUser from "../../components/ContentNoUser"
import api from "../../services/api"

const Home = ({ setTheme, theme }) =>{

    const { user } = useSelector(state => state.UserReducer)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.common['authorization'] = token
            setLoading(false)
        }
    }, [])

    if(!user){
        return(
            <div id="Home">
                <Header/>
                <StyledDiv/>
                <ContentNoUser/>
            </div>
        )
    } 

    return(
        <div id="Home">
            <Header setTheme={setTheme} theme={theme}/>
            <StyledDiv/>
            <Content/>
            <Modal/>
            { !loading ? <TableTransition/> : <h1>Loading...</h1> }
        </div>
    )
}

export default Home