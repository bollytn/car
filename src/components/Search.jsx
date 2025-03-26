import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Separator } from "@/components/ui/separator"
import { IoSearchOutline } from "react-icons/io5";

import Data from "@/data/Data";
const Search = () => {
    return (
        <div className="md:flex flex-col bg-white rounded-md items-center px-5 gap-10 w-[350px] md:w-[70vw] md:rounded-full md:flex-row p-2 md:p-5">

            <Select>
                <SelectTrigger className="w-full outline-none focus:outline-none shadow-none text-lg border-none">
                    <SelectValue placeholder="Cars" />
                </SelectTrigger>
                <SelectContent className="w-full -mt-4 ml-16 md:ml-0 md:mt-6">
                    <SelectItem value="light">New</SelectItem>
                    <SelectItem value="dark">Old</SelectItem>
                </SelectContent>
            </Select>
          
            <Separator orientation="vertical" className="bg-gray-300 hidden md:block" />
          
            <Select>
                <SelectTrigger className="w-full outline-none focus:outline-none shadow-none text-lg border-none">
                    <SelectValue placeholder="Cars Makes" />
                </SelectTrigger>
                <SelectContent className="w-full -mt-4 ml-16 md:ml-0 md:mt-6">
                    {/* Add car makes */}
                    {Data.CarMakes.map((maker) => (
                        <SelectItem key={maker.id} value={maker.name}>{maker.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Separator orientation="vertical" className="bg-gray-300 hidden md:block"/>

            <Select>
                <SelectTrigger className="w-full outline-none focus:outline-none shadow-none text-lg border-none">
                    <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent className="w-full -mt-4 ml-16 md:ml-0 md:mt-6">
                   {/* Add pricing */}
                   {Data.Pricing.map((price) => (
                        <SelectItem key={price.id} value={price.amount}>{price.amount}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <div className="md:-ml-10 flex justify-center">
            <IoSearchOutline className="text-[45px] linear rounded-full p-3 md:text[50px] md:p-2 cursor-pointer text-white font-bold hover:scale-105 transition-all duration-300" />
            </div>
        </div>
    )
}

export default Search