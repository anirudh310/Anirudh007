import React, { useState } from "react";
import styled from 'styled-components';
import { FaUsers, FaPowerOff } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsCalendar } from "react-icons/bs";
import { RiWalletLine } from "react-icons/ri";

// Import the image
import OIPImage from './OIP.jpg'; // Adjust the path if necessary

// --- Styled Components ---

const SidebarContainer = styled.div`
  width: 96px;
  height: 1380px;
  background-color: #2A41E8;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 20px;
`;

const TopSection = styled.div`
  width: 100%;
  height: 80px;
  background-color: #3640E0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const TPText = styled.span`
  font-family: 'Gilroy-Light';
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 40%;
  text-align: center;
  color: white;
  position: absolute;
  top: 30px;
  left: 41px;
  width: 15px;
  height: 32px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 108px;
  left: 28px;
  margin-bottom: 20px;
  gap: 10px;
  background-image: url(${OIPImage}); /* Use the imported image */
  background-size: cover;
  background-position: center;
`;


const NavIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  width: 44px;
  height: 172px;
  position: absolute;
  top: 194px;
  left: 26px;
`;


const IconWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  padding: 8px;
  background-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FFFFFF1F;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ActiveIndicator = styled.div`
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 20px;
  background-color: #FF4500;
`;

const Icon = styled.i`
  color: white;
  font-size: 24px;
  width: 24px;
  height: 24px;
`;

const NavigationIcon = ({ name }) => {
  switch (name) {
    case "Calendar":
      return (
        <IconWrapper>
          <Icon as={BsCalendar} />
        </IconWrapper>
      );
    case "Users":
      return (
        <IconWrapper>
          <Icon as={FaUsers} />
        </IconWrapper>
      );
    case "Wallet":
      return (
        <IconWrapper>
          <Icon as={RiWalletLine} />
        </IconWrapper>
      );
    default:
      return null;
  }
};

const LogoutButtonContainer = styled.div`
  width: 44px;
  height: 1200px;
  top: 910px;
  left: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  border-width: 2px; /* New border-width as per Figma */

  &:hover {
    background-color: #FFFFFF1F;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const LogoutIcon = styled(Icon)`
  font-size: 24px;
`;

// --- Main Sidebar Component ---

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    { name: "Calendar", path: "/calendar" },
    { name: "Users", path: "/users" },
    { name: "Wallet", path: "/wallet" },
  ];

  return (
    <SidebarContainer>
      <TopSection>
        <TPText>P</TPText>
      </TopSection>
      <ProfileImage src={OIPImage} alt="Profile" /> {/* Set the imported image here */}

      <NavIconsContainer>
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} style={{ textDecoration: 'none', color: 'white' }}>
            <IconWrapper onClick={() => setActiveIndex(index)}>
              {activeIndex === index && <ActiveIndicator />}
              <NavigationIcon name={item.name} />
            </IconWrapper>
          </Link>
        ))}
      </NavIconsContainer>

      <LogoutButtonContainer onClick={() => alert("Logging Out...")}>
        <LogoutIcon as={FaPowerOff} />
      </LogoutButtonContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
