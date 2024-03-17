import { useState,useEffect } from 'react';
import React from 'react';
import '../App.css';
import freshcod from "./freshcod.jpg";
import loadedtuna from "./loadedtuna.jpg";
import greeksalad from "./Greeksalad.jpg";


const Prev = (currentValue) => !currentValue;
const handlePlus = (currentValue) => currentValue + 1;
const handleMinus = (currentValue) => Math.max(0, currentValue - 1);

const Totalcod = ({ codcounts, onIncrease, onDecrease }) => {
    if (codcounts > 0) {
        return (
            <div>
                <button className="codminus" onClick={onDecrease}>-</button>
                <button className="codplus" onClick={onIncrease}>+</button>
                <p className="codcounts">{codcounts}</p>
            </div>
        );
    }
    return null;
};


const Totaltuna = ({ tunacounts, onIncrease, onDecrease }) => {
    if (tunacounts > 0) {
        return (
            <div>
                <button className="tunaminus" onClick={onDecrease}>-</button>
                <button className="tunaplus" onClick={onIncrease}>+</button>
                <p className="tunacounts">{tunacounts}</p>
            </div>
        );
    }
    return null;
};



const Totalsalad = ({ saladcounts, onIncrease, onDecrease }) => {
    if (saladcounts > 0) {
        return (
            <div>
                <button className="saladminus" onClick={onDecrease}>-</button>
                <button className="saladplus" onClick={onIncrease}>+</button>
                <p className="saladcounts">{saladcounts}</p>
            </div>
        );
    }
    return null;
};








const Nav = () => {
    const [codcounts, setCodCounts] = useState(0);
    const [tunacounts, settuna] = useState(0);
    const [saladcounts, setsalad] = useState(0);

    const increasecodcount = () => setCodCounts(handlePlus(codcounts));
    const decreasecodcount = () => setCodCounts(handleMinus(codcounts));

    const increasetunacount = () => settuna(handlePlus(tunacounts));
    const decreasetunacount = () => settuna(handleMinus(tunacounts));

    const increasesaladcount = () => setsalad(handlePlus(saladcounts));
    const decreasesaladcount = () => setsalad(handleMinus(saladcounts));


    return (
        <div>
            <nav className="nav">
                <p className="little">LITTLE </p>
                <p className="little">LEMON </p>
                <p className="chicago">CHICAGO </p>
                <img src={freshcod} alt="freshcod" className="freshcod"/>
                <p className="freshcodlabel">FRESH COD</p>
                <p className="codtext">A succulent fillet of fresh cod, seared to golden perfection, sits atop a bed of
                    creamy garlic-infused mashed potatoes, surrounded by a vibrant array of seasonal vegetables. A
                    delicate lemon butter sauce drizzles over the dish, enhancing the natural flavors with a bright,
                    citrusy accent.</p>
                <button  className="codcart" onClick={increasecodcount}> add to cart</button>
                <img src={loadedtuna} alt="loadedtuna" className="loadedtuna"/>
                <p className="loadedtunalabel">LOADED TUNA</p>
                <p className="tunatext">A hearty, flavorful dish of loaded tuna presents thick, perfectly grilled tuna
                    steaks, generously topped with a zesty salsa of avocado, red onion, and diced tomatoes, all drizzled
                    with a rich, spicy cilantro-lime sauce.</p>
                <button className="tunacart" onClick={increasetunacount}> add to cart</button>
                <img src={greeksalad} alt="greeksalad" className="greeksalad"/>
                <p className="greeksaladlabel">GREEK SALAD</p>
                <p className="saladtext">A vibrant Greek salad, brimming with crisp cucumbers, juicy tomatoes, and plump
                    Kalamata olives, is adorned with thick slices of creamy feta cheese and sprinkled with fragrant
                    oregano. Dressed in a light, olive oil and lemon vinaigrette, this refreshing salad combines crunchy
                    textures with the robust flavors of the Mediterranean.</p>
                <button className="saladcart" onClick={increasesaladcount}> add to cart</button>
                <p className="today"> Todays deals</p>
                <p className="synopsis">Welcome to Little Lemon, where the zest of life meets culinary delight! Nestled
                    in the heart of the city, our cozy restaurant invites you to savor the vibrant flavors of our
                    farm-to-table dishes, each crafted with the freshest local ingredients and a sprinkle of lemony
                    love. From sun-drenched brunches to intimate dinners under the stars, every meal at Little Lemon is
                    a celebration of community, craftsmanship, and the simple joy of sharing good food. Join us for a
                    taste of brightness in every bite – your table at Little Lemon awaits!</p>

                <div className="twobutton">
                    <button className="reserve">RESERVE</button>
                    <button className="menubutton"> FULL MENU</button>
                </div>

                <Totalcod codcounts={codcounts} onIncrease={increasecodcount} onDecrease={decreasecodcount} />
                <Totaltuna tunacounts={tunacounts} onIncrease={increasetunacount} onDecrease={decreasetunacount} />
                <Totalsalad saladcounts={saladcounts} onIncrease={increasesaladcount} onDecrease={decreasesaladcount} />

            </nav>
        </div>

    )
}


export default Nav;