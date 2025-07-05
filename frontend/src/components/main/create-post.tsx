"use client";

import Image from "next/image";
import { Video, ImageIcon, Smile } from "lucide-react";

export default function CreatePost() {
	return (
		<div className="bg-white p-4 rounded-lg shadow my-4">
			<div className="flex items-center gap-3">
				<Image
					src="/avatar-user.jpg"
					alt="User"
					width={40}
					height={40}
					className="rounded-full"
				/>
				<input
					className="bg-(--secondary-background) rounded-full px-4 py-3 flex-1 text-md outline-none"
					placeholder="Lê ơi, bạn đang nghĩ gì thế?"
				/>
			</div>
			<div className="flex justify-between mt-4 text-sm">
				<Option
					icon={<Video className="text-red-500" size={18} />}
					label="Video trực tiếp"
				/>
				<Option
					icon={<ImageIcon className="text-green-500" size={18} />}
					label="Ảnh/video"
				/>
				<Option
					icon={<Smile className="text-yellow-400" size={18} />}
					label="Cảm xúc"
				/>
			</div>
		</div>
	);
}

function Option({ icon, label }: { icon: React.ReactNode; label: string }) {
	return (
		<div className="flex flex-1 items-center justify-center gap-2 hover:bg-(--secondary-background) p-2 rounded-md cursor-pointer">
			{icon}
			<span>{label}</span>
		</div>
	);
}
