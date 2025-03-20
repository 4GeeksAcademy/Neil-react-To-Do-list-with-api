import React from "react";




//create your first component
const Home = () => {






	return (
		<div className="Container">
			<h1 className="Title">Gotta Do It When It Gotta Get Done</h1>
			
			<div className="ToDo-Bar">
				<input type="Text" class="Entered-list"></input>
				<button class="Add-List">Tap Dat</button>
			</div>

			<div className="Box-List">
				<div className="Delete-Button"></div>
			</div>






		</div>
	);
};

export default Home;