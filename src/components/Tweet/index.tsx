import React from 'react';
import { Description } from 'styled-icons/material-outlined';

import { 
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Breno Mendes</strong>
            <span>@Brenox889</span>
            <Dot />
            <time>31 de ago</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
                18
            </Status>
            <Status>
              <RetweetIcon />
                18
            </Status>
            <Status>
              <LikeIcon />
                999
            </Status>
          </Icons>
        </Content>
      </Body>

    </Container>
  );
}

export default Tweet;