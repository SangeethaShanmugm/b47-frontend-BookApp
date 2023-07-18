import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookCard from "./BookCard";
import { API } from "../global";
import { Button } from "reactstrap";

export function DisplayAllBooks() {
  const [bookData, setBookData] = useState([]);

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

  console.log(bookData);

  const handleDelete = (id) => {
    axios.delete(`${API}/books/` + id).then((res) => {
      if (res.status === 200) {
        getBooks();
      }
    });
  };
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>DisplayAllBooks</h1>
        <Button onClick={() => navigate("/books/add")}>Add Book</Button>
      </div>
      <br />
      <br />
      {bookData.map((item) => {
        return (
          <BookCard key={item.id} value={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}
