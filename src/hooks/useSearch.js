import { useState } from "react";

function useSearch() {
  const [inputSearch, setInputSearch] = useState("");
  const onchangeSearch = (event) => setInputSearch(event.target.value);

  return { inputSearch, onchangeSearch };
}

export default useSearch;
