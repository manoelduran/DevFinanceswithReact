import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import closeSvg from '../../assets/close.svg';
import  IncomeSvg  from '../../assets/income.svg';
import  OutcomeSvg  from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/UseTransactions';
import { Container, TransactionTypeContainer, RadioBox } from '../NewTransactionModal/styles';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');
   async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();
    await createTransaction({
      title,
      amount,
      category,
      type,
    })
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }
  return(
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content"> 
      <button type="button" onClick={onRequestClose} className="react-modal-close"><img src={closeSvg} alt="close modal"></img></button>
       <Container onSubmit={handleCreateNewTransaction}>
       <h2>Cadastrar transação</h2> 
        <input value={title} onChange={event => setTitle(event.target.value)} placeholder="Titulo"/>
        <input type="number" value={amount} onChange={event => setAmount(Number(event.target.value))}  placeholder="Valor"/>
        <TransactionTypeContainer>
          <RadioBox type="button"  onClick={() => {setType('deposit')}} isActive={type === 'deposit'} activeColor="green">
            <img src={IncomeSvg} alt="Income"></img>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox type="button" onClick={() => {setType('withdraw')}} isActive={type === 'withdraw'} activeColor="red">
            <img src={OutcomeSvg} alt="Outcome"></img>
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input value={category} onChange={event => setCategory(event.target.value)} placeholder="Categoria"/>
        <button type="submit">Cadastrar</button>
      </Container>
      </Modal>
  );
}