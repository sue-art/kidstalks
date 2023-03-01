import React, { Component, useRef } from "react";
import { toppicCategory } from "components/Data/toppicCategory";
// reactstrap components

import {
  Container,
  Button,
  Label,
  FormGroup,
  CustomInput,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Card,
  Row,
  Col,
} from "reactstrap";

export default function PageHeader() {
  const squares = HomeCardItems.map((item) => (
    <div key={item.id} className={item.squares}>
      <h3 className="text-center">{item.title}</h3>
      <img src={item.image} class="card-img-top" alt="..."></img>
    </div>
  ));

  const categoryButtons = toppicCategory.map((item) => (
    <Button
      key={item.id}
      className="btn"
      color={item.color}
      onClick={() => handleButton(item.name)}
    >
      {item.name}
    </Button>
  ));

  const handleButton = (event) => {
    const element = document.getElementById(event);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  };

  return (
    <div className="page-header header-filter">
      {squares}
      <Container>
        <div className="content-center brand">
          <h4 className="">Conversation with your children </h4>
          <h1 className="h1-seo">Let's talk about</h1>
          <div className="box-wrap">{categoryButtons}</div>
        </div>
      </Container>
    </div>
  );
}

const HomeCardItems = [
  {
    id: 1,
    category: "Fun",
    squares: "squares square1",
    title: "Tell me about the best and worst parts of your days",
    content: "Tell me about the best and worst parts of your day.",
    image: require("assets/img/page-1.png"),
  },
  {
    id: 2,
    category: "Fun",
    squares: "squares square2",
    title: "Tell me about your favorite game",
    content: "What's your favorite game to play?",
    image: require("assets/img/page-2.png"),
  },
  {
    id: 3,
    category: "Weather",
    squares: "squares square3",
    title: "Tell me about your favorite animal",
    content: "If you could be any animal what would you be and why?",
    image: require("assets/img/page-3.png"),
  },
  {
    id: 4,
    category: "Weather",
    squares: "squares square4",
    title: "Favorite activity in the car",
    content: "What's your favorite thing to do in the car?",
    image: require("assets/img/page-4.png"),
  },
  {
    id: 5,
    category: "Emotions",
    squares: "squares square5",
    title: "favorite place",
    content: "If you could be anywhere right now where would you be?",
    image: require("assets/img/page-6.png"),
  },
  {
    id: 6,
    category: 3,
    squares: "squares square6",
    title: "What's your favorite cereal?",
    content: "What's your favorite cereal?",
    image: require("assets/img/page-7.png"),
  },
];
