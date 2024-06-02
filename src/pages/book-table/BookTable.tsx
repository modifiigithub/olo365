import { useGetTablesQuery } from "../../redux/features/common/commonApi"

const tables = [
    {
        name: "Delicious Bistro",
        location: "123 Main Street",
        tables: [
            {
                table_id: "001",
                capacity: 4,
                availability: true
            },
            {
                table_id: "302",
                capacity: 6,
                availability: true
            },
            {
                table_id: "12",
                capacity: 2,
                availability: false
            }
        ]
    },
    {
        name: "Tasty Tavern",
        location: "789 Oak Lane",
        tables: [
            {
                table_id: "42",
                capacity: 2,
                availability: true
            },
            {
                table_id: "96",
                capacity: 8,
                availability: true
            }
        ]
    },
    {
        name: "Spicy Thai",
        location: "246 Elm Street",
        tables: [
            {
                table_id: "101",
                capacity: 2,
                availability: true
            },
            {
                table_id: "202",
                capacity: 4,
                availability: false
            },
            {
                table_id: "303",
                capacity: 6,
                availability: true
            }
        ]
    },
    {
        name: "Burger Joint",
        location: "369 Oak Avenue",
        tables: [
            {
                table_id: "40",
                capacity: 2,
                availability: true
            },
            {
                table_id: "50",
                capacity: 4,
                availability: true
            }
        ]
    },
    {
        name: "Vegetarian Cafe",
        location: "789 Pine Lane",
        tables: [
            {
                table_id: "75",
                capacity: 2,
                availability: true
            },
            {
                table_id: "85",
                capacity: 4,
                availability: true
            },
            {
                table_id: "95",
                capacity: 6,
                availability: true
            },
            {
                table_id: "5",
                capacity: 6,
                availability: true
            }
        ]
    },
    {
        name: "Sizzling Steakhouse",
        location: "456 Maple Avenue",
        tables: [
            {
                table_id: "103",
                capacity: 4,
                availability: true
            },
            {
                table_id: "205",
                capacity: 6,
                availability: true
            },
            {
                table_id: "307",
                capacity: 2,
                availability: true
            },
            {
                table_id: "11",
                capacity: 4,
                availability: true
            },
            {
                table_id: "301",
                capacity: 6,
                availability: false
            },
            {
                table_id: "307",
                capacity: 2,
                availability: true
            }
        ]
    },
    {
        name: "Pizza Paradise",
        location: "567 Pine Street",
        tables: [
            {
                table_id: "10",
                capacity: 2,
                availability: false
            },
            {
                table_id: "22",
                capacity: 4,
                availability: true
            },
            {
                table_id: "33",
                capacity: 6,
                availability: true
            }
        ]
    },
    {
        name: "Seafood Sensation",
        location: "890 Cedar Lane",
        tables: [
            {
                table_id: "15",
                capacity: 2,
                availability: true
            },
            {
                table_id: "25",
                capacity: 4,
                availability: true
            },
            {
                table_id: "35",
                capacity: 6,
                availability: false
            }
        ]
    }
]

export default function BookTable() {
    const { data } = useGetTablesQuery(undefined)

    console.log(data)
    return (
        <section className="container min-h-[80vh]">
            <div>
                <h2 className="text-4xl font-semibold text-center mt-10">Reserve your perfect table</h2>
                <div className="mt-12 flex justify-center items-center gap-4">
                    <div>
                        <input type="date" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <select className="select select-bordered w-full">
                            <option value="2000-02-01T21:30:00">9:30 p.m.</option>
                            <option value="2000-02-01T22:00:00">10:00 p.m.</option>
                            <option value="2000-02-01T22:30:00">10:30 p.m.</option>
                            <option value="2000-02-01T23:00:00">11:00 p.m.</option>
                            <option value="2000-02-01T23:30:00">11:30 p.m.</option>
                        </select>
                    </div>
                    <div>
                        <select className="select select-bordered w-full">
                            <option value="1">1 person</option>
                            <option value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 people</option>
                            <option value="6">6 people</option>
                            <option value="7">7 people</option>
                            <option value="8">8 people</option>
                            <option value="9">9 people</option>
                            <option value="10">10 people</option>
                            <option value="11">11 people</option>
                            <option value="12">12 people</option>
                            <option value="13">13 people</option>
                            <option value="14">14 people</option>
                            <option value="15">15 people</option>
                            <option value="16">16 people</option>
                            <option value="17">17 people</option>
                            <option value="18">18 people</option>
                            <option value="19">19 people</option>
                            <option value="20">20 people</option>
                            <option value="21">Larger party</option>
                        </select>
                    </div>
                    <div>
                        <button className="btn text-white rounded-lg text-base bg-brand-600 hover:bg-brand-500">
                            Let's go
                        </button>
                    </div>
                </div>
                <div className="my-10">
                    <h3 className="text-2xl font-semibold">Book for dinner tonight in India</h3>
                    <div className="flex flex-col gap-4 mt-6">

                        {
                            tables.map(restaurant => <div key={restaurant.name} className="collapse bg-base-200">
                                <input type="radio" name="my-accordion-1" defaultChecked />
                                <div className="collapse-title text-xl font-bold">
                                    {restaurant.name}
                                </div>
                                <div className="collapse-content">
                                    <div className="grid grid-cols-12 gap-6">
                                        {
                                            restaurant.tables.map(table =>
                                                <div key={table.table_id} className="relative col-span-12 md:col-span-3 border border-stone-300 p-4 rounded-xl bg-white">
                                                    {table.availability && <div className="absolute top-3 right-3 badge bg-[#327df2] text-white">
                                                        Available
                                                    </div>}

                                                    {!table.availability && <div className="absolute top-3 right-3 badge bg-red-500 text-white">
                                                        Not Available
                                                    </div>}
                                                    <p className="my-2 text-xl"><b> Table Id:</b> {table.table_id}</p>
                                                    <p className="text-lg"><b>Capacity:</b> {table.capacity}</p>

                                                    <button className="btn btn-sm text-white rounded-full text-base bg-brand-600 hover:bg-brand-500 mt-3">Book Now</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}
