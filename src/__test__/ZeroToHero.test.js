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

test("mock implementation ", () => {
	const mock = jest.fn().mockImplementation(() => "Kazakhstan");
	expect(mock("Location")).toBe("Kazakhstan");
	expect(mock).toHaveBeenLastCalledWith("Location");
});
