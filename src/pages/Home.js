import React from "react";
import { OptForm, Feature } from "../components";

import {
  JumbotronContainer,
  FooterContainer,
  AccordionContainer,
  HeaderContainer,
} from "../containers";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>GET STARTED</OptForm.Button>
            <OptForm.Break />
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
