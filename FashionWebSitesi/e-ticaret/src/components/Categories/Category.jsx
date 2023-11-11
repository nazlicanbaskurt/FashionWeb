import CategoryItem from "./CategoryItem";
import "./Category.css";
import categories from "../../Category.json";
console.log(categories)
const Category = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>All Categories</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <ul className="category-list">
          {categories.map((category) => {
           return ( <CategoryItem category={category} key={category.id} />)
          })}
        </ul>
      </div>
    </section>
  );
};

export default Category;
