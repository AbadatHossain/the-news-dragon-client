import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h4>All Category</h4>

      {categories.map((category) => (
        <p className="bg-light" key={category.id}>
          <Link to= {`/category/${category.id}`} className="text-decoration-none text-danger px-4">{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
