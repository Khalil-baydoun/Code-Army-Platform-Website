import React from "react";
import { FieldRenderProps } from "react-final-form";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import { Form, FormFieldProps, Label } from "semantic-ui-react";
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import { alpha } from '@material-ui/core/styles'

interface IProps
  extends FieldRenderProps<Date, HTMLInputElement>,
    FormFieldProps {}

const DateInput: React.FC<IProps> = ({
  input,
  width,
  meta: { touched, error },
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDateTimePicker
          variant="inline"
          ampm={false}
          label="With keyboard"
          value={input.value || null}
          onChange={input.onChange}
          format="yyyy/MM/dd HH:mm"
        />
      </MuiPickersUtilsProvider>
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;
