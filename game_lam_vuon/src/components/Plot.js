import Plant from './Plant';

function Plot({ position, bag, removeLastItemFromBag }) {
    return (
        <div className="plot">
            <Plant position={(position*6) + 0} bag={bag} removeLastItemFromBag={removeLastItemFromBag}></Plant>
            <Plant position={(position*6) + 1} bag={bag} removeLastItemFromBag={removeLastItemFromBag}></Plant>
            <Plant position={(position*6) + 2} bag={bag} removeLastItemFromBag={removeLastItemFromBag}></Plant>
            <Plant position={(position*6) + 3} bag={bag} removeLastItemFromBag={removeLastItemFromBag}></Plant>
            <Plant position={(position*6) + 4} bag={bag} removeLastItemFromBag={removeLastItemFromBag}></Plant>
            <Plant position={(position*6) + 5} bag={bag} removeLastItemFromBag={removeLastItemFromBag}></Plant>
        </div>
    );
}

export default Plot;