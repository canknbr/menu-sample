import React from 'react';

const Categories = ({ categories, filteredCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            key={index}
            type="button"
            onClick={() => filteredCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
