import { Link } from 'react-router-dom'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useSelector, useDispatch } from "react-redux"
import { logout } from '../../store/modules/user/UserActions'
import { Container } from "./styled"
import { useEffect } from 'react'

const HeaderUser = ({ setTheme, theme, showUser }) =>{

    const { user } = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()

    function sigout(){
        localStorage.setItem('theme', true)
        localStorage.removeItem('token')
        dispatch(logout)
        window.location.href = '/'
    }

    function lightMode(e){
        setTheme(true)
        localStorage.setItem('theme', true)
    }

    function darkMode(e){
        setTheme(false)
        localStorage.setItem('theme', false)
    }

    return (
        <Container showUser={showUser}>
            <strong>Login</strong>

            <img src={!user ? "./assets/images/3508640.png" : './assets/images/smile.webp'} alt="icon-face"/>
            {!user ? <p>Não há usuário logado</p> : <p><strong>{user.email}</strong> está logado`</p>}
            {!user ? <Link to='/login'>Login</Link> : <button onClick={sigout}>Logout</button>}
            {!user ? <></> : <div><MdLightMode size='22' onClick={lightMode} id='light' color='gold'/> | <MdDarkMode size='22' onClick={darkMode} id='dark' color='darkblue'/></div>}
        </Container>
    )
}

export default HeaderUser