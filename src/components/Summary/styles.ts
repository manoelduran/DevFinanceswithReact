import styled from 'styled-components';
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3 colunas com o mesmo tamanho
  gap: 2rem; // espaçamento entre os grids
  margin-top: -10rem;
  div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong{
      display: block; // faz com que deixe de ser inline e funcione o margin top, pois é propriedade natural do strong ser inline
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    &.highlight-background{
      background: var(--green);
      color: #FFF;
    }
  }
`;