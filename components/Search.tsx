import React, { useState } from 'react'
import {
  Box,
  Container,
  styled,
  Typography,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Popper,
  TextField,
  Grow
} from '@mui/material'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import SearchIcon from '@mui/icons-material/Search'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { grey } from '@mui/material/colors'
import { SearchDropDownsTypes } from '../types/components'

const StyledSearch = styled(Box)(({ theme }) => ({
  backgroundColor: grey[300],
  padding: theme.spacing(5, 0),
  '& .title': {
    display: 'flex',
    alignItems: 'center',
    columnGap: theme.spacing(1),
    marginBottom: theme.spacing(3.5),
    '& .MuiSvgIcon-root': {
      fontSize: 40
    }
  }
}))

const StyledBtnDropdown = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(1),
  height: 56,
  '&:hover': {
    backgroundColor: `${theme.palette.common.white}b0`
  }
}))

const StyledDropdown = styled(FormGroup)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: `0 5px 10px ${theme.palette.common.black}80`
}))

const dropDownsInit = {
  type: {
    anchorEl: null,
    open: false,
    width: 0
  },
  brand: {
    anchorEl: null,
    open: false,
    width: 0
  },
  state: {
    anchorEl: null,
    open: false,
    width: 0
  }
}

const Search = () => {
  const [dropDowns, setDropDowns] = useState<SearchDropDownsTypes>(dropDownsInit)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, elemento: string) => {
    setDropDowns({
      ...dropDowns,
      [elemento]: {
        anchorEl: event.currentTarget,
        open: !dropDowns[elemento as keyof SearchDropDownsTypes].open,
        width: event.currentTarget.offsetWidth
      }
    })
  }

  const closeAll = () => {
    setDropDowns(dropDownsInit)
  }

  // TODO: montar un ClickAwayListener para cerrar los dropdowns https://mui.com/material-ui/react-menu/#main-content

  return (
    <StyledSearch>
      <Container maxWidth={'lg'}>
        <Typography variant="h4" color="secondary" className="title">
          <SearchIcon />
          Buscá tu <b>próximo vehículo</b>
        </Typography>
        <Typography variant="h5" mb={2.5}>
          Seleccioná los filtros para empezar tu búsqueda:
        </Typography>
        <ClickAwayListener onClickAway={closeAll}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} lg={2}>
              <StyledBtnDropdown
                variant="text"
                fullWidth
                endIcon={
                  <KeyboardArrowDownIcon
                    sx={{
                      transition: 'transform ease-in-out .2s',
                      transform: dropDowns.type.open ? 'rotate(-180deg)' : 'rotate(0deg)'
                    }}
                  />
                }
                onClick={(e) => handleClick(e, 'type')}
              >
                Tipo de vehiculo
              </StyledBtnDropdown>
              <Popper
                open={dropDowns.type.open}
                anchorEl={dropDowns.type.anchorEl}
                sx={{ width: dropDowns.type.width, zIndex: 19 }}
                placement="bottom-start"
                transition
              >
                {({ TransitionProps }) => (
                  <Grow {...TransitionProps}>
                    <StyledDropdown>
                      <FormControlLabel control={<Checkbox />} label="Autos" />
                      <FormControlLabel control={<Checkbox />} label="Camioneta" />
                      <FormControlLabel control={<Checkbox />} label="Compacto" />
                      <FormControlLabel control={<Checkbox />} label="Desportivo" />
                      <FormControlLabel control={<Checkbox />} label="Moto" />
                    </StyledDropdown>
                  </Grow>
                )}
              </Popper>
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <StyledBtnDropdown
                variant="text"
                fullWidth
                endIcon={
                  <KeyboardArrowDownIcon
                    sx={{
                      transition: 'transform ease-in-out .2s',
                      transform: dropDowns.brand.open ? 'rotate(-180deg)' : 'rotate(0deg)'
                    }}
                  />
                }
                onClick={(e) => handleClick(e, 'brand')}
              >
                Marca
              </StyledBtnDropdown>
              <Popper
                open={dropDowns.brand.open}
                anchorEl={dropDowns.brand.anchorEl}
                placement="bottom-start"
                transition
                sx={{ width: dropDowns.brand.width, zIndex: 19 }}
              >
                {({ TransitionProps }) => (
                  <Grow {...TransitionProps}>
                    <StyledDropdown>
                      <FormControlLabel control={<Checkbox />} label="Audi" />
                      <FormControlLabel control={<Checkbox />} label="BMW" />
                      <FormControlLabel control={<Checkbox />} label="Brillance" />
                      <FormControlLabel control={<Checkbox />} label="BYD" />
                      <FormControlLabel control={<Checkbox />} label="Chana" />
                    </StyledDropdown>
                  </Grow>
                )}
              </Popper>
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <StyledBtnDropdown
                variant="text"
                fullWidth
                endIcon={
                  <KeyboardArrowDownIcon
                    sx={{
                      transition: 'transform ease-in-out .2s',
                      transform: dropDowns.state.open ? 'rotate(-180deg)' : 'rotate(0deg)'
                    }}
                  />
                }
                onClick={(e) => handleClick(e, 'state')}
              >
                Estado
              </StyledBtnDropdown>
              <Popper
                open={dropDowns.state.open}
                anchorEl={dropDowns.state.anchorEl}
                sx={{ width: dropDowns.state.width, zIndex: 19 }}
                placement="bottom-start"
                transition
              >
                {({ TransitionProps }) => (
                  <Grow {...TransitionProps}>
                    <StyledDropdown>
                      <FormControlLabel control={<Checkbox />} label="Nuevo" />
                      <FormControlLabel control={<Checkbox />} label="Usado" />
                    </StyledDropdown>
                  </Grow>
                )}
              </Popper>
            </Grid>
            <Grid item xs={12} sm={8} lg={4}>
              <Box display={'flex'} width={'100%'} alignItems={'center'} gap={1}>
                <TextField
                  type={'number'}
                  label="Min (Gs.)"
                  sx={{ backgroundColor: '#fff', width: '100%' }}
                />
                <span>-</span>
                <TextField
                  type={'number'}
                  label="Max (Gs.)"
                  sx={{ backgroundColor: '#fff', width: '100%' }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} lg={2}>
              <Button variant="contained" color="primary" fullWidth sx={{ height: 56 }}>
                Buscar
              </Button>
            </Grid>
          </Grid>
        </ClickAwayListener>
      </Container>
    </StyledSearch>
  )
}

export default Search
