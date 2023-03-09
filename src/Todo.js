import React from "react";
import { Card, Form, Button } from "react-bootstrap";
const Todo = ({ todo, toggleComplete, deleteTodo, CompleteTF }) => {
  const completeline = todo.complete ? <s>{todo.text}</s> : todo.text;
  if (todo.status)
    if (CompleteTF == !todo.complete)
      return (
        <div>
          <br />
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Form>
                  <div>
                    <Form.Check
                      onChange={() => toggleComplete(todo)}
                      type="checkbox"
                      id={`default-checkbox`}
                      checked={todo.complete ? "checked" : ""}
                      label={completeline}
                    />
                  </div>
                </Form>
                <Button variant="danger" onClick={() => deleteTodo(todo)}>
                  delete
                </Button>
              </div>{" "}
            </Card.Body>
          </Card>
        </div>
      );
};
export default Todo;
