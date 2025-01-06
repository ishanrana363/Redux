import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../redux/features/counter/like";

const LikeDislike = () => {
    const { like, dislike } = useSelector((state) => state.likeDislike);
    const dispatch = useDispatch()
    const addLike = () => {
        dispatch(increment())
    };
    const addDislike = () => {
        dispatch(decrement())
    };
    const resetValue = () => {
        dispatch(reset())
    };

    return (
        <div className="h-screen bg-gray-400 flex justify-center items-center " >
            <div className=" w-1/2 h-screen flex items-center justify-center " >
                <div>
                    <h1 className="text-3xl font-bold " > Like : {like} </h1>
                    <h1 className="text-3xl font-bold " >Dislike : {dislike} </h1>
                    <div className="mt-4 space-x-5 " >
                        <button onClick={addLike} className="py-1 px-3 bg-green-500 text-white font-bold text-xl " >Like</button>
                        <button onClick={addDislike} className="py-1 px-3 bg-green-500 text-white font-bold text-xl " >Dislike</button>
                        <button onClick={resetValue} className="py-1 px-3 bg-green-500 text-white font-bold text-xl " >Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikeDislike
