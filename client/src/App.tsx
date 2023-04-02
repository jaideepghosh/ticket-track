import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tickets from "./components/Tickets";
import TicketInfo from "./components/TicketInfo";
import PageNotFound from "./components/404";

const App = () => {
    return (
        <div>
          <div className="bg-gray-200">
            <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2">
                <div className="w-[600px] rounded-xl py-4 px-2 items-center">
                  <BrowserRouter>
                    <Routes>
                        <Route index element={<Tickets />} />
                        <Route path="tickets/:ticketId" element={<TicketInfo />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                  </BrowserRouter>
                </div>
            </div>
          </div>
        </div>
    );
}

export default App;
