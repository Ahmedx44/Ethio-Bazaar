import styled from "styled-components";

const StyledButton = styled.div`
  padding: 10px;
  margin-top:-5px;
  background-color:var(--color-grey-200)
  color: white;
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  &:hover {
    background-color: var(--color-brand-500);
    border-color: var(--color-brand-700); /* Change border color on hover */
    color: white /* Change text color on hover */
  }
`;

function Buttonn({ children }) {
  return <></>;
}

export default Buttonn;
