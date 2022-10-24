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
        <h4>&quot;Reinventing the wheel&quot;</h4>
        <BodyText>
          &emsp;This idiomatic metaphor is perhaps the most concise way to
          highlight the importance of abstraction in computer science. When both
          learning important concepts or researching unexplored areas in the
          field, it is crucial to utilize this paradigm to ensure you are
          focusing on the most relevant concepts, rather than having to
          understand every single topic, however relevant it is to your
          learning. This is most important for people trying to break into the
          computer science field as their understanding of these topics is
          lacking, thus relying on abstraction to approach their learning is
          critical. Professors and researchers spend their entire lives studying
          computers at a low level, demonstrating the complexity of this subject
          and proving how it would be virtually impossible for a computer
          science student or hobbyist to break into the computer science field
          without abstraction. This is also why, as time has progressed, more
          hardware and software have been developed to provide the simplest user
          experience while still providing sufficient complexity and
          functionality to ensure work can get done.{" "}
        </BodyText>
        <br />
        <BodyText>
          &emsp;The progression from assembly to Fortran to Python highlights
          the value placed on abstracting concepts to improve software, namely
          programming languages. While assembly language is the set of
          instructions given to the actual processor, Python and Fortran are
          processor independent, allowing them to be much easier to grasp,
          improving productivity (See EXTRA section for a comparison).
          Additionally, Scratch was created to provide an introduction to
          programming for beginners. This language, while not as robust as other
          languages, allows for an easier introduction to topics through
          abstraction.
        </BodyText>
        <br />
        <BodyText>
          &emsp;On the hardware side, the transition from the theoretical Turing
          machine to a fully constructed, available to the public, personal
          computer demonstrates the importance of abstraction. Turing&apos;s
          theoretical machine proposed in 1936 is the low level basis for the
          modern computer, yet it is completely unnecessary for many people to
          understand the concept behind it before jumping into the computer
          science field. Thus, when the MITS released their computer, users
          (especially students) were able to utilize these machines in their
          learning to run programs and algorithms. After the Altair 8800, no
          longer was it necessary to learn computer science from a purely
          theoretical background, as abstraction in the form of physical
          machines allowed the common person to write software without a
          bulletproof understanding how the computer functioned at a low level.
        </BodyText>
        <br />
        <BodyText>
          &emsp; As modern computers have progressed due to advances in
          technology, abstraction has become all the more important. As Mitchel
          Resnick states in his interview, &quot;Our ultimate goals with Scratch
          are to help young people think creatively, reason systematically and
          work collaboratively (Interview with MWB).&quot; Without abstraction,
          this hands-on learning would be extremely difficult as understanding
          every concept sufficiently would require numerous years of studying.
        </BodyText>
      </Body>
      <br />
      <Body>
        <BodyHeader>Bibliography</BodyHeader>
        <BodyText
          style={{
            lineHeight: "1.5",
          }}
        >
          Guido van Rossum, Python.org, https://www.python.org/.
          <br />
          Turing, Alan Mathison. &quot;On computable numbers, with an
          application to the Entscheidungsproblem.&quot;(1936)
          <br />
          International Business Machines, Fortran,
          https://fortran-lang.org/en/. <br />
          Mitchel Resnick, interview with MWB, <i>MWB.com</i>, MWB, Feb 8. 2014
          <br />
          Micro Instrumentation and Telemetry Systems, Altair 8800, National
          Musuem of American History, 1974
        </BodyText>
      </Body>
    </Wrapper>
  );
}
