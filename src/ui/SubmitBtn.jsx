import styled from "styled-components";
import ArrowSvg from "./ArrowSvg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
  @media (max-width: 400px) {
   margin-top: 5rem;
    }
`;

const StyledSubmitBtn = styled.button`
  background-color: var(--purple);
  border-radius: 100%;
  cursor: pointer;
  padding:2.2rem 2.2rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in;

  &:hover{
    background-color: var(--off-black);
  }

  &:active {
    transform: scale(.95)
  }


  @media (max-width: 400px) {
    padding:1.1rem 1.1rem;
    position: absolute;
    }
`;

const Line = styled.hr`
  border: 0.2px solid var(--light-grey);
  width: 80vh; /* Adjust the width of the line as needed */

  
  
`;

function SubmitBtn() {
  return (
    <Container>
      <Line />
      <StyledSubmitBtn>
        <ArrowSvg />
      </StyledSubmitBtn>
    </Container>
  );
}

export default SubmitBtn;
