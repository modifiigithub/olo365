

export default function AddAddressSidebarContent() {
    return (
        <div>
            <h2 className="text-xl font-bold">Save delivery address</h2>
            <form className="mt-5 flex flex-col gap-4">
                <div>
                    <input type="text" placeholder="Address" className="input input-bordered w-full" />
                </div>
                <div>
                    <input type="text" placeholder="Door / Flat No." className="input input-bordered w-full" />
                </div>
                <div>
                    <input type="text" placeholder="Landmark" className="input input-bordered w-full" />
                </div>

                <div className="mt-5">
                    <button className="btn text-white rounded-xl w-full text-base bg-brand-600 hover:bg-brand-500">
                        Save address and proceed
                    </button>
                </div>
            </form>

        </div>
    )
}
