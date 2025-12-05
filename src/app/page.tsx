import LeftSidebar from "@/components/LeftSidebar";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-6xl w-full h-full flex relative">
        <LeftSidebar />


        <main className="ml-[300px] mx-2 min-h-screen flex w-[600px] h-full flex-col border-l-[0.5px] border-r-[0.5px] p-6 border-gray-600">
          <h1 className="text-xl font-bold">Home</h1>


          <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 h-32 relative">
            <div className="w-10 h-10 bg-slate-600 rounded-full" />
            <div className="flex-1 flex flex-col">
              <textarea
                rows={3}
                placeholder="What's happening?"
                className="w-full bg-transparent resize-none outline-none text-sm placeholder:text-gray-400"
              />

              <div className="w-full justify-between items-center flex"></div>
              <div></div>
              <div className="w-full max-w-[100px]:">
                <button className="rounded-full bg-white px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 text-black transition duration-200 font-bold ">
                  Post
                </button>
              </div>
            </div>
          </div>
        </main>
        {/* <section>right section</section> */}
      </div>
    </div>
  );
};

export default page;
