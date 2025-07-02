import React from "react";

const Checkout = ({ item,index }) => {
  const itemTotal = item.price * (item.quantity || 1);

  return (
    
    <tr>
      <th>{index + 1}</th>
      <td>{item.name}</td>
      <td>₹ {item.price}</td>
      <td>{item.quantity || 1}</td>
      <td>₹ {itemTotal}</td>
    </tr>
  );
};

export default Checkout;
