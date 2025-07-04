"use client";

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
		<aside className="hidden xl:block w-[350px] pt-16 px-4 text-white h-screen overflow-y-auto bg-[#18191A]">
			{/* Lời mời kết bạn */}
			<section className="mb-6">
				<h3 className="font-semibold text-sm mb-2">Lời mời kết bạn</h3>
				<div className="flex flex-col items-center justify-between bg-[#242526] p-2 rounded">
					<div className="flex items-center gap-2">
						<Image
							src="/avatar-user.jpg"
							alt="Duy Trương Phương"
							width={40}
							height={40}
							className="rounded-full"
						/>
						<span className="text-sm font-medium">Duy Trương Phương</span>
					</div>
					<div className="flex gap-1">
						<button
							type="button"
							className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
						>
							Xác nhận
						</button>
						<button
							type="button"
							className="bg-gray-600 text-white text-xs px-2 py-1 rounded"
						>
							Xóa
						</button>
					</div>
				</div>
			</section>

			{/* Sinh nhật */}
			<section className="mb-6">
				<h3 className="font-semibold text-sm mb-2">Sinh nhật</h3>
				<div className="text-sm text-gray-300">
					🎂 Hôm nay là sinh nhật của{" "}
					<span className="font-semibold text-white">Nhan Nguyễn</span>.
				</div>
			</section>

			{/* Danh sách bạn bè online */}
			<section>
				<h3 className="font-semibold text-sm mb-2">Người liên hệ</h3>
				<ul className="space-y-2">
					{friendsOnline.map((friend, i) => (
						<li
							key={i}
							className="flex items-center gap-3 cursor-pointer hover:bg-[#3A3B3C] p-2 rounded"
						>
							<div className="relative">
								<Image
									src={friend.avatar}
									alt={friend.name}
									width={36}
									height={36}
									className="rounded-full"
								/>
								<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-[#18191A]" />
							</div>
							<div>
								<p className="text-sm font-medium">{friend.name}</p>
								<p className="text-xs text-gray-400">{friend.time}</p>
							</div>
						</li>
					))}
				</ul>
			</section>
		</aside>
	);
}
