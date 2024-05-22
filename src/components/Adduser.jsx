import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { createUser } from '../apis/Api';
import { toast } from 'react-toastify';
import { BtnLoader } from './BtnLoader'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export function Adduser() {

    
    const {register, handleSubmit, formState: { errors }} = useForm()
    const result = useMutation({
        mutationFn: (payload) => createUser('student/create', payload)
    })

    console.log(result.data);
    // console.log(result.data?.data?.message);

    if (result.data?.status === 200) {
        toast.success(result.data.data.message)
    } else {
        toast.error(result.data?.data?.message)
    }

    const onSubmit = (data) => {
        // console.log(data);
        result.mutate(data)
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="name Address"
                            name="name"
                            autoComplete="email"
                            autoFocus
                            {...register('name', { required: true})}
                        />
                        {errors.name?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', marginLeft: '20px', padding: '2px 10px'}}>@Name is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            {...register('email', { required: true })}
                        />
                        {errors.email?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', marginLeft: '20px', padding: '2px 10px' }}>@email is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="phone Address"
                            name="phone"
                            autoComplete="phone"
                            autoFocus
                            {...register('phone', { required: true })}
                        />
                        {errors.phone?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', marginLeft: '20px', padding: '2px 10px' }}>@phone is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="city"
                            label="city Address"
                            name="city"
                            autoComplete="city"
                            autoFocus
                            {...register('city', { required: true })}
                        />
                        {errors.city?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', marginLeft: '20px', padding: '2px 10px' }}>@city is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="address"
                            label="address Address"
                            name="address"
                            autoComplete="address"
                            autoFocus
                            {...register('address', { required: true })}
                        />
                        {errors.address?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', marginLeft: '20px', padding: '2px 10px' }}>@address is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="state"
                            label="state Address"
                            name="state"
                            autoComplete="state"
                            autoFocus
                            {...register('state', { required: true })}
                        />
                        {errors.state?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', marginLeft: '20px', padding: '2px 10px' }}>@state is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="section"
                            label="section Address"
                            name="section"
                            autoComplete="section"
                            autoFocus
                            {...register('section', { required: true })}
                        />
                        {errors.section?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', marginLeft: '20px', padding: '2px 10px' }}>@section is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="classes"
                            label="classes Address"
                            name="classes"
                            autoComplete="classes"
                            autoFocus
                            {...register('classes', { required: true })}
                        />
                        {errors.classes?.type === 'required' && <span style={{ color: 'white', backgroundColor: 'red', fontSize: '12px', marginLeft: '20px', padding: '2px 10px' }}>@classes is required</span>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {result.isPending ? <BtnLoader height={20} width={60}/> : 'Add User'}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}