import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main>
      <h1>Squirrel!</h1>
      <h3>ADHD Project Progess Tracker</h3>
      <div className= 'justify-self-center pt-75'>
     <Link href="/main" className='bg-blue-950 border-2 border-rose-950'>Main Page</Link>
      </div>
   
      </main>
    </div>
  );
}
