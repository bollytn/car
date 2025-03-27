import { Checkbox } from "@/components/ui/checkbox"
import PropTypes from "prop-types"

const CheckBoxField = ({ item, handleInputChange }) => {
    return (
        <div>
            <Checkbox name={item.label} onCheckedChange={(value) => handleInputChange(item.label, value)} />
        </div>
    )
}
CheckBoxField.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string,
    }).isRequired,
    handleInputChange: PropTypes.func,
}

export default CheckBoxField