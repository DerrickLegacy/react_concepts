import  { useState } from 'react'

export default function useRandomColor() {
    const [color, setColor] = useState("");
    const generateRandomColor = () => {
        const randomColor = Math.round(Math.random() * 16777215).toString(16);
        setColor(randomColor.padStart(6, '0'));
    };

  return [color, generateRandomColor];
}
