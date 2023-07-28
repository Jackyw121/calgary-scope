import { Translation } from 'react-i18next'
import React, { useState } from 'react'
import { FormControl, InputLabel, Select } from '@material-ui/core';
import Box from '@mui/material/Box';

function LanguageSelect() {
    

    const languages = [
        { value: 'en', text: "English" },
        { value: 'fr', text: "French"},
        { value: 'tl', text: "Tagalog"},
        { value: 'pa', text: "Punjabi"},
        { value: 'zh', text: "Chinese"}
    ]

    
    const [lang, setLang] = useState('');
     
    // This function put query that helps to
    // change the language
    const handleChange = e => {
        setLang(e.target.value);
        //test build
        // let loc = "http://localhost:3000/";
        //production build
        let loc = "https://calgaryscope.netlify.app/";
        window.location.replace(loc + "?lng=" + e.target.value);
    }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">Language</InputLabel>
        <Select color ='secondary'
          labelId="simple-select-label"
          id="simple-select"
          value={lang}
          label="Language"
          onChange={handleChange}
        >
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