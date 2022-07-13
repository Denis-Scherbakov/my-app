import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormicControl } from "../formik/FormicControl";
import styles from "../../components/info/info.module.css";

export function BusinessEntityInput(props: any) {
  const businessEntity = props.businessEntity;
  const initialValues = {
    businessEntity,
  };

  const validationSchema = Yup.object({
    businessEntity: Yup.string().required("Required"),
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
            onChange={props.handleBusinessEntityFormChange}
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="businessEntity"
            value={businessEntity}
          />
        </Form>
      )}
    </Formik>
  );
}
