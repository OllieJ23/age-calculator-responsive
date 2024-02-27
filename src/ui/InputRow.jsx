import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    font-size: 1.2rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: ${({ $error }) => ($error ? "var(--light-red)" : "var(--smokey-grey)")};
  }

  & p {
    font-size: 1.2rem;
    font-style: italic;
    color: var(--light-red);
    margin-top: 0.5rem;
    font-weight: 400;
  }
`;

function InputRow({ title, children, $error }) {
  return (
    <StyledRow $error={$error}>
      <span>{title}</span>
      {children}
      {$error && <p>{$error}</p>}
    </StyledRow>
  );
}

export default InputRow;
