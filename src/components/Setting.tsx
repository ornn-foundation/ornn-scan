import React, { ReactElement } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { HiHome } from "react-icons/hi";
import { Context, Mode } from "../lib/context";
import { ButtonSetting } from "../widget";
import Link from "next/link";
import { useDevice } from "../utils";

interface Props {
  btnHome?: boolean;
}

export default function Setting({ btnHome }: Props): ReactElement {
  const { state, dispatch } = React.useContext(Context);
  const { isMobile, isDesktop } = useDevice();
  const mode = () => {
    dispatch({
      type: "SET_MODE_TOGGLE",
    });
  };
  return (
    <>
      <div className="container">
        <div className="header">
          {btnHome && (
            <div className="bt">
              <Link href="/">
                <a href="/">
                  <ButtonSetting
                    style={{ fontSize: 12, color: "var(--ornn-primary)" }}
                  >
                    <HiHome />
                  </ButtonSetting>
                </a>
              </Link>
            </div>
          )}
          {isDesktop && (
            <div className="list-header">
              <span className="title-header">
                Cryptos: <span className="text-header">15,877</span>
              </span>
              <span className="title-header">
                24h Vol: <span className="text-header">$98,441,529</span>
              </span>
              <span className="title-header">
                ETH Gas: <span className="text-header">50 Gwei</span>
              </span>
            </div>
          )}
          <span className="spacing"></span>
          <div className="setting">
            {/* <div className="bt">
              <ButtonSetting style={{ fontSize: 12 }}>English</ButtonSetting>
            </div> */}
            <div className="bt">
              <ButtonSetting style={{ fontSize: 12 }}>USD</ButtonSetting>
            </div>
            <div className="bt">
              <ButtonSetting onClick={mode}>
                {state.mode === Mode.dark ? (
                  <IoSunny
                    style={{ fontSize: 12, color: "var(--ornn-primary)" }}
                  />
                ) : (
                  <IoMoon
                    style={{ fontSize: 12, color: "var(--ornn-primary)" }}
                  />
                )}
              </ButtonSetting>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          transition-duration: 0.3s;
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          padding-top: 4px;
          padding-bottom: 4px;
          position: sticky;
          top: 0;
          z-index: 931;
          border-bottom: 1px solid var(--ornn-light);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          backdrop-filter: saturate(180%) blur(20px);
          background: var(--ornn-backdrop);
          /* background-color: var(--ornn-background); */
        }
        .header {
          display: flex;
          width: 100%;
          max-width: 1400px;
          padding-right: 16px;
          padding-left: 16px;
          margin-right: auto;
          margin-left: auto;
        }

        .list-header {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: start;
          justify-content: flex-start;
        }
        .title-header {
          font-size: 11px;
          margin-right: 16px;
          white-space: nowrap;
          color: var(--ornn-medium);
        }
        .text-header {
          font-size: 11px;
          white-space: nowrap;
          color: var(--ornn-primary);
        }
        .bt {
          margin-right: 6px;
        }
        .setting {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: start;
          justify-content: flex-start;
        }
      `}</style>
    </>
  );
}
