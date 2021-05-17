import { Container } from './styles';
import  IncomeSvg  from '../../assets/income.svg';
import  OutcomeSvg  from '../../assets/outcome.svg';
import  TotalSvg  from '../../assets/total.svg';
import { useTransactions } from '../../hooks/UseTransactions' ;
export function Summary(){
  const { transactions } = useTransactions();
  const summary = transactions.reduce((acc, transaction) =>{
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount; 
      acc.total += transaction.amount;
    } else{
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  },{
    deposits: 0,
    withdraws: 0,
    total: 0,
  })
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeSvg} alt="income"></img>
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={OutcomeSvg} alt="outcome"></img>
        </header>
        <strong>- {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalSvg} alt="total"></img>
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(summary.total)}</strong>
      </div>
    </Container>
  );
}