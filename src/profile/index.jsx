import Header from "@/components/Header"
import MyListing from "./components/MyListing"

const Profile = () => {
    return (
        <div>
            <Header />
            <div className="px-10 md:px-20 my-10">
                <MyListing />
            </div>
        </div>
    )
}

export default Profile