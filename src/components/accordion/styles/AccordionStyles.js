import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid rgb(34, 34, 34);
`;

export const Frame = styled.div`
  margin-bottom: 2.5em;
`;

export const Inner = styled.div`
  display: flex;
  padding: 4.38em 2.81em;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.5em;
  color: rgb(255, 255, 255);
  text-align: center;

  @media only screen and (max-width: 949px) and (min-width: 550px) {
    font-size: 40px;
    margin-bottom: 0;
  }
`;

export const Item = styled.div`
  color: white;
  margin: auto;
  margin-bottom: 0.63em;
  max-width: 728px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 0.06em;
  font-size: 26px;
  font-weight: normal;
  background: rgb(48, 48, 48);
  padding: 0.8em 2.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    user-select: none;

    @media (max-width: 600px) {
      width: 20px;
    }
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Body = styled.div`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: rgb(48, 48, 48);
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  padding: 1.95em;

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }

  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 22px;
  }
`;
