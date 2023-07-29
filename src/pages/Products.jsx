import { useState } from "react";
import { Content, Element, OpenEl } from "./Products.styled";

const Products = () => {
  const [open, setOpen] = useState("first");
  const log = (e) => {
    console.log(e);
    // setOpen(e.target.id);
  };

  return (
    <div>
      <ul>
        <Element id="first" onClick={log} open={open === "first"}>
          Заголовок 1
          <Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid at
            minima ex doloribus culpa. Sunt eius fugit explicabo dolorum soluta?
          </Content>
          <button>Подробней</button>
        </Element>
        <Element open={open === "second"}>
          Заголовок 2
          <Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            possimus saepe officia harum voluptas laudantium maxime eum
            excepturi provident molestiae.
          </Content>
          <button>Подробней</button>
          <OpenEl id="second" onClick={log} />
        </Element>
        <Element open={open === "third"}>
          Заголовок 3
          <Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            possimus saepe officia harum voluptas laudantium maxime eum
            excepturi provident molestiae.
          </Content>
          <button>Подробней</button>
          <OpenEl id="third" onClick={log} />
        </Element>
      </ul>
    </div>
  );
};

export default Products;
