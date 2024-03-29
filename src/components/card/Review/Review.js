import React from 'react'
import "./Review.css"
import Avatar from "../../../assets/user.png"
function Review(props) {
  const {
    username,
    star,
    date,
    chapterRead,
    content,
    like,
    reply,
    report
  } = props;

  return (
    <div className="review">
      <div className="review-header">
        <img src={Avatar} alt="Avatar" />
        <div className="review-header-info">
          <h4>{username} </h4>
          <div className="star-date">
            <div className="review-header-stars">
              {star}
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="review-header-date">
              {date} ngày trước
            </div>
            <div className="review-body-chapter">
            Chapter {chapterRead}
          </div>
          </div>
        </div>
      </div>
      <div className="review-body">
        <div className="review-body-info">

          <div className="review-body-content">
            {content} 
          </div>
        </div>
        <div className="review-body-actions">
          <div className="review-body-likes">
            {like} <i className="fa-solid fa-heart"></i> 120
          </div>
          <div className="review-body-reply">
            {reply}  <i className="fa-sharp fa-solid fa-reply"></i> Trả lời
          </div>
          <div className="review-body-report">
            {report} <i className="fa-solid fa-flag"></i> Báo xấu
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review