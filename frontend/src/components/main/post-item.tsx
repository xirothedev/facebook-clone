import Image from "next/image";

export default function PostItem() {
	return (
		<div className="mx-auto mb-4 w-full rounded-md border bg-white shadow-sm">
			{/* Header */}
			<div className="flex items-start gap-3 px-4 pt-4">
				<Image src="/avatar-user.jpg" alt="Page avatar" width={40} height={40} className="rounded-full" />
				<div>
					<p className="text-sm leading-tight font-semibold">Lê Ngọc Minh Phương</p>
					<p className="text-xs text-gray-500">13 giờ · 🌐</p>
				</div>
				<div className="ml-auto cursor-pointer text-gray-500">⋯</div>
			</div>

			{/* Caption */}
			<p className="px-4 py-2 text-sm">Gu tui trai artist</p>

			{/* Main Image */}
			<div className="relative h-[750px] w-auto bg-black">
				<Image src="/post-image.jpg" alt="Post content" fill className="rounded-b-md object-contain" />
			</div>

			{/* Reaction Summary */}
			<div className="flex items-center px-4 py-2 text-sm text-gray-600">
				<div className="flex items-center gap-1">
					<div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
						👍
					</div>
					<div className="-ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs text-white">
						❤️
					</div>
					<span className="ml-2">4,6K</span>
				</div>
				<div className="ml-auto">43 bình luận · 1 lượt chia sẻ</div>
			</div>

			<hr />

			{/* Actions */}
			<div className="flex justify-between px-4 py-1 text-sm text-gray-600">
				<button
					type="button"
					className="flex w-full items-center justify-center gap-2 rounded-md py-2 hover:bg-gray-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 24 24"
						className="h-5 w-5"
						aria-label="Like"
						role="img"
					>
						<title>Thích</title>
						<path d="M9 22H5a2 2 0 0 1-2-2v-7h6v9zm-4-2h2v-5H5v5zM23 11.5c0-.6-.4-1-1-1h-6V6a2 2 0 0 0-2-2h-1.3l.3-1.2v-.2a1 1 0 0 0-1-1h-2.2a1 1 0 0 0-1 .8L8.1 6.6l-.1.4v11h9.4c.9 0 1.7-.6 1.9-1.4l1.6-6.3v-.1z" />
					</svg>
					Thích
				</button>
				<button
					type="button"
					className="flex w-full items-center justify-center gap-2 rounded-md py-2 hover:bg-gray-100"
				>
					💬 Bình luận
				</button>
				<button
					type="button"
					className="flex w-full items-center justify-center gap-2 rounded-md py-2 hover:bg-gray-100"
				>
					🔗 Chia sẻ
				</button>
			</div>
		</div>
	);
}
