import { render, screen } from "@testing-library/react";
import ToDoFooter from "../../components/TodoFooter/TodoFooter";
import { BrowserRouter as Router } from "react-router-dom";

const MockToDoFooter = ({ numberOfIncompleteTasks }) => (
  <Router>
    <ToDoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </Router>
);

describe("ToDoFooter", () => {
  it("should render the correct amount of incomplete tasks", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render task when the number of complete tasks is one", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render task when the number of complete tasks is one with to be truthy", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeTruthy();
  });
});

// this will fail is opacity is 0
/* it("should render task when the number of complete tasks is one with to be visible", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeVisible();
}); */

/* it("should render task when the number of complete tasks is one with to p tag", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContainHTML("p");
});

it("should render task when the number of complete tasks is one with test id", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("task");
  expect(paragraphElement).toHaveTextContent("1 task left");
});

it("should render task when the number of complete tasks is one with test id and not to be falsy", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("task");
  expect(paragraphElement).not.toBeFalsy();
});

it("should render task when the number of complete tasks is one with text content of the element", () => {
  render(<MockToDoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("task");
  expect(paragraphElement.textContent).toBe("1 task left");
});
 */
