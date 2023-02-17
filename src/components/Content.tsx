import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import React, { useEffect, useState,useRef } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  itemMore: {
    marginTop: "70px",
    padding: "0 145px",
    paddingBottom: "120px",
  },
  image: {
    marginTop: "70px",
    width: "88%",
  },
  images: {
    width: "136px",
    height: "136px",
  },
  image1: {
    width: "562px",
    height: "100%",
  },
  logo: {
    width: 145,
    height: 30,
  },
  item: {
    display: "flex",
  },
  item2: {
    display: "flex",
    alignItems: "center",
  },

  itemImage: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f1f4f7",
    paddingRight: "20px",
    paddingTop: "10px",
    paddingBottom: "5px",
  },
  contenItem3: {
    padding: "115px 92px",
    backgroundColor: "#37474f",
    color: "white",
    textAlign: "left",
  },
  itemLatest: {
    display: "flex",
    marginTop: "20px",
    marginBottom: "70px",
    justifyContent: "space-between",
  },
  imageLatest: {
    width: "352px",
    height: "281px",
  },
  itemMeta: {
    marginTop: "100px",
    textAlign: "center",
  },
  video: {
    width: "100%",
  },
  contentSlide:{
    height:'958px'
  }
});
const slide = [
  {
    id: 0,
    title: "Helping people do more together",
    number: "$7 billion",
    description:
      "raised by our community on Facebook and Instagram to support causes they care about",
    video:
      "https://video.fhan5-11.fna.fbcdn.net/v/t39.25447-2/324104092_895922548519011_8871313342987802889_n.mp4?_nc_cat=100&vs=e6afdacb2d994d33&_nc_vs=HBksFQAYJEdKeHZVUk5qTUVBNTFpNERBQW1aX0xON1BCMTdibWRqQUFBRhUAAsgBABUAGCRHS0RrY0JKNTBoOENMY01FQUt2d1Q0SThrc05GYnY0R0FBQUYVAgLIAQBLB4gScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AHXVzZV9sYW5jem9zX2Zvcl92cW1fdXBzY2FsaW5nABFkaXNhYmxlX3Bvc3RfcHZxcwAVACUAHAAAJuaz4fXZl6YIFQIoAkMzGAt2dHNfcHJldmlldxwXQBiAAAAAAAAYKWRhc2hfaTRsaXRlYmFzaWNfNXNlY2dvcF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwqIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQCMTURb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZBAxMDczMzAwNTQzMzg1NjAwEm9lbV92aWRlb19hc3NldF9pZA81ODY0MTQ5NzY1NTI3MDAVb2VtX3ZpZGVvX3Jlc291cmNlX2lkEDIzMzU3Njk5MDMyNDY1Nzkcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAzMzU1NTkwNjY4MDMxMDU3DnZ0c19yZXF1ZXN0X2lkACUCHAAlvgEbB4gBcwQ1MTYxAmNkCjIwMjItMTAtMDUDcmNiATADYXBwBVZpZGVvAmN0CFVOTElTVEVEE29yaWdpbmFsX2R1cmF0aW9uX3MFNi4yMDgCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-7&_nc_sid=413ca4&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=x5FkAxwrsHUAX8Cph4m&_nc_ht=video.fhan5-11.fna&oh=00_AfAMoSfGm-iDwtEP9CzCcUyux96vl56Yp3rCT55N88Y0xg&oe=63EA00D7&_nc_rid=851255595029547",
  },
  {
    id: 1,
    title: "Helping people do more together",
    number: "200M+",
    description:
      "businesses use our services every month to connect with customers and grow",
    video:
      "https://video.fhan5-8.fna.fbcdn.net/v/t39.25447-2/323993468_6473881455960989_8152506395759685160_n.mp4?_nc_cat=110&vs=4e6b680611efdea8&_nc_vs=HBksFQAYJEdIeS1UeE9kSTREODlmOFdBQ2d1VzRSZmhTTnhibWRqQUFBRhUAAsgBABUAGCRHSUlyZ3hKRFJRRS1uN0FmQUxtUm5iREVJWXg2YnY0R0FBQUYVAgLIAQBLB4gScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AHXVzZV9sYW5jem9zX2Zvcl92cW1fdXBzY2FsaW5nABFkaXNhYmxlX3Bvc3RfcHZxcwAVACUAHAAAJoqmxOSN9aoTFQIoAkMzGAt2dHNfcHJldmlldxwXQB9WBBiTdLwYKWRhc2hfaTRsaXRlYmFzaWNfNXNlY2dvcF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwqIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQCMTURb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA82MjE3MjgwMzk1NzM3MTcSb2VtX3ZpZGVvX2Fzc2V0X2lkEDU0Mzg3OTI0ODYyNDE2MDgVb2VtX3ZpZGVvX3Jlc291cmNlX2lkEDU0NDIzOTU0MjkxNzc3MzMcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxMTMwNTA5NTY3NjY4NjA2DnZ0c19yZXF1ZXN0X2lkACUCHAAlvgEbB4gBcwQ1NDU3AmNkCjIwMjItMTAtMDUDcmNiATADYXBwBVZpZGVvAmN0CFVOTElTVEVEE29yaWdpbmFsX2R1cmF0aW9uX3MINy45MTQ2NjcCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-7&_nc_sid=413ca4&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=dhTBqdX8OZ0AX8iaAiQ&_nc_ht=video.fhan5-8.fna&oh=00_AfCB-vy8NKxKzdUaISueEO8wwLpIrhFdEdXaUQWPnrfWDw&oe=63EBB5D8&_nc_rid=958296836059675",
  },
  {
    id: 2,
    title: "Helping people do more together",
    number: "700M+",
    description:
      "people use augmented reality across our apps and devices every month",
    video:
      "https://video.fhan5-9.fna.fbcdn.net/v/t39.25447-2/324188884_2463187540496637_4723169442657547408_n.mp4?_nc_cat=109&vs=235307ee9a7575b2&_nc_vs=HBksFQAYJEdOUzZVaFA5MEYyS1FjQUlBSkEwbFd1VkVZeEJibWRqQUFBRhUAAsgBABUAGCRHSmkyZ1JLT3RveHk5YVFCQU1sRjdpTHBXVDRQYnY0R0FBQUYVAgLIAQBLB4gScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AHXVzZV9sYW5jem9zX2Zvcl92cW1fdXBzY2FsaW5nABFkaXNhYmxlX3Bvc3RfcHZxcwAVACUAHAAAJtKcgpfprN4CFQIoA0MzZRgLdnRzX3ByZXZpZXccF0AbKwIMSbpeGClkYXNoX2k0bGl0ZWJhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50AjE1EW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNzY2Mzg4NjY3OTg5MTI1Em9lbV92aWRlb19hc3NldF9pZA81MDI4MzkzMDg1MTk5NzYVb2VtX3ZpZGVvX3Jlc291cmNlX2lkDzc3MDQyODE3MDY4NDIwMRxvZW1fc291cmNlX3ZpZGVvX2VuY29kaW5nX2lkEDExNjQ3MjUxMDQxODM0NDYOdnRzX3JlcXVlc3RfaWQAJQIcACW%2BARsHiAFzAzgwMwJjZAoyMDIyLTEwLTA1A3JjYgEwA2FwcAVWaWRlbwJjdAhVTkxJU1RFRBNvcmlnaW5hbF9kdXJhdGlvbl9zCDYuODY5MzMzAnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-7&_nc_sid=413ca4&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=CJSPxUIQ6NAAX-NPCrX&_nc_ht=video.fhan5-9.fna&oh=00_AfC9Fyezdy2c8cCku_PfM-ZVUnLtivWpotPi4p8L2-38Sg&oe=63E9DC5A&_nc_rid=435402054204812",
  },
];
export default function Content() {
  const classes = useStyles();
  const [idSlide, setidSlide] = useState(0);
  
  return (
    <div>
      <Container sx={{ marginTop: "100px", textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ padding: "0 380px", marginBottom: "20px" }}
        >
          Bringing people closer every day
        </Typography>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowCircleRightOutlinedIcon />
          <Typography
            sx={{ alignItems: "center", fontWeight: "bold", width: "190px" }}
          >
            Learn about our mission
          </Typography>
        </Container>
        <img
          src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.8562-6/306142498_1996009553932154_5207118015223801656_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6825c5&_nc_ohc=Cr3AsB_nO50AX_kp-fY&_nc_ht=scontent.fhan5-8.fna&oh=00_AfAIELYv6mgDfjgfPHFwW5XHwWwcmxS7qMVJ9dol4BviSw&oe=63E93BDF"
          alt=""
          className={classes.image}
        />
      </Container>
      <div className={classes.itemMeta}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=EnQHpxeMAzwAX_lJ4kc&_nc_ht=scontent.fhan5-9.fna&oh=00_AfA7R_MyxKJz4Ae57O-_hsT0lb_igseHUksPL2lmeIR06g&oe=63E5CCB9"
            className={classes.logo}
          ></img>
        </Container>
        <Typography
          variant="h4"
          sx={{ padding: "0 210px", marginBottom: "50px" }}
        >
          Meta builds technologies that help people connect, find communities
          and grow businesses.
        </Typography>
        <div className={classes.contentSlide}>
          <Container
            sx={{
              position: "absolute",
              marginLeft: "75px",
              marginTop: "350px",
              zIndex: 1,
            }}
          >
            <Typography sx={{ fontSize: "24px" }}>
              {slide[idSlide].title}
            </Typography>
            <Typography
              variant="h2"
              sx={{ paddingTop: "20px", fontWeight: "400" }}
            >
              {slide[idSlide].number}
            </Typography>
            <Typography sx={{ padding: "20px 395px" }}>
              {slide[idSlide].description}
            </Typography>
            <Container>
              <ArrowDropDownCircleOutlinedIcon
                onClick={() => {
                  if (slide[idSlide].id > 0) {
                    setidSlide(idSlide - 1);
                  } else {
                    setidSlide(slide.length - 1);
                  }
                }}
                sx={{
                  transform: "rotate(90deg)",
                  fontSize: "50px",
                  marginRight: "10px",
                }}
              />
              <ArrowDropDownCircleOutlinedIcon
                sx={{ transform: "rotate(-90deg)", fontSize: "50px" }}
                onClick={() => {
                  if (slide[idSlide].id < slide.length - 1) {
                    setidSlide((prev) => prev + 1);
                  } else {
                    setidSlide(0);
                  }
                }}
              />
            </Container>
          </Container>
         
          <video
          className={classes.video}
            autoPlay
            loop
            muted
            src={slide[idSlide].video}
          >
            <source
              type="video/mp4"
            />
          </video>
          
        </div>
      </div>
      <Container sx={{ marginTop: "100px", textAlign: "center" }}>
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
          The future of digital connection
        </Typography>
        <Typography sx={{ padding: "0 230px", marginBottom: "20px" }}>
          We’re moving beyond 2D screens and into immersive experiences in the
          metaverse, helping create the next evolution of social technology.
        </Typography>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowCircleRightOutlinedIcon />
          <Typography
            sx={{ alignItems: "center", fontWeight: "bold", width: "215px" }}
          >
            Experience the meataverse
          </Typography>
        </Container>
        <Box
          sx={{
            justifyContent: "center",
            marginTop: "70px",
          }}
        >
          <video
            style={{ width: "88%" }}
            autoPlay
            loop
            muted
            poster="https://scontent.fhan5-8.fna.fbcdn.net/v/t15.5256-10/302675121_5617658934922010_2596047451145551455_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f2c4d5&_nc_ohc=4Uvaty6Zj9cAX-9KpV6&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCw5ZjvawOBgtoOrGsowSbwpkH8aNtGrtFs_drpygz9gQ&oe=63E87C03"
          >
            <source
              src="https://video.fhan5-9.fna.fbcdn.net/v/t39.25447-2/319184704_598510652034294_3589554262355307770_n.mp4?_nc_cat=109&vs=b7c7b5e2b03cb1de&_nc_vs=HBksFQAYJEdFQmZCaFAyRE1fZVZ5QUNBUHBzclZXVnFOQXhibWRqQUFBRhUAAsgBABUAGCRHTWxCU3hJTlhmMlZCendDQUNMc0FFVlhJVWh6YnY0R0FBQUYVAgLIAQBLB4gScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AHXVzZV9sYW5jem9zX2Zvcl92cW1fdXBzY2FsaW5nABFkaXNhYmxlX3Bvc3RfcHZxcwAVACUAHAAAJqalovDWzvoTFQIoAkMzGAt2dHNfcHJldmlldxwXQCreNT987ZEYKWRhc2hfaTRsaXRlYmFzaWNfNXNlY2dvcF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwqIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQCMTURb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA81MzcwNTM4ODQ4OTMyNTISb2VtX3ZpZGVvX2Fzc2V0X2lkEDEyMTM3MjM0MTYxMTY4MTIVb2VtX3ZpZGVvX3Jlc291cmNlX2lkEDU2MTc2NTcwODQ5MjIxOTUcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZA85MjU4NDc3OTE3NDAyNTkOdnRzX3JlcXVlc3RfaWQAJQIcACW%2BARsHiAFzBDkxNTYCY2QKMjAyMi0wOS0xNANyY2IBMANhcHAFVmlkZW8CY3QIVU5MSVNURUQTb3JpZ2luYWxfZHVyYXRpb25fcwYxMy41MDQCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-7&_nc_sid=413ca4&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=Hg2-6QUqC0MAX8LcXfz&_nc_ht=video.fhan5-9.fna&oh=00_AfBhxHnqZp-Spe4NkPwh_NLvFGJz8VqrY0JtPyv76lanJw&oe=63EA9B5E&_nc_rid=172661345579071"
              type="video/mp4"
            />
          </video>
        </Box>
      </Container>
      <div className={classes.itemMore}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowDownwardIcon sx={{ fontSize: "small" }} />
          <Typography sx={{ marginLeft: "10px" }}>
            More about the metaverse
          </Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
          }}
        >
          <div className={classes.itemImage}>
            <Container>
              <img
                className={classes.images}
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.8562-6/306787733_800348254437798_8034004483001918885_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6825c5&_nc_ohc=dT9uNEu2faAAX_pu6vR&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDZh_8Pm4iNUx3DWQmAgLBXs2PNpP65PG4xe0mq1QaXFQ&oe=63E80265"
              />
            </Container>
            <Container>
              <Typography sx={{ width: "175px" }}>
                What is the metaverse?
              </Typography>
            </Container>
            <ArrowCircleRightOutlinedIcon sx={{ fontSize: "40px" }} />
          </div>

          <div className={classes.itemImage}>
            <Container>
              <img
                className={classes.images}
                src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.8562-6/307109884_1962402090627892_4405481009699463332_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6825c5&_nc_ohc=eXM3lPcxWwcAX8gvr1M&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBJHSEn2WEk7NRLSWVoQmqxXO8ga5gTwEhitZcJbn_H-Q&oe=63E97729"
              />
            </Container>
            <Container>
              <Typography sx={{ width: "175px" }}>
                How we're building the metaverse responsibly
              </Typography>
            </Container>
            <ArrowCircleRightOutlinedIcon sx={{ fontSize: "40px" }} />
          </div>
        </Container>
      </div>
      <Container sx={{ marginTop: "25px", textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", padding: "0 285px" }}
        >
          Keeping people safe and making a positive impact
        </Typography>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "70px",
          }}
        >
          <ArrowCircleRightOutlinedIcon />
          <Typography
            sx={{ alignItems: "center", fontWeight: "bold", width: "190px" }}
          >
            Learn about our actions
          </Typography>
        </Container>
        <div className={classes.item}>
          <div className={classes.contenItem3}>
            <Typography variant="h4">
              Prioritizing privacy and security
            </Typography>
            <Typography sx={{ padding: "20px 0px" }}>
              We’re building social experiences that keep your account secure
              and enable you to make choices around how your data is used.
            </Typography>
            <div className={classes.item2}>
              <ArrowCircleRightOutlinedIcon />
              <Typography sx={{ marginLeft: "10px" }}>Learn more</Typography>
            </div>
          </div>
          <div>
            <img
              className={classes.image1}
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.8562-6/311593019_1027584188034369_5001878551001725037_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6825c5&_nc_ohc=T2qJjqKtebEAX_JRjNR&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCB1h-8rQqh4v2uGjvnMPhtvHrSc4BxEfdgKr3eDbuzvA&oe=63E7CFB9"
            ></img>
          </div>
        </div>
      </Container>
      <div className={classes.itemMore}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowDownwardIcon sx={{ fontSize: "small" }} />
          <Typography sx={{ marginLeft: "10px" }}>
            More actions we're taking
          </Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
          }}
        >
          <div className={classes.itemImage}>
            <Container>
              <img
                className={classes.images}
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.8562-6/306939504_421743463193171_6692585613395871479_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=PNVTagwOk_QAX_-hZTc&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDcV8vJnor7amjUkyaWUBIkCFz7YSIgIOs4k5YuD9MQTg&oe=63E8A206"
              />
            </Container>
            <Container>
              <Typography sx={{ width: "175px" }}>
                Prepareing for elections
              </Typography>
            </Container>
            <ArrowCircleRightOutlinedIcon sx={{ fontSize: "40px" }} />
          </div>

          <div className={classes.itemImage}>
            <Container>
              <img
                className={classes.images}
                src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.8562-6/298092280_762801578178044_3916714722288959886_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6825c5&_nc_ohc=jqTCIDHyiAAAX-cYjtW&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAF0sUWbspu11eUbsTNBKe0Yx6QjrD2WV95faij75GiLw&oe=63E9488A"
              />
            </Container>
            <Container>
              <Typography sx={{ width: "175px" }}>
                Promoting safety and expression
              </Typography>
            </Container>
            <ArrowCircleRightOutlinedIcon sx={{ fontSize: "40px" }} />
          </div>
        </Container>
      </div>
      <Container>
        <div className={classes.item2}>
          <ArrowDownwardIcon sx={{ fontSize: "small" }} />
          <Typography sx={{ marginLeft: "10px" }}>Latest News</Typography>
        </div>
        <div className={classes.itemLatest}>
          <div>
            <img
              className={classes.imageLatest}
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.8562-6/323426206_2086783788177674_4674365106130582644_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6825c5&_nc_ohc=q2EUYV8hnBIAX9kkCBl&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCOPWjY3RPg8pi0XrCfyOccX1QwTdthjn0Wd7C3oE9RWQ&oe=63E8E241"
              alt=""
            />
            <Typography
              sx={{ fontSize: "larger", width: "350px", padding: "10px 0" }}
            >
              Get a Front Row Seat to NBA Games on Meta Quest
            </Typography>
            <Typography sx={{ marginBottom: "20px", width: "350px" }}>
              We’re launching more than 50 live NBA games in virtual reality on
              Meta Quest.
            </Typography>
            <div className={classes.item2}>
              <ArrowCircleRightOutlinedIcon />
              <Typography sx={{ marginLeft: "10px", fontWeight: "bold" }}>
                Read more
              </Typography>
            </div>
          </div>
          <div>
            <img
              className={classes.imageLatest}
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.8562-6/325334352_1802057240166391_8496071478361827842_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6825c5&_nc_ohc=510LvDNK2Y8AX8rKPq5&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAXQvnoBs6YLWzKr3uc4GHoeG5cA-0ty2khUy6PKFIE8g&oe=63E96A5A"
              alt=""
            />
            <Typography
              sx={{ fontSize: "larger", width: "350px", padding: "10px 0" }}
            >
              Expanding Features for End-to-End Encryption on Messenger
            </Typography>
            <Typography sx={{ marginBottom: "20px", width: "350px" }}>
              We’re introducing more features, like chat themes, into our
              end-to-end encrypted experience on Messenger.
            </Typography>
            <div className={classes.item2}>
              <ArrowCircleRightOutlinedIcon />
              <Typography sx={{ marginLeft: "10px", fontWeight: "bold" }}>
                Read more
              </Typography>
            </div>
          </div>
          <div>
            <img
              className={classes.imageLatest}
              src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.8562-6/326188623_932315651461603_9057467761607563704_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6825c5&_nc_ohc=x0y6UXjABhkAX8R1_Sa&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBH4ixfJRCPEC9KYDC5-occhIU0b6SyFCIpB4MqtXl66w&oe=63E91FBB"
              alt=""
            />
            <Typography
              sx={{ fontSize: "larger", width: "350px", padding: "10px 0" }}
            >
              Instagram Quiet Mode: A New Way to Manage Your Time and Focus
            </Typography>
            <Typography sx={{ marginBottom: "20px", width: "350px" }}>
              Quiet mode turns off notifications and sends an auto-reply when
              someone sends you a DM.
            </Typography>
            <div className={classes.item2}>
              <ArrowCircleRightOutlinedIcon />
              <Typography sx={{ marginLeft: "10px", fontWeight: "bold" }}>
                Read more
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
