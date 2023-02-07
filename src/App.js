import { useSelector, useDispatch } from "react-redux";
import { increment, decrement} from "./features/counterSlice"

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  return (
    <div className="grid grid-rows-3 items-center text-center">
      <h1 className="text-3xl font-bold underline">Basic Counter app using redux</h1>
      <h1 className="text-2xl">{counter}</h1>
      <div className="grid grid-cols-2 gap-10">
        <button className="px-4 py-6 bg-black text-white rounded-lg" onClick={() => dispatch(increment())}>Increment</button>
        <button className="px-4 py-6 bg-black text-white rounded-lg" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
