import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DisplayAllBooks } from "./components/DisplayAllBooks";
import AddBooks from "./components/AddBooks";
import { useState } from "react";
import EditBooks from "./components/EditBooks";
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
          <Route
<<<<<<< HEAD
            path="/books/edit/:id"
=======
            path="/books/edit/:bookid"
>>>>>>> 91c026098cb57a0371d03a41eeac034edb5c8275
            element={
              <EditBooks bookData={bookData} setBookData={setBookData} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
