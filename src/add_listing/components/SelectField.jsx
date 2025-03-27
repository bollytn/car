import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import PropTypes from 'prop-types';

const SelectField = ({ item }) => {
    return (
        <div>
            <Select>
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
    item: PropTypes.shape({
        placeholder: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default SelectField