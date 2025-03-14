
import { Menu, Avatar, UnstyledButton, Divider } from "@mantine/core";


const ProfileAvatar = () => {
  return (
    <Menu width={200} shadow="md">
      {/* Avatar button */}
      <Menu.Target>
        <UnstyledButton>
          <Avatar
            src="https://randomuser.me/api/portraits/men/1.jpg" // Replace with user image URL
            alt="User Avatar"
            radius="xl"
            size="md"
            style={{
              width: '30%', // Makes the image take up full width of its container
              height: 'auto', // Ensures the aspect ratio is preserved
              maxWidth: '150px',  // Limit the maximum width to avoid the image becoming too large
            }}
          />
        </UnstyledButton>
      </Menu.Target>

      {/* Dropdown Menu */}
      <Menu.Dropdown>
        <Menu.Label>Profile</Menu.Label>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item><a href="/weeklyreport" style={{textDecoration:"none", color:"inherit"}}>Weekly Report</a></Menu.Item>
        <Menu.Item><a href="/achievements" style={{textDecoration:"none", color:"inherit"}}>Achievements</a></Menu.Item>
        <Menu.Item><a href="/weightlogs" style={{textDecoration:"none", color:"inherit"}}>Weight Logs</a></Menu.Item>
        <Divider />
        <Menu.Item color="red">Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileAvatar;
