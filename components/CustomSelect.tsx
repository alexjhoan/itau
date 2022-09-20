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

const CustomSelect = ({ label, listItems, value, onChange }: any) => {
  const theme = useTheme()
  return (
    <FormControl
      sx={{
        width: '100%',
        background: theme.palette.common.white,
        borderRadius: theme.spacing(0.5)
      }}
    >
      <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={value}
        onChange={onChange}
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

export default CustomSelect
