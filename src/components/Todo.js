import React from "react";

function Todo({ todo }) {
	const { id, title, completed, description } = todo;

	const h1 = <h1>{title}</h1>;
	const text = completed ? <strike>{h1}</strike> : h1;

	return (
		<div data-testid={`todo-${id}`}>
			{text}-{description}
		</div>
	);
}

export default Todo;
