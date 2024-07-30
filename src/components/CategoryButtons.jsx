import React from 'react';
import './CategoryButtons.css';

const categories = ['All', 'Animal', 'Art', 'Human', 'Nature'];

const CategoryButtons = ({ setSelectedCategory }) => {
  return (
    <div className="category-buttons">
      {categories.map((category, index) => (
        <button key={index} onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;