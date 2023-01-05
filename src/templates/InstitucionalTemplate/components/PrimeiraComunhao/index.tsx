import Label from "components/customHtmlComponents/Labels/Label";
import Spacing from "components/layoutComponents/Spacing";

import * as Styles from "./styles";

const PrimeiraComunhao = () => {
  return (
    <Styles.Wrapper>
      <Spacing size={4} />
      <Label as="h1" center color="green">
      Primeira Comunhão
      </Label>
      <Spacing size={3} />
      <h6>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        assumenda earum doloremque id architecto, nemo sapiente debitis
        repellendus iste quae quibusdam itaque, quod unde rem accusamus
        voluptatibus dolorum eaque quia.
      </h6>
      <i>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        assumenda earum doloremque id architecto, nemo sapiente debitis
        repellendus iste quae quibusdam itaque, quod unde rem accusamus
        voluptatibus dolorum eaque quia.
      </i>
      <b>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        assumenda earum doloremque id architecto, nemo sapiente debitis
        repellendus iste quae quibusdam itaque, quod unde rem accusamus
        voluptatibus dolorum eaque quia.
      </b>
    </Styles.Wrapper>
  );
};

export default PrimeiraComunhao;
