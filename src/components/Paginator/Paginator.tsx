import * as React from 'react';
import {useState} from "react";
import s from './Paginator.module.css'
import cn from 'classnames'
import Typography from "@material-ui/core/Typography";

type Props = {
    totalUsersCount: number
    portion: number
    currentPage: number
    onCurrentPageChange: (currentPage: number) => void
};

export const Paginator = ({totalUsersCount, portion, onCurrentPageChange, currentPage}: Props) => {

    let portionCount = Math.ceil(totalUsersCount / portion)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portion + 1
    let rightPortionPageNumber = portionNumber * portion

    let pages = []
    for(let i = 0; i < portionCount; i++){
        pages.push(i);
    }

    const paginationStyle = {
        padding: 10,
        fontSize: 22,
        border: 2,
    }

    return (
        <Typography>
            {leftPortionPageNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
            }
            {pages.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span key={p}
                                 style={paginationStyle}
                                 className={cn({
                                     [s.selectedPage]: p === currentPage
                                 })}
                                 onClick={() => onCurrentPageChange(p)}
                    >{p}</span>
                })
            }
            {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
            }
        </Typography>
    );
};