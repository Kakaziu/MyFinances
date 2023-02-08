import { useState } from "react";
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { HeaderDiv, Container, Logo, Menu, Item, Button } from "./styled";
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { showModal } from '../../store/modules/modal/ModalActions'
import HeaderUser from "../HeaderUser";

const Header = ({ setTheme, theme }) =>{

    const dispatch = useDispatch()
    const [showUser, setShowUser] = useState(false)
    const { user } = useSelector(state => state.UserReducer)

    return (
        <HeaderDiv>
            <Container>
                <Logo>MyFinances</Logo>

                { user ? 
                    <Menu>
                        <Item><Button onClick={() => { user ? dispatch(showModal) : toast.warn('Não autorizado') }}>Nova transação</Button></Item>
                        <Item><FaUserCircle size='30' color="white" onClick={() => setShowUser(!showUser)}/></Item>
                    </Menu>
                :   <Menu>
                        <Item><Link to='/login'>Login</Link></Item>  
                    </Menu>}
            </Container>
            <HeaderUser showUser={showUser} setTheme={setTheme} theme={theme}/>
        </HeaderDiv>
    ) 
}

export default Header
