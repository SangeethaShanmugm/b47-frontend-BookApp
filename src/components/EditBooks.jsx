import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../global";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

function EditBooks({ bookData, setBookData }) {
  const { bookid } = useParams();
  const [book, setBook] = useState();
  //   console.log("BOOK", book);

  useEffect(() => {
    axios.get(`${API}/books/${bookid}`).then((res) => {
      console.log(res.data);
      setBook(res.data);
    });
  }, []);

  if (book) {
    return <EditBookForm book={book} />;
  } else {
    return "Loading...";
  }
}

function EditBookForm({ book }) {
  const [name, setName] = useState(book.name);
  const [poster, setPoster] = useState(book.poster);
  const [rating, setRating] = useState(book.rating);
  const [summary, setSummary] = useState(book.summary);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const updatedBook = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };
    console.log(updatedBook);

    fetch(`${API}/books/${book.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedBook),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => navigate("/"));
  };

  return (
    <>
      <h1>EditBooks</h1>
      <Button
        style={{ marginLeft: "75%" }}
        color="info"
        onClick={() => navigate(-1)}
      >
        BACK
      </Button>
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              id="name"
              name="name"
              placeholder="Enter Book name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="poster" sm={2}>
            Poster
          </Label>
          <Col sm={10}>
            <Input
              id="poster"
              name="poster"
              placeholder="Enter poster"
              type="text"
              onChange={(e) => setPoster(e.target.value)}
              value={poster}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="rating" sm={2}>
            Rating
          </Label>
          <Col sm={10}>
            <Input
              id="rating"
              name="rating"
              placeholder="Enter rating"
              type="number"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="summary" sm={2}>
            Summary
          </Label>
          <Col sm={10}>
            <Input
              id="summary"
              name="summary"
              placeholder="Enter summary"
              type="text"
              onChange={(e) => setSummary(e.target.value)}
              value={summary}
            />
          </Col>
        </FormGroup>

        <Button color="success" onClick={handleSubmit}>
          Update
        </Button>
      </Form>
    </>
  );
}

export default EditBooks;
