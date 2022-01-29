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

export function decodedResistorValue(colorNames: string[]): string {
  const [firstColor, secondColor, thirdColor] = colorNames;

  const mainValue = BAND_COLORS[firstColor] + BAND_COLORS[secondColor];
  const zeros = Array(+BAND_COLORS[thirdColor]).fill('0').join('');

  const valueInOhms = Number(mainValue + zeros);

  return valueInOhms > 1000 ? `${valueInOhms/1000} kiloohms` : `${valueInOhms} ohms`;
}
