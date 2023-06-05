import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 7rem;
  height: 7rem;
  border: .5rem solid gray;
  border-top: .5rem solid #F09035;
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;