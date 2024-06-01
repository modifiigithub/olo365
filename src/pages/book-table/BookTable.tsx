

export default function BookTable() {
    return (
        <section className="container min-h-[80vh]">
            <div>
                <h2 className="text-4xl font-semibold text-center mt-10">Reserve your perfect table</h2>

                <div className="mt-10 flex justify-center gap-4">
                    <div>
                        <input type="date" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>

                </div>

                <div className="grid grid-cols-12 gap-8 mt-10">
                    <div className="col-span-3 bg-slate-200">d</div>
                    <div className="col-span-8">d</div>
                </div>
            </div>
        </section>
    )
}
