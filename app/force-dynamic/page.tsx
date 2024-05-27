export default async function Page() {
  const todo = await fetch("https://dummyjson.com/todos/random").then((res) =>
    res.json(),
  );

  return (
    <>
      <h1>Default fetch</h1>
      <pre>
        <code>{JSON.stringify(todo, null, 2)}</code>
      </pre>
    </>
  );
}

export const dynamic = "force-dynamic";
