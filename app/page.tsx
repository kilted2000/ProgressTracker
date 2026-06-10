

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <h1>What will I build?</h1>
      <h3>Project Must Have</h3>
      <ol>
        <li>Something I want to see exist</li>
        <li>Solves a Real Problem</li>
        <li>Im excited about it</li>
        <li>FE and BE</li>
      </ol>
      </main>
    </div>
  );
}
