import styled from "styled-components";

const Container = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  margin: 5px;
`;

export default function Noble(props) {
  return <Container>noble</Container>;
}
