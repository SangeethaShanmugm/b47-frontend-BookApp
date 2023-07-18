import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DisplayAllBooks } from "./components/DisplayAllBooks";
import AddBooks from "./components/AddBooks";
import { useState } from "react";
function App() {
  const [bookData, setBookData] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAllBooks />}></Route>
          <Route
            path="/books/add"
            element={<AddBooks bookData={bookData} setBookData={setBookData} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
