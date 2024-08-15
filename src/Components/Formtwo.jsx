import bg from '../assets/formtwo.png'

const Formtwo = () => {
  return (
    <>
      <div className="w-full h-screen bg-white ">
        <div className="w-[1400px] h-auto flex gap-[130px] ">
          <form action="" className="my-[100px] ml-[115px] w-[470px]">
            <h2 className=" font-DMSans font-bold text-[42px] leading-[52px] text-[#1E0E62] ">
              Sign Up to Discover Startup Features
            </h2>
            <div className="w-full mt-[51px] flex flex-col gap-[25px]   ">
              <div className="w-full flex flex-col gap-[7px] ">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="h-[60px] rounded-[100px]  border-[2px] border-[#b2b1b3]  bg-transparent  pl-[25px]  placeholder:font-DMSans placeholder:font-medium placeholder:text-[20px] placeholder:leading-[26px] placeholder-[#EBEAED] outline-none  "
                />
              </div>
              <div className="w-full flex flex-col gap-[7px] ">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="text"
                  placeholder="Your email"
                  className="h-[60px] rounded-[100px]  border-[2px] border-[#b2b1b3] bg-transparent  pl-[25px] placeholder:font-DMSans placeholder:font-medium placeholder:text-[20px] placeholder:leading-[26px] placeholder-[#EBEAED] outline-none  "
                />
              </div>
              <div className="w-full flex flex-col gap-[7px] ">
                <label htmlFor="password">PASSWORD</label>
                <input
                  type="password"
                  placeholder="Your password"
                  className="h-[60px] rounded-[100px]  border-[2px] border-[#b2b1b3] bg-transparent pl-[25px]  placeholder:font-DMSans placeholder:font-medium placeholder:text-[20px] placeholder:leading-[26px] placeholder-[#EBEAED] outline-none  "
                />
              </div>
              <div className="w-full grid items-center">
                <button className="w-[210px] h-[60px] bg-[#25DAC5] text-white font-DMSans font-medium text-[18px] leading-[26px] rounded-[100px] flex-grow-1 ">
                  Sign Up
                </button>
                <p className="ml-[20px] font-DMSans font-normal text-[16px] leading-[26px] text-[hsl(242,48%,40%)] flex-grow-0   ">
                  By signing up you agree to Our Terms and Privacy Policy
                </p>
              </div>
            </div>
          </form>
          <div>
            <img src={bg} alt="" className="w-[685px] " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Formtwo