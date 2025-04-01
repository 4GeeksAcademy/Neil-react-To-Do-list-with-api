import React, { useEffect } from "react";
import { useState } from "react";






//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("")
	useEffect(() => {
		const fetchData = async () => {
			const responce = await fetch("https://playground.4geeks.com/todo/users/nmorris11")
			if (!responce.ok) {
				alert("error fetching data")
			}
			const result = await responce.json()
			setTasks(result.todos.map(task => task.label))
		}
		fetchData()

	}, [])


	// function AddTask(e) {
	// 	const taskList = tasks


	// 	if (newTask.trim() !== "") {
	// 		setTasks([...taskList, newTask])
	// 		setNewTask("")
	// 	}

	// }

	async function AddTask(e) {
			const response = await fetch("https://playground.4geeks.com/todo/todos/nmorris11", {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify({ label: newTask }), 
			});
	

	function DeleteTask(index) {

		setTasks(tasks.filter((task, i) => index !== i))

	}




	return (
		<div className="Container">
			<h1 className="Title">Gotta Do It When It Gotta Get Done</h1>

			<div className="ToDo-Bar">
				<input type="Text" className="Entered-list" placeholder="Enter Task Then Tap Dat..." value={newTask} onChange={e => setNewTask(e.target.value)}></input>
				<button onClick={() => AddTask()} className="Add-List">Tap Dat</button>
			</div>

			<div className="Box-List">

				<ul>
					{tasks.length > 0 ? (

						tasks.map((task, index) => (
							<li className="d-flex justify-content-between" key={index}>
								{task}
								<button onClick={() => DeleteTask(index)} className="Delete-Button">XXXX</button>
							</li>
						))

					) : (
						<li>no task available</li>
					)}

				</ul>






			</div>






		</div>
	);
};

export default Home;