import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {setCounter((counter) => counter + 1)};
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {console.log("Run only once.")}, []);
  useEffect(() => {
    if (keyword.length > 5) console.log("Run when 'keyword' changes"); 
  }, [keyword]);
  useEffect(() => {
    console.log("Run when 'counter' changes");
  }, [counter]);
  useEffect(() => {console.log("Run when 'keyword' or 'counter' changes")}, [keyword, counter]);
  
  return (
    <div>
      <input value={keyword} type="text" placeholder="검색어를 입력하세요." onChange={onChange}></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;