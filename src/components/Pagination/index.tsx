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

const Pagination = ({
  className,
  index,
  setIndex,
  size,
  color,
}: PaginationProps) => {
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

  if (size <= 1) {
    return null;
  }

  if (size < 6) {
    return (
      <Styles.Wrapper className={className} $color={color}>
        <Styles.PaginationItem
          $disabled={index == 0}
          onClick={index == 0 ? undefined : handleBackButton}
        >
          <ArrowIcon size={55} style={{ transform: "rotate(180deg)" }} />
        </Styles.PaginationItem>
        {new Array(size).fill(null).map((_, i) => (
          <Styles.PaginationItem
            $active={index == i}
            onClick={() => setIndex(i)}
            key={i}
          >
            {i + 1}
          </Styles.PaginationItem>
        ))}
        <Styles.PaginationItem
          $disabled={index == size - 1}
          onClick={index == size - 1 ? undefined : handleNextButton}
        >
          <ArrowIcon size={55} />
        </Styles.PaginationItem>
      </Styles.Wrapper>
    );
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
