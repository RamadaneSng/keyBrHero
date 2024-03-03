interface LetterProps {
  letter: { index: number; letter: string };
  typed: boolean;
  letterIndex: number;
}
const Letter = ({
  letter,
  typed,
  letterIndex,
}: LetterProps) => {
  console.log(typed);

  return (
    <span
      style={{
        color: typed ? "#fffffff" : "#000000",
      }}
    >
      {letter.letter}
    </span>
  );
};

export default Letter;
