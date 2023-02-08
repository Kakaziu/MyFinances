import { Content } from "./styled"
import { MdOutlineAttachMoney } from 'react-icons/md'

const ContentNoUser = () =>{
    return(
        <Content>
            <h1>MyFinances</h1>
            <p>Cadastre-se para começar a organizar sua vida financeira.</p>
            <MdOutlineAttachMoney size='70' color="green"/>
        </Content>
    )
}

export default ContentNoUser