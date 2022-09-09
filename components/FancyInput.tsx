import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'

const styles = {
  mb: 2
}

export const FancyInput = ({ error, type, label, helperText, ...rest }: TextFieldProps) => {
  return (
    <TextField
      error={error}
      type={type}
      label={label}
      helperText={helperText}
      sx={styles}
      {...rest}
    />
  )
}
