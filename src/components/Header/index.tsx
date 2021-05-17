import logoImg from '../../assets/logo.svg';
import { Container } from '../Header/styles';
import { Content } from '../Header/styles';

interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}
export function Header({onOpenNewTransactionModal}: HeaderProps){
  
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"></img>
        <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  )
}