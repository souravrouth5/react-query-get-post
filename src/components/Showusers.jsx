import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useQuery } from '@tanstack/react-query'
import { ShowUsers } from '../apis/Api';

export function Showusers(){

    const {isLoading, data} = useQuery({
        queryKey: ['fetchAllUsers'],
        queryFn: () => ShowUsers('student/show')
    })

    console.log('lo', isLoading);
    console.log('data', data?.data?.data.reverse());
    if(isLoading){
        return <h1>Loading...</h1>
    }

    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Address&nbsp;</TableCell>
                            <TableCell align="right">City&nbsp;</TableCell>
                            <TableCell align="right">Phone&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.data?.data.reverse().map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.city}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}