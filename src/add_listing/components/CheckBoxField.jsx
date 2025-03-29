import { Checkbox } from "@/components/ui/checkbox"
import PropTypes from "prop-types"

const CheckBoxField = ({ item, handleFeatureChange }) => {
    return (
        <div>
            <Checkbox name={item.label} onCheckedChange={(value) => handleFeatureChange(item.label, value)} />
        </div>
    )
}
CheckBoxField.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string,
    }).isRequired,
    handleFeatureChange: PropTypes.func,
}

export default CheckBoxField