import { Button as MuiButton, Stack,IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import { Send,FormatItalicOutlined,FormatBoldOutlined,FormatUnderlinedOutlined } from "@mui/icons-material"
import { useState } from "react"

const Button = () => {
    const [format, setFormat]=useState<string[]>()
    console.log(format);
    
    const handleChange =(e:React.MouseEvent<HTMLElement>,updatedFormats:string[])=>{
setFormat(updatedFormats)
    }
  return (
    <Stack spacing={6} direction="column">
    <Stack spacing={2} direction="row">
<MuiButton variant="text" startIcon={<Send/>}>Text</MuiButton>
<MuiButton variant="text" disabled>Text disabled</MuiButton>
<MuiButton variant="text" href="https://mui.com/material-ui/react-button/">Text  link</MuiButton>
    </Stack>
    <Stack spacing={2} direction="row">
<MuiButton variant="contained">contained</MuiButton>
<MuiButton variant="contained" disabled>contained disabled</MuiButton>
<MuiButton variant="contained" href="https://mui.com/material-ui/react-button/">contained link</MuiButton>
    </Stack>
  
    <Stack spacing={2} direction="row">
<MuiButton variant="outlined">outline</MuiButton>
<MuiButton variant="outlined" disabled>outline disabled</MuiButton>
<MuiButton variant="outlined" href="https://mui.com/material-ui/react-button/">outline link</MuiButton>
    </Stack>
    <Stack spacing={2} direction="row">
<MuiButton variant="contained" color="primary">primary</MuiButton>
<MuiButton variant="contained" color="secondary">secondary</MuiButton>
<MuiButton variant="contained" color="error" href="https://mui.com/material-ui/react-button/">error </MuiButton>
<MuiButton variant="contained" color="warning">warning</MuiButton>
<MuiButton variant="contained" color="success">success</MuiButton>
    </Stack>
    <Stack spacing={2} direction="row">
<MuiButton variant="contained" color="primary" startIcon={<Send/>}>Send</MuiButton>
<MuiButton variant="contained" color="secondary" endIcon={<Send/>} disableRipple>Send disableRipple</MuiButton>
<MuiButton variant="contained" color="success" onClick={()=>alert("clicked!!!!")} disableElevation>success disableElevation</MuiButton>
<IconButton color="success" size="small">
    <Send />
</IconButton>
    </Stack>
    <img src="download.jpeg" alt=""  className="img" />
        {/* Buttton Group */}
    <Stack>
        <ButtonGroup variant="contained" orientation="horizontal" size="medium" aria-aria-label="alignment button group">
            <MuiButton>click</MuiButton>
            <MuiButton>click</MuiButton>
            <MuiButton>click</MuiButton>
        </ButtonGroup>
    </Stack>
        {/*Toggle Buttton Group */}
<Stack direction="row">
    <ToggleButtonGroup aria-label="text formatting" value={format} size="medium" color="success" >
        <ToggleButton value="bold" aria-label="bold" onClick={handleChange}><FormatBoldOutlined/></ToggleButton>
        <ToggleButton value="italic" aria-label="italic" onClick={handleChange}><FormatItalicOutlined/></ToggleButton>
        <ToggleButton value="underline" aria-label="underlined" onClick={handleChange}><FormatUnderlinedOutlined/></ToggleButton>
    </ToggleButtonGroup>
</Stack>

    </Stack>
  )
}

export default Button