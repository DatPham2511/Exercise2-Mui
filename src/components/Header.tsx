import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
const useStyles = makeStyles({
  logo: {
    width: 90,
    height: 20,
    marginRight: "25px",
    marginTop: "5px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 32px",
    height: "80px",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },

  menuchildHidden: {
    top: 0,
    left: 0,
    marginTop: "65px",
    backgroundColor: "white",
    display: "flex",
    position: "absolute",
    zIndex: 1,
    padding: "20px 174px",
    gap: "130px",
    opacity: 0,
    visibility: "hidden",
    transition: "0.25s linear",
  },
  menuchildShow: {
    top: 0,
    left: 0,
    width: "74%",
    marginTop: "65px",
    backgroundColor: "white",
    display: "flex",
    position: "absolute",
    zIndex: 1,
    padding: "20px 174px",
    gap: "130px",
    opacity: 1,
    visibility: "visible",
    transition: "0.25s linear",
  },
  image: {
    width: "150px",
    height: "100px",
  },
  itemDeco: {
    "&:hover": {
      borderBottom: "1px solid blue",
    },
  },
  arrowDeco: {
    "&:hover": {
      transform: "rotate(-180deg)",
      transition: "transform 665ms cubic-bezier(0, 0, .1, 1)",
    },
  },
});
export default function Header() {
  const [idList, setidList] = useState(0);
  const [idIcon, setidIcon] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div>
        <List className={classes.menuItem}>
          <ListItem>
            <img
              src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=EnQHpxeMAzwAX_lJ4kc&_nc_ht=scontent.fhan5-9.fna&oh=00_AfA7R_MyxKJz4Ae57O-_hsT0lb_igseHUksPL2lmeIR06g&oe=63E5CCB9"
              className={classes.logo}
            ></img>
          </ListItem>
          <ListItem
            onMouseOver={() => {
              setidList(1);
            }}
            onMouseLeave={() => {
              setidList(0);
            }}
            className={classes.itemDeco}
            sx={{ padding: 0 }}
          >
            <Typography>Shop</Typography>
            <KeyboardArrowDownIcon className={classes.arrowDeco} />
          </ListItem>
          <ListItem
            onMouseOver={() => {
              setidList(2);
            }}
            onMouseLeave={() => {
              setidList(0);
            }}
            className={classes.itemDeco}
            sx={{ padding: 0 }}
          >
            <Typography sx={{ width: "125px" }}>Our technologies</Typography>
            <KeyboardArrowDownIcon className={classes.arrowDeco} />
          </ListItem>
          <ListItem
            onMouseOver={() => {
              setidList(3);
            }}
            onMouseLeave={() => {
              setidList(0);
            }}
            
            className={classes.itemDeco}
            sx={{ padding: 0 }}
          >
            <Typography sx={{ width: "68px" }}>About us</Typography>
            <KeyboardArrowDownIcon className={classes.arrowDeco} />
          </ListItem>
          <ListItem
            onMouseOver={() => {
              setidList(4);
            }}
            onMouseLeave={() => {
              setidList(0);
            }}
            className={classes.itemDeco}
            sx={{ padding: 0 }}
          >
            <Typography sx={{ width: "95px" }}>Build with us</Typography>
            <KeyboardArrowDownIcon className={classes.arrowDeco} />
          </ListItem>
        </List>
        <div
          className={
            idList === 4 ? classes.menuchildShow : classes.menuchildHidden
          }
        >
          <List>
            <ListItem>Businesses</ListItem>
            <ListItem>Creators</ListItem>
            <ListItem>Developers</ListItem>
          </List>
          <List>
            <ListItem>Careers</ListItem>
            <ListItem>Investors</ListItem>
            <ListItem>Media</ListItem>
            <ListItem>Researchers</ListItem>
            <ListItem>Engineers</ListItem>
          </List>

          <List>
            <ListItem>Government, Politics & Advocacy</ListItem>
            <ListItem>Nonprofits</ListItem>
            <ListItem>Educators</ListItem>
          </List>
        </div>
        <div
          className={
            idList === 3 ? classes.menuchildShow : classes.menuchildHidden
          }
        >
          <List>
            <ListItem>The metaverse</ListItem>
            <ListItem>Who we are</ListItem>
          </List>
          <List>
            <ListItem>Our actions</ListItem>
            <ListItem>Our community</ListItem>
          </List>
          <List>
            <ListItem>News</ListItem>
          </List>
        </div>
        <div
          className={
            idList === 2 ? classes.menuchildShow : classes.menuchildHidden
          }
        >
          <List>
            <ListItem sx={{ color: "#828282", fontWeight: "bold" }}>
              Devices
            </ListItem>
            <ListItem>Meta Quest</ListItem>
            <ListItem>Meta Portal</ListItem>
            <ListItem>Ray-Ban Stories</ListItem>
          </List>
          <List>
            <ListItem sx={{ color: "#828282", fontWeight: "bold" }}>
              Apps
            </ListItem>
            <ListItem>Meta Horizon</ListItem>
            <ListItem>Facebook</ListItem>
            <ListItem>Messenger</ListItem>
            <ListItem>Instagram</ListItem>
            <ListItem>WhatsApp</ListItem>
          </List>

          <List>
            <ListItem sx={{ color: "#828282", fontWeight: "bold" }}>
              Work products
            </ListItem>
            <ListItem>Work products overview</ListItem>
            <ListItem>Virtual reality headsets</ListItem>
            <ListItem>Meta Horizon Workrooms</ListItem>
            <ListItem>Workplace</ListItem>
          </List>
        </div>
        <div
          className={
            idList === 1 ? classes.menuchildShow : classes.menuchildHidden
          }
        >
          <List>
            <ListItem>
              <img
                className={classes.image}
                src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.8562-6/312958751_1220394568512916_712503281728572357_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6825c5&_nc_ohc=t5Ln91KKyl0AX8N-7NQ&_nc_ht=scontent.fhan5-8.fna&oh=00_AfBn7j8mydSXmQ2ZPLXiRIAwXDuRXLBiTuW_o7PVcWArYw&oe=63E8A6C6"
              ></img>
            </ListItem>
            <ListItem sx={{ color: "#828282", fontWeight: "bold" }}>
              Virtual reality
            </ListItem>
            <ListItem>Meta Quest overview</ListItem>
            <ListItem>Meta Quest Pro</ListItem>
            <ListItem>Meta Quest 2</ListItem>
            <ListItem>Apps and games</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>VR experiences</ListItem>
          </List>
          <List>
            <ListItem>
              <img
                className={classes.image}
                src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.8562-6/305813251_752000955906155_3951703708909166770_n.png?_nc_cat=103&ccb=1-7&_nc_sid=6825c5&_nc_ohc=_GSL0539EEcAX8Yb2DM&_nc_ht=scontent.fhan5-11.fna&oh=00_AfCBIrcAsNMKq05TUEdceRMLAgQCwaQuWP0yD1aS17YEVg&oe=63E8DA08"
              ></img>
            </ListItem>
            <ListItem sx={{ color: "#828282", fontWeight: "bold" }}>
              Video calling
            </ListItem>
            <ListItem>Meta Portal overview</ListItem>
            <ListItem>Meta Portal TV</ListItem>
            <ListItem>Meta Portal Go</ListItem>
            <ListItem>Meta Portal Plus</ListItem>
          </List>

          <List>
            <ListItem>
              <img
                className={classes.image}
                src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.8562-6/305813251_752000955906155_3951703708909166770_n.png?_nc_cat=103&ccb=1-7&_nc_sid=6825c5&_nc_ohc=_GSL0539EEcAX8Yb2DM&_nc_ht=scontent.fhan5-11.fna&oh=00_AfCBIrcAsNMKq05TUEdceRMLAgQCwaQuWP0yD1aS17YEVg&oe=63E8DA08"
              ></img>
            </ListItem>
            <ListItem sx={{ color: "#828282", fontWeight: "bold" }}>
              Smart glasses with Ray-Ban
            </ListItem>
            <ListItem>Ray-Ban Stories overview</ListItem>
            <ListItem>Wayfarer</ListItem>
            <ListItem>Round</ListItem>
            <ListItem>Meteor</ListItem>
          </List>
        </div>
        <div
          className={
            idList === 5 ? classes.menuchildShow : classes.menuchildHidden
          }
        >
          <List>
            <ListItem sx={{ color: "#828282", fontWeight: "bold" }}>
              Shop Help Center
            </ListItem>
            <ListItem>Product support home</ListItem>
            <ListItem>Meta Portal</ListItem>
            <ListItem>Ray-Ban Stories</ListItem>
          </List>
          <List>
            <ListItem sx={{ color: "#828282", fontWeight: "bold" }}>
              App Help Center
            </ListItem>
            <ListItem>Meta Horizon</ListItem>
            <ListItem>Facebook</ListItem>
            <ListItem>Messenger</ListItem>
            <ListItem>Instagram</ListItem>
            <ListItem>WhatsApp</ListItem>
            <ListItem>Workplace</ListItem>
          </List>
        </div>
      </div>
      <div>
        <List className={classes.menuItem}>
          <ListItem
            sx={{ padding: 0 }}
            className={classes.itemDeco}
            onMouseOver={() => {
              setidList(5);
            }}
            onMouseLeave={() => {
              setidList(0);
            }}
          >
            <Typography>Support</Typography>
            <KeyboardArrowDownIcon className={classes.arrowDeco} />
          </ListItem>
          <ListItem
            sx={{ borderLeft: "1px solid #C0C0C0 " }}
            onMouseOver={() => {
              setidIcon(true);
            }}
            onMouseLeave={() => {
              setidIcon(false);
            }}
          >
            {idIcon === false ? (
              <ShoppingBagOutlinedIcon />
            ) : (
              <ShoppingBagTwoToneIcon />
            )}
          </ListItem>
        </List>
      </div>
    </div>
  );
}
