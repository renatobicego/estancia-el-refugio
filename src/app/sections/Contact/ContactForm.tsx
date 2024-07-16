"use client";
import { CustomTextarea } from "@/app/components/Inputs/CustomTextarea";
import { CustomTextInput } from "@/app/components/Inputs/CustomTextInput";
import { toastify } from "@/app/utils/toastify";
import { Button } from "@nextui-org/react";
import axios, { AxiosError } from "axios";
import { FormikHelpers, Formik, Form, Field } from "formik";
import React from "react";
import { object, string } from "yup";

const contactSchema = object({
  email: string()
    .email("Ingrese un correo electronico valido")
    .required("Ingrese un correo electronico valido")
    .min(8, "Ingrese un correo electronico valido"),
  name: string().required("Ingrese su nombre").min(3, "Ingrese su nombre"),
  message: string().required("Ingrese un mensaje").min(6, "Ingrese un mensaje"),
  phone: string()
    .required("Ingrese un numero de telefono")
    .min(6, "Ingrese un numero de telefono"),
});

interface ContactFormValues {
  email: string;
  name: string;
  message: string;
  phone: string;
}

const ContactForm = () => {
  const initialValues: ContactFormValues = {
    email: "",
    name: "",
    message: "",
    phone: "",
  };
  const handleSubmit = async (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    try {
      //   await axios.put("/api/user/password", {
      //     password: values.password,
      //   });
      toastify(
        "success",
        "¡Gracias! Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto."
      );
      actions.resetForm();
    } catch (error: AxiosError | any) {}
    toastify(
      "error",
      "Error al enviar el mensaje. Por favor, comunicarse al correo: 0JZQk@example.com"
    );
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur={false}
      validateOnChange={false}
      enableReinitialize
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      {({ errors, isSubmitting, setValues, resetForm }) => (
        <Form className="flex flex-col items-start w-full z-10 gap-4">
          <Field
            id="name"
            component={CustomTextInput}
            type="name"
            label="Nombre y Apellido"
            isInvalid={errors?.name}
            errorMessage={errors?.name}
            name="name"
            placeholder="Ingrese su nombre completo"
          />
          <Field
            id="email"
            component={CustomTextInput}
            type="email"
            label="Correo Electrónico"
            isInvalid={errors?.email}
            errorMessage={errors?.email}
            name="email"
            placeholder="ejemplo@mail.com"
          />
          <Field
            id="phone"
            type="tel"
            component={CustomTextInput}
            label="Número de Teléfono"
            isInvalid={errors?.phone}
            errorMessage={errors?.phone}
            name="phone"
            placeholder="Ingrese su número de teléfono"
          />
          <Field
            id="message"
            component={CustomTextarea}
            type="message"
            label="Mensaje"
            isInvalid={errors?.message}
            errorMessage={errors?.message}
            name="message"
            placeholder="Ingrese su mensaje"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            color="primary"
            className="px-5 rounded-sm"
          >
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
