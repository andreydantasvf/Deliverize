import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 1.6rem;

  @media(min-width: 980px) {
    padding: 0 6.6rem;

    display: flex;
    justify-content: space-between;
    gap: 11.2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 1.8rem;
    margin: 2.4rem 0 1.6rem;
    line-height: 1.6rem;
  }

  > span {
    display: block;
    margin-top: 1.6rem;
    line-height: 2rem;
  }

  @media(min-width: 980px) {
    max-width: 60rem;

    > h1 {
      font-size: 2.8rem;
      line-height: 100%;
      padding: 2rem 0;
    }

    > span {
      font-size: 2rem;
      line-height: 120%;
      margin-top: 2rem;
      padding-bottom: 2rem;
    }
  }
`;

export const ImageSnack = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 100%;
    max-width: 60rem;
  }

  @media(min-width: 980px) {
    margin-top: 5rem;
  }
`;

export const Prices = styled.div`
  margin-top: 1.6rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  font-size: 1.4rem;
  line-height: 1.6rem;

  > span:nth-child(1) {
    color: #E49700;
  }

  > span:nth-child(2) {
    text-decoration-line: line-through;
  }

  @media(min-width: 980px) {
    font-size: 3.2rem;
    line-height: 120%;
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;

  @media(min-width: 980px) {
    width: 100%;
    max-width: 43.9rem;
    padding: 3.2rem;
    border: 1px solid #686868;
    border-radius: .8rem;
  }
`;

export const Ingredients = styled.div`
  > div + div {
    border-top: 1px solid #E8A634;
  }

  @media(min-width: 980px) {
    > div:nth-last-child(1) {
      border-bottom: 1px solid #E8A634;
      margin-bottom: .9rem;
    }
  }
`;

export const Option = styled.div`
  width: 100%;
  margin-top: .8rem;

  display: flex;
  justify-content: space-between;

  font-size: 1.4rem;

  > input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    border: 1px solid #FEBC10;

    &:checked {
      background-color: #FEBC10;
    }
  }

  @media(min-width: 980px) {
    display: none;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  margin-top: 4.8rem;

  display: flex;
  align-items: center;
  gap: .8rem;

  > div {
    flex: 1;
    height: 4rem;
  }

  > button {
    flex: 2;
    height: 4rem;

    background: #F09035;
    border: none;
    border-radius: .4rem;

    font-size: 1.4rem;
    color: #FFF;
  }

  @media(min-width: 980px) {
    margin-top: 1.5rem;
  }
`;