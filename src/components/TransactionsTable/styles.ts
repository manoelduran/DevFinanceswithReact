import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  table{
    width: 100%;
    border-spacing: 0 0.5rem;
    thead th{
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align:left;
      line-height: 1.5rem;
    }
    tbody td{
      padding:1rem 2rem;
      border:0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
    }
    tbody td.title{
      color: var(--text-title);
    }
    tbody td.deposit{
      color: var(--green);
    }
    tbody td.withdraw{
      color: var(--red);
}
  }
`;