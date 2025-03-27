import { Input } from "@/components/ui/input"
import PropTypes from "prop-types"
const InputField = ({ item }) => {
    return (
        <div>
            <Input type={item?.fieldType} name={item?.name} required={item?.required} className="w-full" />
        </div>
    )
}

// PropTypes for type checking and better developer experience
InputField.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        fieldType: PropTypes.string.isRequired,
        required: PropTypes.bool.isRequired,
    }).isRequired,
}

export default InputField