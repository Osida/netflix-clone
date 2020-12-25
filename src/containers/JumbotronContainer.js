import React from "react";
import { Jumbotron } from "../components";
import jumbotronData from "../fixtures/jumbotronData.json";
// import { HiDownload } from "react-icons/hi";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumbotronData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
            {/* <Jumbotron.CardAnimation>
              <Jumbotron.CardImage
                src={item.card_pic}
                alt={item.card_pic_alt}
              />
              <Jumbotron.CardTextWrapper>
                <Jumbotron.CardText0>{item.card_text0}</Jumbotron.CardText0>
                <Jumbotron.CardTex1>{item.card_text1}</Jumbotron.CardTex1>
              </Jumbotron.CardTextWrapper>
              <Jumbotron.CardIcon>
                <HiDownload size={25} />
              </Jumbotron.CardIcon>
            </Jumbotron.CardAnimation> */}
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
