import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Form, InputContainer, RegisterWay } from "../Register/styled"
import { loginRequest } from '../../store/modules/user/UserActions'
import { MdMail, } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'
import { useEffect, useState } from "react"
import ReactLoading from 'react-loading'


const Login = () =>{

    const dispatch = useDispatch()
    const user = useSelector(state => state.UserReducer)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(null)
    const [inputEmail, setInputEmail] = useState({ value: '', error: '' })
    const [inputPassword, setInputPassword] = useState({ value: '', error: '' })

    useEffect(() =>{
        if(user.user){
            navigate('/')                     
        }else{
            setLoading(null)
        }
    })

    async function handleSubmit(e){
        e.preventDefault()

        validCamps(inputEmail.value, setInputEmail, 'E-mail')
        validCamps(inputPassword.value, setInputPassword, 'Senha')

        const data = {
            email: inputEmail.value,
            password: inputPassword.value
        }

        if(inputEmail.value && inputPassword.value){
            setLoading(true)
            dispatch(loginRequest(data))
        }
    }

    function validCamps(value, setFunc, camp){
        if(!value){
            setFunc({ value: '', error: `* O campo "${camp}" está vazio.` })
        }
    }
    

    return(
        <Container>
            <Form  onSubmit={handleSubmit}>
                <div>
                    <strong>MyFinances</strong>
                    <p>Faça seu Login</p>
                </div>

                <InputContainer>
                    <label htmlFor="email"><MdMail size='16' color="#f7206f"/></label>
                    <input type='email' placeholder="E-mail" id="email" value={inputEmail.value} onChange={(e) => setInputEmail({ value: e.target.value, error: '' })}/>
                </InputContainer>
                <span>{inputEmail.error}</span>
                <InputContainer>
                    <label htmlFor="password"><AiFillLock size='16' color="#f7206f"/></label>
                    <input type='password' placeholder="Senha" id="password" value={inputPassword.value} onChange={(e) => setInputPassword({ value: e.target.value, error: '' })}/>
                </InputContainer>
                <span>{inputPassword.error}</span>
                <button>Login {loading ? <span><ReactLoading type={'spin'} height={'1%'} width={'100%'}/></span> : ''}</button>
                <RegisterWay>Não tem uma conta? <Link to='/register'>Cadastre-se</Link></RegisterWay>
            </Form>

        </Container>
    )
}  

export default Login