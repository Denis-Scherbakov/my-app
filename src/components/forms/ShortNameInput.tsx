import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormicControl } from "../formik/FormicControl";
import styles from "../../components/info/info.module.css";

export function ShortNameInput(props: any) {
  const shortName = props.shortNameValue;
  const initialValues = {
    shortName,
  };

  const validationSchema = Yup.object({
    shortName: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.handleShortNameSave}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form onChange={props.handleShortNameChange} className={styles.form}>
          <FormicControl
            className={styles.input_shortName}
            control="input"
            type="text"
            label=""
            name="shortName"
            value={shortName}
          />
          <button className={styles.acceptChangesBtn} type="submit">
            Принять
          </button>
        </Form>
      )}
    </Formik>
  );
}
