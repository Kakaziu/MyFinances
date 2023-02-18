import { useNavigate } from 'react-router-dom'
import { Container, Form, InputContainer } from "./styled"
import { FaUserAlt } from 'react-icons/fa'
import { MdMail, } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'
import api from "../../services/api"
import { useState } from "react"
import { toast } from 'react-toastify'
import ReactLoading from 'react-loading'

const Register = () =>{

    const navigate = useNavigate()
    const [loading, setLoading] = useState(null)
    const [inputName, setInputName] = useState({ value: '', error: '' })
    const [inputEmail, setInputEmail] = useState({ value: '', error: '' })
    const [inputPassword, setInputPassword] = useState({ value: '', error: '' })

    async function handleSubmit(e){
        e.preventDefault()

        validCamps(inputName.value, setInputName, 'Nome')
        validCamps(inputEmail.value, setInputEmail, 'E-mail')
        validCamps(inputPassword.value, setInputPassword, 'Senha')

        const data = {
            name: inputName.value,
            email: inputEmail.value,
            password: inputPassword.value
        }

        if(inputName.value && inputEmail.value && inputPassword.value){
            setLoading(true)
            try{
                const response = await api.post('/users', data)

                if(response.status === 200){
                    navigate('/')
                }
            }catch(e){
                setLoading(null)
                e.response.data.errors.map(error => toast.error(error))
            }
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
                    <p>Faça seu cadastro</p>
                </div>

                <InputContainer>
                    <label htmlFor="name"><FaUserAlt size='16' color="#f7206f"/></label>
                    <input type='text' placeholder="Nome" id="name" value={inputName.value} onChange={(e) => setInputName({ value: e.target.value, error: '' })}/>
                </InputContainer>
                <span>{inputName.error}</span>
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
                <button>Cadastrar {loading ? <span><ReactLoading type={'spin'} height={'1%'} width={'100%'}/></span> : ''}</button>
            </Form>
        </Container>
    )
}  

export default Register