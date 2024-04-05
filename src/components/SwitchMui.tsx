import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Switch, } from '@mui/material';
import React, { useState } from 'react'

const SwitchMui = () => {
    const [isChecked, setIsChecked] = useState(false);
    console.log(isChecked);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked)
    }
    const handleSkill = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = e.target.value;
        console.log(selectedValue);

        // If the selected value is already the selected language, deselect it
        if (selectedLanguage === selectedValue) {
            setSelectedLanguage('');
        } else {
            // Otherwise, update the selected language
            setSelectedLanguage(selectedValue);
            console.log(selectedLanguage, "ffdf");

        }
    };
    return (
        <>
            <Box >
                <FormControlLabel control={<Switch checked={isChecked} onChange={handleChange} />} label="Dark Mode" />
            </Box >
            <Box>
                <FormControl>
                    <FormLabel>
                        Skills
                    </FormLabel>
                    {/* row is used for setting checkbox in a row */}
                    <FormGroup row>
                        <FormControlLabel label="CSS" value="css" control={<Switch value="css" checked={selectedLanguage === 'css'} onChange={handleSkill} />}></FormControlLabel>
                        <FormControlLabel label="JS" value="js" control={<Switch value="js" checked={selectedLanguage === 'js'} onChange={handleSkill} />} ></FormControlLabel>
                        <FormControlLabel label="HTML" value="html" control={<Switch value="html" checked={selectedLanguage === 'html'} onChange={handleSkill} />}        ></FormControlLabel>
                    </FormGroup>

                </FormControl>
            </Box>
        </>
    )
}

export default SwitchMui;