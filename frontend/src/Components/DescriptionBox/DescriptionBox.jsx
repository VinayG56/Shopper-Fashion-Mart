import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  const reviews = [
    {
      id: 1,
      user: 'Rahul Teja',
      rating: 4,
      comment: 'Great product! Really satisfied with the quality.',
    },
    {
      id: 2,
      user: 'Sanjay',
      rating: 5,
      comment: 'Exceeded my expectations! Highly recommend.',
    },
    {
      id: 3,
      user: 'Pramod Raj',
      rating: 3,
      comment: 'Good value for money, but could be better.',
    },
    {
      id: 4,
      user: 'Pramod Raj',
      rating: 5,
      comment: 'Good value for money.',
    },
  ];

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box fade">Reviews ({reviews.length})</div>
      </div>
      <div className="descriptionbox-reviews">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <div className="review-user">
              <strong>{review.user}</strong>
              <span className="review-rating">
                {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
              </span>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionBox;
