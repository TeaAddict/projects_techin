// Hexadecimal color generator
export const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

export const generateRandColorArr = (num = 1) => {
  let colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(hexaColor());
  }
  return colors;
};
