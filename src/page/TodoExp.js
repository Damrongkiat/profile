import React, { useEffect, useState } from "react";
import Todo from "../Todo";
import { db } from "../firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  Timestamp,
  orderBy,
} from "firebase/firestore";
import { async } from "@firebase/util";
import Card from "react-bootstrap/Card";
import {
  Container,
  Tab,
  Tabs,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";

function TodoExp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //console.log(input);
  //create
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      datetimecreate: Timestamp.now(),
      datetime: Timestamp.now(),
      text: input,
      complete: false,
      status: true,
    });
    setInput("");
  };
  // read

  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("datetime", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
  });
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      complete: !todo.complete,
      datetime: Timestamp.now(),
    });
  };

  const deleteTodo = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      status: false,
    });
  };
  let todosum = 0;
  for (const todo of todos) {
    if (todo.status) todosum += 1;
  }

  return (
    <div className="">
      <Container>
        <h1>Todo</h1>
        <Form onSubmit={createTodo}>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="add todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              type="submit"
              variant="outline-secondary"
              id="button-addon2"
            >
              Button
            </Button>
          </InputGroup>
        </Form>
        <Card>
          <Card.Body>
            <Tabs fill>
              <Tab eventKey="uncomplete" title="Uncomplete">
                {todos.map((todo, index) => (
                  <Todo
                    key={index}
                    todo={todo}
                    CompleteTF={true}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                  />
                ))}
              </Tab>
              <Tab eventKey="complete" title="Complete">
                {" "}
                {todos.map((todo, index) => (
                  <Todo
                    key={index}
                    todo={todo}
                    CompleteTF={false}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                  />
                ))}
              </Tab>
            </Tabs>
          </Card.Body>

          <Card.Footer>
            <div>you have {todosum} todos</div>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}

export default TodoExp;
