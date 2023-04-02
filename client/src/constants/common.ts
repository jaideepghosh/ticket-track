export const StatusOptions = [
    "Open",
    "In Progress",
    "Code Review",
    "Closed"
];

export interface TicketType {
    "_id": string,
    "status": string,
    "description": string,
    "title": string,
    "createdAt": Date,
    "updatedAt": Date,
    "__v": number
}

export default { StatusOptions };