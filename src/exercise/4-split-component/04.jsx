import clsx from 'clsx';
import styles from '../../styles/Exercise2.module.css';
import { useState } from 'react';

const shoppingItem = [
  {id: 1, name: "Carotte", quantity: 12},
  {id: 2, name: "Patate", quantity: 11},
  {id: 3, name: "Haricot", quantity: 54},
]

const recipeItem = [
  {id:1, name: "Tarte à la carotte", date: "11.06.23"},
  {id:2, name: "Purée de patate", date: "15.08.23"},
  {id:3, name: "Sauce aux haricots", date: "22.09.24"},
]

const App = () => {
  return (
    <div className={clsx(styles['container'])}>
      {/* 🦁 Crée un composant Header avec l'header ci-dessous. */}
      <Header/>
      {/* 🦁 Crée un composant ShoppingList avec les éléments ci-dessous. */}
      <ShoppingList/>
      {/* 🦁 Crée un composant Recipes avec les éléments ci-dessous. */}
      <Recipes/>
      {/* 🦁 Crée un composant Footer avec le footer ci-dessous. */}
      <Footer/>
    </div>
  );
};

const Badge = ({children}) => (
  <p className={styles.badge}>{children}</p>
)

const Header = () => {
  return (
    <header>
      <h1>Mes recettes de cuisine !</h1>
      <p>Par BeginReact.dev</p>
    </header>
  )
}

const ShoppingItem = (item) => {
  const handleCheckboxChange = () => {
    setCheckbox(!checkbox);
  }

  const [checkbox, setCheckbox] = useState(false);

  return (
    <div className={clsx(styles['shopping-item'], styles['bg-paper'])}>
      <div className={styles.section}>
        <p>{item.name}</p>
        <Badge>{item.quantity}</Badge>
      </div>

      <div className={styles.section}>
        <input
          type="checkbox"
          checked={checkbox}
          onChange={() => handleCheckboxChange(item.id)} />
      </div>
    </div>
  )
};

const ShoppingList = () => {
  return (
    <div className={clsx(styles['flex-col'])}>
      <h2>Liste de course</h2>
      <div className={styles['shopping-list-items']}>
        {shoppingItem.map((item) => (
          <ShoppingItem key={item.id} {...item}/>
        ))}
      </div>
    </div>
  )
}

const RecipeItem = (item) => (
  <li className={clsx(styles['flex'], styles['gap-4'])}>
    <span>{item.name}</span>
    <Badge>{item.date}</Badge>
  </li>
)

const Recipes = () => {
  return (
    <div className={clsx(styles['flex-col'])}>
      <h2>Liste de recettes à faire</h2>
      <ul className={clsx(styles['flex-col'], styles['gap-2'])}>
        {recipeItem.map((item) => (
          <RecipeItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>Create by BeginReact.dev</p>
    </footer>
  )
}

export default App;
