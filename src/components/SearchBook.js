import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import "./Book.css";

function SearchBook({id, title, image, author, publisher, pubdate, price, description}) {
    return (
        <div className="book">
            <a href={id} target="_blank">
                <img src={image} alt={title} title={title}></img>
            <div className="book__data">
                <h3 className="book__title">{
                    title.replace(/<b>/gi, "").replace(/<\/b>/gi,"")
                }
                </h3>
                <p className="book__author">
                    <span>작가</span> {author}
                </p>
                <p className="book__pubdate">
                    <span>출판일</span> {pubdate}
                </p>
                <p className="book__publisher">
                    <span>출판사</span> {publisher}
                </p>
                <p className="book__price">
                    <span>가격</span> {price}
                </p>
                <p className="book__description">
                    <span>줄거리 내용</span> {description.replace(/<b>/gi, "").replace(/<\/b>/gi,"").slice(0, 180)}...
                </p>
            </div>
            </a>
        </div>
    )
};

SearchBook.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    pubdate: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default SearchBook;