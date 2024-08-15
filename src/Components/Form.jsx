import background from "../assets/bg.png";

const Form = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <form
          action=""
          className="w-[430px]  h-[530px] rounded-[10px] bg-white px-[50px]  pt-[38px] pb-[29px] "
        >
          <p className="font-DMSans font-bold text-[42px] text-[#1E0E62] text-center leading-[52px] tracking-[-.4px] ">
            Sign Up Now
          </p>
          <div className="mt-[45px] mb-[42px] flex flex-col items-center gap-[20px]  ">
            <input
              type="text"
              placeholder="Your email"
              className="w-[330px]  h-[50px]  rounded-[100px]  border-[2px] border-[#EBEAED] pl-[24px] placeholder:font-DMSans placeholder:font-medium placeholder:text-[18px] placeholder:leading-[26px] placeholder:text-[rgba(21, 20, 57,.4)]  outline-none text-teal-700 font-bold"
            />
            <input
              type="password"
              placeholder="Your password"
              className="w-[330px]  h-[50px] rounded-[100px]  border-[2px] border-[#EBEAED] pl-[24px] placeholder:font-DMSans placeholder:font-medium placeholder:text-[18px] placeholder:leading-[26px] placeholder:text-[rgba(21, 20, 57,.4)] outline-none  text-teal-700 font-bold "
            />
          </div>
          <div className="w-full flex items-center ">
            <input type="checkbox" name="" id="" />
            <p className=" font-DMSans font-medium text-[16px] leading-[26px] text-[#15143966] pl-[10px] ">
              I agree to the Terms of Service.
            </p>
          </div>
          <a
            href="#"
            className="w-full h-[50px] bg-[#25DAC5] font-DMSans font-medium text-[18px] leading-[26px] flex rounded-[100px]  items-center justify-center text-white mt-[24px]  mb-[50px]  "
          >
            Create an Account
          </a>
          <div className="border-t-[2px] border-[#EBEAED] pt-[25px] flex  items-center justify-center ">
            <a
              href="#"
              className="  font-DMSans font-medium text-[18px] leading-[28px] text-[#15143966]"
            >
              Do you have an Account?
            </a>
            <a
              href="#"
              className="font-DMSans font-medium text-[18px] leading-[28px] text-[#25DAC5] ml-[9px]  "
            >
              Sign In
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
