import { render, screen, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import Todo from "../Todo";

test("should render completed todo component", () => {
	const todo = {
		title: "Yoshi's birthday bash",
		details:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		category: "reminders",
		completed: true,
		id: 1,
	};

	render(<Todo todo={todo} />);
	const todoEl = screen.getByTestId("todo-1");
	expect(todoEl).toBeInTheDocument();
	expect(todoEl).toHaveTextContent("Yoshi's birthday bash");
    expect(todoEl).toContainHTML("<strike><h1>Yoshi's birthday bash</h1></strike>");
});

test("should render not completed todo component", () => {
	const todo = {
		title: "Complete my ninja training",
		details:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
		category: "work",
		completed: false,
		id: 2,
	};

	render(<Todo todo={todo} />);
	const todoEl = screen.getByTestId("todo-2");
	expect(todoEl).toBeInTheDocument();
	expect(todoEl).toHaveTextContent("Complete my ninja training");
    expect(todoEl).not.toContainHTML(
			"<strike><h1>Complete my ninja training</h1></strike>"
		);
});

test("matches snapshot", () => {
  const todo = {
		title: "Complete my ninja training",
		details:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
		category: "work",
		completed: false,
		id: 2,
	};
    const tree = TestRenderer.create(<Todo todo={todo} />).toJSON();
    expect(tree).toMatchSnapshot()
})