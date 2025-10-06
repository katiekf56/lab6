import { useContext } from 'react';
import { WelcomeContext } from '../context/WelcomeContext';
import { Typography, Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  const { name } = useContext(WelcomeContext);

  return (
    <Box>
      <Typography variant="h5">
        {name ? `Welcome ${name} to CodeCraft Intranet` : 'CodeCraft Intranet'}
      </Typography>
      <Box>
        <MuiLink component={Link} to="/" color="inherit" underline="none" sx={{ mx: 2 }}>
          Home
        </MuiLink>
        <MuiLink component={Link} to="/employees" color="inherit" underline="none" sx={{ mx: 2 }}>
          Employee Management
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Header;
