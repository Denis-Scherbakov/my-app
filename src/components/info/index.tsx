import { InfoHeader } from "./InfoHeader";
import styles from ".//info.module.css";
import { ShortNameInput } from "../forms/ShortNameInput";
import { ContactFullNameInput } from "../forms/ContactFullNameInput";
import { ContactPhoneInput } from "../forms/ContactPhoneInput";
import { ContactEmailInput } from "../forms/ContactEmailInput";
import { GeneralInfoForm } from "../forms/general-info-form";
import { ContactDataForm } from "../forms/contact-data-form";

export function Info(props: any) {
  let options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    props.companies &&
    props.contacts && (
      <div className={styles.infoWrapper}>
        <InfoHeader
          modalDeleteCompany={props.modalDeleteCompany}
          handleModalDeleteCompany={props.handleModalDeleteCompany}
          handleCancelDeleteCompany={props.handleCancelDeleteCompany}
          handleDeleteCompany={props.handleDeleteCompany}
        />
        <div className={styles.infoHeadWrapper}>
          {!props.shortNameIsEdit && (
            <h2 className={styles.infoHead}>{props.companies.shortName}</h2>
          )}

          {props.shortNameIsEdit && (
            <div className={styles.inputShortNameWrapper}>
              <ShortNameInput
                shortNameValue={props.shortNameValue}
                handleShortNameChange={props.handleShortNameChange}
                handleShortNameSave={props.handleShortNameSave}
              />
            </div>
          )}
          {!props.shortNameIsEdit && (
            <button
              className={styles.editBtn}
              onClick={props.handleShortNameEdit}
            >
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
          )}
        </div>
        <ul className={styles.infoList}>
          <li className={styles.li}>
            <div className={styles.formWrapper}>
              <div className={styles.infoKeysWrapper}>
                <h3 className={styles.firstInfoChapter}>Общая информация</h3>
                <div className={styles.infoKey}>Полное название:</div>
                <div className={styles.infoKey}>Договор:</div>
                <div className={styles.infoKey}>Форма:</div>
                <div className={styles.infoKey}>Тип:</div>
              </div>
              {!props.businessEntityIsEdit && (
                <div className={styles.infoValueWrapper}>
                  <button
                    className={styles.editBtn}
                    onClick={props.handleBusinessEntityEdit}
                  >
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
                  <div className={styles.infoValue}>{props.companies.name}</div>
                  <div className={styles.infoValue}>
                    {props.companies.contract.no} от{" "}
                    {new Date(
                      props.companies.contract.issue_date
                    ).toLocaleDateString()}
                  </div>
                  <div className={styles.infoValue}>
                    {props.companies.businessEntity}
                  </div>
                  <div className={styles.infoValue}>
                    {props.companies.type.join(", ")}
                  </div>
                </div>
              )}
              {props.businessEntityIsEdit && (
                <GeneralInfoForm
                  handleBusinessEntitySave={props.handleBusinessEntitySave}
                  businessEntityValue={props.businessEntityValue}
                  handleBusinessEntityNameChange={
                    props.handleBusinessEntityNameChange
                  }
                  handleBusinessEntityContractNoChange={
                    props.handleBusinessEntityContractNoChange
                  }
                  handleBusinessEntityIssueDateChange={
                    props.handleBusinessEntityIssueDateChange
                  }
                  handleBusinessEntityFormChange={
                    props.handleBusinessEntityFormChange
                  }
                  handleBusinessEntityTypeChange={
                    props.handleBusinessEntityTypeChange
                  }
                />
              )}
            </div>
          </li>
          <li className={styles.li}>
            <div className={styles.formWrapper}>
              <div className={styles.formWrapper}>
                <div className={styles.infoKeysWrapper}>
                  <h3 className={styles.firstInfoChapter}>Контактные данные</h3>
                  <div className={styles.infoKey}>ФИО:</div>
                  <div className={styles.infoKey}>Телефон:</div>
                  <div className={styles.infoKey}>Эл. почта:</div>
                </div>
                {!props.contactsIsEdit && (
                  <div className={styles.infoValueWrapper}>
                    <button
                      className={styles.editBtn}
                      onClick={props.handleContactsIsEdit}
                    >
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
                    <div className={styles.infoValue}>
                      {`${props.contacts.lastname} ${props.contacts.firstname} ${props.contacts.patronymic}`}
                    </div>
                    <div className={styles.infoValue}>
                      {`+${props.contacts.phone.slice(
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
                      )}-${props.contacts.phone.slice(9, 11)}`}
                    </div>
                    <div className={styles.infoValue}>
                      <a href="mailto:grigoriev@funeral.com">
                        {props.contacts.email}
                      </a>
                    </div>
                  </div>
                )}
                {props.contactsIsEdit && (
                  <ContactDataForm
                    contacts={props.contacts}
                    handleContactsSave={props.handleContactsSave}
                  />
                )}
              </div>
              {/* <h3 className={styles.infoChapter}>Контактные данные</h3>
              {!props.contactsIsEdit && (
                <button
                  className={styles.editBtn}
                  onClick={props.handleContactsIsEdit}
                >
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
              )}
              {props.contactsIsEdit && (
                <button
                  className={styles.acceptChangesBtn}
                  onClick={props.handleContactsSave}
                >
                  Принять
                </button>
              )}
            </div>
            <div className={styles.grid_div}>
              <span className={styles.infoKey}>ФИО:</span>
              {!props.contactsIsEdit && (
                <span>{`${props.contacts.lastname} ${props.contacts.firstname} ${props.contacts.patronymic}`}</span>
              )}
              {props.contactsIsEdit && (
                <ContactFullNameInput
                  fullName={props.contactsValue.fullName}
                  handleContactsSave={props.handleContactsSave}
                  handleContactsFullNameChange={
                    props.handleContactsFullNameChange
                  }
                />
              )}

              <span className={styles.infoKey}>Телефон:</span>
              {!props.contactsIsEdit && (
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
              )}
              {props.contactsIsEdit && (
                <ContactPhoneInput
                  phone={props.contactsValue.phone}
                  handleContactsPhoneChange={props.handleContactsPhoneChange}
                  handleContactsSave={props.handleContactsSave}
                />
              )}

              <span className={styles.infoKey}>Эл. почта:</span>
              {!props.contactsIsEdit && (
                <a href="mailto:grigoriev@funeral.com">
                  {props.contacts.email}
                </a>
              )}
              {props.contactsIsEdit && (
                <ContactEmailInput
                  email={props.contactsValue.email}
                  handleContactsEmailChange={props.handleContactsEmailChange}
                  handleContactsSave={props.handleContactsSave}
                />
              )} */}
            </div>
          </li>
          <li className={styles.last_li}>
            <h3 className={styles.infoChapter}>Приложенные фото</h3>
            <ul className={styles.gallery_ul}>
              {props.companies.photos.map(
                (photo: {
                  name: "0b8fc462dcabf7610a91.png";
                  filepath: "http://135.181.35.61:2112/0b8fc462dcabf7610a91.png";
                  thumbpath: "http://135.181.35.61:2112/0b8fc462dcabf7610a91_160x160.png";
                }) => (
                  <li key={photo.name} className={styles.gallery_li}>
                    <img
                      src={photo.thumbpath}
                      alt="photo"
                      className={styles.photo_img}
                    />
                    <span className={styles.photoName}>{photo.name}</span>
                    <span className={styles.photoDate}>
                      {new Date(props.companies.updatedAt).toLocaleDateString(
                        "ru-Ru",
                        options
                      )}
                    </span>
                  </li>
                )
              )}
            </ul>
            <label htmlFor="file-upload" className={styles.customFileUpload}>
              добавить изображение
            </label>
            <input
              id="file-upload"
              type="file"
              className={styles.addPhotosInput}
              onChange={props.handleSetFile}
            />
          </li>
        </ul>
      </div>
    )
  );
}
