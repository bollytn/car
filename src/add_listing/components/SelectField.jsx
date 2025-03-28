import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import PropTypes from 'prop-types';

const SelectField = ({ item, handleInputChange }) => {
    return (
        <div>
            <Select onValueChange={(value) => handleInputChange(item.name, value)} required={item.required}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={item?.placeholder} />
                </SelectTrigger>
                <SelectContent className="bg-gray-100">
                    {item?.options.map((option, index) => (
                        <SelectItem key={index} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

        </div>
    )
}

SelectField.propTypes = {
    handleInputChange: PropTypes.func,
    item: PropTypes.shape({
        placeholder: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string,
        required: PropTypes.bool,
        options: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default SelectField