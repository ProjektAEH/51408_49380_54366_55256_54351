import React from 'react';
import '../CSS/Review.css';
import { images } from '../images/images';

const Review = () => {
  const reviews = [
    {
      name: 'Jan Kowalski',
      img: images.johnDoeImg,
      text: `Miałem wymieniany ekran w moim telefonie i obsługa była doskonała.
      
      Technik był kompetentny i wydajny. Szczerze polecam tę usługę!`,

      rating: 5,
    },
    {
      name: 'Paulina Nowak',
      img: images.johnDoe2Img,
      text:
        'Potrzebowałam wymienić baterię w telefonie i byłem bardzo zadowolony z usługi. Technik był przyjazny, a cena była rozsądna. Zdecydowanie skorzystałabym z tej usługi ponownie.',
      rating: 3,
    },
    {
      name: 'Kamila Wiśniewska',
      img: images.johnDoe3Img,
      text:
        'Miałam problemy z oprogramowaniem mojego telefonu, a ta usługa była w stanie szybko je naprawić. Technik był profesjonalny i wyjaśnił wszystko jasno. Jestem bardzo zadowolony!',
      rating: 4,
    },
  ];

  return (
    <div className="review-container">
       <h1 className="title">Co nasi klienci o nas mówią</h1>
      {reviews.map((review, index) => (
        <div className="review" key={index}>
          <div className="review-img">
            <img src={review.img} alt={review.name} />
          </div>
          <div className="review-content">
            <h3>{review.name}</h3>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < review.rating ? 'active' : ''}`}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <p>{review.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
