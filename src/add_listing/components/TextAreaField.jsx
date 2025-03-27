import { Textarea } from "@/components/ui/textarea"
import PropTypes from "prop-types"

const TextAreaField = ({ item, handleInputChange }) => {
    return (
        <div>
            <Textarea
                required={item.required}
                onChange={(e) => handleInputChange(item.name, e.target.value)} />
        </div>
    )
}
TextAreaField.propTypes = {
    item: PropTypes.shape({
        required: PropTypes.bool,
        name: PropTypes.string,
    }),
    handleInputChange: PropTypes.func,
}

export default TextAreaField