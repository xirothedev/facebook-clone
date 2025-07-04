import Header from "@/components/header";
import SidebarLeft from "@/components/sidebar-left";

export default function FacebookClone() {
	return (
		<div className="bg-[#F2F4F7] min-h-screen">
			<Header />
			<main className="grid grid-cols-4 gap-2.5 pt-14 max-w-[1300px]">
				<SidebarLeft />
				<div></div>
				<div></div>
			</main>
		</div>
	);
}
