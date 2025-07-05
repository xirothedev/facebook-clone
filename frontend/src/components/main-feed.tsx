import CreatePost from "./main/create-post";
import PostItem from "./main/post-item";
import StoriesList from "./main/stories-list";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export default function MainFeed() {
	return (
		<ScrollArea
			// showScrollbar={false}
			className="col-span-2 h-[calc(100vh-56px)]"
		>
			<div className="w-[680px] flex flex-col mx-auto">
				<CreatePost />
				<StoriesList />
				<PostItem />
				<PostItem />
				<PostItem />
			</div>
			<ScrollBar hidden={true} orientation="vertical" />
		</ScrollArea>
	);
}
