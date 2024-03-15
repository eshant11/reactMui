import { Label } from '@mui/icons-material';
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

function RadioButton() {
    const [value, setValue] = useState('');
    console.log({ value }); // This will show a state in key:value pair 
    console.log(value); // This will gives only a value

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <Box>
            <FormControl>
                {/* id and aria-labelledby(htmlFor) should be equal */}
                <FormLabel id='job-experience-group-label'>
                    Years of experience
                </FormLabel>
                <RadioGroup name='job-experience-grp'
                    aria-labelledby='job-experience-group-label'
                    onChange={handleChange}>
                    {/*  control means whether it is 'Checkbox' or 'Radio' */}
                    <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                    <FormControlLabel control={<Radio />} label='5-8' value='5-8' />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default RadioButton;