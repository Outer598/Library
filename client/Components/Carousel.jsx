import React, {useState, useEffect} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const slides = [
    {
        name: "i am testing",
        img: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        name: "i am testing5",
        img: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        name: "i am testing4",
        img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
    },
    {
        name: "i am testing3",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s'
    },
]

function Carousel() {
    const [curr, setCurr] = useState(0);

    const autoSlideInterval = 3000;

    function prev(){
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    }
    
    function next(){
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
    }

    useEffect(() =>{
        const slideInterval =  setInterval(() => {
            setCurr(curr => curr === slides.length - 1 ? 0 : curr + 1);
        }, autoSlideInterval);

        return () => clearInterval(slideInterval)
    }, [])
  return (
    <div className="overflow-hidden relative w-full h-[346px] ">
        <div className="p-[20px] overflow-hidden bg-[#E5E7EB] rounded-[20px]">
            <div className="flex gap-[350px] transition-all ease-in-out delay-50">
                <a href="">
                    <img src={slides[curr].img} className="rounded-[10px] w-[350px] h-[300px]"/>
                </a>
                <div className="self-center">
                    <a href="">
                        <h4>{slides[curr].name}</h4>
                    </a>
                </div>
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
                {slides.map((_, i)=>(
                    <div key={i} className={`transition-all w-2 h-2 bg-white rounded-full ${curr === i ? "p-1.5": "opacity-50"}`} />
                )) }
            </div>
        </div>
    </div>
  );
}

export default Carousel;
