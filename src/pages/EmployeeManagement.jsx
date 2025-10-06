import { useState } from 'react';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button
} from '@mui/material';

const EmployeeManagement = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    salary: ''
  });

  const [employeeList, setEmployeeList] = useState([
    {
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      email: 'johndoe@example.com',
      salary: '$80,000'
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      address: '456 Elm St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      email: 'janesmith@example.com',
      salary: '$95,000'
    }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeeList((prev) => [...prev, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      email: '',
      salary: ''
    });
  };

  return (
    <Box sx={{ backgroundColor: '#1c1c1c', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <Box sx={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom>
          Employee Management
        </Typography>

        <Typography variant="h6" gutterBottom>
          Employee List
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: '2rem' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Zip</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employeeList.map((emp, index) => (
                <TableRow key={index}>
                  <TableCell>{emp.firstName}</TableCell>
                  <TableCell>{emp.lastName}</TableCell>
                  <TableCell>{emp.address}</TableCell>
                  <TableCell>{emp.city}</TableCell>
                  <TableCell>{emp.state}</TableCell>
                  <TableCell>{emp.zip}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell>{emp.salary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" gutterBottom>
          Add New Employee
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: '1rem', maxWidth: '600px' }}>
          {['firstName', 'lastName', 'address', 'city', 'state', 'zip', 'email', 'salary'].map((field) => (
            <TextField
              key={field}
              label={field.replace(/^\w/, (c) => c.toUpperCase())}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          ))}
          <Button variant="contained" color="primary" type="submit">
            Add Employee
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeManagement;
