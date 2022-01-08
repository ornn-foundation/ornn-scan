import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import { Container, Layout, Nav, TabHead } from "../src/components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Link from "next/link";
import Script from "next/script";
import { Panel, List } from "rsuite";
interface Props {}

export default function Home({}: Props): ReactElement {
  const router = useRouter();
  const [items, setItems] = React.useState({
    removeId: 0,
    items: [
      { id: Math.floor(1000 + Math.random() * 9000), text: "Buy eggs" },
      { id: Math.floor(1000 + Math.random() * 9000), text: "Pay bills" },
      {
        id: Math.floor(1000 + Math.random() * 9000),
        text: "Invite friends over",
      },
      { id: Math.floor(1000 + Math.random() * 9000), text: "Fix the TV" },
    ],
  });
  const { query, locale } = router;
  return (
    <>
      <Layout>
        <TabHead />
        <Nav />
        <Container>
          <Container.Content>
            <button
              onClick={() => {
                if (items.items.length === 5) {
                  setItems((v) => ({
                    removeId: 0,
                    items: v.items.filter((item) => item.id !== v.removeId),
                  }));
                }
                setItems((v) => {
                  return {
                    removeId: v.items[0].id,
                    items: [
                      ...v.items,
                      {
                        id: Math.floor(1000 + Math.random() * 9000),
                        text: `List item${Math.floor(
                          1000 + Math.random() * 9000
                        )}`,
                      },
                    ],
                  };
                });
              }}
            >
              Add a list item
            </button>
            <br />
            <TransitionGroup
              className="todo-list"
              style={{ display: "flex", flexDirection: "column-reverse" }}
            >
              {items.items.map(({ id, text }) => (
                <CSSTransition key={id} timeout={500} classNames="item">
                  <div className="box-item">
                    <button
                      onClick={() =>
                        setItems((v) => ({
                          removeId: 0,
                          items: v.items.filter((item) => item.id !== id),
                        }))
                      }
                    >
                      &times;
                    </button>
                    {text}
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </Container.Content>
        </Container>
      </Layout>
      <style jsx>{`
        .crad {
        }
        .list-item {
          display: flex;
          flex-direction: column-reverse;
        }

        .box-item {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #f4f4f4;
          padding: 0;
          height: 46px;
          transition: all 0.4s ease-out;
        }

        .item-enter {
          height: 0;
          opacity: 0.01;
        }
        .item-enter-active {
          opacity: 1;
          height: 46px;
        }

        .item-exit {
          opacity: 1;
        }
        .item-exit-active {
          height: 0;
          opacity: 0;
        }

        /* .item-enter {
          height: 0;
          opacity: 0.01;
        }
        .item-enter-active {
          height: 46px;
          opacity: 1;
        }
        .item-exit {
          opacity: 1;
        }
        .item-exit-active {
          height: 0;
          opacity: 0;
        } */

        /* .item-animation-enter {
          height: 0;
          opacity: 0.01;
        }

        .item-animation-enter.item-animation-enter-active {
          height: 46px;
          opacity: 1;
        }

        .item-animation-exit {
          opacity: 1;
        }
        .item-animation-exit-active {
          height: 0;
          opacity: 0;
        } */

        /* .item-leave {
          opacity: 1;
        }

        .item-leave.item-leave-active {
          opacity: 0.01;
          transition: opacity 300ms ease-in;
        } */
      `}</style>
    </>
  );
}
