import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { RootState } from "../redux/app/store";
import { handleSearchModal } from "../redux/features/drawer/drawerSlice";
import ItemSearchInput from "./ItemSearchInput";
import Products from "./Products";

export default function SearchItemContainer() {
    const dispatch = useAppDispatch()
    const { searchModalMode } = useAppSelector((state: RootState) => state.drawer);

    function closeModal() {
        dispatch(handleSearchModal(false))
    }

    return (
        <div>
            <input type="checkbox" checked={searchModalMode} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box max-w-5xl">
                    <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    <h3 className="font-bold text-xl">Explore Menu Items</h3>
                    <div className="my-3">
                        <ItemSearchInput />
                    </div>
                    <div className="h-[28rem] overflow-y-scroll mt-5">
                        <Products />
                    </div>

                </div>
            </div>
        </div>
    )
}
