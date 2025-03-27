import Header from "@/components/Header"

const AddListing = () => {
    return (
        <div>
            <Header />
            <div className="px-10 md:px-20 my-10">
                <h2 className="font-bold text-4xl">Add New Listing</h2>
                <form className="p-10 mt-10 border border-gray-300 shadow-sm rounded-xl">
                    {/* car détails */}
                    <div >
                        <h2 className="font-medium text-xl mb-6">Car Details</h2>
                    </div>
                    {/* future liste */}

                    {/*car images */}
                </form>
            </div>
        </div>
    )
}

export default AddListing