import { shuffleArray } from "./shuffle";

const letters = new Array(256).fill(null).map((_, i) => String.fromCharCode(i))

export const LetterSelector: React.FC<{
  onChange: (letter: string) => void;
  value: string;
}> = ({ onChange, value }) => {
  return (
    <>
      {shuffleArray(letters).map((letter) => (
        <label style={{ fontSize: Math.random() * 40 }} key={letter}>
          <input onChange={() => onChange(letter)} type="radio" checked={letter === value} />
          {letter}
        </label>
      ))}
    </>
  );
};
