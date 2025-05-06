'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

// --- FORM STYLES ---
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

const RequiredNote = styled.p`
  color: #e57373;
  font-size: 13px;
  margin-bottom: 30px;
`;

const Red = styled.span`
  color: #e74c3c;
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
`;

const Button = styled.button`
  background: #232323;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 14px 60px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
`;
// --- END FORM STYLES ---
const AdminDetailForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    companyCode: '',
    licenseNumber: '',
    companyWebsite: '',
    companyEmail: '',
    contactNumber: '',
    companyAddress: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    alert('Form submitted!\n' + JSON.stringify(formData, null, 2));
  };

  return (
      <FormInner onSubmit={step === 1 ? handleNext : handleSubmit}>
        <RequiredNote>
          <Red>*</Red> All fields are required
        </RequiredNote>
        {step === 1 && (
          <>
            <Row>
              <Group>
                <Label>
                  Company Name <Red>*</Red>
                </Label>
                <Input
                  type="text"
                  name="companyName"
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </Group>
              <Group>
                <Label>
                  Company Code <Red>*</Red>
                </Label>
                <Input
                  type="text"
                  name="companyCode"
                  placeholder="Enter company code"
                  value={formData.companyCode}
                  onChange={handleChange}
                  required
                />
              </Group>
            </Row>
            <Row>
              <Group>
                <Label>
                  License Number <Red>*</Red>
                </Label>
                <Input
                  type="text"
                  name="licenseNumber"
                  placeholder="Enter company license number"
                  value={formData.licenseNumber}
                  onChange={handleChange}
                  required
                />
              </Group>
              <Group>
                <Label>
                  Company Website
                </Label>
                <Input
                  type="text"
                  name="companyWebsite"
                  placeholder="Enter company website address"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                />
              </Group>
            </Row>
            <Actions>
              <Button type="submit">Next</Button>
            </Actions>
          </>
        )}
        {step === 2 && (
          <>
            <Row>
              <Group>
                <Label>
                  Company Email <Red>*</Red>
                </Label>
                <Input
                  type="email"
                  name="companyEmail"
                  placeholder="Enter company address"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  required
                />
              </Group>
              <Group>
                <Label>
                  Contact number <Red>*</Red>
                </Label>
                <Input
                  type="text"
                  name="contactNumber"
                  placeholder="Enter contact number of the company"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </Group>
            </Row>
            <Row>
              <Group>
                <Label>
                  Company Address <Red>*</Red>
                </Label>
                <Input
                  type="text"
                  name="companyAddress"
                  placeholder="Enter company Address"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  required
                />
              </Group>
              <Group>
                <Label>
                  Description
                </Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="write description of the company"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Group>
            </Row>
            <Actions>
              <Button type="button" onClick={handleBack} style={{marginRight: 16}}>Back</Button>
              <Button type="submit">Next</Button>
            </Actions>
          </>
        )}
      </FormInner>

  );
};

// Insurance Admin Detail Page
// Insurance company name

const AdminListsContainer = styled.div`
  padding: ${theme.spacing.lg};
  margin: 0 auto;
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.sm};
  height: 70%;
  width: 90%;
`;

const Title = styled.h1`
  color: ${theme.colors.textPrimary};
  font-size: ${theme.typography.fontSizes.xl};
  margin-bottom: ${theme.spacing.lg};
  font-weight: ${theme.typography.fontWeights.semibold};
`;

const WelcomeMessage = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: ${theme.typography.fontSizes.md};
  margin-bottom: ${theme.spacing.xl};
`;

const AdminDetail = () => {
  return (
    <AdminListsContainer>
      <Title>Admin Lists</Title>
      <WelcomeMessage>
        Welcome to the Health Insurance System Admin Detail
      </WelcomeMessage>
      <AdminDetailForm />
    </AdminListsContainer>
  );
};

export default AdminDetail;