import s from "./Raltionship.module.scss";

const Relationship = ({ t }) => (
  <section className={s.section} id="relationship">
    <div className={s.container}>
      <h1
        dangerouslySetInnerHTML={{ __html: t("home:relationship-title") }}
        className={s.relationshipTitle}
      />
      <div className={s.skillsWrapper}>
        <div className={s.skill}>
          <img src="/images/relationship/html.svg" alt="html" />
          <h3
            dangerouslySetInnerHTML={{
              __html: t("home:relationship-subtitle-html"),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t("home:relationship-description-html"),
            }}
          />
        </div>

        <div className={`${s.cssBlock} ${s.skill}`}>
          <img src="/images/relationship/css.svg" alt="css" />
          <h3>{t("home:relationship-subtitle-css")}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: t("home:relationship-description-css"),
            }}
          />
        </div>

        <div className={s.skill}>
          <img src="/images/relationship/js.svg" alt="js" />
          <h3>{t("home:relationship-subtitle-js")}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: t("home:relationship-description-js"),
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Relationship;
