import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, BellIcon, SearchIcon, EmailIcon } from './styles';

const Main: React.FC = () => {
  return(
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Breno Mendes</strong>
          <span>50 tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}

      <BottomMenu>
        <HomeIcon className="active"/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}

export default Main;