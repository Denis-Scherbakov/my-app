import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormicControl } from "../formik/FormicControl";
import styles from "../../components/info/info.module.css";

export function BusinessEntityTypeInput(props: any) {
  const entityType = props.entityType;
  const initialValues = {
    entityType,
  };

  const validationSchema = Yup.object({
    entityType: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.handleBusinessEntitySave}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form onChange={props.handleBusinessEntityTypeChange}>
          <FormicControl
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="entityType"
            value={entityType}
          />
        </Form>
      )}
    </Formik>
  );
}
