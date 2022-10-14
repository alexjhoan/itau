import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  useTheme
} from '@mui/material'
import React from 'react'
import { CustomSelectTypes } from '../types/components'

export const CustomSelectMultiple = ({ label, listItems, value, onChange }: CustomSelectTypes) => {
  const theme = useTheme()
  return (
    <FormControl
      sx={{
        width: '100%',
        background: theme.palette.common.white,
        borderRadius: theme.spacing(0.5)
      }}
    >
      <InputLabel id="multiple-checkbox-label">{label}</InputLabel>
      <Select
        labelId="multiple-checkbox-label"
        id="multiple-checkbox"
        multiple
        value={value}
        onChange={onChange}
        // @ts-ignore eslint-disable-next-line
        renderValue={(selected) => selected.join(', ')}
        input={<OutlinedInput label={label} />}
      >
        {listItems.map((type: any) => (
          <MenuItem key={type} value={type}>
            <Checkbox checked={value.indexOf(type) > -1} />
            <ListItemText primary={type} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export const CustomSelect = ({ label, listItems, value, onChange }: CustomSelectTypes) => {
  const theme = useTheme()
  return (
    <Select
      id="multiple-checkbox"
      displayEmpty
      value={value}
      onChange={onChange}
      sx={{
        minWidth: 150,
        backgroundColor: theme.palette.common.white,
        '& .MuiSelect-select': { padding: '14px' }
      }}
    >
      <MenuItem value="">{label ? label : 'Seleccionar'}</MenuItem>
      {listItems.map((type: any) => (
        <MenuItem key={type} value={type} sx={{ textTransform: 'capitalize' }}>
          {type}
        </MenuItem>
      ))}
    </Select>
  )
}
