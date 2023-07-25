import { BsCloudSun, BsMoonStars } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ThemeTypes, useTheme } from "react-styled-guide";

import LogoSrc from "~/assets/img/movie.png";
import {
  ActionItem,
  ActionsWrapper,
  Logo,
  LogoWrapper,
  NavbarWrapper,
  Title,
  TopContainer,
} from "~/components/navbar/navbar.styles";
import { BaseNavbarProps } from "~/components/navbar/types";
import { PATHS } from "~/routes/paths";

export const BaseNavbar: React.FC<BaseNavbarProps> = ({
  handleLogoutClick,
  handleChangeThemeClick,
}: BaseNavbarProps) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <NavbarWrapper data-testid="navbar">
      <TopContainer>
        <LogoWrapper onClick={() => navigate(PATHS.HOME)}>
          <Logo src={LogoSrc} />
          <Title>Top Movies</Title>
        </LogoWrapper>
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
