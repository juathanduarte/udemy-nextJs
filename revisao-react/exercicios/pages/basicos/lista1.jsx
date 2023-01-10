export default function lista1() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      {numbers.map((number) => {
        return <span>{number}, </span>;
      })}
    </div>
  );
}
