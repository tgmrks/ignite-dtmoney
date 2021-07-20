import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    //defining function on props
    onOpenNewTransactionModal: () => void; //: no params => no return;
}
                        //deconstructing props
export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt Money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>                
            </Content>
        </Container>
    )
}