
const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between max-sm:flex max-sm:justify-between">
                    <a
                        href="#"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <img src="/car.svg" alt="car" width={100} height={100} className='object-contain' />

                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2025{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Bollytn
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer