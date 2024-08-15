const Form1 = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-b from-lime-200 to-lime-600">
        <div className=" w-[310px]  h-[410px]  flex flex-col justify-between items-center text-white bg-teal-800 rounded-lg border-2 border-white shadow-lg shadow-lime-800   ">
          <form className="h-52 w-full p-4 space-y-4">
            <input type="text" placeholder="user name" className="inputClass" />
            <input type="text" placeholder="E-mail" className="inputClass" />
            <input type="password" placeholder="Password" className="inputClass" />
          </form>
          <a href="#">
            <button className="bg-white w-44 h-[38px]  text-teal-800 font-bold rounded hover:bg-orange-300 hover:text-white transition-all duration-300  ">
              Sing up
            </button>
          </a>
          <p className=" px-4 text-center text-sm ">
            Follow me on youtube, twitter and instagram. Thank you!
          </p>
          <a href="#" className=" w-full ">
            <h3 className=" py-5 border-t-[.4px] border-t-orange-400 text-center text-sm font-bold   ">
              Already have an account?
            </h3>
          </a>
        </div>
      </div>
    </>
  );
};

export default Form1;
