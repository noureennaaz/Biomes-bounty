import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import quiz from "../Data/quiz";

const Quiz = () => {
  const { topic } = useParams();
  // const Quiz=quiz.find(v=> v.id==topic)

  const info = quiz.find((v) => v.id == topic);
  const [Question, setQuestion] = useState(info.questions[0]);
  const [count, setCount]=useState(1);
  const [score, setScore] = useState(0);
  const [visible, setVisible]= useState('question');
  
//   useEffect(()=>{
//     setCount((count)=>count+1)
//   }, [Question])
 useEffect(()=>{
    setQuestion(info.questions[count - 1])
 }, [count])
  var option=null;
  const clicked = (num) => {
    
        // Get the option element
        const option = document.getElementById(`text${num}`);
        const Span= document.getElementById(`span${num}`);
        const Boxes =document.getElementById('form');
        console.log(Boxes)
        Boxes.classList.add('pointer-events-none')
        if (num === Question.a) {
            setScore((score) => score + 1);
            console.log('Correct Answer');
            option.classList.add('text-green-500')
            option.classList.add('scale-[1.02]')
           
            // going to setTimeout
            setTimeout(()=>{

                if (count < 5) {
    
                    setCount(count+1)
                    if(Question){
                        setVisible('question');
                    }
                } else if (count === 5) {
                    if (score > 2) {
                        setVisible('win');
                        console.log('you won')
                    } else {
                        setVisible('lost');
                        console.log('you lost')
                    }
                }

                option.classList.remove('text-green-500')
                Boxes.classList.remove('pointer-events-none')
                option.classList.remove('scale-[1.02]')
                

            }, 3000)
            

        } else {
            
            option.classList.add('text-red-600');
            option.classList.add('line-through');
            Span.classList.add('border-red-700')// Incorrect answer styling
            setTimeout(()=>{
                
                option.classList.remove('line-through')
                option.classList.remove('text-red-600')
                Span.classList.remove('border-red-700')
                console.log('Incorrect Answer');
                Boxes.classList.remove('pointer-events-none')
            }, 1000)
        }
        
        
        
        
    }

    // // Reset color of previously selected option
    // // This should be managed appropriately; here is a basic implementation
    // const previousOption = document.querySelector('.radio-option.selected');
    // if (previousOption && previousOption.id !== `radio${num}`) {
    //     previousOption.style.color = 'black';
    // }

    // // Mark the current option as selected
    // const currentOption = document.getElementById(`radio${num}`);
    // if (currentOption) {
    //     currentOption.classList.add('selected');
    // }


  return (

    <div className="w-screen h-screen overflow-hidden">
      <div className=" bg-center bg-no-repeat h-[1200px] overflow-x-hidden w-screen overflow-hidden top-0 bottom-0 right-0 left-0 bg-[url(https://img.freepik.com/free-vector/watercolor-background-with-hand-drawn-elements_52683-57059.jpg?w=740&t=st=1690315153~exp=1690315753~hmac=56f4d0c51437b883f3c69dc5a69858e53759762f0be2f17905a68470a76a029f)] justify-center items-center max-h-screen gap-16 flex flex-col bg-cover bg-opacity-5 bg-blend-luminosity">
        <div className="literata-600 text-4xl">Quiz Time!</div>
        <div className=" relative">
         { visible==='question'&& (<div className="literata-light flex text-4xl -top-12 w-20 h-20 absolute left-[154px] rounded-full bg-[#C2E1B7] justify-center items-center">
            Q{count}
          </div>)}
          <div className="bg-[#c2e1b7d7] h-[500px] w-[408px] text-xl flex flex-col justify-between rounded-3xl literata-light px-10 py-20">
            {visible=='question' && (
                <div>
              <div className="font-semibold">{Question.q}</div>
              <form className="flex flex-col gap-3 pt-6 py-12 text-left" id="form">
                <label
                  className="relative flex cursor-pointer items-center gap-1"
                  htmlFor="radio1"
                >
                  <input
                    className="peer appearance-none absolute opacity-0"
                    id="radio1"
                    name="options"
                    type="radio"
                    value="1"
                    onClick={() => clicked("1")}
                  />
                  <span className="absolute left-3 top-1/2 h-[1.2em] w-[1.2em] -translate-x-full -translate-y-1/2 rounded-full border-[2px] border-[#008080]" id='span1'></span>
                  {
                    Question.a=='1' &&
                    <svg
                    viewBox="0 0 69 89"
                    className="absolute left-3 top-1/2 h-[1em] w-[1em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
                    fill="none"
                    height="89"
                    width="69"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
                      strokeWidth="6px"
                      stroke="#008080"
                      pathLength="100"
                    ></path>
                  </svg>
                  }
                  <p className="ml-[2em] [user-select:none]" id='text1'>
                    {Question.o.at(0)}
                  </p>
                </label>

                <label
                  className="relative flex cursor-pointer items-center gap-1"
                  htmlFor="radio2" 
                >
                  <input
                    className="peer appearance-none absolute opacity-0"
                    id="radio2"
                    name="options"
                    type="radio"
                    value="2"
                    onClick={() => clicked("2")}
                  />
                  <span className="absolute left-3 top-1/2 h-[1.2em] w-[1.2em] -translate-x-full -translate-y-1/2 rounded-full border-[2px] border-[#008080]"id='span2'></span>
                  {
                    Question.a===2 && <svg
                    viewBox="0 0 69 89"
                    className="absolute left-3 top-1/2 h-[1em] w-[1em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
                    fill="none"
                    height="89"
                    width="69"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
                      strokeWidth="6px"
                      stroke="#008080"
                      pathLength="100"
                    ></path>
                  </svg>
                  }
                  <p className="ml-[2em] [user-select:none]" id='text2'>
                  {Question.o.at(1)}
                  </p>
                </label>

                <label
                  className="relative flex cursor-pointer items-center gap-1"
                  htmlFor="radio3"
                >
                  <input
                    className="peer appearance-none absolute opacity-0"
                    id="radio3"
                    name="options"
                    type="radio"
                    value="3"
                    onClick={() => clicked("3")}
                  />
                  <span className="absolute left-3 top-1/2 h-[1.2em] w-[1.2em] -translate-x-full -translate-y-1/2 rounded-full border-[2px] border-[#008080]" id='span3'></span>
                  {
                    Question.a==3 && <svg
                    viewBox="0 0 69 89"
                    className="absolute left-3 top-1/2 h-[1em] w-[1em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
                    fill="none"
                    height="89"
                    width="69"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
                      strokeWidth="6px"
                      stroke="#008080"
                      pathLength="100"
                    ></path>
                  </svg>
                  }
                  <p className="ml-[2em] [user-select:none]" id='text3'>
                  {Question.o.at(2)}
                  </p>
                </label>

                <label
                  className="relative flex cursor-pointer items-center gap-1"
                  htmlFor="radio4"
                >
                  <input
                    className="peer appearance-none absolute opacity-0"
                    id="radio4"
                    name="options"
                    type="radio"
                    value="4"
                    onClick={() => clicked("4")}
                  />
                  <span className="absolute left-3 top-1/2 h-[1.2em] w-[1.2em] -translate-x-full -translate-y-1/2 rounded-full border-[2px] border-[#008080]" id='span4'></span>
                  {
                    Question.a==4 && <svg
                    viewBox="0 0 69 89"
                    className="absolute left-3 top-1/2 h-[1em] w-[1em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
                    fill="none"
                    height="89"
                    width="69"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
                      strokeWidth="6px"
                      stroke="#008080"
                      pathLength="100"
                    ></path>
                  </svg>
                  }
                  <p className="ml-[2em] [user-select:none] " id='text4' >
                  {Question.o.at(3)}
                  </p>
                </label>
              </form>
            </div>)}
            { visible==='question' && (<div className="justify-self-end "> 0{count}/05 </div>)}
           { visible==='win'&& (<div className="h-full w-full flex flex-col justify-evenly items-center">
                <h2 className="text-4xl">Hurray !</h2>
                <h3 className="text-2xl">You passed</h3>
                <div className="flex p-20 gap-3 text-2xl justify-evenly">
                    <div>Score :</div>
                    <div>{score}</div>
                </div>
                </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
