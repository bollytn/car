import Header from "@/components/Header";
import MyListing from "./components/MyListing";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Profile = () => {
    // Animation variants for the TabsList
    const tabsListVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1, // Stagger the animation of the children
            },
        },
    };

    // Animation variants for the TabsTrigger
    const tabVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" },
        active: {
            scale: 1.1,
            backgroundColor: "#0463CD", // Replace with your primary color
            color: "#ffffff", // Replace with your text color
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
            transition: { duration: 0.2 },
        },
    };

    return (
        <div>
            <Header />
            <div className="px-10 md:px-20 my-10">
                <Tabs defaultValue="myListing" className="w-full">
                    <motion.div
                        variants={tabsListVariants}
                        initial="hidden"
                        animate="visible"
                        className="shadow-sm bg-slate-300 rounded-xl p-1"
                    >
                        <TabsList>
                            <motion.div
                                variants={tabVariants}
                                whileHover="hover"
                                whileTap="active"
                                className="rounded-xl"
                            >
                                <TabsTrigger value="myListing" className=" rounded-xl">My Listing</TabsTrigger>
                            </motion.div>
                            <motion.div
                                variants={tabVariants}
                                whileHover="hover"
                                whileTap="active"
                                className="rounded-xl"
                            >
                                <TabsTrigger value="inbox" className=" rounded-xl">Inbox</TabsTrigger>
                            </motion.div>
                            <motion.div
                                variants={tabVariants}
                                whileHover="hover"
                                whileTap="active"
                                className="rounded-xl"
                            >
                                <TabsTrigger value="profile" className=" rounded-xl">Profile</TabsTrigger>
                            </motion.div>
                        </TabsList>
                    </motion.div>
                    <TabsContent value="myListing">
                        <MyListing />
                    </TabsContent>
                    <TabsContent value="inbox">Inbox content here.</TabsContent>
                    <TabsContent value="profile">Profile content here.</TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Profile;
