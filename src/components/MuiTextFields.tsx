import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const MuiTextFields = () => {
    const [value, setValue] = useState("");
    return (
        <Stack spacing={4} direction='column' margin={2}>
            <Stack direction='row' spacing={2} >
                < TextField label="name" variant='outlined' />
                < TextField label="address" variant='filled' />
                < TextField label="name" variant='standard' />
            </Stack>

            <Stack direction='row' spacing={2} >
                < TextField label="small primary" size='small' color='primary' variant='outlined' />
                < TextField label="medium secondary" size='medium' color='secondary' variant='filled' />
            </Stack>
            <Stack direction='row' spacing={2} >
                {/* Error is used for showing error condition in textField */}
                < TextField sx={{
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'green', // Set your desired background color here
                    },
                }} label="Form Input" value={value} helperText={!value ? "Required" : "Do not share your password with anyone"} onChange={(e) => setValue(e.target.value)} required error={!value} />
                < TextField label="Password" placeholder='readOnly ' helperText="Do not share your password" type='password' disabled />
                < TextField label="Input" InputProps={{ readOnly: true }} placeholder='readOnly' />
            </Stack>

            {/* To use prefix and suffix insdie Input field */}

            {/*  used  for hide the spinner in number input
     sx={{

                    'input[type=number]::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    } */}
            <Stack direction='row' spacing={2}>
                <TextField label='Amount' type="number" InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }} sx={{
                    'input[type=number]::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    },
                    'input[type=number]::-webkit-outer-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    }
                }}
                    className="noSpinButtons" />
                <TextField label='Weight' type="number" InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                }}
                />
            </Stack>
        </Stack>
    )
}

export default MuiTextFields;