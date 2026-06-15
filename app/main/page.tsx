import Link from "next/link"
import Card from "../components/card"

export default function mainPage(){
  
    return(
           <>
    <h1>Projects</h1>
<Link href="/" className="w-14 border-2 border-rose-950">Home</Link>
<Card />
    </>
    )
 

}