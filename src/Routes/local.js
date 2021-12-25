import styled from "styled-components";
import Playmat from "../components/Playmat";

const Container = styled.div`
  background-color: grey;
`;

function Local() {
  return (
    <Container>
      <Playmat />
    </Container>
  );
}

export default Local;
