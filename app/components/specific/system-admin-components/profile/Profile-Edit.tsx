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

const LogoUpload = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #f7f8fa;
  margin: 0 auto 8px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #888;
  border: 2px solid #ccc;
  cursor: pointer;
`;

const UploadText = styled.div`
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

const TextArea = styled.textarea`
  padding: 12px 14px;
  border: 1px solid #ececec;
  border-radius: 5px;
  background: #f7f8fa;
  font-size: 15px;
  outline: none;
  min-height: 60px;
  resize: none;
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

const ProfileForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    siteName: 'Bright Web',
    copyright: 'All rights Reserved@brightweb',
    seoTitle: 'Bright web is a hybrid dashboard',
    seoDescription: 'Bright web is a hybrid dashboard',
    seoKeywords: 'CEO',
    logo: '', // URL or base64 string
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // You can handle logo upload here
      // For now, just set a dummy value
      setFormData({ ...formData, logo: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Update logic here
    alert('Profile updated!\n' + JSON.stringify(formData, null, 2));
  };

  return (
 
      <FormInner onSubmit={step === 2 ? handleUpdate : handleEdit}>
        <Center>
          <label htmlFor="logo-upload">
            <LogoUpload>
              {formData.logo ? (
                <img src={formData.logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span role="img" aria-label="camera">📷</span>
              )}
            </LogoUpload>
            <input
              id="logo-upload"
              name="logo"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleLogoUpload}
            />
          </label>
          <UploadText>Upload Logo</UploadText>
        </Center>
        <Row>
          <Group>
            <Label>Site Name</Label>
            <Input
              type="text"
              name="siteName"
              placeholder="Bright Web"
              value={formData.siteName}
              onChange={handleChange}
              required
            />
          </Group>
          <Group>
            <Label>Copy Right</Label>
            <Input
              type="text"
              name="copyright"
              placeholder="All rights Reserved@brightweb"
              value={formData.copyright}
              onChange={handleChange}
              required
            />
          </Group>
        </Row>
        <Row>
          <Group>
            <Label>SEO Title</Label>
            <Input
              type="text"
              name="seoTitle"
              placeholder="Bright web is a hybrid dashboard"
              value={formData.seoTitle}
              onChange={handleChange}
              required
            />
          </Group>
          <Group>
            <Label>SEO Description</Label>
            <TextArea
              name="seoDescription"
              placeholder="Bright web is a hybrid dashboard"
              value={formData.seoDescription}
              onChange={handleChange}
              required
            />
          </Group>
        </Row>
        <Row>
          <Group>
            <Label>SEO Keywords</Label>
            <Input
              type="text"
              name="seoKeywords"
              placeholder="CEO"
              value={formData.seoKeywords}
              onChange={handleChange}
              required
            />
          </Group>
          <Group />
        </Row>
        <Actions>
          {step === 1 ? (
            <Button type="submit">Edit</Button>
          ) : (
            <Button type="submit" variant="success">Update</Button>
          )}
        </Actions>
      </FormInner>
   
  );
};

export default ProfileForm;