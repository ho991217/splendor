import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <Link to="/local">Local Play</Link>
    </Container>
  );
}

export default Home;
