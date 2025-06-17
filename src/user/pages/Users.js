import React, { useEffect, useState } from 'react';

const mockUsers = [
  {
    id: 1,
    name: 'Avery Evans',
    email: 'avery@example.com',
    role: 'Admin',
    profilePic: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Lakousha Miller',
    email: 'lakousha@example.com',
    role: 'Teacher',
    profilePic: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Max Thompson',
    email: 'max@example.com',
    role: 'Student',
    profilePic: 'https://i.pravatar.cc/150?img=3',
  },
];

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace with actual API call
    setUsers(mockUsers);
  }, []);

  return (
    <div style={styles.container}>
      {users.map(user => (
        <div key={user.id} style={styles.card}>
          <img src={user.profilePic} alt={user.name} style={styles.avatar} />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <span style={styles.role}>{user.role}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    gap: '1rem',
    padding: '2rem',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '220px',
    textAlign: 'center',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '0.75rem',
  },
  role: {
    display: 'inline-block',
    marginTop: '0.5rem',
    padding: '0.25rem 0.5rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '6px',
    fontSize: '0.85rem',
    color: '#555',
  },
};

export default Users;
