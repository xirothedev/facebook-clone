"use client";

import {
  Bell,
  Gamepad2,
  House,
  Menu,
  MessageCircleMore,
  TvMinimalPlay,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { SearchBox } from "./search-box";

export default function Header() {
  const pathname = usePathname();
  const [tab, setTab] = useState<string>("/");

  useEffect(() => {
    console.log(pathname.split("/")[0] || "home");
    setTab(pathname.split("/")[0] || "home");
  }, [pathname]);

  return (
    <header className="fixed top-0 right-0 left-0 z-99 flex justify-between bg-white shadow-md">
      <div
        data-type="left"
        className="relative flex items-center gap-3 px-4 py-2"
      >
        <Image
          src="/facebook-logo.svg"
          width={0}
          height={0}
          className="h-auto w-10"
          sizes="100vw"
          alt="Facebook logo"
        />
        <SearchBox />
      </div>

      <div data-type="right" className="flex gap-1.5 px-4 py-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="flex size-10 rounded-full bg-(--primary-background)"
            >
              <Menu className="m-auto" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Menu</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="flex size-10 rounded-full bg-(--primary-background)"
            >
              <MessageCircleMore className="m-auto" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Messenger</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className="flex size-10 rounded-full bg-(--primary-background)"
            >
              <Bell className="m-auto" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Thông báo</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="relative">
              <Image
                src="/avatar-user.jpg"
                height={0}
                width={0}
                className="aspect-square w-10 rounded-full"
                sizes="100vw"
                alt="User avatar"
              />
              <MdOutlineKeyboardArrowDown
                size={14}
                className="absolute right-0 bottom-0 rounded-full bg-(--primary-background)"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tài khoản</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* 2nd mask */}
      <div className="absolute top-0 right-1/2 bottom-0 left-1/2 mt-[3px] flex translate-x-1/2 justify-center gap-1.5">
        {[
          { icon: House, label: "Trang chủ", id: "home" },
          { icon: TvMinimalPlay, label: "Video", id: "video" },
          { icon: UsersRound, label: "Nhóm", id: "group" },
          { icon: Gamepad2, label: "Trò chơi", id: "game" },
        ].map(({ icon: Icon, label, id }) => {
          return (
            <Tooltip key={id}>
              <TooltipTrigger asChild>
                <Link href={`/${id}`} className="flex flex-col">
                  <div className="flex min-w-32 flex-1 rounded-lg hover:bg-(--secondary-background)">
                    <Icon className="m-auto" />
                  </div>
                  <div
                    className={`w-full rounded-full bg-(--active-color) transition-[height] ${id === tab ? "h-[3px]" : "h-0"}`}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </header>
  );
}
