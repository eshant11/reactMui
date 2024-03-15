import React from 'react'
import { Typography } from '@mui/material'

const TypoGraphyMui = () => {
  return (
    <div>
        <Typography variant='h1'>Heading 1</Typography>
        {/*  if you want to show a tag name h1 instead of h2 */}
        <Typography variant='h2' component="h1">Heading 2</Typography>
        {/* To add margin bottom */}
        <Typography variant='h3'  gutterBottom={true}>Heading 3</Typography>
        <Typography variant='h4'>Heading 4</Typography>
        <Typography variant='h5'>Heading 5</Typography>
        <Typography variant='h6'>Heading 6</Typography>
        <Typography variant='subtitle1'>subtitle 1 </Typography>
        <Typography variant='subtitle2'>subtitle 2</Typography>
        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis porro debitis animi mollitia perferendis quia atque distinctio magni aliqui default value 16px</Typography>
        <hr />
        <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia tenetur mollitia unde. Consequuntur, omnis. Vel, quis molestiae obcaecati voluptatum aut veritatis deleniti dolores excepturi at non magni consequuntur ea sapiente?</Typography>
        </div>
  )
}

export default TypoGraphyMui;