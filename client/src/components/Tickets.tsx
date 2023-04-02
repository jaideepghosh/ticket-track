import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HttpService from "../utils/http";
import { getIcon } from "../utils/icons";

const Tickets = () => {
    const [tickets, setTickets] = useState([]);

    const fetchTickets = async () => {
        try {
            const response = await HttpService.get(`tickets`);
            setTickets(response.data);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        fetchTickets();
    }, [tickets]);

    return (
            <div className="rounded-xl border border-gray-200 bg-white py-4 px-2 shadow-md shadow-gray-100 mt-2">
                        <div className="flex items-center justify-between px-2 text-base font-medium text-gray-700">
                            Tickets
                        </div>

                        <div className="mt-4">
                            <div className="flex max-h-[600px] w-full flex-col overflow-y-scroll">
                            {
                                tickets.map((ticket: any) => 
                                    <Link to={`/tickets/${ticket.transactionId}`} className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-yellow-100" key={ticket._id}>
                                        <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-yellow-200">
                                            <span className="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900">
                                                {
                                                    getIcon(ticket.status)
                                                }
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-start justify-between font-light text-gray-600">
                                            <p className="text-[20px]">{ticket.title}</p>
                                            <p className="text-[15px]">{ticket.status}</p>
                                        </div>
                                    </Link>
                                )
                            }

                            </div>
                        </div>
            </div>
    );
}

export default Tickets;