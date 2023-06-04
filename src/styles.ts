import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 1.6rem;

  > h1 {
    font-size: 1.8rem;
    margin-top: 2.4rem 0 1.6rem;
    line-height: 1.6rem;
  }

  > span {
    display: block;
    margin-top: 1.6rem;
    line-height: 2rem;
  }
`;

export const ImageSnack = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const Ingredients = styled.div`
  > div + div {
    border-top: 1px solid #E8A634;
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
`;

export const Buttons = styled.div `
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
`;