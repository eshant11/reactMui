import { Box, TextField, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const Select = () => {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState<string[]>([])
    console.log({ country });
    console.log({ countries });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value as string)
    }

    // Multiple selection in one select
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
    return (
        // we can use the  BOX instead of  Div
        <Box width="250px">
            <TextField variant='outlined' placeholder='hgfh' select label="Select Country" sx={{
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                    // Change border color to transparent on hover
                },
            }} fullWidth onChange={handleChange} value={country}>
                <MenuItem value='IN' defaultValue="India">India</MenuItem>
                <MenuItem value='US' defaultValue="India">USA</MenuItem>
                <MenuItem value='UK' defaultValue="">India</MenuItem>
            </TextField>

            {/* MUltiple selection in one select */}
            <TextField variant='outlined' placeholder='hgfh' select label="Select Country" sx={{
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',

                    // Change border color to transparent on hover
                }, marginTop: "20px"
            }} fullWidth onChange={handleInputChange} value={countries} SelectProps={{ multiple: true }} size='small'
                helperText="Please select your Country" >
                <MenuItem value='IN' defaultValue="India">India</MenuItem>
                <MenuItem value='US' defaultValue="India">USA</MenuItem>
                <MenuItem value='UK' defaultValue="">India</MenuItem>
            </TextField>
        </Box>
    )
}

export default Select