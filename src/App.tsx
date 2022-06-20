import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Footer } from "./components/footer";
import { Info } from "./components/info";
import { Navbar } from "./components/navigation";

type Company = {
  id: "12";
  contactId: "16";
  name: "ООО Фирма «Перспективные захоронения»";
  shortName: "Перспективные захоронения";
  businessEntity: "ООО";
  contract: {
    no: "12345";
    issue_date: "2015-03-12T00:00:00Z";
  };
  type: ["agent", "contractor"];
  status: "active";
  createdAt: "2020-11-21T08:03:00Z";
  updatedAt: "2020-11-23T09:30:00Z";
  photos: [
    {
      name: "0b8fc462dcabf7610a91.png";
      filepath: "http://135.181.35.61:2112/0b8fc462dcabf7610a91.png";
      thumbpath: "http://135.181.35.61:2112/0b8fc462dcabf7610a91_160x160.png";
    }
  ];
};

type Contact = {
  id: "16";
  lastname: "Григорьев";
  firstname: "Сергей";
  patronymic: "Петрович";
  phone: "79162165588";
  email: "grigoriev@funeral.com";
  createdAt: "2020-11-21T08:03:26.589Z";
  updatedAt: "2020-11-23T09:30:00Z";
};

type BusinessEntity = {
  name: string;
  contract: {
    no: string;
    issue_date: string;
  };
  businessEntity: string;
  type: string[];
};

type Contacts = {
  fullName: string;
  phone: string;
  email: string;
};

// type AppProps = {
//   comaines: Company[];
//   contacts: Contact[];
// };

function App() {
  const [bearer, setBearer] = useState<object | null>(null);
  const [companies, setCompanies] = useState<Company | null>(null);
  const [contacts, setContacts] = useState<Contact | null>(null);
  const [shortNameIsEdit, setShortNameIsEdit] = useState<boolean>(false);
  const [shortNameValue, setShortNameValue] = useState<string>("");
  const [businessEntityIsEdit, setBusinessEntityIsEdit] =
    useState<boolean>(false);
  const [businessEntityValue, setBusinessEntityValue] =
    useState<BusinessEntity | null>(null);
  const [contactsIsEdit, setContactsIsEdit] = useState<boolean>(false);
  const [contactsValue, setContactsValue] = useState<Contacts | null>(null);
  const [modalDeleteCompany, setModalDeleteCompany] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    fetch("http://135.181.35.61:2112/auth?user=USER", {
      method: "GET",
    }).then((res) => {
      setBearer(res);
    });
  }, []);

  useEffect(() => {
    fetch("http://135.181.35.61:2112/companies/12", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUiIsImlhdCI6MTY1NTM4NDEyMywiZXhwIjoxNjU1OTg4OTIzfQ.RcJrs_cNvtg5nh7Q2_laRmsA-pUD0jB1jqx04es9hok`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
      });
  }, []);

  // // File upload lib https://react-dropzone.js.org/

  useEffect(() => {
    fetch("http://135.181.35.61:2112/contacts/16", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUiIsImlhdCI6MTY1NTM4NDEyMywiZXhwIjoxNjU1OTg4OTIzfQ.RcJrs_cNvtg5nh7Q2_laRmsA-pUD0jB1jqx04es9hok`,
      },
    })
      .then((res) => res.json())
      .then((res) => setContacts(res));
  }, []);

  const handleShortNameEdit = () => {
    setShortNameIsEdit(!shortNameIsEdit);
    setShortNameValue(companies!.shortName);
  };

  const handleShortNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShortNameValue(e.target.value);
  };

  const handleShortNameSave = () => {
    fetch("http://135.181.35.61:2112/companies/12", {
      method: "PATCH",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUiIsImlhdCI6MTY1NTM4NDEyMywiZXhwIjoxNjU1OTg4OTIzfQ.RcJrs_cNvtg5nh7Q2_laRmsA-pUD0jB1jqx04es9hok",
      },
      body: JSON.stringify({ shortName: shortNameValue }),
    });
    setShortNameIsEdit(false);
  };

  const handleBusinessEntityEdit = () => {
    setBusinessEntityIsEdit(!businessEntityIsEdit);
    setBusinessEntityValue({
      name: companies!.name,
      contract: companies!.contract,
      businessEntity: companies!.businessEntity,
      type: companies!.type,
    });
  };

  const handleBusinessEntityNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBusinessEntityValue({
      ...businessEntityValue!,
      name: e.target.value,
    });
  };

  const handleBusinessEntityContractNoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBusinessEntityValue({
      ...businessEntityValue!,
      contract: {
        ...businessEntityValue!.contract,
        no: e.target.value,
      },
    });
  };

  const handleBusinessEntityIssueDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBusinessEntityValue({
      ...businessEntityValue!,
      contract: {
        ...businessEntityValue!.contract,
        issue_date: e.target.value,
      },
    });
  };

  const handleBusinessEntityFormChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBusinessEntityValue({
      ...businessEntityValue!,
      businessEntity: e.target.value,
    });
  };

  const handleBusinessEntityTypeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBusinessEntityValue({
      ...businessEntityValue!,
      type: [e.target.value],
    });
  };

  const handleBusinessEntitySave = () => {
    fetch("http://135.181.35.61:2112/companies/12", {
      method: "PATCH",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUiIsImlhdCI6MTY1NTM4NDEyMywiZXhwIjoxNjU1OTg4OTIzfQ.RcJrs_cNvtg5nh7Q2_laRmsA-pUD0jB1jqx04es9hok",
      },
      body: JSON.stringify({
        name: businessEntityValue!.name,
        contract: businessEntityValue!.contract,
        businessEntity: businessEntityValue!.businessEntity,
        type: businessEntityValue!.type,
      }),
    });
    setBusinessEntityIsEdit(false);
  };

  const handleContactsIsEdit = () => {
    setContactsIsEdit(!contactsIsEdit);
    setContactsValue({
      fullName: `${contacts!.lastname} ${contacts!.firstname} ${
        contacts!.patronymic
      }`,
      phone: contacts!.phone,
      email: contacts!.email,
    });
  };

  const handleContactsFullNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContactsValue({
      ...contactsValue!,
      fullName: e.target.value,
    });
  };

  const handleContactsPhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContactsValue({
      ...contactsValue!,
      phone: e.target.value,
    });
  };

  const handleContactsEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContactsValue({
      ...contactsValue!,
      email: e.target.value,
    });
  };

  const handleContactsSave = () => {
    fetch("http://135.181.35.61:2112/contacts/16", {
      method: "PATCH",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUiIsImlhdCI6MTY1NTM4NDEyMywiZXhwIjoxNjU1OTg4OTIzfQ.RcJrs_cNvtg5nh7Q2_laRmsA-pUD0jB1jqx04es9hok",
      },
      body: JSON.stringify({
        lastname: contactsValue!.fullName.split(" ")[0],
        firstname: contactsValue!.fullName.split(" ")[1],
        patronymic: contactsValue!.fullName.split(" ")[2],
        phone: contactsValue!.phone,
        email: contactsValue!.email,
      }),
    });
    setContactsIsEdit(false);
  };

  const handleModalDeleteCompany = () => {
    setModalDeleteCompany(!modalDeleteCompany);
  };

  const handleCancelDeleteCompany = () => {
    setModalDeleteCompany(false);
  };

  const handleDeleteCompany = () => {
    fetch("http://135.181.35.61:2112/companies/12", {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUiIsImlhdCI6MTY1NTM4NDEyMywiZXhwIjoxNjU1OTg4OTIzfQ.RcJrs_cNvtg5nh7Q2_laRmsA-pUD0jB1jqx04es9hok",
      },
    });
    setModalDeleteCompany(false);
  };

  const handleSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0]);
  };

  const sendPhoto = () => {
    fetch("http://135.181.35.61:2112/companies/12/image", {
      method: "POST",
      headers: {
        contentType: "multipart/form-data",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUiIsImlhdCI6MTY1NTM4NDEyMywiZXhwIjoxNjU1OTg4OTIzfQ.RcJrs_cNvtg5nh7Q2_laRmsA-pUD0jB1jqx04es9hok",
      },
      body: "file=@https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/274px-PNG_transparency_demonstration_1.png",
    });
  };

  console.log(file);
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Navbar />
        <Info
          companies={companies}
          contacts={contacts}
          shortNameIsEdit={shortNameIsEdit}
          handleShortNameEdit={handleShortNameEdit}
          handleShortNameChange={handleShortNameChange}
          shortNameValue={shortNameValue}
          handleShortNameSave={handleShortNameSave}
          businessEntityIsEdit={businessEntityIsEdit}
          handleBusinessEntityEdit={handleBusinessEntityEdit}
          businessEntityValue={businessEntityValue}
          handleBusinessEntityNameChange={handleBusinessEntityNameChange}
          handleBusinessEntityContractNoChange={
            handleBusinessEntityContractNoChange
          }
          handleBusinessEntityIssueDateChange={
            handleBusinessEntityIssueDateChange
          }
          handleBusinessEntityFormChange={handleBusinessEntityFormChange}
          handleBusinessEntityTypeChange={handleBusinessEntityTypeChange}
          handleBusinessEntitySave={handleBusinessEntitySave}
          handleContactsIsEdit={handleContactsIsEdit}
          contactsIsEdit={contactsIsEdit}
          handleContactsFullNameChange={handleContactsFullNameChange}
          contactsValue={contactsValue}
          handleContactsPhoneChange={handleContactsPhoneChange}
          handleContactsEmailChange={handleContactsEmailChange}
          handleContactsSave={handleContactsSave}
          modalDeleteCompany={modalDeleteCompany}
          handleModalDeleteCompany={handleModalDeleteCompany}
          handleCancelDeleteCompany={handleCancelDeleteCompany}
          handleDeleteCompany={handleDeleteCompany}
          handleSetFile={handleSetFile}
          sendPhoto={sendPhoto}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
