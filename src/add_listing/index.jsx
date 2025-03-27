import Header from "@/components/Header"

import InputField from "./components/InputField"
import SelectField from "./components/SelectField"
import TextAreaField from "./components/TextAreaField"

import { Separator } from "@/components/ui/separator"

import carDetails from "./../data/carDetails.json"
import features from "./../data/features.json"
import CheckBoxField from "./components/CheckBoxField"
import { Button } from "@/components/ui/button"

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
                                                : item.fieldType == 'textarea' ? <TextAreaField item={item} />
                                                    : null}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Separator className="linear_line my-10" />
                    {/* future liste */}
                    <div>
                        <h2 className="font-medium text-xl mb-8">Features</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {features.features.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckBoxField item={item} />
                                    <h2>{item.label}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*car images */}
                    <div className="mt-10 flex justify-end">
                        <Button >Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddListing