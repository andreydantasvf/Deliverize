import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: #F4F4F4;
  padding: 1.2rem 2.5rem;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));

  display: flex;
  align-items: center;

  > svg {
    width: 3rem;
  }
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 22rem;
  }
`;