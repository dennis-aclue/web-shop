import './categories.styles.scss';
import React from "react";

const CategoryItem = ({ category }) => {
const { title, imageUrl } = category;
return (
  <div className="category-container">
    <div className='background-image' style={{
      backgroundImage: `url(${imageUrl})`
    }} />

    <div className="category-body-container">
      <h2 className="category-title">{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);
};
export default CategoryItem;
