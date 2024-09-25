import { css } from '@emotion/react';

import { signOut } from '@/api/firebaseAuth';
import Button from '@/components/Button';
import theme from '@/styles/theme';

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <Button
        onClick={() => signOut()}
        backgroundColor={theme.colors.primary}
        fontColor={theme.colors.white}
        text="Log out"
        customStyle={hoverStyle}
      />
    </div>
  );
};

const hoverStyle = css`
  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

export default Settings;
