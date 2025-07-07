"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";

export default function SidebarLeft() {
	return (
		<ScrollArea className="flex h-[calc(100vh-56px)] flex-col gap-0.5 overflow-y-auto px-2 py-4">
			{[
				{ url: "/avatar-user.jpg", href: "/@me", label: "Lê Thành Trung" },
				{
					url: "https://static.xx.fbcdn.net/rsrc.php/v4/yQ/r/GYpXa693P7W.png",
					href: "https://www.meta.ai/",
					label: "Meta AI",
				},
				{
					url: "/icons/friends.png",
					href: "/friends",
					label: "Bạn bè",
				},
				{
					url: "https://static.xx.fbcdn.net/rsrc.php/v4/yu/r/v8P0lSbIHai.png",
					href: "/professional",
					label: "Công cụ chuyên nghiệp",
				},
				{
					url: "https://static.xx.fbcdn.net/rsrc.php/v4/yF/r/kD5Sv0isIPs.png",
					href: "/feeds",
					label: "Bảng feed",
				},
				{
					url: "/icons/groups.png",
					href: "/groups",
					label: "Nhóm",
				},
				{
					url: "/icons/videos.png",
					href: "/videos",
					label: "Thước phim",
				},
				{
					url: "/icons/memories.png",
					href: "/memories",
					label: "Kỷ niệm",
				},
				{
					url: "/icons/fundraisers.png",
					href: "/fundraisers",
					label: "Chiến dịch gây quỹ",
				},
				{
					url: "/icons/games.png",
					href: "/games",
					label: "Chơi game",
				},
				{
					url: "/icons/bookmarks.png",
					href: "/bookmarks",
					label: "Đã lưu",
				},
				{
					url: "https://static.xx.fbcdn.net/rsrc.php/v4/yv/r/x2_LFd7gCqg.png",
					href: "/recent_activities&ads",
					label: "Hoạt động gần đây với quảng cáo",
				},
				{
					url: "https://static.xx.fbcdn.net/rsrc.php/v4/yq/r/MKwrVp_7k1D.png",
					href: "/birthday",
					label: "Sinh nhật",
				},
				{
					url: "/icons/events.png",
					href: "/events",
					label: "Sự kiện",
				},
				{
					url: "/icons/pages.png",
					href: "/pages",
					label: "Trang",
				},
				{
					url: "https://static.xx.fbcdn.net/rsrc.php/v4/yN/r/ATlxuj_J5ty.png",
					href: "ads_management",
					label: "Trình quản lý quảng cáo",
				},
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
		</ScrollArea>
	);
}
