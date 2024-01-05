import { useSelector } from "react-redux";

const Counter = () => {

    const count = useSelector(state => state.count);
    console.log(count);
    const handleIncrement = () => {

    }
    return (
        <div className="text-center">
            <h2 className="text-3xl mt-20 font-bold mb-10">Count : 0 </h2>
            <button 
            onClick={handleIncrement}
            className="btn btn-primary">Increment</button>
            <button className="btn btn-warning mx-5">Decrement</button>
            <button className="btn bg-red-600">Reset</button>

        </div>
    );
};

export default Counter;