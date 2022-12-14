import Link from "next/link";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  align-self: flex-start;
  //   text-align: center;
`;
const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: white;
`;
const LinkWrapper = styled.div`
  padding: 5px 20px;
  font-weight: bold;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

export const Navbar = () => {
  return (
    <Nav>
      <Wrapper>
        <LinkWrapper
          style={{
            color: "#C60C30",
          }}
        >
          <Link href="/">Home</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="/oncomputablenumbers">1936</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="/fortran">1957</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="/personalcomputer">1974</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="/python">1991</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="/mitchelresnick">2014</Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="/extra">Extra</Link>
        </LinkWrapper>
      </Wrapper>
    </Nav>
  );
};
