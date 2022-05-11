export const NameDisplay: React.FC<{ characters: string[] }> = ({
  characters,
}) => {
  return (
    <h3
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        background: "violet",
        color: "greenyellow",
        margin: 0,
        fontSize: 50
      }}
    >
      {characters.map((character) => (
        <span>{character}</span>
      ))}
    </h3>
  );
};
