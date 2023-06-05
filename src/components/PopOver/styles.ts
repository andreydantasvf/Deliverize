import styled from "styled-components";

export const Container = styled.div`
  height: 15rem;
  background-color: #F8F8F8;
  border-radius: .4rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  
  opacity: 0;
  position: absolute;
  top: 8rem;
  right: 1rem;
  transition: opacity .5s linear;

  > .title-popOver {
    background: #F09035;
    padding: .9rem;
    border-radius: .4rem .4rem 0 0;

    font-size: 1.8rem;
    line-height: 100%;
    font-weight: 700;
    color: #FFF;
  }

  > .content-popOver {
    padding: .8rem 1.1rem;

    span {
      font-weight: 700;
      font-size: 1.4rem;
      color: #BC2E31;
      line-height: 100%;
    }

    ul {
      margin-top: .8rem;
      font-size: 1.2rem;
      line-height: 100%;

      li {
        margin-left: 2.5rem;
        margin-top: .4rem;
      }
    }
  }

  &::before {
    position: absolute;
    z-index: 1;
    content: "";
    right: calc(50% - 10px);
    top: -1rem;
    border-style: solid;
    border-width: 0px 1rem 1rem;
    border-color: transparent transparent #F09035;
    transition-duration: 0.3s;
    transition-property: transform;
  }

  &.active {
    opacity: 1;
  }
`;