import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

interface Story {
	id: string;
	name: string;
	avatarUrl: string;
	backgroundUrl: string;
	isMe?: boolean;
}

const stories: Story[] = [
	{
		id: "me",
		name: "Tạo tin",
		avatarUrl: "/avatar-user.jpg",
		backgroundUrl: "/avatar-user.jpg",
		isMe: true,
	},
	{
		id: "1",
		name: "Lê Thành Trung",
		avatarUrl: "/avatar-user.jpg",
		backgroundUrl: "/avatar-user.jpg",
	},
	{
		id: "2",
		name: "Lê Thành Trung",
		avatarUrl: "/avatar-user.jpg",
		backgroundUrl: "/avatar-user.jpg",
	},
	{
		id: "3",
		name: "Lê Thành Trung",
		avatarUrl: "/avatar-user.jpg",
		backgroundUrl: "/avatar-user.jpg",
	},
	{
		id: "4",
		name: "Lê Thành Trung",
		avatarUrl: "/avatar-user.jpg",
		backgroundUrl: "/avatar-user.jpg",
	},
	{
		id: "5",
		name: "Lê Thành Trung",
		avatarUrl: "/avatar-user.jpg",
		backgroundUrl: "/avatar-user.jpg",
	},
	{
		id: "6",
		name: "Lê Thành Trung",
		avatarUrl: "/avatar-user.jpg",
		backgroundUrl: "/avatar-user.jpg",
	},
	{
		id: "7",
		name: "Lê Thành Trung",
		avatarUrl: "/avatar-user.jpg",
		backgroundUrl: "/avatar-user.jpg",
	},
	{
		id: "8",
		name: "Lê Thành Trung",
		avatarUrl: "/avatar-user.jpg",
		backgroundUrl: "/avatar-user.jpg",
	},
	{
		id: "9",
		name: "Lê Thành Trung",
		avatarUrl: "/avatar-user.jpg",
		backgroundUrl: "/avatar-user.jpg",
	},
];

export default function StorisList() {
	return (
		<ScrollArea className="mb-4 w-full overflow-x-auto">
			<div className="flex w-max gap-3">
				{stories.map((story) => (
					<div
						key={story.id}
						className="relative h-[200px] w-[112px] shrink-0 overflow-hidden rounded-xl bg-gray-200 shadow-md"
					>
						<Image src={story.backgroundUrl} alt={story.name} fill className="object-cover" />
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

						{/* Avatar */}
						<div className="absolute top-2 left-2 h-9 w-9 overflow-hidden rounded-full border-2 border-blue-500">
							<Image src={story.avatarUrl} alt={story.name} width={36} height={36} />
							{story.isMe && (
								<div className="absolute inset-0 flex items-center justify-center bg-black/40 text-xl font-bold text-white">
									+
								</div>
							)}
						</div>

						{/* Name */}
						<div className="absolute right-2 bottom-2 left-2 text-sm font-semibold text-white drop-shadow">
							{story.name}
						</div>
					</div>
				))}
			</div>
			<ScrollBar hidden={true} orientation="horizontal" />
		</ScrollArea>
	);
}
