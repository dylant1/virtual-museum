import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
const Header = styled.h3`
  max-width: 500px;
  padding: 0;
  margin: 0;
  margin-top: 10px;
`;
export const Metadata = (props) => {
  return (
    <Wrapper>
      <Header>Metadata</Header>
      {props.text}
    </Wrapper>
  );
};
