// Insurance Admin Edit Page
// Admin name(edit)
// the 2 kdmi rest lelewa
import React, { useState } from 'react';
import styled from 'styled-components';

// --- STYLES ---
const FormContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 40px 0;
  max-width: 900px;
  margin: 40px auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  min-height: 500px;
`;

const FormInner = styled.form`
  width: 80%;
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

const Row = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 25px;
`;

const Group = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
  gap: 16px;
`;

const Button = styled.button<{ variant?: string }>`
  background: ${({ variant }) => (variant === 'success' ? '#27ae60' : '#232323')};
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 14px 60px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ variant }) => (variant === 'success' ? '#219150' : '#444')};
  }
`;
// --- END STYLES ---

const Admin: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: 'Kevin',
    lastName: 'Fleming',
    userName: 'user-1',
    email: 'jakeblk.benx@yahoo.com',
    phone: '132436789',
    password: '********',
    confirmPassword: '********',
    photo: '', // URL or base64 string
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // For password visibility toggle (optional)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <FormContainer>
      <FormInner>
        <Center>
          <ProfilePhoto>
            {/* Replace with <img src={formData.photo} ... /> if you have a photo */}
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Admin" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ProfilePhoto>
          <EditPhoto>Edit Photo</EditPhoto>
        </Center>
        {step === 1 && (
          <>
            <Row>
              <Group>
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Kevin"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Group>
              <Group>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Fleming"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Group>
            </Row>
            <Row>
              <Group>
                <Label>User Name</Label>
                <Input
                  type="text"
                  name="userName"
                  placeholder="user-1"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
              </Group>
              <Group>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="jakeblk.benx@yahoo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Group>
            </Row>
            <Row>
              <Group>
                <Label>Phone number</Label>
                <Input
                  type="text"
                  name="phone"
                  placeholder="132436789"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Group>
              <Group>
                <Label>Password</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Group>
            </Row>
            <Actions>
              <Button type="button" variant="success" onClick={() => alert('Reset Password')}>Reset Password</Button>
              <Button type="button" onClick={() => setStep(2)}>Edit</Button>
            </Actions>
          </>
        )}
        {step === 2 && (
          <>
            <Row>
              <Group>
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Kevin"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Group>
              <Group>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Fleming"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Group>
            </Row>
            <Row>
              <Group>
                <Label>User Name</Label>
                <Input
                  type="text"
                  name="userName"
                  placeholder="user-1"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
              </Group>
              <Group>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="jakeblk.benx@yahoo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Group>
            </Row>
            <Row>
              <Group>
                <Label>Phone number</Label>
                <Input
                  type="text"
                  name="phone"
                  placeholder="132436789"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Group>
              <Group>
                <Label>Password</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Group>
            </Row>
            <Row>
              <Group>
                {/* Empty for alignment */}
              </Group>
              <Group>
                <Label>Confirm Password</Label>
                <Input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="********"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Group>
            </Row>
            <Actions>
              <Button type="submit" variant="success">Update</Button>
            </Actions>
          </>
        )}
      </FormInner>
    </FormContainer>
  );
};

export default Admin;