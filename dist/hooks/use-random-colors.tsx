import React from "react";

function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function useRandomColors(count: number = 5) {
  if (typeof count !== 'number') {
    throw new Error('Count must be a number');
  }

  const [colors, setColors] = React.useState<string[]>([]);

  React.useEffect(() => {
    const randomColors = [];
    for (let i = 0; i < count; i++) {
      randomColors.push(generateColor());
    }
    setColors(randomColors);
  }, [count]);

  return colors;

}