import Label from "components/customHtmlComponents/Labels/Label";
import Spacing from "components/layoutComponents/Spacing";

import * as Styles from "./styles";

const Catequese = () => {
  return (
    <Styles.Wrapper>
      <Spacing size={4} />
      <Label as="h1" center color="green">
        Catequese
      </Label>
      <Spacing size={3} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        assumenda earum doloremque id architecto, nemo sapiente debitis
        repellendus iste quae quibusdam itaque, quod unde rem accusamus
        voluptatibus dolorum eaque quia.
      </p>
    </Styles.Wrapper>
  );
};

export default Catequese;
