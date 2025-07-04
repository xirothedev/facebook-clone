import Header from "@/components/header";
import MainFeed from "@/components/main-feed";
import SidebarLeft from "@/components/sidebar-left";
import SidebarRight from "@/components/sidebar-right";

export default function FacebookClone() {
	return (
		<div className="bg-[#F2F4F7]">
			<Header />
			<main className="grid grid-cols-4 gap-44 mt-14">
				<SidebarLeft />
        <MainFeed/>
				<SidebarRight />
			</main>
		</div>
	);
}
