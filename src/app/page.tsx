"use client";

import { Button, Card, Title1, Body1 } from "@fluentui/react-components";
import { BookmarkRegular } from "@fluentui/react-icons";

export default function Index() {
  return (
    <Card style={{ maxWidth: "400px", margin: "20px" }}>
      <Title1>Fluent UI + Next.js 15 & React 19</Title1>
      <Body1>Welcome to your new app!</Body1>
      <Button appearance="primary" icon={<BookmarkRegular />} onClick={() => alert('It works!')}>
        Click me
      </Button>
    </Card>
  );
}
