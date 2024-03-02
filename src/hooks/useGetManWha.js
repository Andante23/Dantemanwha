import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getData } from "../store/modules/manWhaSlice";

function useGetManWha() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getData());
  }, [dispatch]);

  const { isLoading, error, manWha } = useSelector((state) => state);

  return { isLoading, error, manWha };
}

export default useGetManWha;
