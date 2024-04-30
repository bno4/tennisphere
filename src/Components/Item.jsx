/* eslint-disable react/prop-types */
const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="item" />
      <p>{props.name}</p>
      <div className="item__prices">
        <div className="item__prices__new">{props.new_price} €</div>
        <div className="item__prices__old">{props.old_price} €</div>
      </div>
    </div>
  );
};

export default Item;
