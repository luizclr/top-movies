import { useState } from "react";

import {
  ActionItem,
  ActionsWrapper,
  BottomContainer,
  BottomSection,
  Description,
  List,
  ListItem,
  NavbarWrapper,
  Text,
  Title,
  TopContainer,
  TopSection,
} from "~/components/navbar/navbar.styles";
import { BaseNavbarProps } from "~/components/navbar/types";

const items: string[] = ["first", "second", "third"];

export const BaseNavbar: React.FC<BaseNavbarProps> = ({
  handleLogoutClick,
  handleChangeThemeClick,
}: BaseNavbarProps) => {
  const [selected, setSelected] = useState<string>("second");

  return (
    <NavbarWrapper data-testid="navbar">
      <TopSection>
        <TopContainer>
          <Title>Top Movies</Title>
          <ActionsWrapper>
            <ActionItem onClick={handleLogoutClick}>Logout</ActionItem>
            <ActionItem onClick={handleChangeThemeClick}>Change theme</ActionItem>
          </ActionsWrapper>
        </TopContainer>
      </TopSection>
      <BottomSection>
        <BottomContainer>
          <Description>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Description>
          <Text>FILTRE POR:</Text>
          <List>
            {items.map((item) => (
              <ListItem
                key={item}
                onClick={() => {
                  setSelected(item);
                }}
                selected={selected === item}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </BottomContainer>
      </BottomSection>
    </NavbarWrapper>
  );
};
