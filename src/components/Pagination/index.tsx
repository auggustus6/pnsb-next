import * as Styles from "./styles";
import { MdOutlineNavigateNext as ArrowIcon } from "react-icons/md";
import theme from "styles/theme";

export type colorsType = typeof theme.colors;

type PaginationProps = {
  className?: string;
  color: keyof colorsType;
  size: number;
  index: number;
  setIndex: (value: number) => void;
};

const Pagination = ({ className, index, setIndex, size, color }: PaginationProps) => {
  function handleNextButton() {
    if (index < size) {
      setIndex(index + 1);
    }
  }

  function handleBackButton() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  if (index === 0) {
    return (
      <Styles.Wrapper className={className} $color={color}>
        <Styles.PaginationItem $disabled>
          <ArrowIcon size={55} style={{ transform: "rotate(180deg)" }} />
        </Styles.PaginationItem>
        <Styles.PaginationItem $active>1</Styles.PaginationItem>
        <Styles.PaginationItem onClick={() => setIndex(1)}>
          2
        </Styles.PaginationItem>
        <Styles.PaginationItem onClick={() => setIndex(2)}>
          3
        </Styles.PaginationItem>
        <Styles.PaginationItem>...</Styles.PaginationItem>
        <Styles.PaginationItem onClick={() => setIndex(size)}>
          {size + 1}
        </Styles.PaginationItem>
        <Styles.PaginationItem onClick={handleNextButton}>
          <ArrowIcon size={55} />
        </Styles.PaginationItem>
      </Styles.Wrapper>
    );
  }

  if (index < size / 2) {
    return (
      <Styles.Wrapper className={className} $color={color}>
        <Styles.PaginationItem onClick={handleBackButton}>
          <ArrowIcon size={55} style={{ transform: "rotate(180deg)" }} />
        </Styles.PaginationItem>
        <Styles.PaginationItem onClick={() => setIndex(index - 1)}>
          {index}
        </Styles.PaginationItem>
        <Styles.PaginationItem $active>{index + 1}</Styles.PaginationItem>
        <Styles.PaginationItem onClick={() => setIndex(index + 1)}>
          {index + 2}
        </Styles.PaginationItem>
        <Styles.PaginationItem>...</Styles.PaginationItem>
        <Styles.PaginationItem onClick={() => setIndex(size)}>
          {size + 1}
        </Styles.PaginationItem>
        <Styles.PaginationItem onClick={handleNextButton}>
          <ArrowIcon size={55} />
        </Styles.PaginationItem>
      </Styles.Wrapper>
    );
  }

  if (index === size) {
    return (
      <Styles.Wrapper className={className} $color={color}>
        <Styles.PaginationItem onClick={handleBackButton}>
          <ArrowIcon size={55} style={{ transform: "rotate(180deg)" }} />
        </Styles.PaginationItem>
        <Styles.PaginationItem onClick={() => setIndex(0)}>
          1
        </Styles.PaginationItem>
        <Styles.PaginationItem>...</Styles.PaginationItem>
        <Styles.PaginationItem onClick={() => setIndex(size - 2)}>
          {size - 1}
        </Styles.PaginationItem>
        <Styles.PaginationItem onClick={() => setIndex(size - 1)}>
          {size}
        </Styles.PaginationItem>
        <Styles.PaginationItem $active>{size + 1}</Styles.PaginationItem>
        <Styles.PaginationItem $disabled>
          <ArrowIcon size={55} />
        </Styles.PaginationItem>
      </Styles.Wrapper>
    );
  }

  console.log(index > size / 2);

  if (index >= size / 2) {
    return (
      <Styles.Wrapper className={className} $color={color}>
        <Styles.PaginationItem onClick={handleBackButton}>
          <ArrowIcon size={55} style={{ transform: "rotate(180deg)" }} />
        </Styles.PaginationItem>
        <Styles.PaginationItem onClick={() => setIndex(0)}>
          1
        </Styles.PaginationItem>
        <Styles.PaginationItem>...</Styles.PaginationItem>
        <Styles.PaginationItem onClick={() => setIndex(index - 1)}>
          {index}
        </Styles.PaginationItem>
        <Styles.PaginationItem $active>{index + 1}</Styles.PaginationItem>
        <Styles.PaginationItem onClick={() => setIndex(index + 1)}>
          {index + 2}
        </Styles.PaginationItem>
        <Styles.PaginationItem onClick={handleNextButton}>
          <ArrowIcon size={55} />
        </Styles.PaginationItem>
      </Styles.Wrapper>
    );
  }

  return null;
};

export default Pagination;
