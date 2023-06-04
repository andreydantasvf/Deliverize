import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: .8rem;

  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-top: 1.6rem;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.6rem;

  > div {
    width: 8.9rem;
    height: 3.2rem;
    align-self: flex-end;
  }

  > span {
    font-weight: 400;
    color: #F09035;
  }

  @media(min-width: 980px) {
    margin-top: 2.4rem;
  }
`;