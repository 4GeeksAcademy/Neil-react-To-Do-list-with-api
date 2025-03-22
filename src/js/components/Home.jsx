import React from "react";
import { useState } from "react";






//create your first component
const Home = () => { 
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("")

	
	function AddTask (e) { 
		const taskList = tasks
	

		if(newTask.trim() !== "") {
			setTasks([...taskList, newTask])
			setNewTask("")
		}

	}

	function DeleteTask () {

	}




	return (
		<div className="Container">
			<h1 className="Title">Gotta Do It When It Gotta Get Done</h1>
			
			<div className="ToDo-Bar">
				<input type="Text" className="Entered-list" placeholder="Enter Task Then Tap Dat..." value ={newTask} onChange={e => setNewTask(e.target.value)}></input>
				<button onClick={() => AddTask()} className="Add-List">Tap Dat</button>
			</div>

			<div className="Box-List">
				<ul>
					{tasks.map((task,index) => (
					<li className="d-flex justify-content-between" key={index}>
						{task}
						<div className="Delete-Button">XXXX</div>
					</li>	
					))}
				</ul>
				
				
				
				
				
				
			</div>






		</div>
	);
};

export default Home;