import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
function BookCard({ value, handleDelete }) {
  return (
    <div className="main-card">
      <Card
        style={{
          width: "25rem",
          height: "44rem",
        }}
      >
        <CardBody>
          <div className="card-style">
            <CardTitle tag="h5">{value.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              rating ⭐ {value.rating}
            </CardSubtitle>
          </div>
        </CardBody>
        <img
          style={{ objectFit: "contain" }}
          alt={value.name}
          src={value.poster}
          width="100%"
          height="400px"
        />
        <CardBody>
          <CardText>{value.summary}</CardText>
          <div className="button-style">
            <Button color="danger">
              <AiFillDelete onClick={() => handleDelete(value.id)} />
            </Button>
            <Button color="success">
              <AiFillEdit />
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default BookCard;
