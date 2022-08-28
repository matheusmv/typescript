const rgbColors: 'Red' | 'Green' | 'Blue' = 'Red';

export function chooseColor(color: 'Red' | 'Green' | 'Blue'): void {
  console.log(`chosen color: ${color}`);
}

chooseColor(rgbColors);
chooseColor('Blue');
