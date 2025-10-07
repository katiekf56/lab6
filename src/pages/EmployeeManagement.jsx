import React, { useEffect, useState } from 'react';

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    birthdate: '',
    salary: ''
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch('/api/employees')
      .then(res => res.json())
      .then(setEmployees);
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/api/employees/${editingId}` : '/api/employees';
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(() => {
        setForm({
          first_name: '',
          last_name: '',
          email: '',
          birthdate: '',
          salary: ''
        });
        setEditingId(null);
        fetch('/api/employees')
          .then(res => res.json())
          .then(setEmployees);
      });
  };

  const handleEdit = emp => {
    setForm({
      first_name: emp.first_name || '',
      last_name: emp.last_name || '',
      email: emp.email || '',
      birthdate: emp.birthdate ? emp.birthdate.slice(0, 10) : '',
      salary: emp.salary || ''
    });
    setEditingId(emp.employee_id);
  };

  const handleDelete = id => {
    fetch(`/api/employees/${id}`, { method: 'DELETE' })
      .then(() => fetch('/api/employees')
        .then(res => res.json())
        .then(setEmployees));
  };

  return (
    <div>
      <h2>Employee Management</h2>
      <form onSubmit={handleSubmit}>
        <input name="first_name" value={form.first_name} onChange={handleChange} placeholder="First Name" required />
        <input name="last_name" value={form.last_name} onChange={handleChange} placeholder="Last Name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
        <input name="birthdate" type="date" value={form.birthdate} onChange={handleChange} placeholder="Birthdate" />
        <input name="salary" type="number" step="0.01" value={form.salary} onChange={handleChange} placeholder="Salary" />
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ first_name: '', last_name: '', email: '', birthdate: '', salary: '' }); }}>Cancel</button>}
      </form>
      <table>
        <thead>
          <tr>
            <th>First Name</th><th>Last Name</th><th>Email</th><th>Birthdate</th><th>Salary</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.employee_id}>
              <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
              <td>{emp.email}</td>
              <td>{emp.birthdate ? emp.birthdate.slice(0, 10) : ''}</td>
              <td>{emp.salary}</td>
              <td>
                <button onClick={() => handleEdit(emp)}>Edit</button>
                <button onClick={() => handleDelete(emp.employee_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}