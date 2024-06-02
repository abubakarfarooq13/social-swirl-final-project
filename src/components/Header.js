import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link, NavLink } from "react-router-dom";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const data = useSelector((state) => state.cart.cart);
  return (
    <div>
      <Navbar fluid rounded>
        <Link to={'/'}>
          <Navbar.Brand >
            <img
              src="https://abubakar13.vercel.app/favicon.ico"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              ABUBAKAR
            </span>
          </Navbar.Brand>
        </Link>

        <div className="flex md:order-2">
          <div className="">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={data.length} color="error">
                  <ShoppingCartIcon className="text-black dark:text-white" />
                </StyledBadge>
              </IconButton>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              className=""
            >
              {/* here use cart data */}
              <div className="w-56 h-56">
                <CartItem />
              </div>
            </Menu>
          </div>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://abubakar13.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.3d6fd072.jpg&w=256&q=95"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Abubakar</span>
              <span className="block truncate text-sm font-medium">
                abubakarfarooq13@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            to={"/about"}
          >
            About
          </NavLink>

          <NavLink
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            to={"/products"}
          >
            Products
          </NavLink>
          <NavLink
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            to={"/contact"}
          >
            Contact
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
