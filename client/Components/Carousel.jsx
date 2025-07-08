import React, {useState, useEffect} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";



function Carousel() {
    const [curr, setCurr] = useState(0);
    const [popular, setPopular] = useState([]);

    const autoSlideInterval = 3000;

    function prev(){
        setCurr((curr) => (curr === 0 ? popular.length - 1 : curr - 1))
    }
    
    function next(){
        setCurr((curr) => (curr === popular.length - 1 ? 0 : curr + 1))
    }

    useEffect(() =>{
        const slideInterval =  setInterval(() => {
            setCurr(curr => curr === popular.length - 1 ? 0 : curr + 1);
        }, autoSlideInterval);

        return () => clearInterval(slideInterval)
    }, [popular.length])

    useEffect (() =>{
        axios.get("/api/popular")
        .then(res =>{
            setPopular(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

  return (
    <div className="overflow-hidden relative w-full h-[346px] ">
        <div className="p-[20px] overflow-hidden bg-[#E5E7EB] rounded-[20px]">
            <div className="flex gap-[350px] transition-all ease-in-out delay-50">
                {popular[curr] &&
                <>
                <div className="w-[280px] h-[300px] rounded-[10px]">
                    <a href="">
                        <img src={popular[curr].cover} className="w-full h-full rounded-[10px]" alt={popular[curr].name}/>
                    </a>
                </div>
                <div className="self-center">
                    <a href="">
                        <h3>{popular[curr].name}</h3>
                    </a>
                    <span className="opacity-40">{popular[curr].views}</span>
                    <p>{`${popular[curr].synopsis.slice(0, 100)}...`}</p>
                </div>
                </>}
            </div>
        </div>
        <div className="absolute top-[120px] left-0 right-0 flex justify-between items-center p-[20px] pointer-events-none">
            <button onClick={prev} className="p-1 rounded-full shadow bg-[#979797] hover:bg-white pointer-events-auto">
                <ChevronLeft />
            </button>
            <button onClick={next} className="p-1 rounded-full shadow bg-[#979797] hover:bg-white pointer-events-auto">
                <ChevronRight />
            </button>
        </div>
        <div className="absolute  bottom-8 left-0 right-0 flex items-end justify-center">
            <div className="flex items-center justify-center gap-2">
                {popular.map((_, i)=>(
                    <div key={i} className={`transition-all w-2 h-2 bg-white rounded-full ${curr === i ? "p-1.5": "opacity-50"}`} />
                )) }
            </div>
        </div>
    </div>
  );
}

export default Carousel;
