import styled from "styled-components";
import Playmat from "../components/Playmat";

const Container = styled.div`
  background-color: grey;
  perspective: 1000px;
  height: 100vh;
`;

function Local() {
  return (
    <Container>
      <Playmat />
    </Container>
  );
}

export default Local;
