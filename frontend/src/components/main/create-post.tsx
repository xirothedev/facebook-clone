"use client";

import Image from "next/image";
import { Video, ImageIcon, Smile } from "lucide-react";

export default function CreatePost() {
	return (
		<div className="my-4 rounded-lg bg-white p-4 shadow">
			<div className="flex items-center gap-3">
				<Image src="/avatar-user.jpg" alt="User" width={40} height={40} className="rounded-full" />
				<input
					className="text-md flex-1 rounded-full bg-(--secondary-background) px-4 py-3 outline-none"
					placeholder="Lê ơi, bạn đang nghĩ gì thế?"
				/>
			</div>
			<div className="mt-4 flex justify-between text-sm">
				<Option icon={<Video className="text-red-500" size={18} />} label="Video trực tiếp" />
				<Option icon={<ImageIcon className="text-green-500" size={18} />} label="Ảnh/video" />
				<Option icon={<Smile className="text-yellow-400" size={18} />} label="Cảm xúc" />
			</div>
		</div>
	);
}

function Option({ icon, label }: { icon: React.ReactNode; label: string }) {
	return (
		<div className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md p-2 hover:bg-(--secondary-background)">
			{icon}
			<span>{label}</span>
		</div>
	);
}
