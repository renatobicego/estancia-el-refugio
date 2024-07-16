import { Input } from "@nextui-org/react";
import { FieldInputProps, FormikProps } from "formik";

export const CustomTextInput = ({
  field,
  form,
  ...props
}: {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
}) => {
  return (
    <Input
      radius="none"
      labelPlacement="outside"
      classNames={{
        label: "!text-white",
        input:
          "rounded-sm !text-white placeholder:text-white placeholder:font-light",
        inputWrapper:
          "bg-white/20 data-[hover=true]:bg-white/30 group-data-[focus=true]:bg-white/25",
      }}
      {...field}
      {...props}
    />
  );
};
