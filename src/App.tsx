import React, {useEffect, useState} from 'react';
import './App.css';
import {Box, Container} from "@material-ui/core";
import {ApiURL} from "./api/useFetchUsers";
import {Paginator} from "./components/Paginator/Paginator";
import {UserCard} from "./components/Card/UserCard";

export type ItemsType = {
    id: number
    name: string
    photos: {
        small: string
        large: string
    }
}

export type DataType = {
    totalCount: number
    items: ItemsType[]
}

const App = () => {

    const pageInit = {
        portion: 5,
        currentPage: 2,
    }

    const dataInit = {
        totalCount: 0,
        items: []
    }

    const [page, setPage] = useState<any>(pageInit);
    const [data, setData] = useState<DataType>(dataInit);

    useEffect(() => {
        ApiURL.getUsers(page)
            .then((res) => {
                setData(res.data)
            })
    }, [page])

    const onCurrentPageChange = (currentPage: number) => {
        setPage({...page, currentPage})
    }

    return (
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" alignItems="center">
                <UserCard users={data.items}/>
                <Paginator
                    totalUsersCount={data.totalCount}
                    portion={page.portion}
                    currentPage={page.currentPage}
                    onCurrentPageChange={onCurrentPageChange}
                />
            </Box>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quod.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque veniam voluptatibus.</p>
            <p>Lorem ipsum dolor sit amet, consecteturY adipisicing elit. Consectetur cumque veniam voluptatibus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quod.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque veniam voluptatibus.</p>
            <p>Lorem ipsum dolor sit amet, consecteturY adipisicing elit. Consectetur cumque veniam voluptatibus.</p>
            <ul>
                <li>1</li>
                <li>3</li>
                <li>3</li>
                <li>4</li>
                <li>1</li>
                <li>3</li>
                <li>3</li>
                <li>4</li>
            </ul>
            <h1>NEW LINE</h1>
        </Container>
    );
}

export default App;