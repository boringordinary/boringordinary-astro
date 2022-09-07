import { Box, Avatar, Text } from "@/components";

interface Props {
  name: string;
  role: string;
  avatar: string;
}

const Member = ({ avatar, name, role }: Props) => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "$2",
      }}
    >
      <Avatar src={avatar} />
      <Box>
        <Text display size="xs">
          {name}
        </Text>
        <Text size="sm" weight="500">
          {role}
        </Text>
      </Box>
    </Box>
  );
};

export { Member };
