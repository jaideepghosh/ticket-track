import { useRef, useState } from "react";
import { CSSTransition } from 'react-transition-group';

const Dropdown = () => {
    const [visible, setVisibility] = useState(false);
    const nodeRef = useRef(null);
    return (
      <div className="relative inline-block text-left">
        <div>
          <button
              onClick={event => {
                  event.preventDefault();
                  setVisibility(currentVisibility => !currentVisibility);
              }}
              type="button"
              className="mt-2 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true">
            Status: Options
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <CSSTransition
          in={visible}
          nodeRef={nodeRef}
          timeout={150}
          classNames={{
              enter: 'transform opacity-0 scale-95',
              enterActive: 'transition ease-out duration-100',
              enterDone: 'transform opacity-100 scale-100',
              exit: 'transform opacity-100 scale-100',
              exitActive: 'transition ease-in duration-75',
              exitDone: 'transform opacity-0 scale-95',
            }}
          unmountOnExit
        >
          <div
              ref={nodeRef}
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}>
              <div className="py-1" role="none">
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex={-1} id="menu-item-0">Open</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex={-1} id="menu-item-1">In Progress</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex={-1} id="menu-item-2">Code Review</a>
                <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex={-1} id="menu-item-3">Closed</a>
              </div>
          </div>
        </CSSTransition>
      </div>
    );
}

export default Dropdown;