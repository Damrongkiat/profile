import { Image } from "react-bootstrap";
import AImage from "../Image/avatar.jpg";
function AvatarImage() {
  return (
    <div>
      <p>
        <Image src={AImage} fluid className="avatar-image" />
      </p>
    </div>
  );
}
export default AvatarImage;
