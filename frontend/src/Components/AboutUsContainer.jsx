import React from "react";
import { useTranslation } from "react-i18next";

const AboutUsContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className=".container-lg p-2 m-2">
        <h2 className="display-3 text-center m-3" style={{ color: "#e7492e" }}>
          {t("story_title")}
        </h2>
        <p>{t("about_us1")}</p>
        <p>{t("about_us2")}</p>
        <p>{t("about_us3")}</p>
        <p>{t("about_us4")}</p>
      </div>
      <div className=".container-lg-6 p-2 m-2">
        <h2 className="display-3 text-center m-3" style={{ color: "#e7492e" }}>
          {t("mission_statement")}
        </h2>
        <p className="text-center">{t("mission_statement_text")}</p>
      </div>
      <div className=".container-lg-6 p-2 m-2">
        <h2 className="display-3 text-center m-3" style={{ color: "#e7492e" }}>
          {t("guiding_principle")}
        </h2>
        <p className="text-center">{t("principle1")}</p>
        <p className="text-center">{t("principle2")}</p>
        <p className="text-center">{t("principle3")}</p>
        <p className="text-center">{t("principle4")}</p>
        <p className="text-center">{t("principle5")}</p>
      </div>
    </div>
  );
};

export default AboutUsContainer;
