import React from 'react';
import { Group, Burger, Flex } from '@mantine/core';
import reactIcon from '../../assets/images/react.svg';

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ opened, toggle }) => (
  <Group h="100%" px="md">
    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
    <Flex gap="xs" align={'center'}>
      <img src={reactIcon} alt="React Icon" className="logo logo-rotate" />
      <p>React.Js</p>
    </Flex>
  </Group>
);

export default Header;
