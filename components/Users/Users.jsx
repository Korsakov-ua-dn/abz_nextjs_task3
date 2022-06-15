import s from "./Users.module.scss";
import UserCart from "./UserCart/UserCart";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  showMoreUsers,
} from "../../store/reducers/users-reducer";
import Btn from "../Common/Buttons/Btn/Btn";
import Preloader from "../Common/Preloader/Preloader";


const Users = ({ t }) => {
  // console.log("res: ", res);
  const [showBtn, setShowBtn] = useState(true);

  const dispatch = useDispatch();
  const { users, currentPage, totalPages, isPreloader, isLoading } =
    useSelector((s) => s.users);

  const checkLastPage = (currentPage) => {
    if (currentPage === totalPages) {
      setShowBtn(false);
    }
  };

  const desktop = useMediaQuery("(min-width:1024px)");
  const tablet = useMediaQuery("(min-width:768px)");
  const mobile = useMediaQuery("(max-width:767px)");
  // eslint-disable-next-line no-nested-ternary
  const [portion, setPortion] = useState(0);

  useEffect(() => {
    // debugger
    // eslint-disable-next-line no-nested-ternary
    const newPortion = desktop ? 9 : tablet ? 6 : mobile ? 3 : 0;
    setPortion(newPortion);
  }, [desktop, tablet, mobile]);

  useEffect(() => {
    // debugger
    checkLastPage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    // debugger
    if (portion) {
      dispatch(getUsers(1, portion));
    }
  }, [portion]);

  const showMoreHandler = () => {
    dispatch(showMoreUsers(currentPage + 1, portion));
    checkLastPage(currentPage + 1);
  };

  if (isLoading) {
    const usersPlaceholder = new Array(portion || 3).fill(0);
    // debugger

    return (
      <section id="users" className={s.section}>
        <div className={s.container}>
          <h1 className={s.title}>{t("home:users-title")}</h1>
          <h3 className={s.subtitle}>{t("home:users-subtitle")}</h3>

          <div className={s.gridWrapper}>
            {usersPlaceholder.map((e, i) => (
              <div key={i} className={s.cardPlaceholderWrapper}>
                <div className={s.cardPlaceholderBorder}>
                  <div className={s.imgPlaceholderWrapper} />
                  <span className={s.namePlaceholder} />
                  <span className={s.positionPlaceholder} />
                  <span className={s.emailPlaceholder} />
                  <span className={s.telPlaceholder} />
                </div>
              </div>
            ))}
          </div>

          <div className={s.btnPlaceholder} />
        </div>
      </section>
    );
  }

  if (!users.length) {
    return (
      <section id="users" className={s.section}>
        <div className={s.container}>
          <h1 className={s.noUsers}>{t("home:no-users-title")}</h1>
          <Btn onClick={() => {}}>{t("header:sign-up")}</Btn>
        </div>
      </section>
    );
  }

  return (
    <section id="users" className={s.section}>
      <div className={s.container}>
        <h1 className={s.title}>{t("home:users-title")}</h1>
        <h3 className={s.subtitle}>{t("home:users-subtitle")}</h3>

        <div className={s.gridWrapper}>
          {users.map((user) => (
            <UserCart
              key={user.id}
              id={user.id}
              src={user.photo}
              name={user.name}
              position={user.position}
              email={user.email}
              tel={user.phone}
            />
          ))}
        </div>

        {isPreloader ? (
          <Preloader />
        ) : (
          showBtn && (
            <Btn onClick={showMoreHandler} outlined>
              {t("home:show-more")}
            </Btn>
          )
        )}
      </div>
    </section>
  );
}

export default Users;
