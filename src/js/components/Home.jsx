import React, { useEffect } from "react";
import { useState } from "react";







const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("")

	const createUser = async () => {
		const response = await fetch("https://playground.4geeks.com/todo/users/nmorris11", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			}
		})
		if (!response.ok) {
			console.log("Can not tap dat")
		} else {
			console.log("tapping may commence")
			window.location.reload(false)
		}
	}
	useEffect(() => {

		fetchData()
		console.log("tasks from fetch data", tasks)
	}, [])



	const fetchData = async () => {
		const response = await fetch("https://playground.4geeks.com/todo/users/nmorris11")
		if (!response.ok) {
			await createUser()
			return
		}
		const result = await response.json()
		console.log("results from fetch data", result.todos)
		if (result && Array.isArray(result.todos)) {
			setTasks(result.todos)

		}
		else {
			console.log("Ecpected an array but got", JSON.stringify(result.todos))
			setTasks([])
		}
	}


	const AddTask = async (e) => {
		const taskList = tasks
		if (newTask.trim() !== "") {
			setTasks([...taskList, newTask])
			setNewTask("")
		}
		const response = await fetch("https://playground.4geeks.com/todo/todos/nmorris11", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ label: newTask, "is_done": false }),
		});

		if (!response.ok) {
			console.log("No tapping dis time")
			return
		}
		const data = await response.json()
		console.log("Added Great", data)

		fetchData()
	}

	const DeleteTask = async (id) => {
		console.log("trying to delete id: ", id)
		const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
		if (!response.ok) {
			console.log("delete task failed")
		} else {
			console.log("delete task success")
		}
		fetchData()
	}

	const MassDeleteTasks = async () => {
		for (let task of tasks) {
			await DeleteTask(task.id);
		}
		console.log("All tasks deleted");
	};
	
	
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

						tasks.map((task) => (
							<li className="d-flex justify-content-between" key={task.id}>
								{task.label}
								<button onClick={() => DeleteTask(task.id)} className="Delete-Button">delete</button>
							</li>
						))

					) : (
						<li>no task available</li>
					)}

					<button onClick={MassDeleteTasks} className="Mass-Delete-Button">
						Terminate
					</button>

				</ul>
			</div>
		</div>


	);
};

export default Home;