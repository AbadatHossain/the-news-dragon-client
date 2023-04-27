import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaRegBookmark,
  FaRegEye,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    title,
    _id,
    details,
    image_url,
    author,
    img,
    published_date,
    rating,
    total_view,
  } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small>{moment(author.published_date).format("YYYY/MM/DD")}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark className=""></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Img variant="bottom" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}....
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaRegEye></FaRegEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
