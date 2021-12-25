import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import "./Card.css";

const Container = styled.div``;

const Nobles = styled.div`
  display: flex;
`;

const Noble = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${(props) => props.color};
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: whitesmoke;
`;

const Header = styled.div``;

const Row = styled.div`
  display: flex;
`;

const Card = styled.div``;

function Playmat() {
  const [topTier1, setTopTier1] = useState({});
  const [topTier2, setTopTier2] = useState({});
  const [topTier3, setTopTier3] = useState({});
  const [tier1Count, setTier1Count] = useState(0);
  const [tier2Count, setTier2Count] = useState(0);
  const [tier3Count, setTier3Count] = useState(0);
  const CardSet = [
    {
      Color: "Black",
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
  const CardTier1 = [];
  const CardTier2 = [];
  const CardTier3 = [];

  useEffect(() => {
    CardSet.forEach((el) => {
      if (el.Tier === 1) {
        CardTier1.push(el);
      } else if (el.Tier === 2) {
        CardTier2.push(el);
      } else if (el.Tier === 3) {
        CardTier3.push(el);
      }
    });
    CardTier1.sort(() => Math.random() - 0.5);
    CardTier2.sort(() => Math.random() - 0.5);
    CardTier3.sort(() => Math.random() - 0.5);

    setTopTier2(CardTier2.pop());
    setTopTier3(CardTier3.pop());
  }, []);

  useEffect(() => {
    if (tier1Count < 4 && CardTier1.length !== 0) {
      setTopTier1(CardTier1.pop());
      
      setTier1Count((cur) => (cur += 1));
    }
  }, [tier1Count]);

  const consolLog = () => {
    console.log(topTier1);
  };
  return (
    <>
      <Container>
        <Nobles>
          <Noble color="red" />
          <Noble color="green" />
          <Noble color="blue" />
        </Nobles>
        <Cards>
          <Row>
            <Card className="card back_1" enable={false} />
            <Card className="card" enable={true}>
              <Header></Header>
            </Card>
            <Card className="card" enable={true}>
              <Header></Header>
            </Card>
            <Card className="card" enable={true}>
              <Header></Header>
            </Card>
            <button onClick={consolLog}>Draw</button>
          </Row>
          <Row>
            <Card className="card back_2" enable={false} />
            <Card className="card" enable={true}>
              <Header></Header>
            </Card>
            <Card className="card" enable={true}>
              <Header></Header>
            </Card>
            <Card className="card" enable={true}>
              <Header></Header>
            </Card>
          </Row>
          <Row>
            <Card className="card back_3" enable={false} />
            <Card className="card" enable={true}>
              <Header></Header>
            </Card>
            <Card className="card" enable={true}>
              <Header></Header>
            </Card>
            <Card className="card" enable={true}>
              <Header></Header>
            </Card>
          </Row>
        </Cards>
      </Container>
    </>
  );
}

export default Playmat;
