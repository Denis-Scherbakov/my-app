import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormicControl } from "../formik/FormicControl";
import styles from "../../components/info/info.module.css";

export function GeneralInfoForm(props: any) {
  const fullName = props.businessEntityValue.name;
  const contractNo = props.businessEntityValue.contract.no;
  const issueDate = props.businessEntityValue.contract.issue_date;
  const businessEntity = props.businessEntityValue.businessEntity;
  const entityType = `${props.businessEntityValue.type.join(", ")}`;

  const initialValues = {
    fullName,
    contractNo,
    issueDate,
    businessEntity,
    entityType,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    contractNo: Yup.string().required("Required"),
    issueDate: Yup.string().required("Required"),
    businessEntity: Yup.string().required("Required"),
    entityType: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(value) => props.handleBusinessEntitySave(value)}
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
            name="fullName"
          />
          <div className={styles.input__wrapper}>
            <FormicControl
              className={styles.inputEntities}
              control="input"
              type="text"
              label=""
              name="contractNo"
            />
            <span className={styles.formic__span_margin}> от </span>
            <FormicControl
              className={styles.inputEntities}
              control="input"
              type="text"
              label=""
              name="issueDate"
            />
          </div>
          <FormicControl
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="businessEntity"
          />
          <FormicControl
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="entityType"
          />
        </Form>
      )}
    </Formik>
  );
}
