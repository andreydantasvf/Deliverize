import styled from "styled-components";

export const Container = styled.div`
  background: none;
  border: 1px solid #F09035;
  border-radius: .5rem;
  padding: .8rem .9rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  font-size: 1.4rem;

  > svg {
    color: #D80000;
    cursor: pointer;

    &.disabled {
      cursor: not-allowed;
      color: #AEB6C1;
    }
  }
`;