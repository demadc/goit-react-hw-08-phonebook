import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/contacts">Contacts</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register">Registration</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
          {isLoggedIn && <UserMenu />}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
