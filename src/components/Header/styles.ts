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

  @media(min-width: 980px) {
    padding: 1.6rem 4rem;
    gap: 13rem;
    > svg {
      display: none;
    }
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

  @media(min-width: 980px) {
    width: fit-content;
    justify-content: flex-start;
  }
`;

export const Nav = styled.div`
  display: none;

  > input {
    width: 100%;
    padding: 2rem 1.6rem;

    border: 1px solid #ED3237;
    border-radius: .4rem;
    background-color: #FFF;

    &::placeholder {
      color: #656363;
      font-size: 1.4rem;
      line-height: 1rem;
    }
  }

  @media(min-width: 980px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.4rem;
  }
`;

export const Address = styled.button`
  width: 100%;
  max-width: 27rem;
  background: #FFF;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: .5rem;
  padding: .8rem 1.4rem .8rem .8rem;

  display: flex;
  flex-direction: column;

  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 700;

  > span {
    color: #D80000;
    font-weight: 400;
    line-height: 2.5rem;
  }

  > svg {
    font-size: 1.2rem;
    color: #D80000;
    align-self: flex-end;
  }
`;

export const Icon = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ED3237;
  line-height: 1.7rem;

  position: relative;

  > div {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background: #F09035;
    padding: .3rem .5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -.8rem;
    left: 2.4rem;
    color: #FFF;
    font-size: 1rem;
  }
`;