import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";

export const TopNav = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    let navKey = pathname === "/" ? "/dashboard" : pathname;
    dispatch({ type: "SWITCH_NAV", payload: navKey });
  }, [pathname, dispatch]);
  const navKey = useSelector((state) => state.navKey);
  const swithNav = (e) => {
    dispatch({ type: "SWITCH_NAV", payload: e.key });
  };
  const navItem = [
    {
      key: "/dashboard",
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      key: "/dashboardhook",
      name: "Dashboard Hook",
      link: "/dashboardhook",
    },
  ];
  return (
    <div>
      <Menu mode="horizontal" onClick={swithNav} selectedKeys={[navKey]}>
        {navItem.map((i) => {
          return (
            <Menu.Item key={i.key}>
              <Link to={i.link}> {i.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};

export default TopNav;
