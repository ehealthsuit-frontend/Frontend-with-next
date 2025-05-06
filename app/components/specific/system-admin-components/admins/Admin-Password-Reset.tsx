// Insurance Company  Admin password reset page
// Insurance company name
// Admin name
// Admin email
// Admin phone number
// Admin address
// Admin city
import React, { useState } from 'react';
import styled from 'styled-components';

// --- STYLES ---
const FormContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 40px 0;
  max-width: 700px;
  margin: 40px auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  min-height: 500px;
`;

const FormInner = styled.form`
  width: 60%;
  margin: 0 auto;
`;

const Center = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const ProfilePhoto = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #f7f8fa;
  margin: 0 auto 8px auto;
  overflow: hidden;
  border: 2px solid #232323;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditPhoto = styled.div`
  color: #3498db;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 16px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 7px;
  color: #222;
`;

const Input = styled.input`
  padding: 12px 14px;
  border: 1px solid #ececec;
  border-radius: 5px;
  background: #f7f8fa;
  font-size: 15px;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #bdbdbd;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Button = styled.button`
  background: #27ae60;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 14px 60px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #219150;
  }
`;
// --- END STYLES ---

const AdminPasswordReset: React.FC = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your password reset logic here
    alert('Password reset!');
  };

  return (
    <FormContainer>
      <FormInner onSubmit={handleSubmit}>
        <Center>
          <ProfilePhoto>
            {/* Replace with <img src={photoUrl} ... /> if you have a photo */}
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Admin" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ProfilePhoto>
          <EditPhoto>Edit Photo</EditPhoto>
        </Center>
        <Group>
          <Label>Current Password</Label>
          <Input
            type="password"
            name="currentPassword"
            placeholder="********"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />
        </Group>
        <Group>
          <Label>New Password</Label>
          <Input
            type="password"
            name="newPassword"
            placeholder="********"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
        </Group>
        <Group>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="********"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </Group>
        <Actions>
          <Button type="submit">Save</Button>
        </Actions>
      </FormInner>
    </FormContainer>
  );
};

export default AdminPasswordReset;