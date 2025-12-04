import Link from "next/link";
import { BsBookmark, BsThreeDots, BsTwitter } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { GrNotification } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: GoHomeFill,
  },
  {
    title: "Explore",
    icon: IoSearchOutline,
  },
  {
    title: "Notifications",
    icon: GrNotification,
  },
  {
    title: "Messages",
    icon: HiEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: HiOutlineUser,
  },
];

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-6xl w-full h-full flex relative">
        <section className="fixed w-[275px] flex flex-col items-stretch h-screen  ">
          <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                className="hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit text-2xl space-x-6 rounded-3xl py-2 px-4"
                href={`/${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                {item.title !== "Twitter" && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="w-full m-4 rounded-full text-black bg-white px-4 py-4 cursor-pointer hover:bg-white/90 transition duration-200 font-bold text-lg">
              Post
            </button>
          </div>
          <div>
            <button className="w-full flex m-4 rounded-full justify-between  bg-transparent p-4 cursor-pointer hover:bg-white/20 transition duration-200 items-center space-x-2">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-slate-400 w-10 h-10"></div>
                <div className="text-left text-sm">
                  <div className="font-semibold">Govinda Prasad Parida</div>
                  <div className="">@gpp62000</div>
                </div>
              </div>
              <div>
                <BsThreeDots />
              </div>
            </button>
          </div>
        </section>
        {/* <main>Home timeline</main>
        <section>right section</section> */}
      </div>
    </div>
  );
};

export default page;
