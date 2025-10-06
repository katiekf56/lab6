import { useContext, useState } from 'react';
import { WelcomeContext } from '../context/WelcomeContext';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button
} from '@mui/material';

const Home = () => {
  const { setName } = useContext(WelcomeContext);
  const [input, setInput] = useState('');

  const handleClick = () => {
    setName(input);
    setInput('');
  };

  return (
    <Box>
      <Box className="section">
        <Typography variant="h4" gutterBottom>
          Highlights
        </Typography>

        <Typography variant="h6" gutterBottom>
          Remember to live out our values
        </Typography>
        <List component="ol">
          <ListItem><ListItemText primary="Relentless Learning and Growth" /></ListItem>
          <ListItem><ListItemText primary="Creative Problem Solving" /></ListItem>
          <ListItem><ListItemText primary="Curiosity-Driven Execution" /></ListItem>
        </List>

        <Typography variant="h6" sx={{ marginTop: '2rem' }}>
          Upcoming Events
        </Typography>
        <List>
          <ListItem><ListItemText primary="Feb 7: Employee Hack-a-thon" /></ListItem>
          <ListItem><ListItemText primary="Feb 9: Food Bank Volunteering" /></ListItem>
          <ListItem><ListItemText primary="Apr 4: Company Retreat" /></ListItem>
        </List>

        <Typography variant="h4" sx={{ marginTop: '3rem' }}>
          Latest Event
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis animi laudantium eos atque sed debitis eum deleniti cumque saepe aut voluptatibus, dolores commodi corporis quibusdam numquam perferendis, molestias tenetur suscipit!.
        </Typography>

        <Box sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <img
            src="https://plus.unsplash.com/premium_photo-1709247069711-068d383b8497?q=80&w=2970&auto=format&fit=crop"
            style={{ width: '35%', borderRadius: '8px' }}
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1661429511577-b165fc04718f?q=80&w=2971&auto=format&fit=crop"
            style={{ width: '35%', borderRadius: '8px' }}
          />
        </Box>

        <Box sx={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <TextField
            label="Enter your name"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" onClick={handleClick}>
            Update Header
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
