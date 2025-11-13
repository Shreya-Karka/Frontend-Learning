function SimpleCalculator() {
  const a = 3;
  const b = 4;
  const add = a + b;
  const sub = a - b;
  const mul = a * b;
  const div = a / b;
  const rem = a % b;

  return (
    <div className="calculator">
      <p>Number 1: {a}</p>
      <p>Number 2: {b}</p>
      <p>Sum: {add}</p>
      <p>Difference: {sub}</p>
      <p>Multiplication: {mul}</p>
      <p>Division: {div}</p>
      <p>Remainder: {rem}</p>
    </div>
  );
}
export default SimpleCalculator;
