import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Chrono } from "react-chrono";
import Link from "next/link";
  export const Title = styled.h1`
  font-family: "Libre Baskerville", serif;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  //TODO: Change this for different sizes of screens
  margin-left: 10%;
  margin-right: 10%;
`;
const A = styled.a`
  cursor: pointer;
  color: blue;
  &:hover {
    text-decoration: underline;
  }
`;
export const Body = styled.div`
  text-align: left;
`;
export const BodyHeader = styled.h2`
  text-decoration: underline;
`;
export const BodyText = styled.div`
  line-height: 1.5;
`;
export default function Home() {
  return (
    <Wrapper>
      <Title>
        <Link href="/">Abstraction and Accessibility in Computer Science</Link>
      </Title>
      <Navbar />
      <Body>
        <BodyHeader>Introduction</BodyHeader>
        <BodyText>
          &emsp;As computers have become more and more advanced, the learning
          curve for entering computer science has gradually lowered in
          proportion. This is largely due to the fundamental concept of{" "}
          <b>abstraction</b>. Generally, abstraction is the process of removing
          something or considering it independently of its associations. In
          computer science specifically, abstraction is the{" "}
          <i>
            process of removing physical, spatial, or temporal attributes in the
            study of systems.
          </i>{" "}
          This allows one&apos;s focus to shift to attributes with greater
          importance, or, in this case, ease the entry into the field. As both
          software and hardware are further abstracted, a low-level
          understanding of abstract and theoretical topics (e.g., Turing
          Machines) is less essential to break into the discipline.
        </BodyText>
        <br />
        <BodyText>
          &emsp;This virtual exhibit examine the extent to which abstraction has
          reduced the barrier of entry into computer science, pulling examples
          from primary sources such as interviews, physical computers, and
          important software. All of these sources relate to the computer
          science field and, over time, have been further abstracted and made
          more accessible. This museum highlights the importance of abstraction,
          as it allows computer science to branch into other aspects of life and
          remove many of the prior limitations preventing non-technical people
          from entering the field.
        </BodyText>
      </Body>
      <Body>
        {/* <BodyHeader
          style={{
            textAlign: "center",
          }}
        >
          1800s
        </BodyHeader> */}
      </Body>
      <br />
      <br />
      <Body>
        <BodyHeader>Artifacts</BodyHeader>
      </Body>
      <Body>
        <BodyHeader
          style={{
            // textAlign: "center",
            textDecoration: "none",
          }}
        >
          <Link href="/oncomputablenumbers">
            <A>
              1936:{" "}
              <i>
                On Computable Numbers, with an application to the
                Entscheidungsproblem
              </i>{" "}
              &#8594;
            </A>
          </Link>
        </BodyHeader>
      </Body>
      <Body>
        <BodyHeader
          style={{
            // textAlign: "center",
            textDecoration: "none",
          }}
        >
          <Link href="/fortran">
            <A>1957: Fortran &#8594;</A>
          </Link>
        </BodyHeader>
      </Body>
      <Body>
        <BodyHeader style={{ textDecoration: "none" }}>
          <Link href="/personalcomputer">
            <A>1974: MITS Releases the First Personal Computer &#8594;</A>
          </Link>
        </BodyHeader>
      </Body>{" "}
      <Body>
        <BodyHeader style={{ textDecoration: "none" }}>
          <Link href="/python">
            <A>1991: Python &#8594;</A>
          </Link>
        </BodyHeader>
      </Body>
      <Body>
        <BodyHeader style={{ textDecoration: "none" }}>
          <Link href="/mitchelresnick">
            <A>2014: Interview with Mitchel Resnick &#8594;</A>
          </Link>
        </BodyHeader>
      </Body>
      <Body>
        <BodyHeader style={{ textDecoration: "none" }}>
          <Link href="/extra">
            <A
              style={{
                color: "red",
              }}
            >
              EXTRA: Abstraction Visualized in Programming Languages &#8594;
            </A>
          </Link>
        </BodyHeader>
      </Body>
      <Body>
        <BodyHeader>Conclusion</BodyHeader>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>{" "}
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>{" "}
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </Body>
    </Wrapper>
  );
}
