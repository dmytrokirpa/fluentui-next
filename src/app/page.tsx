import { Button, Card, Title1, Body1 } from "@fluentui/react-components";
import { BookmarkRegular } from "@fluentui/react-icons";
import { staticStyles } from '@griffel/react';

const styles = staticStyles({ root: { maxWidth: "400px", margin: "20px" } });

export default function Index() {
  return (
    <Card style={styles.root}>
      <Title1>Fluent UI + Next.js 15 & React 19</Title1>
      <Body1>Welcome to your new app!</Body1>
      <Button appearance="primary" icon={<BookmarkRegular />}>
        Click me
      </Button>
    </Card>
  );
}
