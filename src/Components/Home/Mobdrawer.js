import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Whitepaper from "./Whitepaper.pdf";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => window.open(Whitepaper)}style={{ color: "grey" }} disabled>
            <ListItemText>About</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton style={{ color: "grey" }} disabled>
            <ListItemText>Lottery</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="https://twitter.com/criptoluckyreal">
            <ListItemText>Twitter</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>Login</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <svg
                className="connect-icon"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3699 2.89709L14.25 8.92785L15.7516 5.36979L22.3699 2.89709Z"
                  fill="#E2761B"
                  stroke="#E2761B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.6225 2.89709L11.6771 8.98498L10.249 5.36979L3.6225 2.89709ZM19.4461 16.8764L17.2835 20.1896L21.9106 21.4627L23.2408 16.9498L19.4461 16.8764ZM2.76562 16.9498L4.08766 21.4627L8.71478 20.1896L6.55219 16.8764L2.76562 16.9498Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.45345 11.2783L7.16406 13.2287L11.7585 13.4327L11.5953 8.49548L8.45345 11.2783ZM17.5363 11.2783L14.3536 8.43835L14.2476 13.4327L18.8339 13.2287L17.5363 11.2783ZM8.7146 20.1898L11.4729 18.8433L9.08999 16.9826L8.7146 20.1898ZM14.5169 18.8433L17.2833 20.1898L16.8998 16.9826L14.5169 18.8433Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.2836 20.1897L14.5171 18.8431L14.7374 20.6467L14.713 21.4056L17.2836 20.1897ZM8.71484 20.1897L11.2855 21.4056L11.2691 20.6467L11.4732 18.8431L8.71484 20.1897Z"
                  fill="#D7C1B3"
                  stroke="#D7C1B3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3248 15.7912L9.02344 15.1138L10.6474 14.3712L11.3248 15.7912ZM14.6625 15.7912L15.3398 14.3712L16.972 15.1138L14.6625 15.7912Z"
                  fill="#233447"
                  stroke="#233447"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.71727 20.1897L9.10899 16.8765L6.55469 16.9499L8.71727 20.1897ZM16.8943 16.8765L17.286 20.1897L19.4486 16.9499L16.8943 16.8765ZM18.8365 13.2286L14.2502 13.4327L14.6746 15.7911L15.3519 14.3711L16.9841 15.1138L18.8365 13.2286ZM9.02738 15.1138L10.6595 14.3711L11.3287 15.7911L11.7612 13.4327L7.16674 13.2286L9.02738 15.1138Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.16406 13.2286L9.08999 16.9826L9.0247 15.1138L7.16406 13.2286ZM16.9814 15.1138L16.8998 16.9826L18.8339 13.2286L16.9814 15.1138ZM11.7585 13.4327L11.326 15.7911L11.8646 18.5739L11.987 14.9097L11.7585 13.4327ZM14.2476 13.4327L14.0272 14.9016L14.1251 18.5739L14.6719 15.7911L14.2476 13.4327Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6706 15.791L14.1239 18.5738L14.5156 18.8431L16.8985 16.9824L16.9801 15.1136L14.6706 15.791ZM9.02344 15.1136L9.08872 16.9824L11.4716 18.8431L11.8634 18.5738L11.3248 15.791L9.02344 15.1136Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.713 21.4058L14.7374 20.6468L14.5334 20.4673H11.4568L11.2691 20.6468L11.2855 21.4058L8.71484 20.1898L9.61252 20.9243L11.4324 22.1892H14.5579L16.3859 20.9243L17.2836 20.1898L14.713 21.4058Z"
                  fill="#C0AD9E"
                  stroke="#C0AD9E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5175 18.8432L14.1258 18.5739H11.8653L11.4735 18.8432L11.2695 20.6467L11.4572 20.4671H14.5338L14.7378 20.6467L14.5175 18.8432Z"
                  fill="#161616"
                  stroke="#161616"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.7099 9.31957L23.4035 5.99L22.3671 2.89709L14.5165 8.72384L17.536 11.2781L21.804 12.5267L22.7507 11.425L22.3426 11.1312L22.9955 10.5355L22.4895 10.1438L23.1424 9.646L22.7099 9.31957ZM2.59375 5.99L3.28741 9.31957L2.84673 9.646L3.49959 10.1438L3.00179 10.5355L3.65464 11.1312L3.24661 11.425L4.18509 12.5267L8.45314 11.2781L11.4726 8.72384L3.622 2.89709L2.59375 5.99Z"
                  fill="#763D16"
                  stroke="#763D16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.8045 12.5267L17.5365 11.2781L18.834 13.2285L16.9 16.9824L19.4461 16.9498H23.2408L21.8045 12.5267ZM8.45363 11.2781L4.18559 12.5267L2.76562 16.9498H6.55219L9.09017 16.9824L7.16424 13.2285L8.45363 11.2781ZM14.2477 13.4325L14.517 8.7238L15.7575 5.36975H10.249L11.4731 8.7238L11.7587 13.4325L11.8566 14.9178L11.8648 18.5738H14.1253L14.1416 14.9178L14.2477 13.4325Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </ListItemIcon>
            <ListItemText> Connect Metamsk </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              "& .MuiDrawer-paper": {
                background:
                  "linear-gradient(119.27deg, #000000 -55.33%, #0F042C 86.36%)",
              },
              "& .MuiList-root": {
                marginTop: "20px",
              },
              "& .MuiListItem-root": {
                color: "white",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
