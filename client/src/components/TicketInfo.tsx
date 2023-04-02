import { useState } from "react";
import Dropdown from "./Dropdown";
import { StatusOptions } from "../constants/common";

const TicketInfo = () => {
    const [options, setOptions] = useState(StatusOptions);
    const [selectedOption, setSelectedOption] = useState("Closed");

    const handleDropdownValueChange = (event: any, option: string) => {
        event.preventDefault();
        if (selectedOption===option) return;
        setSelectedOption(event.target.innerText);
        return event.target.innerText;
    }

    return (
            <div className="rounded-xl border border-gray-200 bg-white py-4 px-2 shadow-md shadow-gray-100 mt-2">
                <div className="grid grid-cols-3 gap-4">
                    <div className="px-2 mt-1 col-span-2">
                        Ticket Id: 
                        <div className="flex gap-x-1 text-gray-400">
                            <div>
                                6426db5b60ca1be8b759321e
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <Dropdown
                            options={options}
                            selectedOption={selectedOption}
                            onChange={
                                handleDropdownValueChange
                            }
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex max-h-[600px] w-full flex-col overflow-y-scroll">
                            <div className="group flex items-center gap-x-5 rounded-md px-2.5 py-2">
                                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                    <p className="text-[30px]">Create a toolbar</p>
                                    <p className="text-[15px] text-justify mt-2 mb-2">
                                        Your task is to create a toolbar for a software application. The toolbar should be designed in such a way that it provides quick and easy access to frequently used functions and features within the application.
                                        <br/><br/>
                                        The toolbar should be visually appealing, user-friendly, and intuitive to use. It should be designed to fit seamlessly into the overall design of the application, and should be easily accessible from anywhere within the application.
                                        <br/><br/>
                                        The toolbar should contain icons or buttons for common functions such as "Save," "Open," "Cut," "Copy," "Paste," "Undo," "Redo," "Print," and any other functions that are commonly used within the application.
                                        <br/><br/>
                                        The toolbar should also allow for customization, so that users can add or remove functions as they see fit. It should be easy to configure the toolbar to display only the functions that are most relevant to the user's workflow.
                                        <br/><br/>
                                        In addition to the standard buttons and icons, the toolbar should also provide access to any specialized tools or features within the application that may not be as commonly used. This could include functions such as "Add Comment," "Spell Check," "Zoom In," "Zoom Out," and so on.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    );
}

export default TicketInfo;