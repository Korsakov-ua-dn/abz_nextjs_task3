import s from "./UserCart.module.scss";
import Tooltip from "../../Common/Tooltip/Tooltip";
import LoadUserImage from "./LoadUserImage";

const UserCart = ({ src, name, position, email, tel, id }) => (
  <div className={s.cartWrapper}>
    <div className={s.border}>
      <div className={s.imgWrapper}>
        <LoadUserImage name={name} src={src} />
      </div>

      <Tooltip id={name} title={name} openSettings>
        <span id={name} className={s.name}>
          {name}
        </span>
      </Tooltip>

      <Tooltip id={id} title={position} openSettings>
        <span id={id} className={s.email}>
          {position}
        </span>
      </Tooltip>

      <Tooltip id={email} title={email} openSettings>
        <span id={email} className={s.email}>
          {email}
        </span>
      </Tooltip>

      <span id={tel} className={s.tel}>
        {tel}
      </span>
    </div>
  </div>
);

export default UserCart;
