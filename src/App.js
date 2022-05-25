import { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import data from './data';
const getCategories = () => {
  const category = data.map(({ category }) => category);
  const uniqueCategory = ['all', ...new Set(category)];
  return uniqueCategory;
};
function App() {
  const [categories, setCategories] = useState(getCategories());
  const [menu, setMenu] = useState(data);
  const filteredCategory = category => {
    if (category === 'all') {
      setMenu(data);
    } else {
      setMenu(data.filter(({ category: cat }) => cat === category));
    }
  };
  return (
    <main>
      <section className="menu section">
        <Categories
          categories={categories}
          filteredCategory={filteredCategory}
        />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
