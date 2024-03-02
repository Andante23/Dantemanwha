import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { __getData } from "../store/modules/manWhaSlice.js";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    dispatch(__getData());
  }, [dispatch]);

  const { isLoading, error, manWha } = useSelector((state) => state);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const onchangeSearch = (event) => setInputSearch(event.target.value);

  return (
    <>
      <form>
        <input type="search" value={inputSearch} onChange={onchangeSearch} />
      </form>

      <StManHwaTable>
        {manWha
          ?.filter(
            (data) =>
              data.year &&
              data.title.toLowerCase().includes(inputSearch.toLowerCase())
          )
          .map((data) => (
            <StManHwaItem
              key={data.mal_id}
              onClick={() => {
                navigate(`/detail/${data.mal_id}`);
              }}
            >
              <StManHwaInfo>
                <StManHwaImage
                  src={data.images.jpg.image_url}
                  alt="대체이미지"
                />
                <StManHwaText>{data.title}</StManHwaText>
                <StManHwaText>
                  {data.episodes} Ep | {data.year}
                </StManHwaText>
              </StManHwaInfo>
            </StManHwaItem>
          ))}
      </StManHwaTable>
    </>
  );
}

export default Home;

const StManHwaTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin: 10px;
`;

const StManHwaItem = styled.div`
  display: flex;
  align-items: center;
`;

const StManHwaInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 186px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px gray;
`;

const StManHwaImage = styled.img`
  border-radius: 4px;
`;

const StManHwaText = styled.p``;
