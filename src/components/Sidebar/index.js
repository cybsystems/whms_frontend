import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  NavItem,
  NavItemIcon,
  NavItemText,
  NavList,
  SidebarContainer,
} from "./style";
import {
  Dashboard,
  Checklist,
  MoveToInbox,
  LocationOn,
  Inventory,
  AddShoppingCart,
  Assessment,
  Inbox,
  ExpandLessRounded,
  ExpandMoreRounded,
} from "@mui/icons-material";
const NavItems = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    path: "/",
  },
  {
    title: "Picklist",
    icon: <Checklist />,
    path: "/picklist",
  },
  {
    title: "PutAway",
    icon: <MoveToInbox />,
    path: "/putaway",
  },
  {
    title: "Masters",
    icon: <LocationOn />, // You might want to choose a different icon for "Masters"
    path: "#", // No direct path for the parent item
    subItems: [
      {
        title: "Locations",
        icon: <LocationOn />,
        path: "/locations",
      },
      {
        title: "Parts",
        icon: <Inventory />,
        path: "/parts",
      },
    ],
  },
  {
    title: "Pickings",
    icon: <AddShoppingCart />,
    path: "/pickings",
  },
  {
    title: "Reports",
    icon: <Assessment />,
    path: "/reports",
  },
  {
    title: "Inward",
    icon: <Inbox />,
    path: "/inward",
  },
];
const Sidebar = (props) => {
  const { hideTitles } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (itemPath) => {
    if (itemPath === "#") {
      setOpenMenu((prev) => (prev === null ? itemPath : null)); // Toggle the menu
    } else {
      navigate(itemPath);
    }
  };

  const renderNavItems = (items) =>
    items.map((item) => {
      const isSelected = item.path === pathname;
      const isMenuOpen = openMenu === item.path;
      return (
        <React.Fragment key={item.title}>
          <NavItem
            button
            isActive={isSelected}
            onClick={() => handleMenuClick(item.path)}
          >
            <NavItemIcon isActive={isSelected}>{item.icon}</NavItemIcon>
            {!hideTitles && (
              <NavItemText style={{ marginLeft: 10 }} primary={item.title} />
            )}
            {!!item.subItems ? (
              isMenuOpen ? (
                <ExpandLessRounded />
              ) : (
                <ExpandMoreRounded />
              )
            ) : (
              ""
            )}
          </NavItem>
          {item.subItems && isMenuOpen && (
            <NavList style={{ marginLeft: 10, marginTop: -10 }}>
              {renderNavItems(item.subItems)}
            </NavList>
          )}
        </React.Fragment>
      );
    });

  return (
    <SidebarContainer>
      <NavList style={{ marginTop: 10, marginLeft: 10 }}>
        {renderNavItems(NavItems)}
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;
