import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormicControl } from "../formik/FormicControl";
import styles from "../../components/info/info.module.css";

export function ContactPhoneInput(props: any) {
  const phone = props.phone;
  const initialValues = {
    phone,
  };

  const validationSchema = Yup.object({
    phone: Yup.string()
      .required("Required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(11, "Must be exactly 11 digits")
      .max(11, "Must be exactly 11 digits"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.handleContactsSave}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form onChange={props.handleContactsPhoneChange}>
          <FormicControl
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="phone"
            value={phone}
          />
        </Form>
      )}
    </Formik>
  );
}
