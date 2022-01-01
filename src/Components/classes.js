//holds all the tailwind css styles for components in the website, allows for easy reusability of styles
const classes = {
    primaryButton: "py-2 px-4 bg-gradient-to-r from-green-400 to-blue-300 text-white transition ease-in duration-200 text-center text-base font-semibold hover:shadow-md focus:outline-none rounded",
    secondaryButton: "py-2 px-4 bg-transparent hover:bg-green-100 text-green-400 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none rounded",

    textfield: "rounded-lg transition ease-in duration-200 border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-transparent placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
    textfieldIcon: "z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-4 py-2.5",
    textfieldWithIcon: "px-4 py-2 placeholder-gray-400 relative-lg bg-transparent rounded-lg text-sm border border-gray-300 outline-none focus:outline-none focus:ring w-full pl-10 transition ease-in duration-200 border-transparent text-base focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent",
    
    unselectedPriorityButton: "transition ease-in duration-100 block px-4 py-2 mt-2 text-sm font-semibold rounded-lg bg-gray-600 md:mt-0 hover:bg-gray-700 mr-1 ml-1",
    selectedPriorityButton: "transition ease-in duration-100 block px-4 py-2 mt-2 text-sm font-semibold rounded-lg bg-gray-700 text-green-400 md:mt-0 outline-none shadow-outline mr-1 ml-1",

    unselectedFilterOption: "transition ease-in duration-200 block px-4 py-2 mt-2 text-sm font-semibold rounded-lg bg-transparent md:mt-0 hover:bg-gray-800 mr-1 ml-1",
    selectedFilterOption: "transition ease-in duration-200 block px-4 py-2 mt-2 text-sm font-semibold rounded-lg bg-transparent border-2 border-green-500 md:mt-0 outline-none shadow-outline mr-1 ml-1 text-green-500",

    checkbox: "form-tick appearance-none h-5 w-5 text-green-400 rounded transition ease-in duration-200 bg-transparent bg-check border border-gray-300 checked:bg-green-500 focus:outline-none focus:ring-1 focus:ring-green-500",

    primaryBadge: "bg-green-300 text-green-800 text-xs font-semibold mr-2 px-1.5 py-0.5 rounded text-green-800",
    darkBadge: "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300",

    Appbar: "bg-white align-center px-6 py-4 flex shadow-md justify-between",
    Title: "font-bold text-xl",
    Link: "mx-3 hover:text-green-500 transition ease-in duration-200"
}
export default classes