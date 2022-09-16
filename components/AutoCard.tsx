import React from 'react'
import Image from 'next/image'
import {
  styled,
  Typography,
  Card,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  Box
} from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const StyledCard = styled(Card)(({ theme }) => ({
  padding: 0,
  userSelect: 'none',
  '& .title': {
    padding: theme.spacing(0.5, 2)
  },
  '& .iconRedirect': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.4),
    '& svg': {
      fontSize: 30,
      color: theme.palette.common.white
    },
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}b0`
    }
  }
}))

const AutoCard = () => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <StyledCard>
      <Typography variant={'body1'} className="title" noWrap>
        <b>nombre car</b>
      </Typography>
      <Image
        src={'/img/autos/prueba.png'}
        width={300}
        height={180}
        layout="responsive"
        alt="prueba"
      />
      <Stack direction="row" justifyContent="space-between" alignItems="center" px={2} py={1}>
        <div>
          <Typography color="text.secondary" mb={-1}>
            Desde
          </Typography>
          <Typography variant={isMd ? 'h5' : 'h4'}>
            <b>Gs. 000.000.000</b>
          </Typography>
        </div>
        <IconButton
          className={'iconRedirect'}
          onClick={() => {
            console.log('first')
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </StyledCard>
  )
}

export default AutoCard
