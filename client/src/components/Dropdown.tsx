import { useEffect, useRef, useState } from "react";
import { CSSTransition } from 'react-transition-group';

interface DropdownProps {
  options: Array<string>,
  selectedOption: string | undefined,
  onChange: (event: any, option: string) => string
}

const Dropdown = (props: DropdownProps) => {
    const [visible, setVisibility] = useState(false);
    const [selectedOption, setSelectedOption] = useState(props.selectedOption);
    const [loader, setLoader] = useState(false);
    const nodeRef = useRef(null);
    
    useEffect(()=>{
      setSelectedOption(props.selectedOption);
    },[props.selectedOption]);

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
            Status: {selectedOption}
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
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
              
              {loader?
                <div className="absolute w-full bg-gray-500 flex h-full z-10 bg-opacity-50">
                  <div className="m-auto">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                  </div>
                </div>:""
              }

                {
                  props.options.map(option => {
                    return (
                      <div
                        key={option}
                        className={
                          `${
                            selectedOption===option?
                            'text-gray-900 bg-gray-100':
                            'text-gray-700'
                            } px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`
                        }
                        onClick={
                          (event: any) => {
                            setLoader(true);
                            setSelectedOption(props.onChange(event, option));
                            setLoader(false);
                          }
                        }
                        role="menuitem"
                        tabIndex={-1}>
                          {option}
                      </div>
                    )
                  })
                }
              </div>
          </div>
        </CSSTransition>
      </div>
    );
}

export default Dropdown;