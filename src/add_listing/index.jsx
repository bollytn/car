import Header from "@/components/Header"
import carDetails from "./../data/carDetails.json"
import InputField from "./components/InputField"
import SelectField from "./components/SelectField"
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {
                                carDetails.carDetails.map((item, index) => (
                                    <div key={index}>
                                        <label className="text-sm">{item?.label} {item.required && <span className="text-red-500">*</span>}</label>
                                        {(item.fieldType == 'text' || item.fieldType == 'number')
                                            ? <InputField item={item} />
                                            : item.fieldType == 'dropdown' ? <SelectField item={item} />
                                                : null}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* future liste */}

                    {/*car images */}
                </form>
            </div>
        </div>
    )
}

export default AddListing