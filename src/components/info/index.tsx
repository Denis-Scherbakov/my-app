import { InfoHeader } from "./InfoHeader";
import styles from ".//info.module.css";

export function Info(props: any) {
  console.log(props);
  return (
    props.companies &&
    props.contacts && (
      <div className={styles.infoWrapper}>
        <InfoHeader />
        <div className={styles.infoHeadWrapper}>
          <h2 className={styles.infoHead}>{props.companies.shortName}</h2>
          <button className={styles.editBtn}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.3425 2.59069C14.0259 1.90727 15.134 1.90727 15.8174 2.59069L17.5282 4.30147C18.2116 4.98489 18.2116 6.09293 17.5282 6.77635L6.19018 18.1143C6.04953 18.255 5.85876 18.334 5.65985 18.334L2.53485 18.334C2.12064 18.334 1.78485 17.9982 1.78485 17.584L1.78485 14.459C1.78485 14.2601 1.86387 14.0693 2.00452 13.9287L13.3425 2.59069ZM14.7567 3.65135C14.6591 3.55372 14.5008 3.55372 14.4032 3.65135L3.28485 14.7697L3.28485 16.834L5.34919 16.834L16.4675 5.71569C16.5651 5.61806 16.5651 5.45977 16.4675 5.36213L14.7567 3.65135Z"
                fill="#82B284"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.79322 17.1555L2.96479 14.3271L4.02545 13.2664L6.85388 16.0949L5.79322 17.1555Z"
                fill="#82B284"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9856 7.96312L12.1572 5.1347L13.2178 4.07404L16.0463 6.90246L14.9856 7.96312Z"
                fill="#82B284"
              />
            </svg>
          </button>
        </div>
        <ul className={styles.infoList}>
          <li className={styles.li}>
            <div>
              <div className={styles.infoHeadWrapper}>
                <h3 className={styles.infoChapter}>Общая информация</h3>
                <button className={styles.editBtn}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.3425 2.59069C14.0259 1.90727 15.134 1.90727 15.8174 2.59069L17.5282 4.30147C18.2116 4.98489 18.2116 6.09293 17.5282 6.77635L6.19018 18.1143C6.04953 18.255 5.85876 18.334 5.65985 18.334L2.53485 18.334C2.12064 18.334 1.78485 17.9982 1.78485 17.584L1.78485 14.459C1.78485 14.2601 1.86387 14.0693 2.00452 13.9287L13.3425 2.59069ZM14.7567 3.65135C14.6591 3.55372 14.5008 3.55372 14.4032 3.65135L3.28485 14.7697L3.28485 16.834L5.34919 16.834L16.4675 5.71569C16.5651 5.61806 16.5651 5.45977 16.4675 5.36213L14.7567 3.65135Z"
                      fill="#82B284"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.79322 17.1555L2.96479 14.3271L4.02545 13.2664L6.85388 16.0949L5.79322 17.1555Z"
                      fill="#82B284"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9856 7.96312L12.1572 5.1347L13.2178 4.07404L16.0463 6.90246L14.9856 7.96312Z"
                      fill="#82B284"
                    />
                  </svg>
                </button>
              </div>
              <div className={styles.grid_div}>
                <span className={styles.infoKey}>Полное название:</span>
                <span>{props.companies.name}</span>

                <span className={styles.infoKey}>Договор:</span>
                <span>
                  {props.companies.contract.no} от{" "}
                  {new Date(
                    props.companies.contract.issue_date
                  ).toLocaleDateString()}
                </span>

                <span className={styles.infoKey}>Форма:</span>
                <span>{props.companies.businessEntity}</span>

                <span className={styles.infoKey}>Тип:</span>
                <span>{props.companies.type.join(", ")}</span>
              </div>
            </div>
          </li>
          <li className={styles.li}>
            <div>
              <div className={styles.infoHeadWrapper}>
                <h3 className={styles.infoChapter}>Контактные данные</h3>
                <button className={styles.editBtn}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.3425 2.59069C14.0259 1.90727 15.134 1.90727 15.8174 2.59069L17.5282 4.30147C18.2116 4.98489 18.2116 6.09293 17.5282 6.77635L6.19018 18.1143C6.04953 18.255 5.85876 18.334 5.65985 18.334L2.53485 18.334C2.12064 18.334 1.78485 17.9982 1.78485 17.584L1.78485 14.459C1.78485 14.2601 1.86387 14.0693 2.00452 13.9287L13.3425 2.59069ZM14.7567 3.65135C14.6591 3.55372 14.5008 3.55372 14.4032 3.65135L3.28485 14.7697L3.28485 16.834L5.34919 16.834L16.4675 5.71569C16.5651 5.61806 16.5651 5.45977 16.4675 5.36213L14.7567 3.65135Z"
                      fill="#82B284"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.79322 17.1555L2.96479 14.3271L4.02545 13.2664L6.85388 16.0949L5.79322 17.1555Z"
                      fill="#82B284"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9856 7.96312L12.1572 5.1347L13.2178 4.07404L16.0463 6.90246L14.9856 7.96312Z"
                      fill="#82B284"
                    />
                  </svg>
                </button>
              </div>
              <div className={styles.grid_div}>
                <span className={styles.infoKey}>ФИО:</span>
                <span>{`${props.contacts.lastname} ${props.contacts.firstname} ${props.contacts.patronymic}`}</span>

                <span className={styles.infoKey}>Телефон:</span>
                <span>{`+${props.contacts.phone.slice(
                  0,
                  1
                )} (${props.contacts.phone.slice(
                  1,
                  4
                )}) ${props.contacts.phone.slice(
                  4,
                  7
                )}-${props.contacts.phone.slice(
                  7,
                  9
                )}-${props.contacts.phone.slice(9, 11)}`}</span>

                <span className={styles.infoKey}>Эл. почта:</span>
                <a href="mailto:grigoriev@funeral.com">
                  {props.contacts.email}
                </a>
              </div>
            </div>
          </li>
          <li>
            <h3 className={styles.infoChapter}>Приложенные фото</h3>
            <ul>
              <li>
                <img src={props.companies.photos[0].thumbpath} alt="photo" />
                <span>Name</span>
                <span>Date</span>
              </li>
              <li>
                <img src="#" alt="photo" />
                <span>Name</span>
                <span>Date</span>
              </li>
              <li>
                <img src="#" alt="photo" />
                <span>Name</span>
                <span>Date</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  );
}
