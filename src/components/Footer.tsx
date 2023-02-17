import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
const useStyles = makeStyles({
  footer1: {
    display: "flex",
    backgroundColor: "#f1f4f7",
    justifyContent: "space-between",
    gap: "5px",
    padding: "70px 69px",
  },
  footer2: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "small",
    padding: "5px 69px",
  },
  footerIcon: {
    display: "flex",
    gap: "13px",
    width: "24px",
    height: "24px",
  },
  logo: {
    "&:hover": {},
    width: "87px",
    height: "17px",
  },
  footerItem1: {
    width: "20%",
  },
  footer2Item: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  langShow: {
    position: "absolute",
    backgroundColor: "white",
    right: 0,
    zIndex: 1,
    marginBottom: "620px",
    padding: "15px 0px",
    width: "215px",
    opacity: 1,
    visibility: "visible",
    
  },
  langHidden: {
    position: "absolute",
    backgroundColor: "white",
    right: 0,
    zIndex: 1,
    marginBottom: "620px",
    padding: "10px 0px",
    width: "215px",
    opacity: 0,
    visibility: "hidden",
  },
  itemHover: {
    "&:hover": {
      backgroundColor: "#0066FF",
      color: "white",
    },
  },
});
const language = [
  {
    id: 0,
    title: "English (UK)",
  },
  {
    id: 1,
    title: "Svenska",
  },
  {
    id: 2,
    title: "Polski",
  },
  {
    id: 3,
    title: "Nederlands",
  },
  {
    id: 4,
    title: "Norsk (bokmål)",
  },
  {
    id: 5,
    title: "한국어",
  },
  {
    id: 6,
    title: "Suomi",
  },
  {
    id: 7,
    title: "Dansk",
  },
  {
    id: 8,
    title: "中文(台灣)",
  },
  {
    id: 9,
    title: "Italiano",
  },
  {
    id: 10,
    title: "Português (Brasil)",
  },
  {
    id: 11,
    title: "한국어",
  },
  {
    id: 12,
    title: "日本語",
  },
  {
    id: 13,
    title: "Français (France)",
  },
  {
    id: 14,
    title: "Español",
  },
  {
    id: 15,
    title: "Español (España)",
  },
  {
    id: 16,
    title: "English (US)",
  },
];
export default function Footer() {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [idLang, setidLang] = useState(0);

  const handleClose = (id: number) => {
    setidLang(id);
    setState(false);
  };
  return (
    <div>
      <div className={classes.footer1}>
        <div className={classes.footerItem1}>
          <List>
            <ListItem>
              <img
                src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=EnQHpxeMAzwAX_lJ4kc&_nc_ht=scontent.fhan5-9.fna&oh=00_AfA7R_MyxKJz4Ae57O-_hsT0lb_igseHUksPL2lmeIR06g&oe=63E5CCB9"
                className={classes.logo}
              ></img>
            </ListItem>
            <ListItem sx={{ paddingTop: "25px", paddingBottom: "12px" }}>
              Follow us
            </ListItem>

            <ListItem>
              <div className={classes.footerIcon}>
                <img src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.8562-6/275949698_3248957128655833_369430323747988984_n.png?_nc_cat=101&ccb=1-7&_nc_sid=6825c5&_nc_ohc=02s1FcUk3MwAX9wgjSS&_nc_ht=scontent.fhan5-10.fna&oh=00_AfBWINlsdDPuuBHGqpsPhCNweWUqq5Ui9goGF_QZ0CZXVA&oe=63EA2F6E"></img>
                <img src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.8562-6/276079790_239645664974434_7595452976573962628_n.png?_nc_cat=102&ccb=1-7&_nc_sid=6825c5&_nc_ohc=Po-L4JmO2x4AX_Sw4hS&_nc_ht=scontent.fhan5-2.fna&oh=00_AfBahQZQJlCEjWv6faCcODP8_lJN7O0o2XXVVVUt0U1LRA&oe=63E96131"></img>
                <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.8562-6/276008099_472069827986519_2757774944745661943_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6825c5&_nc_ohc=gBvrsqaKeWkAX9qiHI5&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCIYBkZDlkSVhYgKr-xWsCRSD05Ba5mWlsbMNUTrEJXTg&oe=63E96525"></img>
                <img src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.8562-6/275966733_5367624433282777_4220713818439775162_n.png?_nc_cat=111&ccb=1-7&_nc_sid=6825c5&_nc_ohc=lWo3gQ-3F6AAX-hLh_h&_nc_oc=AQkBBmEmlpcWUX_VnSj3NNtyPT6n5gl9RVUFfAxUauvsaddFY6R5p5g0xDLfzHrSsdo&_nc_ht=scontent.fhan5-11.fna&oh=00_AfDln82XzYZ806CjAtfSoyH9oxXxvG23-sZCCnw2pqlBXA&oe=63E956E3"></img>
                <img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.8562-6/275775241_706660317361134_8955597739986331891_n.png?_nc_cat=108&ccb=1-7&_nc_sid=6825c5&_nc_ohc=p5cgKnbB2sQAX-h5lWF&_nc_ht=scontent.fhan5-8.fna&oh=00_AfDIcJms4-uknIawTcLEmaseiaIN48EAY4BmiM_yVKCUXg&oe=63E8FD42"></img>
              </div>
            </ListItem>
          </List>
        </div>
        <div>
          <List sx={{ fontSize: "small" }}>
            <ListItem
              sx={{ color: "#344854", fontSize: "16px", fontWeight: "700" }}
            >
              Virtual reality
            </ListItem>
            <ListItem>Shop Meta Quest</ListItem>
            <ListItem>VR for Good</ListItem>
            <ListItem>Forums</ListItem>
            <ListItem>Referrals</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Creators</ListItem>
            <ListItem>Download SDKs</ListItem>
            <ListItem>Developers</ListItem>
            <ListItem>Made for Meta partner program</ListItem>
            <ListItem>Meta Quest health & safety information</ListItem>
            <ListItem>VR for work</ListItem>
          </List>
          <List sx={{ fontSize: "small", paddingTop: "50px" }}>
            <ListItem
              sx={{ color: "#344854", fontSize: "16px", fontWeight: "700" }}
            >
              Our actions
            </ListItem>
            <ListItem>Data and privacy</ListItem>
            <ListItem>Safety and expression</ListItem>
            <ListItem>Elections</ListItem>
            <ListItem>COVID-19 response</ListItem>
            <ListItem>Regulations</ListItem>
          </List>
        </div>
        <div>
          <List sx={{ fontSize: "small" }}>
            <ListItem
              sx={{ color: "#344854", fontSize: "16px", fontWeight: "700" }}
            >
              Video calling
            </ListItem>
            <ListItem>Shop Meta Portal</ListItem>
            <ListItem>Compare</ListItem>
            <ListItem>Features</ListItem>
            <ListItem>Private by design</ListItem>
            <ListItem>Meta Portal health & safety information</ListItem>
          </List>
          <List sx={{ fontSize: "small", paddingTop: "50px" }}>
            <ListItem
              sx={{ color: "#344854", fontSize: "16px", fontWeight: "700" }}
            >
              Smart glasses
            </ListItem>
            <ListItem>Shop Ray-Ban Stories</ListItem>
            <ListItem>Privacy information</ListItem>
            <ListItem>Terms of service</ListItem>
            <ListItem>Data policy</ListItem>
            <ListItem>Supported countries</ListItem>
          </List>
          <List sx={{ fontSize: "small", paddingTop: "50px" }}>
            <ListItem
              sx={{ color: "#344854", fontSize: "16px", fontWeight: "700" }}
            >
              Support
            </ListItem>
            <ListItem>Shop Help Center</ListItem>
            <ListItem>Order status</ListItem>
            <ListItem>Returns</ListItem>
            <ListItem>Find a product demo</ListItem>
            <ListItem>Legal</ListItem>
            <ListItem>Facebook Help Center</ListItem>
            <ListItem>Messenger Help Center</ListItem>
            <ListItem>Instagram Help Center</ListItem>
            <ListItem>WhatsApp Help Center</ListItem>
            <ListItem>Workplace Help Center</ListItem>
            <ListItem>Meta Quest</ListItem>
          </List>
        </div>
        <div>
          <List sx={{ fontSize: "small" }}>
            <ListItem
              sx={{ color: "#344854", fontSize: "16px", fontWeight: "700" }}
            >
              About us
            </ListItem>
            <ListItem>About Meta</ListItem>
            <ListItem>Media gallery</ListItem>
            <ListItem>Brand resources</ListItem>
            <ListItem>For investors</ListItem>
          </List>
          <List sx={{ fontSize: "small", paddingTop: "50px" }}>
            <ListItem
              sx={{ color: "#344854", fontSize: "16px", fontWeight: "700" }}
            >
              Our community
            </ListItem>
            <ListItem>Support SMB</ListItem>
            <ListItem>Giving together</ListItem>
            <ListItem>Social impact</ListItem>
            <ListItem>Business and community growth</ListItem>
            <ListItem>VR for Good</ListItem>
          </List>
        </div>
      </div>
      <div className={classes.footer2}>
        <div>
          <List className={classes.footer2Item}>
            <ListItem>
              <Typography sx={{ fontSize: "12px", width: "80px" }}>
                © 2023 Meta
              </Typography>
            </ListItem>
            <ListItem>
              <Typography sx={{ fontSize: "12px", width: "131px" }}>
                Community Standards
              </Typography>
            </ListItem>
            <ListItem>
              <Typography sx={{ fontSize: "12px", width: "112px" }}>
                MetaPrivacy Policy
              </Typography>
            </ListItem>
            <ListItem>
              <Typography sx={{ fontSize: "12px" }}>Terms</Typography>
            </ListItem>
            <ListItem>
              <Typography sx={{ fontSize: "12px", width: "80px" }}>
                Cookie policy
              </Typography>
            </ListItem>
          </List>
        </div>
        <div className={classes.footer2Item}>
          <Typography
            sx={{ fontSize: "12px" }}
            onClick={() => {
              if (state === false) {
                setState(true);
              } else {
                setState(false);
              }
            }}
          >
            Language {language[idLang].title}
          </Typography>
          <KeyboardArrowDownIcon />

          <div
            className={state === false ? classes.langHidden : classes.langShow}
          >
            <List >
              {language.map((lang, index) => (
                <ListItem
                  key={index}
                  onClick={() => handleClose(lang.id)}
                  className={classes.itemHover}
                >
                  {lang.title}
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}
