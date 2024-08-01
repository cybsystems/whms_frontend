import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

export const SidebarContainer = styled("div")({
  backgroundColor: "#2f3478",
  color: "white",
  width: "100%",
});

export const NavList = styled(List)({
  marginTop: 10,
  marginLeft: 10,
});

export const NavItem = styled(ListItem)(({ theme, isActive }) => ({
  color: "white",
  position: "relative",
  overflow: "hidden", // Ensure the pseudo-element stays within bounds
  transition: "color 0.3s ease, background-color 0.5s ease", // Smooth transition for color and background color

  // Conditional border radius
  borderRadius:  "40px 0 0 40px",

  // Pseudo-element for background animation
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: "100%",
    bottom: 0,
    left: 0,
    backgroundColor: "#f6f6fa",
    transition: "right 0.3s ease, background-color 0.3s ease",
    zIndex: -1, // Place it behind the text
  },

  // Apply transition effects based on isActive
  backgroundColor: isActive ? "#f6f6fa" : "inherit",
  color: isActive ? "black" : "inherit",
  "&:hover": {
    backgroundColor: isActive ? "#f6f6fa" : "#3a3f7f",
  },

  "&:hover::before": {
    right: 0, // Slide the overlay to the right on hover
    backgroundColor: "#f6f6fa", // Ensure the pseudo-element background color matches
  },
}));

export const NavItemIcon = styled(ListItemIcon)(({ isActive }) => ({
  color: isActive ? "black" : "white",
  minWidth: 0,
}));

export const NavItemText = styled(ListItemText)({
  marginLeft: 10,
});
