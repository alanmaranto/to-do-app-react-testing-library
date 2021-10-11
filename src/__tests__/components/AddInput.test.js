import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../../components/AddInput/AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(<AddInput setTodos={mockedSetTodo} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });
  it("should be able to type in input element", () => {
    render(<AddInput setTodos={mockedSetTodo} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "Go to mall" } });
    expect(inputElement.value).toBe("Go to mall");
  });
  it("should have empty input when add button is clicked", () => {
    render(<AddInput setTodos={mockedSetTodo} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Go to mall" } });
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("");
  });
});
