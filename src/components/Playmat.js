import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import "./Card.css";
import Noble from "./Noble";

const Container = styled.div`
  // transform: rotateX(10deg) translateZ(-100px);
  position: relative;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 20px;
  max-width: 1280px;
  max-height: 720px;
  min-width: 1280px;
  min-height: 720px;
`;

const Nobles = styled.div`
  display: gird;
  right: 0;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "top top"
    "one two"
    "three four";
  position: absolute;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  top: 45px;
  left: 140px;
  transform: scale(1.1);
`;

const Back = styled.div`
  margin-right: 20px;
  min-width: 120px;
  min-height: 160px;
`;

const Row = styled.div`
  display: flex;
  > div {
    &:hover {
      transform: Scale(1.2);
    }
    transition: transform 0.15s ease-in-out;
  }
`;

const CardCounter = styled.span``;

function Playmat() {
  const [tier1, setTier1] = useState([]);
  const [show1, setShow1] = useState(false);
  const [tier2, setTier2] = useState([]);
  const [show2, setShow2] = useState(false);
  const [tier3, setTier3] = useState([]);
  const [show3, setShow3] = useState(false);
  const [nobles, setNobles] = useState([]);

  function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
    return a;
  }

  const CardSet = [
    {
      Color: "Black",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 1,
        Red: 1,
        Blue: 1,
        Green: 1,
      },
    },
    {
      Color: "Black",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 0,
        Red: 1,
        Blue: 0,
        Green: 2,
      },
    },
    {
      Color: "Black",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 2,
        Red: 0,
        Blue: 0,
        Green: 2,
      },
    },
    {
      Color: "Black",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 1,
        White: 0,
        Red: 3,
        Blue: 0,
        Green: 1,
      },
    },
    {
      Color: "Black",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 0,
        Green: 3,
      },
    },
    {
      Color: "Black",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 1,
        Red: 1,
        Blue: 2,
        Green: 1,
      },
    },
    {
      Color: "Black",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 2,
        Red: 1,
        Blue: 2,
        Green: 0,
      },
    },
    {
      Color: "Black",
      Img: "card_img1",
      Points: 1,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 4,
        Green: 0,
      },
    },
    {
      Color: "Black",
      Img: "card_img2",
      Points: 1,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 3,
        Red: 0,
        Blue: 2,
        Green: 2,
      },
    },
    {
      Color: "Black",
      Img: "card_img2",
      Points: 1,
      Tier: 2,
      Cost: {
        Black: 2,
        White: 3,
        Red: 0,
        Blue: 0,
        Green: 3,
      },
    },
    {
      Color: "Black",
      Img: "card_img2",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 0,
        Red: 2,
        Blue: 1,
        Green: 4,
      },
    },
    {
      Color: "Black",
      Img: "card_img3",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 5,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Black",
      Img: "card_img3",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 0,
        Red: 3,
        Blue: 0,
        Green: 5,
      },
    },
    {
      Color: "Black",
      Img: "card_img3",
      Points: 3,
      Tier: 2,
      Cost: {
        Black: 6,
        White: 0,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Black",
      Img: "card_img4",
      Points: 3,
      Tier: 3,
      Cost: {
        Black: 0,
        White: 3,
        Red: 3,
        Blue: 3,
        Green: 5,
      },
    },
    {
      Color: "Black",
      Img: "card_img5",
      Points: 4,
      Tier: 3,
      Cost: {
        Black: 0,
        White: 0,
        Red: 7,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Black",
      Img: "card_img5",
      Points: 4,
      Tier: 3,
      Cost: {
        Black: 3,
        White: 0,
        Red: 6,
        Blue: 0,
        Green: 3,
      },
    },
    {
      Color: "Black",
      Img: "card_img4",
      Points: 5,
      Tier: 3,
      Cost: {
        Black: 3,
        White: 0,
        Red: 7,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Blue",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 2,
        White: 1,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Blue",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 1,
        White: 1,
        Red: 2,
        Blue: 0,
        Green: 1,
      },
    },
    {
      Color: "Blue",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 1,
        White: 1,
        Red: 1,
        Blue: 0,
        Green: 1,
      },
    },
    {
      Color: "Blue",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 0,
        Red: 1,
        Blue: 1,
        Green: 3,
      },
    },
    {
      Color: "Blue",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 3,
        White: 0,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Blue",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 1,
        Red: 2,
        Blue: 0,
        Green: 2,
      },
    },
    {
      Color: "Blue",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 2,
        White: 0,
        Red: 0,
        Blue: 0,
        Green: 2,
      },
    },
    {
      Color: "Blue",
      Img: "card_img1",
      Points: 1,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 0,
        Red: 4,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Blue",
      Img: "card_img2",
      Points: 1,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 0,
        Red: 3,
        Blue: 2,
        Green: 2,
      },
    },
    {
      Color: "Blue",
      Img: "card_img2",
      Points: 1,
      Tier: 2,
      Cost: {
        Black: 3,
        White: 0,
        Red: 0,
        Blue: 2,
        Green: 3,
      },
    },
    {
      Color: "Blue",
      Img: "card_img2",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 5,
        Red: 0,
        Blue: 3,
        Green: 0,
      },
    },
    {
      Color: "Blue",
      Img: "card_img3",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 5,
        Green: 0,
      },
    },
    {
      Color: "Blue",
      Img: "card_img3",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 4,
        White: 2,
        Red: 1,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Blue",
      Img: "card_img3",
      Points: 3,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 6,
        Green: 0,
      },
    },
    {
      Color: "Blue",
      Img: "card_img4",
      Points: 3,
      Tier: 3,
      Cost: {
        Black: 5,
        White: 3,
        Red: 3,
        Blue: 0,
        Green: 3,
      },
    },
    {
      Color: "Blue",
      Img: "card_img5",
      Points: 4,
      Tier: 3,
      Cost: {
        Black: 0,
        White: 7,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Blue",
      Img: "card_img5",
      Points: 4,
      Tier: 3,
      Cost: {
        Black: 3,
        White: 6,
        Red: 0,
        Blue: 3,
        Green: 0,
      },
    },
    {
      Color: "Blue",
      Img: "card_img4",
      Points: 5,
      Tier: 3,
      Cost: {
        Black: 0,
        White: 7,
        Red: 0,
        Blue: 3,
        Green: 0,
      },
    },
    {
      Color: "Green",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 2,
        Red: 0,
        Blue: 1,
        Green: 0,
      },
    },
    {
      Color: "Green",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 0,
        Red: 2,
        Blue: 2,
        Green: 0,
      },
    },
    {
      Color: "Green",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 1,
        Red: 0,
        Blue: 3,
        Green: 1,
      },
    },
    {
      Color: "Green",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 1,
        White: 1,
        Red: 1,
        Blue: 1,
        Green: 0,
      },
    },
    {
      Color: "Green",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 2,
        White: 1,
        Red: 1,
        Blue: 1,
        Green: 0,
      },
    },
    {
      Color: "Green",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 2,
        White: 0,
        Red: 2,
        Blue: 1,
        Green: 0,
      },
    },
    {
      Color: "Green",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 0,
        Red: 3,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Green",
      Img: "card_img1",
      Points: 1,
      Tier: 1,
      Cost: {
        Black: 4,
        White: 0,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Green",
      Img: "card_img2",
      Points: 1,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 3,
        Red: 3,
        Blue: 0,
        Green: 2,
      },
    },
    {
      Color: "Green",
      Img: "card_img2",
      Points: 1,
      Tier: 2,
      Cost: {
        Black: 2,
        White: 2,
        Red: 0,
        Blue: 3,
        Green: 0,
      },
    },
    {
      Color: "Green",
      Img: "card_img2",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 1,
        White: 4,
        Red: 0,
        Blue: 2,
        Green: 0,
      },
    },
    {
      Color: "Green",
      Img: "card_img3",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 0,
        Green: 5,
      },
    },
    {
      Color: "Green",
      Img: "card_img3",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 5,
        Green: 3,
      },
    },
    {
      Color: "Green",
      Img: "card_img3",
      Points: 3,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 0,
        Green: 6,
      },
    },
    {
      Color: "Green",
      Img: "card_img4",
      Points: 3,
      Tier: 3,
      Cost: {
        Black: 3,
        White: 5,
        Red: 3,
        Blue: 3,
        Green: 0,
      },
    },
    {
      Color: "Green",
      Img: "card_img5",
      Points: 4,
      Tier: 3,
      Cost: {
        Black: 0,
        White: 3,
        Red: 0,
        Blue: 6,
        Green: 3,
      },
    },
    {
      Color: "Green",
      Img: "card_img5",
      Points: 4,
      Tier: 3,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 7,
        Green: 0,
      },
    },
    {
      Color: "Green",
      Img: "card_img4",
      Points: 5,
      Tier: 3,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 7,
        Green: 3,
      },
    },
    {
      Color: "Red",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 3,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Red",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 3,
        White: 1,
        Red: 1,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Red",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 2,
        Green: 1,
      },
    },
    {
      Color: "Red",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 2,
        White: 2,
        Red: 0,
        Blue: 0,
        Green: 1,
      },
    },
    {
      Color: "Red",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 1,
        White: 2,
        Red: 0,
        Blue: 1,
        Green: 1,
      },
    },
    {
      Color: "Red",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 1,
        White: 1,
        Red: 0,
        Blue: 1,
        Green: 1,
      },
    },
    {
      Color: "Red",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 2,
        Red: 2,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Red",
      Img: "card_img1",
      Points: 1,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 4,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Red",
      Img: "card_img2",
      Points: 1,
      Tier: 2,
      Cost: {
        Black: 3,
        White: 0,
        Red: 2,
        Blue: 3,
        Green: 0,
      },
    },
    {
      Color: "Red",
      Img: "card_img2",
      Points: 1,
      Tier: 2,
      Cost: {
        Black: 3,
        White: 2,
        Red: 2,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Red",
      Img: "card_img2",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 1,
        Red: 0,
        Blue: 4,
        Green: 2,
      },
    },
    {
      Color: "Red",
      Img: "card_img3",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 5,
        White: 3,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Red",
      Img: "card_img3",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 5,
        White: 0,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Red",
      Img: "card_img3",
      Points: 3,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 0,
        Red: 6,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "Red",
      Img: "card_img4",
      Points: 3,
      Tier: 3,
      Cost: {
        Black: 3,
        White: 3,
        Red: 0,
        Blue: 5,
        Green: 3,
      },
    },
    {
      Color: "Red",
      Img: "card_img5",
      Points: 4,
      Tier: 3,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 0,
        Green: 7,
      },
    },
    {
      Color: "Red",
      Img: "card_img5",
      Points: 4,
      Tier: 3,
      Cost: {
        Black: 0,
        White: 0,
        Red: 3,
        Blue: 3,
        Green: 6,
      },
    },
    {
      Color: "Red",
      Img: "card_img4",
      Points: 5,
      Tier: 3,
      Cost: {
        Black: 0,
        White: 0,
        Red: 3,
        Blue: 0,
        Green: 7,
      },
    },
    {
      Color: "White",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 1,
        White: 0,
        Red: 0,
        Blue: 2,
        Green: 2,
      },
    },
    {
      Color: "White",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 1,
        White: 0,
        Red: 2,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "White",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 1,
        White: 0,
        Red: 1,
        Blue: 1,
        Green: 1,
      },
    },
    {
      Color: "White",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 3,
        Green: 0,
      },
    },
    {
      Color: "White",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 2,
        Green: 2,
      },
    },
    {
      Color: "White",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 1,
        White: 0,
        Red: 1,
        Blue: 1,
        Green: 2,
      },
    },
    {
      Color: "White",
      Img: "card_img1",
      Points: 0,
      Tier: 1,
      Cost: {
        Black: 1,
        White: 3,
        Red: 0,
        Blue: 1,
        Green: 0,
      },
    },
    {
      Color: "White",
      Img: "card_img1",
      Points: 1,
      Tier: 1,
      Cost: {
        Black: 0,
        White: 0,
        Red: 0,
        Blue: 0,
        Green: 4,
      },
    },
    {
      Color: "White",
      Img: "card_img2",
      Points: 1,
      Tier: 2,
      Cost: {
        Black: 2,
        White: 0,
        Red: 2,
        Blue: 0,
        Green: 3,
      },
    },
    {
      Color: "White",
      Img: "card_img2",
      Points: 1,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 2,
        Red: 3,
        Blue: 3,
        Green: 0,
      },
    },
    {
      Color: "White",
      Img: "card_img2",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 2,
        White: 0,
        Red: 4,
        Blue: 0,
        Green: 1,
      },
    },
    {
      Color: "White",
      Img: "card_img3",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 0,
        Red: 5,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "White",
      Img: "card_img3",
      Points: 2,
      Tier: 2,
      Cost: {
        Black: 3,
        White: 0,
        Red: 5,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "White",
      Img: "card_img3",
      Points: 3,
      Tier: 2,
      Cost: {
        Black: 0,
        White: 6,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "White",
      Img: "card_img4",
      Points: 3,
      Tier: 3,
      Cost: {
        Black: 3,
        White: 0,
        Red: 5,
        Blue: 3,
        Green: 3,
      },
    },
    {
      Color: "White",
      Img: "card_img5",
      Points: 4,
      Tier: 3,
      Cost: {
        Black: 7,
        White: 0,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "White",
      Img: "card_img5",
      Points: 4,
      Tier: 3,
      Cost: {
        Black: 6,
        White: 3,
        Red: 3,
        Blue: 0,
        Green: 0,
      },
    },
    {
      Color: "White",
      Img: "card_img4",
      Points: 5,
      Tier: 3,
      Cost: {
        Black: 7,
        White: 3,
        Red: 0,
        Blue: 0,
        Green: 0,
      },
    },
  ];

  const NobleSet = [
    {
      img_line: 1,
      score: 3,
      cost: {
        Black: 0,
        Red: 4,
        Blue: 0,
        White: 0,
        Green: 4,
      },
    },
    {
      img_line: 1,
      score: 3,
      cost: {
        Black: 0,
        Red: 0,
        Blue: 4,
        White: 0,
        Green: 4,
      },
    },
    {
      img_line: 1,
      score: 3,
      cost: {
        Black: 0,
        Red: 0,
        Blue: 4,
        White: 4,
        Green: 0,
      },
    },

    {
      img_line: 1,
      score: 3,
      cost: {
        Black: 4,
        Red: 0,
        Blue: 0,
        White: 4,
        Green: 0,
      },
    },
    {
      img_line: 1,
      score: 3,
      cost: {
        Black: 4,
        Red: 4,
        Blue: 0,
        White: 0,
        Green: 0,
      },
    },
    {
      img_line: 2,
      score: 3,
      cost: {
        Black: 3,
        Red: 0,
        Blue: 3,
        White: 0,
        Green: 3,
      },
    },
    {
      img_line: 2,
      score: 3,
      cost: {
        Black: 3,
        Red: 3,
        Blue: 0,
        White: 0,
        Green: 3,
      },
    },
    {
      img_line: 2,
      score: 3,
      cost: {
        Black: 3,
        Red: 3,
        Blue: 0,
        White: 3,
        Green: 0,
      },
    },
    {
      img_line: 2,
      score: 3,
      cost: {
        Black: 0,
        Red: 3,
        Blue: 3,
        White: 0,
        Green: 3,
      },
    },
    {
      img_line: 2,
      score: 3,
      cost: {
        Black: 0,
        Red: 0,
        Blue: 3,
        White: 3,
        Green: 3,
      },
    },
  ];

  const CardTier1 = [];
  const CardTier2 = [];
  const CardTier3 = [];
  CardSet.forEach((el) => {
    if (el.Tier === 1) {
      CardTier1.push(el);
    } else if (el.Tier === 2) {
      CardTier2.push(el);
    } else if (el.Tier === 3) {
      CardTier3.push(el);
    }
  });
  useEffect(() => {
    shuffle(CardTier1);
    shuffle(CardTier2);
    shuffle(CardTier3);
    setTier1([
      CardTier1.pop(),
      CardTier1.pop(),
      CardTier1.pop(),
      CardTier1.pop(),
    ]);
    setTier2([
      CardTier2.pop(),
      CardTier2.pop(),
      CardTier2.pop(),
      CardTier2.pop(),
    ]);
    setTier3([
      CardTier3.pop(),
      CardTier3.pop(),
      CardTier3.pop(),
      CardTier3.pop(),
    ]);
    shuffle(NobleSet);
    setNobles([NobleSet.pop(), NobleSet.pop(), NobleSet.pop()]);
  }, []);

  useEffect(() => {
    if (tier1.length < 4 && CardTier1.length > 0) {
      setTier1((cur) => [...cur, CardTier1.pop()]);
    }
  }, [tier1.length]);

  useEffect(() => {
    if (tier2.length < 4 && CardTier2.length > 0) {
      setTier2((cur) => [...cur, CardTier2.pop()]);
    }
  }, [tier2.length]);

  useEffect(() => {
    if (tier3.length < 4 && CardTier3.length > 0) {
      setTier3((cur) => [...cur, CardTier3.pop()]);
    }
  }, [tier3.length]);

  return (
    <>
      <Container className="mainContainer">
        <Cards>
          <Row id="row_1">
            {CardTier1.length > 0 ? (
              <Back
                className="card back_1"
                onMouseEnter={() => {
                  setShow1(true);
                }}
                onMouseLeave={() => {
                  setShow1(false);
                }}
              >
                {show1 ? <CardCounter>{CardTier1.length}</CardCounter> : null}
              </Back>
            ) : null}
            {tier1[0] ? <Card object={tier1[0]} /> : null}
            {tier1[1] ? <Card object={tier1[1]} /> : null}
            {tier1[2] ? <Card object={tier1[2]} /> : null}
            {tier1[3] ? <Card object={tier1[3]} /> : null}
          </Row>
          <Row id="row_2">
            {CardTier2.length > 0 ? (
              <Back
                className="card back_2"
                onMouseEnter={() => {
                  setShow2(true);
                }}
                onMouseLeave={() => {
                  setShow2(false);
                }}
              >
                {show2 ? <CardCounter>{CardTier2.length}</CardCounter> : null}
              </Back>
            ) : null}
            {tier2[0] ? <Card object={tier2[0]} /> : null}
            {tier2[1] ? <Card object={tier2[1]} /> : null}
            {tier2[2] ? <Card object={tier2[2]} /> : null}
            {tier2[3] ? <Card object={tier2[3]} /> : null}
          </Row>
          <Row id="row_3">
            {CardTier3.length > 0 ? (
              <Back
                className="card back_3"
                onMouseEnter={() => {
                  setShow3(true);
                }}
                onMouseLeave={() => {
                  setShow3(false);
                }}
              >
                {show3 ? <CardCounter>{CardTier3.length}</CardCounter> : null}
              </Back>
            ) : null}
            {tier3[0] ? <Card object={tier3[0]} /> : null}
            {tier3[1] ? <Card object={tier3[1]} /> : null}
            {tier3[2] ? <Card object={tier3[2]} /> : null}
            {tier3[3] ? <Card object={tier3[3]} /> : null}
          </Row>
        </Cards>
        <Nobles>
          {nobles[0] ? <Noble object={nobles[0]} /> : null}
          {nobles[1] ? <Noble object={nobles[1]} /> : null}
          {nobles[2] ? <Noble object={nobles[2]} /> : null}
          {nobles[3] ? <Noble object={nobles[3]} /> : null}
          {nobles[4] ? <Noble object={nobles[3]} /> : null}
        </Nobles>
      </Container>
    </>
  );
}

export default Playmat;
