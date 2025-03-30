import { Button } from "@/components/ui/button"
import { useUser } from "@clerk/clerk-react"
import { db } from "./../../../configs"
import { CarImages, CarListing } from "./../../../configs/schema"
import { desc, eq } from "drizzle-orm"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const MyListing = () => {

    const { user } = useUser()

    useEffect(() => {
        user && getUserCarListing()
    }, [user])

    // Your code for listing data from database drizzle ...
    const getUserCarListing = async () => {
        // drizzle.select().from(CarListing).where(eq(CarListing.createdBy, 'mahjoubi.bilel@gmail.com'))
        const result = await db.select().from(CarListing)
            .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
            .where(eq(CarListing.createdBy, user.primaryEmailAddress.emailAddress))
            .orderBy(desc(CarListing.id))
        console.log(result);

    }

    return (
        <div>
            <div className="flex justify-between items-center mt-4 mb-10">
                <h2 className="font-bold text-4xl">My Listing</h2>
                <Link to='/add_listing'>
                    <Button className="linear">+ Add New Listing</Button>
                </Link>
            </div>
        </div>
    )
}

export default MyListing