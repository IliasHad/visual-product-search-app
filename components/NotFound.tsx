import { Card } from "./Card";
import { Text } from "./Text";
import { Button } from "./Button";

export const NotFound = ({ clearResults }: { clearResults: () => void }) => (
  <Card marginTop="m">
    <Card marginTop="s">
      <Text variant="header">No Results</Text>
      <Text variant="body" marginTop="s">
        Please try with another image :(
      </Text>
    </Card>
    <Card>
      <Button
        tone="primary"
        label="Clear"
        onPress={clearResults}
      />
    </Card>
  </Card>
);
