import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Separator } from "@/components/ui/separator"

import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
    return (
        <div className="md:flex flex-col bg-white rounded-md items-center px-5 gap-10 w-[550px] lg:w-[60%] md:rounded-full md:flex-row p-2 md:p-5">
            <Select>
                <SelectTrigger className="w-full outline-none focus:outline-none shadow-none text-lg md:border-none">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="w-[180px] mt-4">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

          
            <Separator orientation="vertical" className="bg-gray-300 " />
          

            <Select>
                <SelectTrigger className="w-full outline-none focus:outline-none shadow-none text-lg md:border-none">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="w-[180px] mt-4">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

            <Separator orientation="vertical" className="bg-gray-300"/>

            <Select>
                <SelectTrigger className="w-full outline-none focus:outline-none shadow-none text-lg md:border-none">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="w-[180px] mt-4">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
            <div>
            <IoSearchOutline className="text-xl text-gray-400"/>
            </div>
        </div>
    )
}

export default Search