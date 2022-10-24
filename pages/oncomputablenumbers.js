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
  max-width: 250px;
`;
const Oncomputablenumbers = () => {
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
        <Img src="/oncomputable.webp" alt="turing machine paper"></Img>
      </div>
      <br />
      <MetadataWrapper>
        <Metadata
          text={
            <ul>
              <li>
                Paper:{" "}
                <i>
                  On Computable Numbers, with an application to the
                  Entscheidungsproblem
                </i>
              </li>
              <li>Author: Alan M. Turing </li> <li>Date: 1936</li>
            </ul>
          }
        ></Metadata>
      </MetadataWrapper>
      <Body>
        <BodyHeader>Description</BodyHeader>
        <BodyText>
          This is the first ever proof of a Turing machine, presented by Alan M
          Turing in 1936. In this paper, Turing describes an abstract machine
          that is able to manipulate symbols on a strip of tape, depending on a
          set of rules to perform computations and implementing computer
          algorithms. This proof is the basis of modern computers, which are
          turing-complete, meaning they are able to simulate any Turing machine
          assuming an infinite amount of memory (tape).
        </BodyText>
      </Body>
      <br /> <br /> <br /> <br /> <br /> <br />
    </Wrapper>
  );
};

export default Oncomputablenumbers;
