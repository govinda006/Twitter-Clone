import { BiHomeCircle } from "react-icons/bi";

const NAVIGATION_ITEMS = [
  {
    title: "Home",
    icon: BiHomeCircle,
  },
];

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-5xl w-full h-full flex relative">
        <section className="fixed w-72 flex flex-col"></section>
        <main>Home timeline</main>
        <section>right section</section>
      </div>
    </div>
  );
};

export default page;
