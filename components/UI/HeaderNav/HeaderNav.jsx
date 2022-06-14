import React from 'react';
import styles from "components/UI/HeaderNav/HeaderNav.module.css"
import Link from 'next/link'
import Logotype from 'public/images/bistro-logo.svg'
import { ROUTES } from 'utils/consts';

function HeaderNav() {
  const siteMenu = [
    { name: "Главная", pagePath: ROUTES.homePath },
    { name: "Меню", pagePath: ROUTES.lunchesPath },
    { name: "Новости", pagePath: ROUTES.newsPath },
    { name: "Отзывы", pagePath: ROUTES.commentsPath },
    { name: "Контакты", pagePath: ROUTES.contactsPath }
  ];

  return (
    <div className={styles.wrapperLogoNav}>
      <Link href={"/"} passHref>
        <a>
          <Logotype className={styles["logo"]} />
        </a>
      </Link>
      <div className={styles.siteMenuList}>
        {siteMenu.map((m, i) => {
          return (
            <div className={styles.siteMenuItem} key={i}>
              <Link href={m.pagePath}>
                <a>{m.name}</a>
              </Link>
            </div>);
        })}
      </div>
    </div>
  );
}

export default HeaderNav;
