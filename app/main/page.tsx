import Link from "next/link";

export default function mainPage(){
    return(
           <>
    <h1>Projects</h1>
<Link href="/" className="w-14 border-2 border-rose-950">Home</Link>
<div className="card w-96 bg-blue-900 card-md border-b-5 border-rose-950">
  <div className="card-body">
    <h2 className="card-title">BBRT</h2>
    <p>Web app for planning baseball roadtrips</p>
    <progress className="progress progress-success w-56" value="70" max="100"></progress>
  </div>
</div>
    </>
    )
 

}