import { Bookmark, BookmarkBorder } from '@mui/icons-material';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'

const CheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false);

    //state for handling multiple checkbox
    const [skills, setSkills] = useState<string[]>([]);

    // it will set the acceptTnC on the basis of  checked prop
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setAcceptTnC(e.target.checked)
    }

    // const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const skill = e.target.value;
    //     if (e.target.checked) {
    //         // If checkbox is checked, add the skill to the array
    //         setSkills([...skills, skill]);
    //         console.log("skills added:", skills);

    //     } else {
    //         // If checkbox is unchecked, remove the skill from the array
    //         setSkills(skills.filter((s) => s !== skill));
    //         console.log("skills removed:", skills);
    //     }
    // };

    const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(e.target.value);
        //if skill is not found
        if (index === -1) {
            setSkills(prevSkills => [...prevSkills, e.target.value]);
        } else {
            setSkills(prevSkills => prevSkills.filter((s) => s !== e.target.value))
        }
    };
    useEffect(() => {
        console.log("Updated skills:", skills);
    }, [skills]); // Log the updated ski
    return (
        <Box>
            <Box>
                {/* checked={acceptTnC} is condition for checked or not */}
                <FormControlLabel control={<Checkbox checked={acceptTnC} onChange={handleChange} />} label='I accept term and conditions' />
            </Box>
            <Box>
                {/* icon={<BookmarkBorder />} used for initial state */}
                {/* checkedIcon={<Bookmark /> used for after checked state */}
                <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} checked={acceptTnC} onChange={handleChange}></Checkbox>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>
                        Skills
                    </FormLabel>
                    {/* row is used for setting checkbox in a row */}
                    <FormGroup row>
                        <FormControlLabel label="CSS" value="css" control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange} />}></FormControlLabel>
                        <FormControlLabel label="JS" value="js" control={<Checkbox value='js' checked={skills.includes('js')} onChange={handleSkillChange} />}></FormControlLabel>
                        <FormControlLabel label="HTML" value="html" control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange} />}></FormControlLabel>
                    </FormGroup>
                    <FormHelperText>
                        Invalid Selection
                    </FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
}

export default CheckBox;