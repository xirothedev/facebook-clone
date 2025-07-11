"use client";

import { Ellipsis, Search } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import Image from "next/image";

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
							<Image src={url} alt="User" width={36} height={36} className="rounded-full" />
							<span className="font-medium">{label}</span>
						</Link>
					);
				})}
			</section>
		</ScrollArea>
	);
}
