"use client"
import Link from "next/link"
import Card from "../components/card"

export default function mainPage() {

    type Projects = {
        name: string;
        id: number
    };
//const projects : Projects= [];
    return (
        <>
            <h1>Projects</h1>
            <Link href="/" className="w-14 border-2 border-rose-950">Home</Link>
            <ul>
                {/* {projects.map((project : Projects, i) => (

))} */}
                <li><Card /></li>
            </ul>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('newProj').showModal()}>open modal</button>
<dialog id="newProj" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Create (another) New Project</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        <div>
    <label htmlFor="name">Enter your projects name: </label>
    <input type="text" name="name" id="name" className="bg-white"/>
  </div>
    <div >
    <label htmlFor="description">Project Description: </label>
    <input type="text" name="description" id="name" className="bg-white" />
  </div>
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </>
    )


}

//user types project name/description into modal form
  //create modal form
//add modal for submiting new projs
//user also sets status of proj maybe using daisy steps or range or progress components
//user submits
//project is stored
//new proj is added as an object to the projects array
//proj.name , proj.description and proj.status are displayed in browser in card component
//proj.status can be changed without having an edit state