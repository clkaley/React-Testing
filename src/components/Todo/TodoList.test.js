import { screen, render } from "@testing-library/react";
import TodoList, { todoUrl, userUrl } from "./TodoList";
import { rest } from "msw";
import { setupServer } from "msw/node";

const todoResponse = rest.get(todoUrl, (req, res, ctx) => {
  return res(
    ctx.json([
      { id: 1, userId: 1, title: "delectus aut autem ", completed: true },
      { id: 2, userId: 2, title: "fugiat veniam minus", completed: true },
    ])
  );
});

const todoErrorResponse = rest.get(todoUrl, (req, res, ctx) => {
  return res(ctx.status(500));
});

const userResponse = rest.get(userUrl, (req, res, ctx) => {
  return res(
    ctx.json([
      { id: 1, name: "Bruce Lee" },
      { id: 2, name: "Tom Ellis " },
    ])
  );
});

const handlers = [todoResponse, userResponse];

const server = new setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("It should have the correct todo item delectus aut autem", async () => {
  render(<TodoList />);
  const todoItem = await screen.findByText("delectus aut autem");
  console.log(todoItem.ariaValueMax);
  expect(todoItem).toBeVisible();
});


test("It should have the correct todo item delectus aut autem", async () => {
  render(<TodoList />);
  const todoItem = await screen.findByText("delectus aut autem");
  expect(todoItem).toBeVisible();
});

test("It should have correct user Bruce Lee", async () => {
  render(<TodoList />);
  const todoItem = await screen.findByText("Bruce Lee");
  expect(todoItem).toBeVisible();
});

test("It should have the correct todo item fugiat veniam minus", async () => {
  render(<TodoList />);
  const todoItem = await screen.findByText("fugiat veniam minus");
  expect(todoItem).toBeVisible();
});

test("It should have correct user Tom Ellis", async () => {
  render(<TodoList />);
  const todoItem = await screen.findByText("Tom Ellis");
  expect(todoItem).toBeVisible();
});

test("It should error message ", async () => {
  server.use(todoErrorResponse);
  render(<TodoList />);
  const todoItem = await screen.findByText("Something went wrong");
  expect(todoItem).toBeVisible();
});