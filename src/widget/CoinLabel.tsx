import React, { ReactElement } from "react";
import { Button, Drawer } from "rsuite";

interface Props {
  label: string;
}

export default function CoinLabel({ label }: Props): ReactElement {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="coin" onClick={() => setOpen(true)}>
        <h5>{label}</h5>
      </div>
      <Drawer
        size="xs"
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>{/* <Paragraph rows={8} /> */}</Drawer.Body>
      </Drawer>
      <style jsx>{`
        .coin {
          cursor: pointer;
          border-radius: 5px;
          transition-duration: 0.4s;
          padding: 0 16px;
          text-align: center;
          align-items: center;
          justify-content: center;
          display: flex;
        }
        .coin:hover {
          background-color: var(--ornn-light);
        }
        .coin:active {
          opacity: 0.5;
        }
      `}</style>
    </>
  );
}
