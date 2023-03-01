import React, { Component } from "react";
import Slider from "./NetflixSlider";
import { toppicCategory } from "./Data/toppicCategory";
import { CardItems } from "components/Data/cardlists";

class Cardlist extends Component {
  render() {
    return (
      <div>
        <div id="Fun">
          <hr className="line-info" />
          <h1>card lists</h1>
          {toppicCategory.map((item) => (
            <h1 category={item.name} key={item.id}>
              item.name
            </h1>
          ))}
          <Slider>
            {CardItems.map((movie) => (
              <Slider.Item movie={movie} key={movie.id}>
                item1
              </Slider.Item>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Cardlist;
