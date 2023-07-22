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
  return (
    <NavbarWrapper data-testid="navbar">
      <TopContainer>
        <Title>Top Movies</Title>
        <ActionsWrapper>
          <ActionItem onClick={handleLogoutClick}>Logout</ActionItem>
          <ActionItem onClick={handleChangeThemeClick}>Change theme</ActionItem>
        </ActionsWrapper>
      </TopContainer>
    </NavbarWrapper>
  );
};
