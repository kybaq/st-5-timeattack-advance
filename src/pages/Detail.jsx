import { useNavigate, useParams } from "react-router-dom";
import { todoApi } from "../api/todos";
import { useQuery } from "@tanstack/react-query";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // NOTE: useQuery 로 리팩터링 완료

  const fetchDetail = async () => {
    try {
      const { data, error } = await todoApi(`/todos/${id}`);
      return data;
    } catch (error) {
      console.error("에러가 발생했습니다 => ", error);
    }
  };

  const { data, isPending, isError } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchDetail,
  });

  if (isPending) return <div style={{ fontSize: 36 }}>로딩중...</div>;
  if (isError) return <div style={{ fontSize: 24 }}>에러가 발생했습니다</div>;

  return (
    <div>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <p>제목: {data.title}</p>
      <p>내용: {data.contents}</p>
      <p>작성일자: {new Date(data.createdAt).toDateString()}</p>
    </div>
  );
}
