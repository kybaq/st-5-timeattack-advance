import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
  // NOTE: TodoList.jsx: fetchData 함수 이동 및 useQuery 이용한 리팩토링
  // NOTE: TodoForm.jsx: useMutation 으로 리팩토링
  // NOTE: Detail.jsx: useQuery 이용한 리팩토링

  return (
    <>
      <h2>서버통신 투두리스트 by useState</h2>
      <TodoForm />
      <TodoList />
    </>
  );
}
