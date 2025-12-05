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

const LeftSidebar = () => {
  return (
    // fixed sidebar that stretches full height and keeps the user box at the bottom
    <section className="fixed w-[275px] h-screen flex flex-col justify-between">
      {/* Top navigation - allowed to scroll if it overflows */}
      <div className="flex-1 flex flex-col items-stretch space-y-4 mt-4 px-2">
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

        <button className="w-full m-2 rounded-full text-black bg-white px-4 py-3 cursor-pointer hover:bg-white/90 transition duration-200 font-bold text-lg">
          Post
        </button>
      </div>

      {/* Bottom user area */}
      <div className="px-2 pb-4">
        <button
          className="w-full flex rounded-full justify-between bg-transparent p-4 cursor-pointer hover:bg-white/20 transition duration-200 items-center space-x-2"
          aria-label="User menu"
        >
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-slate-400 w-10 h-10 shrink-0"></div>
            <div className="text-left text-sm">
              <div className="font-semibold">Govinda Prasad Parida</div>
              <div className="text-slate-400 text-xs">@gpp62000</div>
            </div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </button>
      </div>
    </section>
  );
};

export default LeftSidebar;
