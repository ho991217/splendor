import { useEffect } from "react";
import styled from "styled-components";
import "./Card.css";

const Container = styled.div`
  height: 160px;
  width: 120px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "header header header"
    "body body body"
    "body body body"
    "body body body";
`;

const Header = styled.div`
  grid-area: header;
  background-color: rgba(255, 255, 255, 0.5);
  display: grid;
  grid-template-rows: 40px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "point none gem";
`;

const Point = styled.div``;

const Gem = styled.div``;

const Cost = styled.div`
  grid-area: cost;
`;

export default function Card(props) {
  useEffect(() => {
    console.log(props.object);
  }, []);

  return (
    <Container
      className={
        "card" + " type_" + props.object.Color + " " + props.object.Img
      }
    >
      <Header>
        <Point className="point"></Point>
        <Gem className={"gem " + "gem_" + props.object.Color}></Gem>
      </Header>
      <Cost></Cost>
    </Container>
  );
}
