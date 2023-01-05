import Label from "components/customHtmlComponents/Labels/Label";
import Spacing from "components/layoutComponents/Spacing";

import * as Styles from "./styles";

const Missas = () => {
  return (
    <Styles.Wrapper>
      <Spacing size={4} />
      <Label as="h1" center color="green">
        Missas
      </Label>
      <Spacing size={3} />
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores
        magnam nam accusantium ratione tenetur modi iusto fuga, nihil debitis
        molestiae quae ad odio commodi dignissimos quibusdam consequatur
        assumenda reprehenderit!
      </h4>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores
        magnam nam accusantium ratione tenetur modi iusto fuga, nihil debitis
        molestiae quae ad odio commodi dignissimos quibusdam consequatur
        assumenda reprehenderit!
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores
        magnam nam accusantium ratione tenetur modi iusto fuga, nihil debitis
        molestiae quae ad odio commodi dignissimos quibusdam consequatur
        assumenda reprehenderit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores
        magnam nam accusantium ratione tenetur modi iusto fuga, nihil debitis
        molestiae quae ad odio commodi dignissimos quibusdam consequatur
        assumenda reprehenderit! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vitae maiores magnam nam accusantium ratione tenetur
        modi iusto fuga, nihil debitis molestiae quae ad odio commodi
        dignissimos quibusdam consequatur assumenda reprehenderit!
      </p>
    </Styles.Wrapper>
  );
};

export default Missas;
