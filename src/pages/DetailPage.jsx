import { useParams } from "react-router-dom";
import useGetManWha from "../hooks/useGetManWha";
import styled from "styled-components";
import Header from "../components/common/Header";

function DetailPage() {
  const { id } = useParams();
  const { manWha } = useGetManWha();

  // 전체 만화데이터의 id값과  가져온 id값과 일치하는 배열을 담은 변수
  const filterManWhaData = manWha.filter((data) => data.mal_id === Number(id));
  console.log(filterManWhaData);
  return (
    <>
      <Header />

      {filterManWhaData.map((data) => (
        <>
          <StDetailCard key={data.id} image_url={data.images.jpg.image_url}>
            <StDetailCardLeft>
              <StDetailCardImage src={data.images.jpg.image_url} alt="" />
              <StDetailCardBodyContainer>
                <StDetailCardYear>
                  {data.year} | 평점:{data.score}
                </StDetailCardYear>
                <StDetailCardGenresContainer>
                  {data.genres.map((data) => (
                    <StDetailCardGenres>{data.name}</StDetailCardGenres>
                  ))}
                </StDetailCardGenresContainer>
              </StDetailCardBodyContainer>
            </StDetailCardLeft>

            <StDetailCardInfo>
              <StDetailCardTitle>{data.title}</StDetailCardTitle>
              <StDetailCardSynopsis>{data.synopsis}</StDetailCardSynopsis>
            </StDetailCardInfo>
          </StDetailCard>
        </>
      ))}
    </>
  );
}

export default DetailPage;

const StDetailCardLeft = styled.div`
  margin: 0px;
  padding: 0px;
`;

const StDetailCard = styled.figure`
  display: flex;
  align-items: center;

  background-image: linear-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.6) 40%,
      rgba(0, 0, 0, 0.8) 75%,
      rgba(0, 0, 0, 0.9) 85%
    ),
    url(${(props) => props.image_url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 50%;
  height: 800px;
  border-radius: 4px;
`;

const StDetailCardInfo = styled.figcaption`
  padding-left: 10px;
`;

const StDetailCardTitle = styled.h1`
  color: #ffffff;
`;

const StDetailCardSynopsis = styled.p`
  color: #ffffff;
  font-size: 14px;
  margin: 20px;
`;

const StDetailCardImage = styled.img`
  border-radius: 5px;
  margin-left: 100px;
`;

const StDetailCardGenres = styled.p`
  padding: 9px;
  font-size: 12px;
`;

const StDetailCardBodyContainer = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  font-weight: bolder;
  margin-bottom: 10px;
`;

const StDetailCardYear = styled.p`
  padding-left: -10px;
`;

const StDetailCardGenresContainer = styled.div`
  display: flex;
  padding-bottom: 200px;
`;
