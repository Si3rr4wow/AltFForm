import { ChangeEventHandler, useState } from "react";
import "./App.css";
import { LengthSelector } from "./LengthSelector";
import { LetterSelector } from "./LetterSelector";
import { NameDisplay } from "./NameDisplay";

function App() {
  const [state, setState] = useState<{
    length: number;
    lengthSelected: boolean;
    characters: string[];
  }>({
    length: 1000,
    lengthSelected: false,
    characters: [],
  });

  const handleLengthChange: ChangeEventHandler<HTMLSelectElement> = ({
    target: { value },
  }) => {
    setState((s) => ({
      ...s,
      length: Number(value),
      lengthSelected: true,
    }));
  };

  return (
    <div className="App">
      <LengthSelector value={state.length} onChange={handleLengthChange} />
      {state.lengthSelected &&
        new Array(state.length).fill(null).map((_, i) => {
          const handleLetterSelect: (letter: string) => void = (letter) => {
            setState((s) => {
              const nextCharacters = s.characters;
              nextCharacters[i] = letter;
              return {
                ...s,
                characters: nextCharacters,
              };
            });
          };
          return (
            <div style={{ borderBottom: '1px solid violet' }}>
              <LetterSelector
                key={i}
                value={state.characters[i]}
                onChange={handleLetterSelect}
              />
            </div>
          );
        })}
        <NameDisplay characters={state.characters}/>
    </div>
  );
}

export default App;
