export interface IEmployee{
    id: string
    firstName: string
    lastName: string
    email: string
}
export const dummyEmployeeList: IEmployee[] = [{
    id: new Date().toJSON().toString(),
    firstName: "Johnson",
    lastName: "Mwebaze",
    email: "johnsonmwebaze@gmail.com"
}]

export enum PageEnum{
    list,
    add
}