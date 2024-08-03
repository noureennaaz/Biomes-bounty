const Quiz = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className=" bg-center bg-no-repeat h-[1200px] overflow-x-hidden w-screen overflow-hidden top-0 bottom-0 right-0 left-0 bg-[url(https://res.cloudinary.com/dihp6gdpi/image/upload/v1722651779/BiomesBounty/quiz-bg.jpg)] justify-center items-center max-h-screen gap-16 flex flex-col">
        <div className="literata-600 text-4xl ">Quiz Time!</div>
        <div className=" relative">
          <div className="literata-light flex text-4xl -top-12 w-20 h-20 absolute left-[154px] rounded-full bg-[#C2E1B7] justify-center items-center">
            Q1
          </div>
          <div className="bg-[#c2e1b7d7] h-[500px] w-[408px] flex flex-col justify-between rounded-3xl literata-light text-base px-10 py-20">
            <div>
            <div>What defines a tropical rainforest biome?</div>
            <div className="flex flex-col gap-3 pt-6 py-12">
            <label className="relative flex cursor-pointer items-center gap-1" for="tick1">
    <input
      className="peer appearance-none absolute opacity-0"
      id="tick1"
      name="tick1"
      type="checkbox"
    />
    <span className="absolute left-3 top-1/2 h-[1em] w-[1em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#008080]"></span>
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
        stroke-width="6px"
        stroke="#008080"
        pathLength="100"
      ></path>
    </svg>
    <p className="ml-[2em] [user-select:none]">
      Extremely cold temperatures 1
    </p>
  </label>

  
  <label className="relative flex cursor-pointer items-center gap-1" for="tick2">
    <input
      className="peer appearance-none absolute opacity-0"
      id="tick2"
      name="tick2"
      type="checkbox"
    />
    <span className="absolute left-3 top-1/2 h-[1em] w-[1em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#008080]"></span>
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
        stroke-width="6px"
        stroke="#008080"
        pathLength="100"
      ></path>
    </svg>
    <p className="ml-[2em] [user-select:none]">
      Extremely cold temperatures 2
    </p>
  </label>

  {/* <!-- Checkbox 3 --> */}
  <label className="relative flex cursor-pointer items-center gap-1" for="tick3">
    <input
      className="peer appearance-none absolute opacity-0"
      id="tick3"
      name="tick3"
      type="checkbox"
    />
    <span className="absolute left-3 top-1/2 h-[1em] w-[1em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#008080]"></span>
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
        stroke-width="6px"
        stroke="#008080"
        pathLength="100"
      ></path>
    </svg>
    <p className="ml-[2em] [user-select:none]">
      Extremely cold temperatures 3
    </p>
  </label>

  {/* <!-- Checkbox 4 --> */}
  <label className="relative flex cursor-pointer items-center gap-1" for="tick4">
    <input
      className="peer appearance-none absolute opacity-0"
      id="tick4"
      name="tick4"
      type="checkbox"
    />
    <span className="absolute left-3 top-1/2 h-[1em] w-[1em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#008080]"></span>
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
        stroke-width="6px"
        stroke="#008080"
        pathLength="100"
      ></path>
    </svg>
    <p className="ml-[2em] [user-select:none]">
      Extremely cold temperatures 4
    </p>
  </label>
            </div>
            </div>
            <div className="justify-self-end "> 01/05 </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
