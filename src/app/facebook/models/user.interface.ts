
export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    geo: {
        lat: number,
        lng: number
    },
    phone: string,
    website: string,
    company: Company

}

export interface UserResolved{
    user:User,
    error?:any
}
export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: number,
        lng: number
    }
}
export interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}