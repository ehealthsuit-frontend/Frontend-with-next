'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';

const CompanyRegisterContainer = styled.div`
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.sm};
  padding: ${theme.spacing.xl};
  max-width: 900px;
  margin: 0 auto;
`;

const FieldsRow = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  flex-wrap: wrap;
`;

const FieldGroup = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing.lg};
`;

const Label = styled.label`
  font-size: ${theme.typography.fontSizes.sm};
  font-weight: ${theme.typography.fontWeights.medium};
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.textPrimary};
`;

const Required = styled.span`
  color: ${theme.colors.error};
  margin-left: 2px;
`;

const Input = styled.input`
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.inputBorder};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSizes.sm};
  background: ${theme.colors.inputBg};
  color: ${theme.colors.textPrimary};
  outline: none;
  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

const ErrorText = styled.span`
  color: ${theme.colors.error};
  font-size: ${theme.typography.fontSizes.xs};
  margin-top: 2px;
`;

const Button = styled.button`
  margin: 0 auto;
  padding: 12px 40px;
  background: ${theme.colors.textPrimary};
  color: ${theme.colors.background};
  border: none;
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSizes.md};
  font-weight: ${theme.typography.fontWeights.semibold};
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
  }
`;

const Note = styled.p`
  color: ${theme.colors.error};
  font-size: ${theme.typography.fontSizes.xs};
  margin-bottom: ${theme.spacing.md};
`;

const CompanyRegister = () => {
  const [fields, setFields] = useState({
    name: '',
    code: '',
    license: '',
    website: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    code: '',
    license: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: '', code: '', license: '' };
    if (!fields.name) {
      newErrors.name = 'Company Name is required';
      valid = false;
    }
    if (!fields.code) {
      newErrors.code = 'Company Code is required';
      valid = false;
    }
    if (!fields.license) {
      newErrors.license = 'License Number is required';
      valid = false;
    }
    setErrors(newErrors);
    if (valid) {
      // Submit logic here
      alert('Form submitted!');
    }
  };

  return (
    <CompanyRegisterContainer>
      <Title>Create New Insurance Company</Title>
      <Note>* All fields are required</Note>
      <FormContainer onSubmit={handleSubmit}>
        <FieldsRow>
          <FieldGroup>
            <Label htmlFor="name">
              Company Name<Required>*</Required>
            </Label>
            <Input
              id="name"
              name="name"
              value={fields.name}
              onChange={handleChange}
              placeholder="Enter company name"
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="code">
              Company Code<Required>*</Required>
            </Label>
            <Input
              id="code"
              name="code"
              value={fields.code}
              onChange={handleChange}
              placeholder="Enter company code"
            />
            {errors.code && <ErrorText>{errors.code}</ErrorText>}
          </FieldGroup>
        </FieldsRow>
        <FieldsRow>
          <FieldGroup>
            <Label htmlFor="license">
              License Number<Required>*</Required>
            </Label>
            <Input
              id="license"
              name="license"
              value={fields.license}
              onChange={handleChange}
              placeholder="Enter company license number"
            />
            {errors.license && <ErrorText>{errors.license}</ErrorText>}
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="website">Company Website</Label>
            <Input
              id="website"
              name="website"
              value={fields.website}
              onChange={handleChange}
              placeholder="Enter company website address"
            />
          </FieldGroup>
        </FieldsRow>
        <Button type="submit">Next</Button>
      </FormContainer>
    </CompanyRegisterContainer>
  );
};

export default CompanyRegister; 