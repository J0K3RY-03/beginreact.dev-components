import styles from '../../styles/Exercise2.module.css';

const ShoppingListData = [
  { id: 1, name: 'Milk', quantity: 2, checked: false },
  { id: 2, name: 'Eggs', quantity: 0, checked: false },
  { id: 3, name: 'Bread', quantity: 1, checked: false },
  { id: 4, name: 'Soda', quantity: 4, checked: true },
  { id: 5, name: 'Coffee', quantity: 1, checked: true },
  { id: 6, name: 'Te', quantity: 100, checked: true },
  { id: 7, name: 'Cake', quantity: 1, checked: false },
  { id: 8, name: 'Pie', quantity: 1, checked: false },
  { id: 9, name: 'Chips', quantity: 0, checked: false },
  { id: 10, name: 'A', quantity: 122, checked: false },
];

const ShoppingItem = ({ name, quantity, checked }) => {
  return(
    <div className={styles['shopping-item']}>
      <div className={styles.section}>
        {name.length <= 2 ? <p className={styles["red-title"]}>{name}</p> :
          <p style={{color: name.length <= 2 ? "red" : "green"}}>{name}</p>}
        {quantity === 1 ? null : <p className={styles.badge}>{quantity}</p>}
      </div>
      <div className={styles.section}>
        <input type="checkbox" defaultChecked={checked} />
      </div>
    </div>
  )
};

const shoppingItemsFilter = ShoppingListData.filter(item => item.quantity > 0)

const ShoppingList = () => {
  return (
    <div className={styles['shopping-list']}>
      <h2>Shopping List</h2>
      <div className={styles['shopping-list-items']}>
        {shoppingItemsFilter
          .map((item) => {
            return (
              <ShoppingItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                checked={item.checked}
              />
            )
          })}
      </div>
    </div>
  );
};

export default ShoppingList;
