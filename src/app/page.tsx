import LeftSidebar from "@/components/LeftSidebar";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-6xl w-full h-full flex relative">
        <LeftSidebar />
        {/* <main>Home timeline</main>
        <section>right section</section> */}
      </div>
    </div>
  );
};

export default page;
