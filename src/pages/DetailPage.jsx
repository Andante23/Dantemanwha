import { useParams } from "react-router-dom";
import useGetManWha from "../hooks/useGetManWha";

function DetailPage() {
  const { id } = useParams();
  const { manWha } = useGetManWha();

  // 전체 만화데이터의 id값과  가져온 id값과 일치하는 배열을 담은 변수
  const filterManWhaData = manWha.filter((data) => data.mal_id === Number(id));

  return (
    <>
      {filterManWhaData.map((data) => (
        <div key={data.id}>
          <img src={data.images.jpg.image_url} alt="대체이미지" />
          <div>
            <h1>{data.title}</h1>
            {data.themes.map((data) => (
              <span>{data.name} </span>
            ))}
            <p>{data.synopsis}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default DetailPage;
