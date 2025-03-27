import { Textarea } from "@/components/ui/textarea"
import PropTypes from "prop-types"

const TextAreaField = ({ item }) => {
    return (
        <div>
            <Textarea required={item.required} />
        </div>
    )
}
TextAreaField.propTypes = {
    item: PropTypes.shape({
        required: PropTypes.bool,
    }),
}

export default TextAreaField