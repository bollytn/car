import Header from "@/components/Header"
import { useState } from "react"

import InputField from "./components/InputField"
import SelectField from "./components/SelectField"
import TextAreaField from "./components/TextAreaField"

import { Separator } from "@/components/ui/separator"

import carDetails from "./../data/carDetails.json"
import features from "./../data/features.json"
import CheckBoxField from "./components/CheckBoxField"
import { Button } from "@/components/ui/button"

const AddListing = () => {

    const [formData, setFormData] = useState([])

    const handleInputChange = (name, value) => {
        {/*setFormData(prevData => [...prevData, { name, value }])*/ }
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

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
                            {carDetails.carDetails.map((item, index) => (
                                <div key={index}>
                                    <label className="text-sm">{item?.label} {item.required && <span className="text-red-500">*</span>}</label>
                                    {(item.fieldType == 'text' || item.fieldType == 'number')
                                        ? <InputField item={item} handleInputChange={handleInputChange} />
                                        : item.fieldType == 'dropdown' ? <SelectField item={item} handleInputChange={handleInputChange} />
                                            : item.fieldType == 'textarea' ? <TextAreaField item={item} handleInputChange={handleInputChange} />
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
                                    <CheckBoxField item={item} handleInputChange={handleInputChange} />
                                    <h2>{item.label}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Separator className="linear_line my-10" />
                    {/*car images */}
                    <div className="mt-10 flex justify-end">
                        <Button onClick={e => handleSubmit(e)}>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddListing