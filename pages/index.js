import styled from "styled-components";
import { Navbar } from "../components/Navbar";

const Title = styled.h1`
  font-family: "Libre Baskerville", serif;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  //TODO: Change this for different sizes of screens
  margin-left: 10%;
  margin-right: 10%;
`;
const Body = styled.div`
  text-align: left;
`;
const BodyHeader = styled.h2`
  text-decoration: underline;
`;
export default function Home() {
  return (
    <Wrapper>
      <Title>Abstraction and Accessibility in Computer Science</Title>
      <Navbar />
      <Body>
        <BodyHeader>Introduction</BodyHeader>
        {/* <div
          style={{
            lineHeight: "1.5",
          }}
        >
          &emsp;As computers have become more and more advanced, the learning
          curve for entering computer science has gradually lowered in
          proportion. This is largely due to the fundamental concept of{" "}
          <b>abstraction</b>. Generally, abstraction is the process of removing
          something or considering it independently of its associations. In
          computer science specificallly, abstraction is the{" "}
          <i>
            process of removing physical, spatial, or temporal attributes in the
            study of systems.
          </i>
          This allows one's focus to shift to attributes with a greater
          importance, or, in this case, ease the entry into the field. As both
          software and hardware are further abstracted, a low level
          understanding of abstract and theoretical topics (e.g., Turing
          Machines) is not as necesssary to break into the discipline. This can
          be also be referred to as the accessibility of computer science, with
          it becoming more and more accessible in accordance to a greater
          abstraction, as fewer 'technical' concepts are required to gain a
          minimal understanding of key concepts.
        </div>{" "} */}
        <div
          style={{
            lineHeight: "1.5",
          }}
        >
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
          This allows one's focus to shift to attributes with greater
          importance, or, in this case, ease the entry into the field. As both
          software and hardware are further abstracted, a low-level
          understanding of abstract and theoretical topics (e.g., Turing
          Machines) is less essential to break into the discipline.
        </div>
        <br />
        <div
          style={{
            lineHeight: "1.5",
          }}
        >
          &emsp;This virtual exhibit will examine how abstraction has reduced
          the barrier of entry into computer science, relying on primary sources
          such as interviews and ______
        </div>
      </Body>
    </Wrapper>
  );
}
