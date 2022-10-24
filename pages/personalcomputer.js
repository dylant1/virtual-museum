import { Navbar } from "../components/Navbar";
import { Wrapper, Title, Body, BodyHeader, BodyText } from "./index";
import Link from "next/link";
// import { altair8800 } from "../components/altair8800.png";
import { Metadata } from "../components/Metadata";
import styled from "styled-components";
const MetadataWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Description = styled.div``;
const PersonalComputer = () => {
  return (
    <Wrapper>
      <Title>
        <Link href="/">Abstraction and Accessibility in Computer Science</Link>
      </Title>
      <Navbar></Navbar>
      <br />
      <img src="/altair8800.png" alt="test"></img>
      <MetadataWrapper>
        <Metadata
          text={
            <ul>
              <li>Object: Altair 8800 Microcomputer </li>{" "}
              <li>Date Made: 1974 </li>{" "}
              <li>Maker: Micro Instrumentation and Telemetry Systems</li>{" "}
              <li>Place Manufactured: Albuquerque, New Mexio </li>{" "}
              <li>Measurements: 7in x 17in x 18in</li>
              <li>
                <a
                  href="https://www.wolframscience.com/prizes/tm23/images/Turing.pdf"
                  style={{
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  Source
                </a>
              </li>
            </ul>
          }
        ></Metadata>
      </MetadataWrapper>
      <Body>
        <BodyHeader>Description</BodyHeader>
        <BodyText>
          The MITS Altair 8800 is the first official personal computer released
          to the public. Standing at a whopping $4000 for complete configuration
          (external memory, printer, keyboard), this computer was perhaps the
          first example of technology being abstracted to allow for the common
          person to get work done.
        </BodyText>
      </Body>
      <br /> <br /> <br /> <br /> <br /> <br />
    </Wrapper>
  );
};

export default PersonalComputer;
