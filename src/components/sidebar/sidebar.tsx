import {
  Container,
  List,
  ListItem,
  ListItemLink,
  SidebarContent,
  SidebarWrapper,
  Text,
  Version,
} from "~/components/sidebar/sidebar.styles";
import { BaseSidebarProps } from "~/components/sidebar/types";
import { PATHS } from "~/routes/paths";

export const BaseSidebar: React.FC<BaseSidebarProps> = ({
  handleLogoutClick,
  handleChangeThemeClick,
}: BaseSidebarProps) => {
  return (
    <SidebarWrapper data-testid="sidebar">
      <Text>Top Movies</Text>
      <SidebarContent>
        <List>
          <ListItem>
            <ListItemLink to={PATHS.HOME}>Movies</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink to="movies/1">Movie 1</ListItemLink>
          </ListItem>
          <ListItem gutters={true} onClick={handleLogoutClick}>
            Logout
          </ListItem>
        </List>
        <Container>
          <List>
            <ListItem gutters={true} onClick={handleChangeThemeClick}>
              Change theme
            </ListItem>
          </List>
          <Version>v0.1.0</Version>
        </Container>
      </SidebarContent>
    </SidebarWrapper>
  );
};
