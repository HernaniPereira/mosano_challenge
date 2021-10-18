import React from "react";
import { Input } from "./_Input";
import PropTypes from "prop-types";
import { useController, useFormContext } from "react-hook-form";

const ControlledInput = (props) => {
  const { name, rules, defaultValue = "", ...inputProps } = props;

  const formContext = useFormContext();
  const { control, errors } = formContext;

  const { field } = useController({ name, control, rules, defaultValue });

  console.log("aqui", errors);
  return (
    <Input
      {...inputProps}
      error={errors[name]?.message}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
    />
  );
};

export const FormInput = (props) => {
  const { name, ...inputProps } = props;
  const formContext = useFormContext();

  if (!formContext || !name) {
    const errorMessage = !name
      ? 'Form field must have a "name" prop!'
      : "Form field must be a descendant of `FormProvider` as it uses `useFormContext`!";
    return <Input {...inputProps} error={errorMessage} editable={false} />;
  }
  console.log(props);
  return <ControlledInput {...props} />;
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  defaultValue: PropTypes.any,
};

ControlledInput.propTypes = FormInput.propTypes;
