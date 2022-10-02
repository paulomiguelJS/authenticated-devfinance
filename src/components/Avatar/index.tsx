import { ProfilePic } from "./styles";

interface ProfilePic {
  src: string;
}

export function Avatar() {
  return (
    <ProfilePic src="https://github.com/paulomigueljs.png" alt="Profile Pic" />
  );
}
