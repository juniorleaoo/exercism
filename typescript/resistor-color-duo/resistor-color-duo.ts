const BAND_COLORS: {[colorName: string]: string} = {
  'black': '0',
  'brown': '1',
  'red': '2',
  'orange': '3',
  'yellow': '4',
  'green': '5',
  'blue': '6',
  'violet': '7',
  'grey': '8',
  'white': '9'
};

export function decodedValue(colorNames: string[]): number {
  const [firstColor, secondColor] = colorNames;
  return Number(BAND_COLORS[firstColor] + BAND_COLORS[secondColor]);
}
