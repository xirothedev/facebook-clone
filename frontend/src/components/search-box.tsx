"use client";

import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const recentSearches = [
	{ name: "Phan Hải Đăng", sub: "", img: "" },
	{ name: "WhiteHat", sub: "9+ thông tin mới", img: "" },
	{ name: "Lê Phúc Hậu", sub: "Bạn bè", img: "" },
	{ name: "Ngy Anh Thư", sub: "", img: "" },
	{ name: "IT TUYỂN DỤNG - TÌM VIỆC LÀM IT", sub: "9+ thông tin mới", img: "" },
	{ name: "Lê Anh Tuấn", sub: "7 thông tin mới", img: "" },
	{ name: "Lê Thành Trung", sub: "", img: "" },
	{ name: "Công đoàn trường THCS Võ Thị Sáu - TP Nha Trang", sub: "", img: "" },
];

export function SearchBox() {
	const [isFocused, setIsFocused] = useState<boolean>(false);

	return (
		<>
			<div
				className={`absolute flex h-10 min-w-min items-center justify-start bg-white text-black/60 ${isFocused ? "left-0" : "left-16"}`}
			>
				<FaArrowLeft
					size={18}
					className={`transition-all delay-150 ${isFocused ? "w-full -translate-x-2 pl-5" : "w-0 translate-x-0"}`}
				/>
				<div className="flex h-full w-60 items-center gap-1.5 rounded-full bg-(--secondary-background) px-3">
					<Search size={isFocused ? 0 : 18} />
					<input
						type="text"
						onFocus={() => setIsFocused(true)}
						onBlur={() => setTimeout(() => setIsFocused(false), 200)}
						className="text-black outline-none"
						placeholder="Tìm kiếm trên Facebook"
					/>
				</div>
			</div>
			<div
				className={`absolute top-full left-0 flex w-72 flex-col gap-1.5 rounded-b-md bg-white p-2 shadow-md transition-all ${isFocused ? "block" : "hidden"}`}
			>
				{recentSearches.map((item, index) => (
					<Link
						href="/"
						key={index}
						className="flex items-center justify-between rounded px-2 py-1 transition hover:bg-gray-100"
					>
						<div className="flex items-center gap-3">
							<Image
								src="/avatar-user.jpg"
								alt="Search results"
								width={40}
								height={40}
								className="rounded-full"
							/>
							<div className="flex flex-col">
								<span className="text-sm font-medium">{item.name}</span>
								{item.sub && <span className="text-xs text-gray-500">{item.sub}</span>}
							</div>
						</div>
						<button type="button" className="rounded-full p-1 hover:bg-gray-200">
							<X className="h-4 w-4 text-gray-500" />
						</button>
					</Link>
				))}
			</div>
		</>
	);
}
