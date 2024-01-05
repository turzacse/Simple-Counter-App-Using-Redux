import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../StateManagement/Action/CounterAction";

const Counter = () => {

    const count = useSelector(state => state.count);
    // console.log(count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter());
    }

    const handleDecrement = () => {
        dispatch(decrementCounter());
    }

    const handleReset = () => {
        dispatch(resetCounter());
    }

    return (
        <div className="text-center">
            <h2 className="text-3xl mt-20 font-bold mb-10">Count : {count} </h2>
            <button 
            onClick={handleIncrement}
            className="btn btn-primary"
            >Increment</button>

            <button
            onClick={handleDecrement}
            className="btn btn-warning mx-5"
            >Decrement</button>

            <button
            onClick={handleReset}
            className="btn bg-red-600"
            >Reset</button>

            <h2 className="font-bold text-green-600 mt-20 text-5xl mb-10">Redux Principle:</h2>
            <img className="w-[500px]  mx-auto" src="https://i.ibb.co/fvvbrB4/1703844692042.gif" alt="" />

        </div>
    );
};

export default Counter;