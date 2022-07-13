import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormicControl } from "../formik/FormicControl";
import styles from "../../components/info/info.module.css";

export function ContractNoInput(props: any) {
  const contractNo = props.contractNo;
  const initialValues = {
    contractNo,
  };

  const validationSchema = Yup.object({
    contractNo: Yup.string().required("Required"),
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
            onChange={props.handleBusinessEntityContractNoChange}
            className={styles.inputEntities}
            control="input"
            type="text"
            label=""
            name="contractNo"
            value={contractNo}
          />
        </Form>
      )}
    </Formik>
  );
}
