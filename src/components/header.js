const Header = () => {
    return <header>
        <nav className="bg-blue-500 px-4 lg:px-6 py-2.5  border-gray-200 ">
            <div className="flex items-center mx-auto max-w-screen-xl flex-wrap justify-between ">
                <a href="#link" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Logo Here</span>
                </a>
                <div className="flex items-center lg:order-2 ">
                    <a href="#link" className="text-white m-2 p-1 hover:bg-blue-600 rounded focus:ring font-medium">Log in</a>
                    <a href="#link" className="text-white m-2 p-1 hover:bg-blue-600 rounded focus:ring font-medium">Get started</a>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 mobile-sm" >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#link" className="hover:text-gray-300 text-white rounded bg-primary-700 block py-2 pr-4 pl-3  lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" >Home</a>
                        </li>
                        <li>
                            <a href="#link" className="hover:text-gray-300 block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent  rounded bg-primary-700  lg:text-primary-700 lg:p-0 dark:text-white" >Company</a>
                        </li>
                        <li>
                            <a href="#link" className="hover:text-gray-300  block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent  rounded bg-primary-700  lg:text-primary-700 lg:p-0 dark:text-white" >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
}

export default Header; 