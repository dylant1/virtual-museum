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
              <li>Object: Python </li> <li>Date Made: 1974 </li>{" "}
              <li>Maker: Micro Instrumentation and Telemetry Systems</li>{" "}
              <li>Place Manufactured: Albuquerque, New Mexio </li>{" "}
              <li>Measurements: 7in x 17in x 18in</li>
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

export default Python;
