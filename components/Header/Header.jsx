import React from "react";
import styles from "components/Header/Header.module.css";
import HeaderTop from "components/UI/HeaderTop/HeaderTop";
import HeaderNav from "components/UI/HeaderNav/HeaderNav";
import { useSelector } from "react-redux";
import ImageEditor from "components/UI/EditComponents/ImageEditor/ImageEditor";
import { INTERFACE_SETTINGS } from "utils/consts";

function Header() {
  const bgImage = useSelector((state) => state.interfaceSettings.headerImage);

  const isAdmin = useSelector((state) => state.user.isAdmin);

  return (
    <>
      <div className={styles.header}
        style={{ backgroundImage: `url('${bgImage}')` }}>
        <div className={styles.loyer}>
          <div className={styles.container}>
            <HeaderTop />
            <HeaderNav />
          </div>
        </div>
      </div>
      {
        isAdmin
        && <div className="container">
          <ImageEditor
            imageEditorTitle={"Изменение фона хедера"}
            btnText={"Измененить фон хедера"}
            interfaseSettingsKey={INTERFACE_SETTINGS.headerImage}
          />
        </div>
      }
    </>
  );
}

export default Header