import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const Search = () => {
    return (
        <div className="flex flex-col bg-white p-4 rounded-md items-center px-5 gap-10 w-[60%] md:rounded-full md:flex-row md:p-5">
            <Select>
                <SelectTrigger className="w-[180px] outline-none focus:outline-none shadow-none text-lg md:border-none">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="w-[180px] mt-4">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="w-[180px] outline-none focus:outline-none shadow-none text-lg md:border-none">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="w-[180px] mt-4">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="w-[180px] outline-none focus:outline-none shadow-none text-lg md:border-none">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="w-[180px] mt-4">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default Search