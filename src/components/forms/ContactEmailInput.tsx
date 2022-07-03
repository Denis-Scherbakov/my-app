import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormicControl } from "../formik/FormicControl";
import styles from "../../components/info/info.module.css";

export function ContactEmailInput(props: any) {
  const email = props.email;
  const initialValues = {
    email,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.handleContactsSave}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form onChange={props.handleContactsEmailChange}>
          <FormicControl
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="email"
            value={email}
          />
        </Form>
      )}
    </Formik>
  );
}
