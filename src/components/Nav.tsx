import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import { default as i18n } from "../i18n/lang.json";
import Link from "next/link";
import { Context } from "../lib/context";
import Setting from "./Setting";
import { Logo } from "../widget";
import { Button, Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
interface Props {}
export default function Nav({}: Props): ReactElement {
  const router = useRouter();
  const { state } = React.useContext(Context);
  const { locale } = router;
  return (
    <>
      <Setting />
      <nav>
        <div className="nav-content">
          <Link href="/" locale={locale}>
            <a>
              <Logo scale={0.7} />
              {/* <span className="logo-text">Ornn</span> */}
            </a>
          </Link>
          <div className="link">
            {i18n.menu.map((item, index) => (
              <div key={index}>
                <Link href={item.link} locale={locale}>
                  <a>{item.lang[locale]}</a>
                </Link>
                <div className="spacing"></div>
              </div>
            ))}
          </div>
          <div className="menu-user">
            <InputGroup
              inside
              style={{
                width: 416,
                marginRight: 24,
              }}
            >
              <Input placeholder="Search by Address / Txn Hash / Block / Token" />
              <InputGroup.Button>
                <SearchIcon />
              </InputGroup.Button>
            </InputGroup>

            <div className="btn-login">
              <Link href="/" locale={locale}>
                <a>Login</a>
              </Link>
            </div>
            <div>
              <Button appearance="primary">
                <span className="btn-text">Register</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        nav {
          /* border-bottom: 1px solid rgb(239, 242, 245); */
          transition-duration: 0.3s;
          border-bottom: 1px solid var(--ornn-light);
          /* background-color: ${state.theme.background}; */
        }
        .nav-content {
          display: flex;
          flex-direction: row;
          -webkit-box-align: center;
          align-items: center;
          padding: 5px 15px;
          max-width: 1400px;
          width: 100%;
          overflow: hidden;
          margin: 0px auto;
        }

        .logo-text {
          font-size: 16px;
        }

        .spacing {
          flex: 1 1 0%;
          max-width: 24px;
          min-width: 12px;
          min-height: 61px;
        }
      `}</style>
    </>
  );
}
