import React from 'react';

// import { Container } from './styles';

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

      </Topside>
    </Container>
  );
}

export default MenuBar;