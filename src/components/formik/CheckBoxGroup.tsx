import { Field, ErrorMessage } from "formik";
import React from "react";
import { TextError } from "./TextError";

export function CheckBoxGroup(props: any) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }: any) => {
          return options.map((option: any) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={Boolean(field.value.includes(option.value))}
                ></input>
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
