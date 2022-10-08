import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { FancyInput } from './FancyInput'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'

const StyledForm = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  background: theme.palette.common.white,
  overflow: 'hidden',
  '& .titleForm': {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    columnGap: theme.spacing(1.5),
    marginTop: theme.spacing(3)
  },
  '& .titleFormFooter': {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1, 4),
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing(1.5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 2)
    }
  },
  '& .subTitle': {
    maxWidth: 400,
    marginBottom: theme.spacing(2)
  },
  '& form': {
    padding: theme.spacing(2, 2, 3),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2)
    }
  }
}))

interface CallMeFormTypes {
  isFooter?: Boolean
}

const CallMeForm = ({ isFooter = true }: CallMeFormTypes) => {
  return (
    <StyledForm>
      {isFooter ? (
        <Typography variant="h5" className="titleFormFooter">
          <PhoneInTalkIcon sx={{ fontSize: 25 }} />
          Quiero que me llamen
        </Typography>
      ) : (
        <Typography variant="h5" color="secondary" className="titleForm">
          <PhoneInTalkIcon color="secondary" sx={{ fontSize: 25 }} />
          Quiero que me llamen
        </Typography>
      )}
      <Box component="form" noValidate autoComplete="off">
        <Typography variant="body1" className="subTitle">
          Dejanos tus datos de contacto y te llamaremos para contarte más sobre Préstamo Mi Auto.
        </Typography>
        <FancyInput fullWidth error={false} type="text" label="Nombre:" helperText="" />
        <FancyInput fullWidth error={false} type="email" label="Email:" helperText="" />
        <FancyInput
          fullWidth
          error={false}
          type="text"
          label="Cédula(sin puntos ni guiones)"
          helperText=""
        />
        <FancyInput fullWidth error={false} type="tel" label="Tel:" helperText="" />
        <Button variant="contained" color="primary" fullWidth={true}>
          Enviar
        </Button>
        <Typography variant="h6" mt={2}>
          Contacto: 0981 634 175
        </Typography>
      </Box>
    </StyledForm>
  )
}

export default CallMeForm
