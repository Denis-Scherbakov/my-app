import * as Yup from "yup";
import { Formik, Form } from "formik";
import { FormicControl } from "./FormicControl";

export function FormicContainer() {
  const dropDownOptions = [
    { key: "select an option", value: "" },
    { key: "option 1", value: "option 1" },
    { key: "option 2", value: "option 2" },
    { key: "option 3", value: "option 3" },
  ];
  const radioOptions = [
    { key: "option 1", value: "Roption 1" },
    { key: "option 2", value: "Roption 2" },
    { key: "option 3", value: "Roption 3" },
  ];
  const checkBoxOptions = [
    { key: "option 1", value: "Coption 1" },
    { key: "option 2", value: "Coption 2" },
    { key: "option 3", value: "Coption 3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkBoxOption: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkBoxOption: Yup.array().min(1, "Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values: {}) => console.log("asdadas", values);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <FormicControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormicControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormicControl
            control="select"
            label="select a option"
            name="selectOption"
            options={dropDownOptions}
          />
          <FormicControl
            control="radio"
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormicControl
            control="checkbox"
            label="Checkbox topics"
            name="checkBoxOption"
            options={checkBoxOptions}
          />
          <FormicControl control="date" label="Pick a date" name="birthDate" />
          <button type="submit">Отправить</button>
        </Form>
      )}
    </Formik>
  );
}
