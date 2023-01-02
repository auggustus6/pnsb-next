export function textOverflowVertical(lines: number, sizeRem = 1.03) {
  return `
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    max-height: ${(lines + 1) * sizeRem}rem;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `;
}
