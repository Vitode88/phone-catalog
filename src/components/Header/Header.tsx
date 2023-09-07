import { NavLink, useLocation } from "react-router-dom";
import useUserApi from "../../features/users/hooks/useUserApi";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const { logout } = useUserApi();

  const handleLogout = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    logout();
  };

  const isRendered = pathname !== "/register" && pathname !== "/login";

  return (
    <>
      <HeaderStyled className="header">
        {isRendered && (
          <NavLink to="/login" className="link" onClick={handleLogout}>
            <span className="link__text">Logout</span>
          </NavLink>
        )}
      </HeaderStyled>
    </>
  );
};

export default Header;
