export default async function ManagePage({ params }) {
  const option = await params.option;
  return <h1>{option}</h1>;
}
