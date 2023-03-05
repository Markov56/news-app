import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, MenuItem, Select } from '@material-ui/core';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl>
      <Select
        value={i18n.language}
        onChange={handleChange}
        inputProps={{ id: 'language-select' }}
        style={{ color: 'white' }}
        disableUnderline
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ua">Українська</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
