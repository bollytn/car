import { Checkbox } from "@/components/ui/checkbox"
import PropTypes from "prop-types"

const CheckBoxField = ({ item }) => {
    return (
        <div>
            <Checkbox name={item.label} />
        </div>
    )
}
CheckBoxField.propTypes = {
    item: PropTypes.shape({
        label: PropTypes.string.isRequired,
    }).isRequired,
}

export default CheckBoxField