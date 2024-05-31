import List from "./List";
import NewButton from "./NewButton";

export default function Sidebar() {
    return (
        <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex items-center p-3 flex-col gap-y-4 text-white">
            <List></List>
            <NewButton></NewButton>
        </aside>
    )
}