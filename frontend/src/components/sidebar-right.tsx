"use client";

import { Ellipsis, Search } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import Image from "next/image";

const friendsOnline = [
  { name: "Ngy Anh Thư", time: "15 phút", avatar: "/f1.jpg" },
  { name: "Nguyễn Thái An", time: "7 phút", avatar: "/f2.jpg" },
  { name: "Ngx Tlynn", time: "5 phút", avatar: "/f3.jpg" },
  { name: "Phan Mỹ Dung", time: "1 phút", avatar: "/f4.jpg" },
  { name: "Nguyễn Ngọc Huy", time: "6 phút", avatar: "/f5.jpg" },
  { name: "Hữu Nam Nguyễn", time: "2 phút", avatar: "/f6.jpg" },
];

export default function SidebarRight() {
  return (
    <ScrollArea className="flex h-[calc(100vh-56px)] flex-col gap-0.5 overflow-y-auto px-2 py-4">
      <section data-type="contact">
        <div className="flex justify-between p-2 text-black/60">
          <h2 className="font-semibold">Người liên hệ</h2>
          <div className="flex gap-6">
            <Search size={20} />
            <Ellipsis size={20} />
          </div>
        </div>

        {[
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
          { url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
        ].map(({ href, label, url }, i) => {
          return (
            <Link
              key={i}
              href={href}
              className="flex items-center gap-3 rounded-md p-2 hover:bg-(--primary-background)"
            >
              <Image
                src={url}
                alt="User"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}
      </section>
    </ScrollArea>
  );
}
