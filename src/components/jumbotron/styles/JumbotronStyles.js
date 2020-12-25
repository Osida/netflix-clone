// "styled-components/macro" -> gives nice classNames
import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 949px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 949px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 949px) and (min-width: 550px) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: 400;
  line-height: normal;

  @media only screen and (max-width: 949px) and (min-width: 550px) {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border: 0;
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid rgb(34, 34, 34);
  padding: 4.38em 2.81em;
  color: rgb(255, 255, 255);
  overflow: hidden;
`;

export const Container = styled.div`
  @media (max-width: 949px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 0.75em;
    }
  }
`;

// export const CardAnimation = styled.div`
//   /* position: absolute; */
//   transform: translateX(1%);
//   transform: translateY(-130%);
//   margin: 0 auto;
//   padding: 0.5em 0.75em;
//   background-color: #000;
//   display: flex;
//   align-items: center;
//   /* justify-content: center; */
//   width: 60%;
//   min-width: 15em;
//   border: 2px solid rgba(255, 255, 255, 0.25);
//   box-shadow: 0 0 2em 0 #000;
//   border-radius: 0.75em;
//   color: white;
// `;

// export const CardImage = styled.img`
//   height: 5em;
//   margin-right: 1em;
// `;

// export const CardTextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   margin: 0 auto;
// `;

// export const CardText0 = styled.p`
//   font-size: 1em;
//   /* background-color: lightblue; */
//   margin-bottom: 0;
// `;

// export const CardText1 = styled.p`
//   /* background-color: lightgreen; */
//   font-size: 0.9em;
//   color: #0071eb;
//   font-weight: 400;
//   margin: 0;
// `;

// export const CardIcon = styled.div`
//   margin: auto 0;
//   margin-left: 15px;
// `;
