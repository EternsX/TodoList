import AddListModal from "./AddListModal";
import IconListModal from './IconListModal';


export default function Modals({ isAddListOpen, isIconListOpen, setIconListOpen, setIsAddListOpen}) {
    return (
        <>
            {isAddListOpen && (
                <AddListModal onClose={() => setIsAddListOpen(false)} />
            )}

            {isIconListOpen && (
                <IconListModal onClose={() => setIconListOpen(false)} />
            )}
        </>
    )
}