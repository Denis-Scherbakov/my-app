import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormicControl } from "../formik/FormicControl";
import styles from "../../components/info/info.module.css";

export function ContactFullNameInput(props: any) {
  const fullName = props.fullName;
  const initialValues = {
    fullName,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.handleContactsSave}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form onChange={props.handleContactsFullNameChange}>
          <FormicControl
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="fullName"
            value={fullName}
          />
        </Form>
      )}
    </Formik>
  );
}
