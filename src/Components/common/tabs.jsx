import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const CenteredTabs = props => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        {props.tabs.map(tab => 
        <Tab key={tab} label={tab} onClick={() => props.handleTabChange(tab)} />
        )}
      </Tabs>
    </Box>
  );
}

export default CenteredTabs;