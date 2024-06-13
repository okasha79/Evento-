import React from "react";
import "../Style/ProductCard.css"

const ProductCard = (props) => {
    // console.log(props);
    const Add = () => {
        props.watch();
    }
    return(
        <div className="ProductCard">
            <div className="ProductCard-Image">
                <img src={props.image} alt="Services"/>
            </div>
            <div className="ProductCard-Info">
            <div className="ProductCard-Desc"><h2>{props.description}</h2></div>
            <div className="ProductCard-Name">{props.name}<h4 className="price">{props.price}</h4></div>
            {/* <button onClick={() => {
                props.watch(props.id);
            }} className="ProductCard-Work">Add</button> */}
            <button onClick={() => {
                props.watch(props.id);
            }} class="button-85" role="button">Add</button>
            </div>
        </div>
    );
};

export default ProductCard;