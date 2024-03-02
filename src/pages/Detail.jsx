import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __getData } from "../store/modules/manWhaSlice";

function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getData());
  }, [dispatch]);

  const { manWha } = useSelector((state) => state);
  console.log(manWha);

  const filterManWhaData = manWha.filter((data) => data.mal_id === Number(id));

  console.log(filterManWhaData);
  return (
    <>
      {filterManWhaData?.map((data) => (
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
