import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormicControl } from "../formik/FormicControl";
import styles from "../../components/info/info.module.css";

export function IssueDateInput(props: any) {
  const issueDate = props.issueDate;
  const initialValues = {
    issueDate,
  };

  const validationSchema = Yup.object({
    issueDate: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.handleBusinessEntitySave}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <FormicControl
            onChange={props.handleBusinessEntityIssueDateChange}
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="issueDate"
            value={issueDate}
          />
        </Form>
      )}
    </Formik>
  );
}
