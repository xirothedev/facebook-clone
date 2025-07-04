"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";

export default function SidebarLeft() {
	return (
		<ScrollArea className="mx-2 my-4 h-screen flex flex-col gap-0.5">
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
					url: "/icons/bookmarks.png",
					href: "/bookmarks",
					label: "Đã lưu",
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
						className="flex items-center gap-3 p-2 hover:bg-(--primary-background) rounded-md"
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
		</ScrollArea>
	);
}

// export default function SidebarLeft() {
//   return (
//     <aside className="hidden lg:block w-[280px] px-4 h-screen overflow-y-auto">
//       {/* User Info */}
//       <div className="flex items-center gap-3 mb-4">
//         <Image
//           src="/avatar-user.jpg"
//           alt="User"
//           width={36}
//           height={36}
//           className="rounded-full"
//         />
//         <span className="font-medium">Lê Thành Trung</span>
//       </div>

//       {/* Menu items */}
//       <nav className="space-y-3">
//         <SidebarItem icon={<Bot size={20} />} label="Meta AI" />
//         <SidebarItem icon={<Users size={20} />} label="Bạn bè" />
//         <SidebarItem icon={<Briefcase size={20} />} label="Công cụ chuyên nghiệp" />
//         <SidebarItem icon={<Newspaper size={20} />} label="Bảng feed" />
//         <SidebarItem icon={<Users size={20} />} label="Nhóm" />
//         <SidebarItem icon={<Film size={20} />} label="Thước phim" />
//         <SidebarItem icon={<Clock size={20} />} label="Kỷ niệm" />
//         <SidebarItem icon={<MoreHorizontal size={20} />} label="Xem thêm" />
//       </nav>

//       {/* Shortcut section */}
//       <div className="mt-6">
//         <h4 className="text-sm text-gray-400 mb-2">Lối tắt của bạn</h4>
//         <ul className="space-y-2 text-sm">
//           <li className="hover:bg-[#3A3B3C] px-2 py-1 rounded cursor-pointer">Code thuê, Code App,...</li>
//           <li className="hover:bg-[#3A3B3C] px-2 py-1 rounded cursor-pointer">Cộng Đồng System Design</li>
//           <li className="hover:bg-[#3A3B3C] px-2 py-1 rounded cursor-pointer">Tuyển dụng Thực tập sinh IT</li>
//           <li className="hover:bg-[#3A3B3C] px-2 py-1 rounded cursor-pointer">IT TUYỂN DỤNG - TÌM VIỆC</li>
//           <li className="hover:bg-[#3A3B3C] px-2 py-1 rounded cursor-pointer">Xem thêm</li>
//         </ul>
//       </div>
//     </aside>
//   );
// }

function SidebarItem({
	icon,
	label,
}: {
	icon: React.ReactNode;
	label: string;
}) {
	return (
		<div className="flex items-center gap-3 hover:bg-[#3A3B3C] px-2 py-2 rounded cursor-pointer">
			{icon}
			<span className="text-sm">{label}</span>
		</div>
	);
}
