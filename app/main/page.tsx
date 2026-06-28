"use client"
import Link from "next/link"
//import Card from "../components/card"

export default function mainPage() {

    interface Projects {
        name: string;
        description?: string;
    };
    const projects: Projects[] = [{
        name: "BBRT",
        description: "Road trip planner"
    }];
    return (
        <>
            <h1>Projects</h1>
            <Link href="/" className="w-14 border-2 border-rose-950">Home</Link>
            <ul>
                {projects.map((project: Projects) => (
                    <li key={project.name}><div className="card w-96 bg-blue-900 card-md">
                        <div className="card-body">
                            <h2 className="card-title">{project.name}</h2>
                            <p>{project.description}</p>
                            <progress className="progress progress-success w-56" value="70" max="100"></progress>
                        </div>
                    </div>

                        <div className="divider"></div></li>

                ))}

            </ul>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('newProj').showModal()}>Create New Project</button>
            <dialog id="newProj" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Create (another) New Project</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <div>
                                <label htmlFor="name">Enter your projects name: </label>
                                <input type="text" name="name" id="name" className="bg-white text-black" />
                            </div>
                            <div >
                                <label htmlFor="description">Project Description: </label>
                                <input type="text" name="description" id="name" className="bg-white text-black" />
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

//user also sets status of proj maybe using daisy steps or range or progress components
//user submits
//modal values connected to projects array
//project is stored
//new proj is added as an object to the projects array
//proj.name , proj.description and proj.status are displayed in browser in card component
//proj.status can be changed without having an edit state

//QUESTIONS
//should I have cards in the list or just the list?
//thinking cards bc I will want to click on them to go to dash
//where should the mapping function go?
//