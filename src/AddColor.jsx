import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {

  const [color, setColor] = useState("");
  const styles = { backgroundColor: color };

  const [colors, setColors] = useState(["pink", "orange", "crimson"]);

  return (
    <div>

      <input

        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder='Enter a color' /> {color}

      <br></br>
      <br></br>

      <button onClick={() => setColors([...colors, color])}> Add color</button>

      {colors.map((clr, index) => (

        <ColorBox key={index} clr={clr} />
      ))}
    </div>
  );
}
