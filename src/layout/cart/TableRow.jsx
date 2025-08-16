import React from "react";
import classes from '../../Styles/cart.module.scss';
const TableRow = ({ item, onRemove, onQuantityChange }) => {
  const handleIncrement = () => {
    if (onQuantityChange) {
      onQuantityChange(item.id, item.quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (onQuantityChange && item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(item.id);
    }
  };

  return (
    <tr>
      <td>
        <div className={classes.product}>
          <img src={item.image || "https://picsum.photos/100/120"} alt={item.name} />
          <div className={classes.info}>
            <div className={classes.name}>{item.name}</div>
            <div className={classes.color}>{item.category}</div>
          </div>
        </div>
      </td>
      <td>R$ {item.price?.toFixed(2)}</td>
      <td>
        <div className={classes.qty}>
          <button onClick={handleDecrement}>
            <i className="bx bx-minus"></i>
          </button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement}>
            <i className="bx bx-plus"></i>
          </button>
        </div>
      </td>
      <td>R$ {(item.price * item.quantity)?.toFixed(2)}</td>
      <td>
        <button className={classes.remove} onClick={handleRemove}>
          <i className="bx bx-x"></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;