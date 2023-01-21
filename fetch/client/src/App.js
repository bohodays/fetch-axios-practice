import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todoList, setTodoList] = useState(null);

  const fetchData = async () => {
    // fetch
    // fetch("http://localhost:4000/api/todo")
    //   .then((response) => response.json())
    //   .then((data) => setTodoList(data));

    // axios (async, await 미사용)
    // axios
    //   .get("http://localhost:4000/api/todo")
    //   .then((response) => setTodoList(response.data));

    // // axios (async, await 사용)
    const response = await axios.get("http://localhost:4000/api/todo");
    setTodoList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    // axios는 fetch에서 직렬화해줬던 부분을 자동으로 처리해준다.
    await axios.post("http://localhost:4000/api/todo", {
      text,
      done,
    });
    fetchData();
    // fetch("http://localhost:4000/api/todo", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     text,
    //     done,
    //   }),
    // }).then(() => fetchData());
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={handleOnSubmit}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <button type="submit">추가</button>
      </form>
      {todoList?.map((todo) => (
        <div key={todo.id} style={{ display: "flex" }}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? "Y" : "N"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
