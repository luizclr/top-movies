import { BsCloudSun, BsMoonStars } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { ThemeTypes, useTheme } from "react-styled-guide";

import {
  ActionItem,
  ActionsWrapper,
  NavbarWrapper,
  Title,
  TopContainer,
} from "~/components/navbar/navbar.styles";
import { BaseNavbarProps } from "~/components/navbar/types";

export const BaseNavbar: React.FC<BaseNavbarProps> = ({
  handleLogoutClick,
  handleChangeThemeClick,
}: BaseNavbarProps) => {
  const { theme } = useTheme();

  return (
    <NavbarWrapper data-testid="navbar">
      <TopContainer>
        <Title>Top Movies</Title>
        <ActionsWrapper>
          <ActionItem onClick={handleChangeThemeClick}>
            {theme === ThemeTypes.dark ? <BsCloudSun size={30} /> : <BsMoonStars size={30} />}
          </ActionItem>
          <ActionItem onClick={handleLogoutClick}>
            <FiLogOut size={30} />
          </ActionItem>
        </ActionsWrapper>
      </TopContainer>
    </NavbarWrapper>
  );
};
