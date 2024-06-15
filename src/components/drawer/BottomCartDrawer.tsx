import { useEffect, useState } from 'react';
import OrderItemList from '../OrderItemList';
import DrawerCloseButton from '../DrawerCloseButton';
import { IoCartOutline } from 'react-icons/io5';
import { useAppSelector } from '../../redux/app/hooks';
import { RootState } from '../../redux/app/store';
import { LuDot } from 'react-icons/lu';

export default function BottomCartDrawer() {
    const { totalPrice, totalProduct } = useAppSelector((state: RootState) => state.cart);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "scroll"
        }
    }, [isOpen])

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleDrawer} className="fixed md:hidden bottom-3 right-3 z-30 btn btn-sm border-brand-800 bg-brand-600 hover:bg-brand-500 text-white">
                <p className='flex gap-1 items-center'>  
                    <IoCartOutline className="text-xl" />
                    View order
                    <LuDot className='text-xl -mx-1' />
                    {totalProduct} items
                    <LuDot className='text-xl -mx-1' />
                    ${totalPrice}</p>
            </button>

            {/* Drawer Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleDrawer}
            ></div>

            {/* Drawer Content */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-50 w-full transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <div className='bg-white p-4'>
                    <button onClick={toggleDrawer}>
                        <DrawerCloseButton />
                    </button>
                    <OrderItemList />
                </div>
            </div>
        </>
    );
}
