import { useState } from "react";

/**
 * @returns 사용자 입력값 과 사용자 입력값을 감지하는 함수 반환
 */
function useSearch() {
  const [inputSearch, setInputSearch] = useState("");
  const onchangeSearch = (event) => setInputSearch(event.target.value);

  return { inputSearch, onchangeSearch };
}

export default useSearch;
