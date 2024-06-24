import { useNavigate } from "react-router-dom";
import { todoApi } from "../api/todos";
import { useQuery } from "@tanstack/react-query";

export default function TodoList() {
  const fetchData = async () => {
    try {
      const { data, error } = await todoApi.get("/todos");
      return data;
    } catch (error) {
      console.error("목록 받아오는 과정에서 에러 발생->", error);
    }
  };

  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchData,
  });

  const navigate = useNavigate();

  if (isPending) return <div>진행 중</div>;
  else if (isError) return <div>오류 발생</div>;

  return (
    <ul style={{ listStyle: "none", width: 250 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{todo.title}</h3>
          <button onClick={() => navigate(`/detail/${todo.id}`)}>
            내용보기
          </button>
        </li>
      ))}
    </ul>
  );
}
