import { signOut } from '@/api/firebaseAuth';
import Button from '@/components/Button';

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <Button onClick={() => signOut()} backgroundColor="#" fontColor="#1B1D21" text="log out" />
    </div>
  );
};

export default Settings;
