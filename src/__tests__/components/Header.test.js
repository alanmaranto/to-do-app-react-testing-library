import { render, screen } from "@testing-library/react";
import Header from "../../components/Header/Header";

it("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// This will fail if we got two or more heading tags
/* it("should render same text passed into title prop using the role", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});
 */

it("should render same text passed into title prop using the role but specifying the title", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" });
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop using the title", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("header");
  expect(headingElement).toBeInTheDocument();
});

it("should render same text passed into title prop using testid", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

// FIND BY
it("should render same text passed into title prop using find by", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// QUERY BY
it("should render same text passed into title prop using query by", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

// Get All By Role
it("should render all the headings", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getAllByRole("heading");
  expect(headingElement.length).toBe(2);
});
