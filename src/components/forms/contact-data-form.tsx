import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormicControl } from "../formik/FormicControl";
import styles from "../../components/info/info.module.css";

export function ContactDataForm(props: any) {
  const fullPersonName = `${props.contacts.lastname} ${props.contacts.firstname} ${props.contacts.patronymic}`;
  const phone = `+${props.contacts.phone.slice(
    0,
    1
  )} (${props.contacts.phone.slice(1, 4)}) ${props.contacts.phone.slice(
    4,
    7
  )}-${props.contacts.phone.slice(7, 9)}-${props.contacts.phone.slice(9, 11)}`;
  const email = props.contacts.email;

  const initialValues = {
    fullPersonName,
    phone,
    email,
  };

  const validationSchema = Yup.object({
    fullPersonName: Yup.string().required("Required"),
    phone: Yup.string()
      .required("Required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(11, "Must be exactly 11 digits")
      .max(11, "Must be exactly 11 digits"),
    email: Yup.string().email("Invalid email format").required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(value) => props.handleContactsSave(value)}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <button className={styles.acceptChangesBtn} type="submit">
            Принять
          </button>
          <FormicControl
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="fullPersonName"
          />
          <FormicControl
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="phone"
          />
          <FormicControl
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="email"
          />
        </Form>
      )}
    </Formik>
  );
}
