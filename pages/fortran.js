import { Navbar } from "../components/Navbar";
import { Wrapper, Title, Body, BodyHeader, BodyText } from "./index";
import Link from "next/link";
import { Metadata } from "../components/Metadata";
import styled from "styled-components";
import Image from "next/image";
const MetadataWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  max-width: 100%;
`;
const Fortran = () => {
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
        <div
          style={{
            maxWidth: "1000px",
          }}
        >
          <Img src="/fortran.webp" alt="fortran picture"></Img>
        </div>
      </div>
      <MetadataWrapper>
        <Metadata
          text={
            <ul>
              <li>Artifact: The Fortran Programming Language </li>{" "}
              <li>Date Created: 1957 </li> <li>Maker: IBM</li>{" "}
              <li>
                <a
                  href="https://fortran-lang.org/en/"
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
