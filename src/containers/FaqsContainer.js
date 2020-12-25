import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
  const text =
    "Ready to watch? Enter your email to create or restart your membership.";
  const placeholderText = "Email Address";
  const buttonText = "GET STARTED";

  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Text>{text}</OptForm.Text>
        <OptForm.Input placeholder={placeholderText} />
        <OptForm.Button>{buttonText}</OptForm.Button>
      </OptForm>
    </Accordion>
  );
}
