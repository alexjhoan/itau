import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'

const styles = {
  backgroundColor: '#fff',
  '& .MuiInputBase-input': { padding: '14px' }
}

export const FancyInput = ({ error, type, label, helperText, ...rest }: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      error={error}
      type={type}
      label={label}
      helperText={helperText}
      sx={styles}
      {...rest}
    />
  )
}
