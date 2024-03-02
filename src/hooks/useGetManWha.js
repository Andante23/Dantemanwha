import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getData } from "../store/modules/manWhaSlice";

/**
 * @returns 서버로부터 받은 만화 데이터 , 로딩 , 에러일때 값
 */
function useGetManWha() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getData());
  }, [dispatch]);

  const { isLoading, error, manWha } = useSelector((state) => state);

  return { isLoading, error, manWha };
}

export default useGetManWha;
