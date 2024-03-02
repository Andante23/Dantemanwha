import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import instance from "../axios/api";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/modules/manWhaSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 요청한 URL로부터 데이터를 받아오는 로직
  const getManHwaData = async () => {
    const { data } = await instance.get("/anime");

    dispatch(getData(data.data));
    return data;
  };

  useEffect(() => {
    getManHwaData();
  }, []);

  const manWhaData = useSelector((state) => state);

  return (
    <StManHwaTable>
      {manWhaData
        ?.filter((data) => data.year)
        .map((data) => (
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
