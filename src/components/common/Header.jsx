import styled from "styled-components";

function Header() {
  return (
    <>
      <StDanteManHwaHeader>
        <StDanteManHwaHeaderTitle>단테의 만화</StDanteManHwaHeaderTitle>
      </StDanteManHwaHeader>
    </>
  );
}

export default Header;

const StDanteManHwaHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StDanteManHwaHeaderTitle = styled.h1`
  font-weight: 600px;
  font-family: "Courier New", Courier, monospace;
`;
