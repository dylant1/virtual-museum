import { Navbar } from "../components/Navbar";
import { Wrapper, Title, Body, BodyHeader, BodyText } from "./index";
import Link from "next/link";
import { Metadata } from "../components/Metadata";
import styled from "styled-components";
const MetadataWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Extra = () => {
  return (
    <Wrapper>
      <Title>
        <Link href="/">Abstraction and Accessibility in Computer Science</Link>
      </Title>{" "}
      <Navbar></Navbar>
    </Wrapper>
  );
};

export default Extra;
