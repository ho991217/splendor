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

const Costs = styled.div`
  grid-area: body;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 2px 5px;
`;
const Cost = styled.div`
  margin: 2px 0px;
`;

export default function Card(props) {
  useEffect(() => {
    console.log(props.object);
  }, []);

  return (
    <Container
      className={"card type_" + props.object.Color + " " + props.object.Img}
    >
      <Header>
        {props.object.Points > 0 ? (
          <Point className={"point score point_" + props.object.Points}></Point>
        ) : null}
        <Gem className={"gem gem_" + props.object.Color}></Gem>
      </Header>

      <Costs>
        {props.object.Cost.White > 0 ? (
          <Cost className={"cost cost_White"}>
            <Point
              className={"point price point_" + props.object.Cost.White}
            ></Point>
          </Cost>
        ) : null}
        {props.object.Cost.Green > 0 ? (
          <Cost className={"cost cost_Green"}>
            <Point
              className={"point price point_" + props.object.Cost.Green}
            ></Point>
          </Cost>
        ) : null}
        {props.object.Cost.Red > 0 ? (
          <Cost className={"cost cost_Red"}>
            <Point
              className={"point price point_" + props.object.Cost.Red}
            ></Point>
          </Cost>
        ) : null}
        {props.object.Cost.Blue > 0 ? (
          <Cost className={"cost cost_Blue"}>
            <Point
              className={"point price point_" + props.object.Cost.Blue}
            ></Point>
          </Cost>
        ) : null}
        {props.object.Cost.Black > 0 ? (
          <Cost className={"cost cost_Black"}>
            <Point
              className={"point price point_" + props.object.Cost.Black}
            ></Point>
          </Cost>
        ) : null}
      </Costs>
    </Container>
  );
}
