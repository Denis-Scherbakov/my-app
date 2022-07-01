import { Input } from "./Input";
import { RadioButtons } from "./RadioButtons";
import { Select } from "./Select";
import { Textarea } from "./Textarea";
import { CheckBoxGroup } from "./CheckBoxGroup";
import { DatePicker } from "./DatePicker";

export function FormicControl(props: any) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBoxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}
