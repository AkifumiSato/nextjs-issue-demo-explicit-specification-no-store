export default async function Page() {
  const todo = await fetch("https://dummyjson.com/todos/random", {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <>
      <h1>Explicit specify `no-store` fetch</h1>
      <pre>
        <code>{JSON.stringify(todo, null, 2)}</code>
      </pre>
    </>
  );
}
