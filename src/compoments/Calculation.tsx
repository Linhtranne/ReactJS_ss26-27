export default function Calculation() {
  const a = 10;
  const b = 5;
  return (
    <div>
      <h1>Danh sách kết quả</h1>
      <p>
        {a}-{b}= {a - b}
      </p>
      <p>
        {a}+{b}= {a + b}
      </p>
      <p>
        {a}*{b}= {a * b}
      </p>
      <p>
        {a}/{b}= {a / b}
      </p>
    </div>
  );
}
