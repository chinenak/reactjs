import { useSelector, useDispatch } from "react-redux";
import { todoAction } from "./state/todo-slice";
import styled from "styled-components";

const Ul = styled.ul`
  text-align: center;
  list-style-type: none;
`;

const LI = styled.li`
  text-decoration-line: ${(props) => (props.active ? "none" : "line-through")};
`;

const TodoList = (props) => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);
  const filter = useSelector((state) => state.filter);

  const activeHandle = (id) => {
    dispatch(todoAction.updateTodoList(id));
  };

  const getVisibilityFilter = (todoList, filter) => {
    switch (filter) {
      case "SHOW_ALL":
        return todoList;
      case "SHOW_ACTIVE":
        return todoList.filter((todo) => todo.isActive);
      case "SHOW_COMPLETED":
        return todoList.filter((todo) => !todo.isActive);
      default:
        break;
    }
  };

  const todos = getVisibilityFilter(todoList, filter);
  return (
    <>
      <Ul>
        {todos.map((todo) => (
          <LI
            active={todo.isActive}
            key={todo.id}
            onClick={() => activeHandle(todo.id)}
          >
            {todo.title}
          </LI>
        ))}
      </Ul>
    </>
  );
};

export default TodoList;
