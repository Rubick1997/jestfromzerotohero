import "./App.css";
import Todo from "./components/Todo";

function App() {
	const todos = [
		{
			title: "Yoshi's birthday bash",
			details:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			category: "reminders",
			completed: true,
			id: 1,
		},
		{
			title: "Complete my ninja training",
			details:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
			category: "work",
			completed: false,
			id: 2,
		},
		{
			title: "Order a pizza!",
			details:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			category: "todos",
			completed: false,
			id: 3,
		},
	];
	return (
		<div className='App'>
			{todos.map((todo) => {
				return <Todo todo={todo} />;
			})}
		</div>
	);
}

export default App;
