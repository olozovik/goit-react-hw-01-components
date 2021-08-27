const colors = ['#50C4F3', '#A43CF3', '#E64C66', '#20B8C5'];
let index = -1;

export function getColor() {
  if (index === colors.length) {
    index = 0;
  }
  return colors[index++];
}
