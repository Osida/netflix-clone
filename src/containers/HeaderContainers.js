import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import Netflix_logo from "../logo.svg";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={Netflix_logo} alt="Netflix" />
        <Header.ButtonLink>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
