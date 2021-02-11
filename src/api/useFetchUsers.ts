import axios from "axios";

type PageType = {
    portion: number
    currentPage: number
}

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': "67a08907-cc22-4e0b-a836-3d637986d056"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const ApiURL = {

    getUsers(page: PageType){

        return instance.get(`users`, {
            params: {page: page.currentPage, count: page.portion}
        })
    }
}