import React, { ReactElement } from "react";
import { Container, Nav, Layout, TabHead } from "../src/components";

interface Props {}

export default function Blockchain({}: Props): ReactElement {
  return (
    <Layout>
      <TabHead />
      <Nav />
      <Container>
        <Container.Content>
          <div>
            <h6>Blockchain</h6>
          </div>
        </Container.Content>
      </Container>
    </Layout>
  );
}
