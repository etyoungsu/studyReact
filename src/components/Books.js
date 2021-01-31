import React from "react";
import PropTypes from "prop-types";
import "./Books.css";

const BooksILove = [
  {
    id: 1,
    name: "월든",
    image: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/tg9/image/z5HTe5E1LvrhJdAE_iM8h5P-Utc.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "달과 6펜스",
    image: "https://image.yes24.com/momo/TopCate3035/MidCate003/128080977.jpg",
    rating: 4.5
  }
]

function Books() {
  return (
    <div className="App">
      {BooksILove.map(bk => (
        <Books
          key={bk.id}
          nam={bk.name}
          pic={bk.image}
          rate={bk.rating}
        />
      ))}
    </div>
  );
}

export default Books;