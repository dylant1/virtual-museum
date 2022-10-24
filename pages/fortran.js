import { Navbar } from "../components/Navbar";
import { Wrapper, Title, Body, BodyHeader, BodyText } from "./index";
import Link from "next/link";
import { Metadata } from "../components/Metadata";
import styled from "styled-components";
const MetadataWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Fortran = () => {
  return (
    <Wrapper>
      <Title>
        <Link href="/">Abstraction and Accessibility in Computer Science</Link>
      </Title>
      <Navbar></Navbar>
      <br />
      <img src="/fortran.webp" alt="fortran picture"></img>
      <MetadataWrapper>
        <Metadata
          text={
            <ul>
              <li>Artifact: The Fortran Programming Language </li>{" "}
              <li>Date Created: 1957 </li> <li>Maker: IBM</li>
            </ul>
          }
        ></Metadata>
      </MetadataWrapper>
      <Body>
        <BodyHeader>Description</BodyHeader>
        <BodyText>
          Known as the first widely-accepted high level programming languange,
          Fortran is still popular even today, due to its ease of use and
          performance. Unlike lower level languages like C and assembly, Fortran
          abstracts many of the complex features which often turn beginners
          away, and allows them to get up to speed relatively quickly.
        </BodyText>
      </Body>
      <br /> <br /> <br /> <br /> <br /> <br />
    </Wrapper>
  );
};

export default Fortran;
