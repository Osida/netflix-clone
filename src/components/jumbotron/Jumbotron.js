import React from "react";

import {
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
  Container,
  // CardAnimation,
  // CardImage,
  // CardText0,
  // CardText1,
  // CardTextWrapper,
  // CardIcon,
} from "./styles/JumbotronStyles";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  // returns style component & renders its children
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

// Jumbotron.CardAnimation = function JumbotronCardAnimation({
//   children,
//   ...restProps
// }) {
//   return <CardAnimation {...restProps}>{children}</CardAnimation>;
// };

// Jumbotron.CardImage = function JumbotronCardImage({ ...restProps }) {
//   return <CardImage {...restProps} />;
// };

// Jumbotron.CardText0 = function JumbotronCardText0({ children, ...restProps }) {
//   return <CardText0 {...restProps}>{children}</CardText0>;
// };

// Jumbotron.CardTex1 = function JumbotronCardTex1({ children, ...restProps }) {
//   return <CardText1 {...restProps}>{children}</CardText1>;
// };

// Jumbotron.CardIcon = function JumbotronCardIcon({ children, ...restProps }) {
//   return <CardIcon {...restProps}>{children}</CardIcon>;
// };

// Jumbotron.CardTextWrapper = function JumbotronCardTextWrapper({
//   children,
//   ...restProps
// }) {
//   return <CardTextWrapper {...restProps}>{children}</CardTextWrapper>;
// };
