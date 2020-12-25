import React, { useState, createContext, useContext } from "react";
import { AccordionProvider } from "../../context";
import { useToggleBody, useToggleBodyUpdate } from "../../hooks";
import {
  Container,
  Frame,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from "./styles/AccordionStyles";

// const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Inner = function AccordionInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return (
    <AccordionProvider>
      <Item {...restProps}>{children}</Item>
    </AccordionProvider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const showBody = useToggleBodyUpdate();
  const body = useToggleBody();

  return (
    <Header onClick={() => showBody()} {...restProps}>
      {children}
      {body ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const body = useToggleBody();
  return body ? <Body {...restProps}>{children}</Body> : null;
};
