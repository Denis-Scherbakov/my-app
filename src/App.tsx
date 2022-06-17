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

// type AppProps = {
//   comaines: Company[];
//   contacts: Contact[];
// };

function App() {
  const [isActive, setIsActive] = useState<object | null>(null);
  const [companies, setCompanies] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contacts, setContacts] = useState<Contact | null>(null);

  useEffect(() => {
    fetch("http://135.181.35.61:2112/auth?user=USER", {
      method: "GET",
    }).then((res) => {
      setIsActive(res);
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
        setIsLoading(true);
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

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Navbar />
        <Info companies={companies} contacts={contacts} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
