import styled from "styled-components";
import { todoAction } from "./state/todo-slice";
import { useDispatch } from "react-redux";

const Div = styled.div`
  text-align: center;
`;

const ShowButton = () => {
  const dispatch = useDispatch();

  const allClick = () => {
    dispatch(todoAction.allDisplay());
  };

  const activeClick = () => {
    dispatch(todoAction.activeDisplay());
  };

  const completedClick = () => {
    dispatch(todoAction.completedDisplay());
  };
  return (
    <Div>
      Show: <button onClick={allClick}>All</button>
      <button onClick={activeClick}>Active</button>
      <button onClick={completedClick}>Completed</button>
    </Div>
  );
};

export default ShowButton;
