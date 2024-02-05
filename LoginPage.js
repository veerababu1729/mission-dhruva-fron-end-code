import { useCallback } from "react";
import logo from '../images/logos.png';
import backimage from '../images/background.jpg';
import user from "../images/user.png"
import './homepage.css'
import image from '../images/op_back.jpg'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-slideshow-image";
const LoginPage = () => {
  const onRegisterTextClick = useCallback(() => {
    // Please sync "Register Page" to the project
  }, []);
  const slideImages = [
    image,
    backimage,
    user,
  ];
  
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "1000px",
    backgroundSize: "cover",
  };

  return (
    <>
    <div className="your-component" style={{height:"100%"}}>

      <div
        style={{
          height: "100%",
          width: "100%",
          // position: "relative",
          // backgroundColor:rgb(255, 0, 0),
          // backgroundImage:url("E:\\mission_dhruva\\mission_dhruva\\src\\images\\background.jpg"),
          // display: "none",
          maxWidth: "100%",
        }}
      //   alt="logo"
      // src={backimage}
      />
      <div
        style={{
          width: "1386px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 0px 20px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <main
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "37px 19px 155px",
            boxSizing: "border-box",
            gap: "29px",
            
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            maxWidth: "103%",
            flexShrink: "0",
            textAlign: "left",
            fontSize: "30px",
            color: "#000",
            fontFamily: "'IBM Plex Sans Thai Looped'",
          }}
          
        >
          {/* <img
            style={{
              width: "100%",
              // position: "relative",
              maxHeight: "100%",
              objectFit: "cover",
              display: "none",
              maxWidth: "100%",
            }}
            alt="Logo"
            src={user}
          /> */}
          <div
            style={{
              width: "489px",
              borderRadius: "50px",
              backgroundColor: "#fff",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "40px 29px 64px 30px",
              boxSizing: "border-box",
              position: "relative",
              gap: "263px",
              minWidth: "489px",
              maxWidth: "100%",
              zIndex: "1",
            }}
          >
            <img
              style={{
                width: "400px",
                position: "absolute",
                margin: "0",
                
                bottom: "450px",
                left: "50px",
                height: "250px",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="eager"
              alt=""
              src={user}
            />
            <div
              style={{
                height: "58px",
                position: "absolute",
                margin: "0",
                bottom: "140px",
                left: "calc(50% - 46.5px)",
                display: "inline-block",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                zIndex: "1",
              }}
            >
              LOGIN
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                padding: "0px 19px",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  height: "42px",
                  width: "333px",
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "0px",
                    borderRadius: "10px",
                    backgroundColor: "#0ff0fe",
                    width: "300px",
                    height: "35px",
                  }}
                />
                <input
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    fontFamily: "'Bree Serif'",
                    fontSize: "30px",
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: "0px",
                    left: "21px",
                    color: "#000",
                    textAlign: "left",
                    display: "inline-block",
                    height: "42px",
                    zIndex: "2",
                  }}
                  placeholder="GET STARTED HERE"
                  type="text"
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 1px 0px 0px",
                boxSizing: "border-box",
                gap: "18px",
                maxWidth: "100%",
                fontSize: "20px",
                color: "#0012f2",
              }}
            >
              <input
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#d9d9d9",
                  alignSelf: "stretch",
                  height: "77px",
                  borderRadius: "25px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "12px 18px 7px",
                  boxSizing: "border-box",
                  fontFamily: "'IBM Plex Sans Thai Looped'",
                  fontSize: "30px",
                  color: "#000",
                  minWidth: "250px",
                }}
                placeholder="UserName"
                type="text"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  height: "103px",
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "428px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    padding: "16px 19px 0px",
                    boxSizing: "border-box",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      position: "absolute",
                      margin: "0",
                      top: "0px",
                      right: "0px",
                      left: "0px",
                      borderRadius: "25px",
                      backgroundColor: "#d9d9d9",
                      height: "70px",
                    }}
                  />
                  <input
                    style={{
                      width: "236px",
                      border: "none",
                      outline: "none",
                      fontFamily: "'IBM Plex Sans Thai Looped'",
                      fontSize: "30px",
                      backgroundColor: "transparent",
                      height: "58px",
                      position: "relative",
                      color: "#000",
                      textAlign: "left",
                      display: "inline-block",
                      zIndex: "1",
                    }}
                    placeholder="Password"
                    type="text"
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "70px",
                    left: "9px",
                    width: "391px",
                    height: "24px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      zIndex: "4",
                    }}
                  >
                    Forgot Password?
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      position: "relative",
                      cursor: "pointer",
                      zIndex: "4",
                    }}
                    onClick={onRegisterTextClick}
                  >
                    Register
                  </div>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  height: "70px",
                  position: "relative",
                  borderRadius: "50px",
                  backgroundColor: "#0ff0fe",
                }}
              />
              <button
                style={{
                  cursor: "pointer",
                  border: "none",
                  padding: "11px 71px 35px 97px",
                  backgroundColor: "#454d4e",
                  alignSelf: "stretch",
                  height: "70px",
                  borderRadius: "50px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  style={{
                    height: "70px",
                    width: "429px",
                    position: "relative",
                    borderRadius: "50px",
                    backgroundColor: "#454d4e",
                    display: "none",
                    maxWidth: "100%",
                  }}
                />
                <div style={{alignSelf: "stretch",flex: "1",position: "relative",fontSize: "24px",fontFamily: "'IBM Plex Sans Thai Looped'",color: "#0ff0fe",textAlign: "left",zIndex: "4",}}>
                  Start Without Login
                </div>
              </button>
            </div>
          </div>
          <div style={{width: "677px",display: "flex",flexDirection: "column",alignItems: "flex-start",justifyContent: "flex-start",padding: "95px 0px 0px",boxSizing: "border-box",minWidth: "677px",maxWidth: "100%",fontSize: "96px",color: "#fff",fontFamily: "Inter"}}>
            <div style={{alignSelf: "stretch",display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "flex-start",gap: "21px",maxWidth: "100%",}}>
              <h1 style={{margin: "0",alignSelf: "stretch",height: "113px",position: "relative",fontSize: "inherit",fontWeight: "700",fontFamily: "inherit",display: "inline-block",flexShrink: "0",textShadow:"3px 0 0 #000, 0 3px 0 #000, -3px 0 0 #000, 0 -3px 0 #000",backdropFilter: "blur(4px)",zIndex: "1",}}>WELCOME TO</h1>
              <div
                style={{width: "449px",display: "flex",flexDirection: "row",alignItems: "flex-start",justifyContent: "flex-start",padding: "0px 8px 0px 0px",boxSizing: "border-box",maxWidth: "100%",}}>
                <div style={{height: "358px",flex: "1",position: "relative",maxWidth: "100%",}}>
                  <img style={{position: "absolute",height: "100%",top: "0px",bottom: "0px",left: "50px",borderRadius: "200px",maxHeight: "100%",width: "391px",objectFit: "cover",zIndex: "2",}}
                    loading="eager" alt="Logo" src={logo}/>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div>
        <h2 style={{color:"gray",fontSize:"50px"}}>ABOUT</h2>
                 
      </div>
      
    </div>
    <div className="slide-container">
      <Fade duration={500 /* milliseconds */}>
        {slideImages.map((src, index) => (
          <div key={index}>
            <div style={{ ...divStyle }}>
              <img src={src} alt={`slide-${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        ))}
      </Fade>

    </div>
      
    </>
  );
};

export default LoginPage;
