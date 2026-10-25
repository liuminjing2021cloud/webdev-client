export default async function AddPage({
  params,
}: PageProps<"/labs/lab3/add/[a]/[b]">) {
  const { a, b } = await params;
  const firstNumber = Number(a);
  const secondNumber = Number(b);

  return (
    <main>
      <h2>Path Parameters</h2>
      <p>{firstNumber} + {secondNumber} = {firstNumber + secondNumber}</p>
    </main>
  );
}
