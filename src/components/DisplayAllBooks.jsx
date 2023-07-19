import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookCard from "./BookCard";
import { API } from "../global";
import { Button, Input, Label } from "reactstrap";

export function DisplayAllBooks() {
  const [bookData, setBookData] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState(bookData);

  const getBooks = () => {
    axios.get(`${API}/books`).then((res) => {
      if (res.status === 401) {
        console.log("Data Not Found");
      }
      console.log(res.data);
      setBookData(res.data);
    });
  };

  useEffect(() => {
    getBooks();
  }, []);

  sessionStorage.setItem("BookData", JSON.stringify(bookData));
  var b = JSON.parse(sessionStorage.getItem("BookData", bookData));
  // console.log("SessionStorage Data", b[0]);
  for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
  }
  console.log(bookData);

  const handleDelete = (id) => {
    axios.delete(`${API}/books/` + id).then((res) => {
      if (res.status === 200) {
        getBooks();
      }
    });
  };
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilteredSearch(bookData);
      return;
    }
    const filteredValue = bookData.filter(
      (item) =>
        item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
    );
    setFilteredSearch(filteredValue);
  };
  return (
    <div>
      <div>
        <h1>DisplayAllBooks</h1>
        <Button onClick={() => navigate("/books/add")}>Add Book</Button>
        <br />
        <br></br>
        <Label>Search</Label>
        <Input onChange={handleSearch} />
      </div>
      <br />
      <br />
      {filteredSearch.map((item) => {
        return (
          <BookCard key={item.id} value={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}
