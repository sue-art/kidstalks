import React, { Component, useRef } from "react";
import { CardItems } from "components/Data/cardlists";
import { toppicCategory } from "components/Data/toppicCategory";
import Slider from "components/NetflixSlider";

class TopicCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categoryList = toppicCategory.map((item) => (
      <div id={item.name} color={item.color}>
        <hr className="line-info" />
        <h1 category={item.name} key={item.id}>
          {item.name}
        </h1>
        <Slider>
          {CardItems.filter((cardItem) => cardItem.category === item.name).map(
            (movie) => (
              <Slider.Item movie={movie} key={movie.id}>
                item1
              </Slider.Item>
            )
          )}
        </Slider>
      </div>
    ));
    return <div className="card-sections">{categoryList}</div>;
  }
}

export default TopicCards;
