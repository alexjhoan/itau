import React from 'react'
import Typography from '@mui/material/Typography'
import Contacto from './Contacto'
import { Box, Container, IconButton, useTheme, Stack } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

const Footer = () => {
  const theme = useTheme()
  const styleIcon = {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.third.main
    }
  }
  return (
    <>
      <Contacto />
      <Box sx={{ backgroundColor: theme.palette.primary.main }}>
        <Container maxWidth="lg">
          <Stack direction={'row'} spacing={'2'} alignItems={'center'} justifyContent={'flex-end'}>
            <Typography variant="body1" sx={{ color: theme.palette.common.white }} mr={1}>
              Seguínos
            </Typography>
            <IconButton
              component={'a'}
              href={'https://www.facebook.com/itauparaguay/'}
              target="_blank"
            >
              <FacebookIcon sx={styleIcon} />
            </IconButton>
            <IconButton component={'a'} href={'https://twitter.com/itauparaguay'} target="_blank">
              <TwitterIcon sx={styleIcon} />
            </IconButton>
            <IconButton
              component={'a'}
              href={'https://www.instagram.com/itauparaguay/'}
              target="_blank"
            >
              <InstagramIcon sx={styleIcon} />
            </IconButton>
            <IconButton
              component={'a'}
              href={'https://www.youtube.com/c/itauparaguay'}
              target="_blank"
            >
              <YouTubeIcon sx={styleIcon} />
            </IconButton>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Footer
