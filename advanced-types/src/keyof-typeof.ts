const colorCode = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  yellow: '#ffff00',
  aqua: '#00ffff',
  fuchsia: '#ff00ff',
  orange: '#ff5500',
};

type Color = typeof colorCode;
type ColorKey = keyof Color;

function getColorCode(color: ColorKey): string {
  return colorCode[color];
}

console.log(getColorCode('aqua'));
