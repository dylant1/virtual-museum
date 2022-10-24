import { Navbar } from "../components/Navbar";
import { Wrapper, Title, Body, BodyHeader, BodyText } from "./index";
import Link from "next/link";
import { Metadata } from "../components/Metadata";
import styled from "styled-components";

const code1 = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;
const BlockWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;
const CodeBlock = styled.div`
  width: 565px;
  // background-color: #4c4e52;
  maxheight: 550px;
  margin: 10px;
  flex-wrap: wrap;
  // color: white;
  font-size: 20px;
  text-align: left;
  border-radius: 5px;
  border: 1px solid grey;
`;

const Extra = () => {
  return (
    <Wrapper>
      <Title>
        <Link href="/">Abstraction and Accessibility in Computer Science</Link>
      </Title>{" "}
      <Navbar></Navbar>
      <br />
      <BodyText>
        The printing of &quot;hello world&quot; in 4 different programming
        langauges. Briefly, the shorter the number of lines of code, the more
        high level the language is, thus the more abstracted it is.
      </BodyText>
      <br />
      <BlockWrapper>
        <CodeBlock>
          <p style={{ textAlign: "center" }}>
            <b>Binary</b> (on linux 32 bit machine - simplified)
          </p>
          <p
            style={{
              lineHeight: "1.5",
              padding: "10px",
            }}
          >
            00000000 7f 45 4c 46 01 01 01 00 00 00 00 00 00 00 00 00 00000010 02
            00 03 00 01 00 00 00 80 80 04 08 34 00 00 00 00000020 c8 00 00 00 00
            00 00 00 34 00 20 00 02 00 28 00 00000030 04 00 03 00 01 00 00 00 00
            00 00 00 00 80 04 08 00000040 00 80 04 08 9d 00 00 00 9d 00 00 00 05
            00 00 00 00000050 00 10 00 00 01 00 00 00 a0 00 00 00 a0 90 04 08
            00000060 a0 90 04 08 0e 00 00 00 0e 00 00 00 06 00 00 00 00000070 00
            10 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00000080 ba 0e 00 00 00
            b9 a0 90 04 08 bb 01 00 00 00 b8 00000090 04 00 00 00 cd 80 b8 01 00
            00 00 cd 80 00 00 00 000000a0 48 65 6c 6c 6f 2c 20 77 6f 72 6c 64 21
            0a 00 2e 000000b0 73 68 73 74 72 74 61 62 <br /> +10 more lines
          </p>
        </CodeBlock>
        <CodeBlock>
          <p style={{ textAlign: "center" }}>
            <b>Assembly</b>
          </p>
          <p
            style={{
              lineHeight: "1.5",
              padding: "10px",
            }}
          >
            &emsp;global _main
            <br /> &emsp;extern _printf <br />
            &emsp;section .text <br />
            _main: <br /> &emsp;push message <br />
            &emsp;call _printf <br />
            &emsp;add esp, 4 <br />
            message: <br />
            &emsp;db &quot;Hello World&quot;, 10, 0
          </p>
        </CodeBlock>
        <CodeBlock>
          <p style={{ textAlign: "center" }}>
            <b>Fortran</b>
          </p>
          <p
            style={{
              lineHeight: "1.5",
              padding: "10px",
            }}
          >
            program helloworld <br />
            &emsp;print *, &quot;Hello World&quot; <br />
            end program helloworld
          </p>
        </CodeBlock>{" "}
        <CodeBlock>
          <p style={{ textAlign: "center" }}>
            <b>Python</b>
          </p>
          <p
            style={{
              lineHeight: "1.5",
              padding: "10px",
            }}
          >
            print(&quot;hello world&quot;)
          </p>
        </CodeBlock>{" "}
      </BlockWrapper>
    </Wrapper>
  );
};

export default Extra;
