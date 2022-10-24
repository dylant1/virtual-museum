import { Navbar } from "../components/Navbar";
import { Wrapper, Title, Body, BodyHeader, BodyText } from "./index";
import Link from "next/link";
import { Metadata } from "../components/Metadata";
import styled from "styled-components";
const MetadataWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Python = () => {
  return (
    <Wrapper>
      <Title>
        <Link href="/">Abstraction and Accessibility in Computer Science</Link>
      </Title>
      <Navbar></Navbar>
      <br />
      <img src="/python.png" alt="test"></img>
      <MetadataWrapper>
        <Metadata
          text={
            <ul>
              <li>Artifact: The Python Programming Language</li>{" "}
              <li>Date Made: 1991 </li> <li>Creator: Guido van Rossum</li>{" "}
            </ul>
          }
        ></Metadata>
      </MetadataWrapper>
      <Body>
        <BodyHeader>Description</BodyHeader>
        <BodyText>
          Python is the prime example of modern day abstraction in prgramming
          languages. Many of the complex choices (e.g. memory management, types)
          users must make when working with lower level languaes is completely
          abstracted in python, allowing people to quickly utilize it to its
          full potential. The ease of use of python combined with its
          functionality is unparalleled, allowing it to be arguably the most
          accessible language for both beginners and advanced developers.
        </BodyText>
      </Body>
      <br /> <br /> <br /> <br /> <br /> <br />
    </Wrapper>
  );
};

export default Python;
