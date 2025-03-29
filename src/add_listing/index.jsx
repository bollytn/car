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

import { db } from "./../../configs"
import { CarListing } from "./../../configs/schema"
import IconField from "./components/IconField"

import { Slide, ToastContainer, toast } from 'react-toastify';

import { BadgeCheck, CircleAlert } from 'lucide-react';
import UploadImages from "./components/UploadImages"

const AddListing = () => {

    const [formData, setFormData] = useState([])
    const [trigerUploadImages, setTrigerUploadImages] = useState(Number)

    const handleInputChange = (name, value) => {
        {/*setFormData(prevData => [...prevData, { name, value }])*/ }
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Ensure 'type' is included in formData
            const dataToInsert = {
                ...formData,
                type: formData.type || 'defaultType', // Replace 'defaultType' with an appropriate default value
            };

            console.log(dataToInsert);

            // Insert data into the database
            const response = await db.insert(CarListing).values(dataToInsert).returning({ id: CarListing.id })
            if (response) {
                toast.success('Data inserted successfully!', {
                    icon: <BadgeCheck className="text-green-500" />,
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
                setTrigerUploadImages(response[0].id);
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`, {
                icon: <CircleAlert className="text-red-500" />,
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
        }
    }

    return (
        <div>
            <ToastContainer /> {/* Ensure this is rendered */}
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
                                    <label className="text-sm flex gap-2 items-center mb-1">
                                        <IconField icon={item.icon} />
                                        {item?.label}
                                        {item.required && <span className="text-red-500">*</span>}
                                    </label>
                                    {(item.fieldType == 'text' || item.fieldType == 'number')
                                        ? <InputField item={item} handleInputChange={handleInputChange} />
                                        : item.fieldType == 'dropdown' ? <SelectField item={item} handleInputChange={handleInputChange} />
                                            : item.fieldType == 'textarea' ? <TextAreaField item={item} handleInputChange={handleInputChange} />
                                                : null}
                                </div>
                            ))}
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
                    <UploadImages trigerUploadImages={trigerUploadImages} />
                    <div className="mt-10 flex justify-end">
                        <Button onClick={e => handleSubmit(e)}>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddListing