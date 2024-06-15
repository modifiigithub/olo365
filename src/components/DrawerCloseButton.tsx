import { IoMdClose } from "react-icons/io"
import { useAppDispatch } from "../redux/app/hooks"
import { closeDrawer } from "../redux/features/drawer/drawerSlice"

export default function DrawerCloseButton() {
    const dispatch = useAppDispatch()

    function handleClose() {
        dispatch(closeDrawer())
    }

    return (
        <button onClick={handleClose} className="btn rounded-full bg-slate-200">
            <p>
                <IoMdClose className="text-xl" />
            </p>
        </button>
    )
}
