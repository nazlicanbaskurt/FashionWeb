import "./CategoryItem.css";
import PropTypes from "prop-types";
const CategoryItem = ({category}) => {
  return (
    <div>
      <li className="category-item">
        <a href="#">
          <img src={category.img} alt="" className="category-image" />
          <span className="category-title">{category.name}</span>
        </a>
      </li>
    </div>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  category: PropTypes.object,
 
};