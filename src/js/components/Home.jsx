import React from "react";
import { useState } from "react";






//create your first component
const Home = () => { 
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("")

	function InputChange (e) {

	}

	function AddTask () {

	}

	function DeleteTask (index) {

	}




	return (
		<div className="Container">
			<h1 className="Title">Gotta Do It When It Gotta Get Done</h1>
			
			<div className="ToDo-Bar">
				<input type="Text" class="Entered-list" placeholder="Enter Task Then Tap That..." value ={newTask} onChange={InputChange}></input>
				<button class="Add-List">Tap Dat</button>
			</div>

			<div className="Box-List">
				<div className="Delete-Button"></div>
			</div>






		</div>
	);
};

export default Home;