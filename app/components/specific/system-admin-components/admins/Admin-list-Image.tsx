import React from 'react';
import styled from 'styled-components';

// --- STYLES ---
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 40px 0;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-bottom: 24px;
`;

const ProfileImageWrapper = styled.div`
  width: 50px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 28px;
  margin-bottom: 18px;
  border: 2px solid #ececec;
  background: #f7f8fa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 10%;
  height: 100%;
  object-fit: cover;
`;

const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #232323;
  margin-bottom: 4px;
`;

const Email = styled.div`
  font-size: 0.98rem;
  color: #888;
  margin-bottom: 18px;
`;

const MessageButton = styled.button`
  background: #fff;
  color: #232323;
  border: 1.5px solid #ececec;
  border-radius: 8px;
  padding: 8px 32px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background: #f7f8fa;
  }
`;

// --- DATA ---
const admins = [
  {
    name: 'Jason Price',
    email: 'kuhn.kamren@lyahoo.com',
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=600&q=80',
  },
  {
    name: 'Duane Dean',
    email: 'rusty.buckridge@wind.io',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=600&q=80',
  },
  {
    name: 'Jonathan Barker',
    email: 'cora.haley@work.biz',
    img: 'https://images.unsplash.com/photo-1519340333755-c8924e1b1a2d?auto=format&fit=facearea&w=600&q=80',
  },
  {
    name: 'Rosie Glover',
    email: 'lockman.mervin@hotmail.com',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=600&q=80',
  },
  {
    name: 'Patrick Greer',
    email: 'pascale.christian@motove.net',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=600&q=80',
  },
  {
    name: 'Darrel Ortega',
    email: 'chyna.shields@myinfo',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&w=600&q=80',
  },
];

// --- COMPONENT ---
const AdminList: React.FC = () => (
  <Grid>
    {admins.map((admin, idx) => (
      <Card key={idx}>
        <ProfileImageWrapper>
          <ProfileImage src={admin.img} alt={admin.name} />
        </ProfileImageWrapper>
        <CardBody>
          <Name>{admin.name}</Name>
          <Email>{admin.email}</Email>
          <MessageButton>
            <span role="img" aria-label="message">✉️</span> Message
          </MessageButton>
        </CardBody>
      </Card>
    ))}
  </Grid>
);

export default AdminList;