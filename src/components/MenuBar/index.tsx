import React from 'react';

import Button from '../Button'

import { Container, Topside, Logo, MenuButton, HomeIcon, BellIcon,EmailIcon, FavoriteIcon, ProfileIcon,Botside, Avatar, ProfileData} from './styles';

const MenuBar: React.FC = () => {
  return(
    <Container>
      <Topside >
      <MenuButton>
        <BellIcon />
        <span>Notificações</span>
      </MenuButton>

      <MenuButton>
        <EmailIcon />
        <span>Mensagens</span>
      </MenuButton>

      <MenuButton>
        <FavoriteIcon />
        <span>Favoritados</span>
      </MenuButton>

      <MenuButton>
        <ProfileIcon />
        <span>Perfil</span>
      </MenuButton>

      <Button>
        <span>Tweetar</span>
      </Button>

      </Topside>
      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Breno Mendes</strong>
          <span>@Brenox889</span>
        </ProfileData>
      </Botside>
    </Container>
  );
}

export default MenuBar;