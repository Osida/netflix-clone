import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "./styels/footerStyles.jsx";

export default function Footer({ children, ...restProps }) {
  return (
    <>
      <Container {...restProps}>{children}</Container>
    </>
  );
}

Footer.Row = function FooterRow({ children, ...resProps }) {
  return <Row {...resProps}>{children}</Row>;
};

Footer.Column = function FooterRow({ children, ...resProps }) {
  return <Column {...resProps}>{children}</Column>;
};

Footer.Link = function FooterRow({ children, ...resProps }) {
  return <Link {...resProps}>{children}</Link>;
};

Footer.Title = function FooterRow({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};

Footer.Text = function FooterRow({ children, ...resProps }) {
  return <Text {...resProps}>{children}</Text>;
};

Footer.Break = function FooterRow({ children, ...resProps }) {
  return <Break {...resProps}>{children}</Break>;
};
