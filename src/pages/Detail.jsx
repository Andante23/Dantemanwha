import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(typeof id);
  const manWhaData = useSelector((state) => state);
  console.log(manWhaData);
  const filterManWhaData = manWhaData.filter(
    (data) => data.mal_id === Number(id)
  );
  console.log(filterManWhaData);

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

export default Detail;
