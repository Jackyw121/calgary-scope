import { Translation } from 'react-i18next'
import React, { useState } from 'react'
import { FormControl, InputLabel, Select } from '@material-ui/core';
import Box from '@mui/material/Box';

function LanguageSelect() {
    

    const languages = [
        { value: 'en', text: "English" },
        { value: 'fr', text: "French"}
    ]

    
    const [lang, setLang] = useState('');
     
    // This function put query that helps to
    // change the language
    const handleChange = e => {
        setLang(e.target.value);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e.target.value);
    }
  return (
    <Box sx={{ minWidth: 180}} px={2}>
    <FormControl fullWidth>
    <InputLabel sx={{input: {textAlign: 'Center'}}}>Language</InputLabel>
    <Select color='danger' variant='outlined' value={lang} label={lang} onChange={handleChange} >
    {languages.map(item => {
        return (<option key={item.value}
            value={item.value}>{item.text}</option>);
    })}
</Select>
</FormControl>
</Box>
  )
}

export default LanguageSelect