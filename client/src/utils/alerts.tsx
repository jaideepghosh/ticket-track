export enum AlertTypes {
    Info,
    Danger,
    Success,
    Warning,
}

interface AlertPropType {
    message: string | null,
    type: AlertTypes,
    onClose: () => void
}

const Alert = ({message, type, onClose}: AlertPropType) => {
    let color;
    switch (type) {
        case AlertTypes.Info:
            color = "blue"
            break;
        case AlertTypes.Danger:
            color = "red"
            break;
        case AlertTypes.Success:
            color = "green"
            break;
        case AlertTypes.Warning:
            color = "yellow"
            break;
        default:
            color = "blue"
            break;
    }

    return (
        <div className={`flex p-4 mb-4 text-sm text-${color}-800 rounded-lg bg-${color}-50 dark:bg-gray-800 dark:text-${color}-400`} role="alert">
            
            <div className="ml-3 text-sm font-medium">
            {message}

            </div>

            
            <button
                type="button"
                className={`ml-auto -mx-1.5 -my-1.5 bg-${color}-50 text-${color}-500 rounded-lg focus:ring-2 focus:ring-${color}-400 p-1.5 hover:bg-${color}-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-${color}-400 dark:hover:bg-gray-700`}
                data-dismiss-target="#alert-1"
                aria-label="Close"
                onClick={onClose}
                >
                <span className="sr-only">Close</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </button>
        </div>
    );
}

export default Alert;