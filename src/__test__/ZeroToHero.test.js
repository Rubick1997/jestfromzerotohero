import pizzas from "../db.json";

test("data is correct", () => {
	expect(pizzas).toMatchSnapshot();
	expect(pizzas).toHaveLength(4);
	expect(pizzas.map((pizza) => pizza.name)).toEqual([
		"Chicago Pizza",
		"Neapolitan Pizza",
		"New York Pizza",
		"Sicilian Pizza",
	]);
});

//testing properties, by looping each particular item
for (let i = 0; i < pizzas.length; i++) {
	test(`pizza [${i}] should have properties (id,name,image,desc,price)`, () => {
		expect(pizzas[i]).toHaveProperty("id");
		expect(pizzas[i]).toHaveProperty("name");
		expect(pizzas[i]).toHaveProperty("image");
		expect(pizzas[i]).toHaveProperty("desc");
		expect(pizzas[i]).toHaveProperty("price");
	});
}
//Mocking
test("mock implementation of a basic function", () => {
	const mock = jest.fn(() => "I am a mock Function");
	expect(mock("Calling my mock function!")).toBe("I am a mock Function");
	expect(mock).toHaveBeenCalledWith("Calling my mock function!");
});

test("mock return value of a function one time", () => {
	const mock = jest.fn();
	mock.mockReturnValueOnce("Hello").mockReturnValueOnce("there !");
	mock();
	mock();
	expect(mock).toHaveBeenCalledTimes(2);

	mock("Hello", "there", "Rustam");
	expect(mock).toHaveBeenCalledWith("Hello", "there", "Rustam");
	mock("Rustam");
	expect(mock).toHaveBeenLastCalledWith("Rustam");
});

test("mock implementation", () => {
	const mock = jest.fn().mockImplementation(() => "Kazakhstan");
	expect(mock("Location")).toBe("Kazakhstan");
	expect(mock).toHaveBeenLastCalledWith("Location");
});

test("spying using original implementation", () => {
	const pizza = {
		name: (n) => `Pizza name: ${n}`,
	};
	const spy = jest.spyOn(pizza, "name");
	expect(pizza.name("Cheese")).toBe("Pizza name: Cheese");
	expect(spy).toHaveBeenCalledWith("Cheese");
});

test("spying using mock lementation", () => {
	const pizza = {
		name: (n) => `Pizza name: ${n}`,
	};
	const spy = jest.spyOn(pizza, "name");
	spy.mockImplementation((n) => `Crazy pizza!`);
	expect(pizza.name("Cheese")).toBe("Crazy pizza!");
	spy.mockRestore();
	expect(pizza.name("Cheese")).toBe("Pizza name: Cheese");
});

test("pizza returns new york last", () => {
	const pizza1 = pizzas[0];
	const pizza2 = pizzas[1];
	const pizza3 = pizzas[2];
	const pizza = jest.fn((currentPizza) => currentPizza.name);
	pizza(pizza1); //chicago pizza
	pizza(pizza2); //neopolitan pizza
	pizza(pizza3); //new york slice pizza
	expect(pizza).toHaveLastReturnedWith("New York Pizza");
});

//Data matching
test("pizza data has new york pizza and matches as an object", () => {
	const newYorkPizza = {
		id: 3,
		name: "New York Pizza",
		image: "/images/ny-pizza.jpg",
		desc: "New York-style pizza has slices that are large and wide with a thin crust that is foldable yet crispy. It is traditionally topped with tomato sauce and mozzarella cheese.",
		price: 8,
	};
	expect(pizzas[2]).toMatchObject(newYorkPizza);
});

test("expect a promise to resolve", async () => {
	const user = {
		getFullName: jest.fn(() => Promise.resolve("Rustam Kolumbayev")),
	};
	await expect(user.getFullName("Rustam Kolumbayev")).resolves.toBe(
		"Rustam Kolumbayev"
	);
});

test("expect a promise to reject", async () => {
	const user = {
		getFullName: jest.fn(() =>
			Promise.reject(new Error("Something went wrong"))
		),
	};
	await expect(user.getFullName("Rustam Kolumbayev")).rejects.toThrow(
		"Something went wrong"
	);
});
