import styled from "styled-components";
import Playmat from "../components/Playmat";

const Container = styled.div`
  background-color: white;
  perspective: 1000px;
  height: 100vh;
  display: grid;
  place-items: center;
`;

function Local() {
  return (
    <Container>
      <Playmat />
    </Container>
  );
}

export default Local;
