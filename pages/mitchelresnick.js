import { Navbar } from "../components/Navbar";
import { Wrapper, Title, Body, BodyHeader, BodyText } from "./index";
import Link from "next/link";
import styled from "styled-components";
import { Metadata } from "../components/Metadata";

const MetadataWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  max-width: 100%;
`;
const MitchelResnick = () => {
  return (
    <Wrapper>
      <Title>
        <Link href="/">Abstraction and Accessibility in Computer Science</Link>
      </Title>
      <Navbar></Navbar>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Img src="/scratch.jpeg" alt="test"></Img>
      </div>
      <MetadataWrapper>
        <Metadata
          text={
            <ul>
              <li>Speaker: Mitchel Resnick</li>
              <li>Invention: Scratch</li> <li>Date interviewed: Feb 8, 2014</li>
              <li>Interviewer: MWB</li>
              <li>
                <a
                  href="https://mwb.com/2014/02/08/interview-mitchel-resnick/"
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  Link
                </a>
              </li>
            </ul>
          }
        ></Metadata>
      </MetadataWrapper>
      <Body>
        <BodyHeader>Description</BodyHeader>
        <BodyText>
          In his interview, the inventor of Scratch discusses how important
          programming is to everyone, especially young students starting their
          careers. Scratch is a modern block-based programming language to
          create projects in an easy to navigate interface. He puts a lot of
          emphasis of the ease of use of Scratch and its accessibiilty to
          children.
        </BodyText>
      </Body>
      <br /> <br /> <br /> <br /> <br /> <br />
    </Wrapper>
  );
};

export default MitchelResnick;
