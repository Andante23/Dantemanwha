import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import useSearch from "../hooks/useSearch.js";
import useGetManWha from "../hooks/useGetManWha.js";

function HomePage() {
  const navigate = useNavigate();

  const { inputSearch, onchangeSearch } = useSearch();
  const { isLoading, error, manWha } = useGetManWha();

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>에러</div>;
  }

  // 내가 입력한 만화 제목이  이페이지에 존재하는 만화 제목과 일치한 배열을 저장
  const filTerSearchData = manWha.filter(
    (data) =>
      data.year && data.title.toLowerCase().includes(inputSearch.toLowerCase())
  );

  return (
    <>
      <form>
        <input
          type="search"
          value={inputSearch}
          onChange={onchangeSearch}
          placeholder="검색어를 입력해주세요"
        />
      </form>

      <StManHwaTable>
        {filTerSearchData.map((data) => (
          <StManHwaItem
            key={data.mal_id}
            onClick={() => {
              navigate(`/detail/${data.mal_id}`);
            }}
          >
            <StManHwaInfo>
              <StManHwaImage src={data.images.jpg.image_url} alt="대체이미지" />
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

export default HomePage;

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
