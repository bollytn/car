import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const MyListing = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-4xl">My Listing</h2>
                <Link to='/add_listing'>
                    <Button className="linear">+ Add New Listing</Button>
                </Link>
            </div>
        </div>
    )
}

export default MyListing