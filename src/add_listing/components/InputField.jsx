import { Input } from "@/components/ui/input"
import PropTypes from "prop-types"
const InputField = ({ item, handleInputChange }) => {
    return (
        <div>
            <Input type={item?.fieldType}
                name={item?.name}
                required={item?.required}
                className="w-full"
                onChange={e => handleInputChange(item.name, e.target.value)}
            />
        </div>
    )
}

// PropTypes for type checking and better developer experience
InputField.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        fieldType: PropTypes.string,
        required: PropTypes.bool,
    }),
    handleInputChange: PropTypes.func,
}

// PropTypes for type checking and better developer experience
InputField.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        fieldType: PropTypes.string,
        required: PropTypes.bool,
    }),
}

export default InputField