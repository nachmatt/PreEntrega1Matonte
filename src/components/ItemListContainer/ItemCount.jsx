import './ItemCount.scss'

export const ItemCount = ({ count, handleCount }) => {
    return (
        <div className='item-count-wrapper'>
            <button onClick={() => handleCount("minus")}> - </button>
            <span id="counter"> {count}</span>
            <button onClick={() => handleCount("plus")}> + </button>
        </div>
    );
};