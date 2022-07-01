import { Field, ErrorMessage } from "formik";
import { TextError } from "./TextError";
import styles from "../../App.module.css";

export function Input(props: any) {
  const { label, name, ...rest } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}></Field>
      <div className={styles.errormessage}>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </div>
  );
}
