import { FormikProps, withFormik } from "formik";
import client from "graphql/client";
import { MT_CONTACT } from "graphql/mutations/contato";
import { customSwal } from "utils/customSwal";
import * as Styles from "./styles";
import * as Yup from "yup";
import { BorderButton } from "components/customHtmlComponents/Buttons";
import { DefaultInput } from "components/customHtmlComponents/Inputs";
import ToggleSwitch from "components/customHtmlComponents/Inputs/ToggleSwitch";

type MyFormProps = {
  name: string;
  email: string;
  phone: string;
  message: string;
  participant: boolean;
};

const MyForm = (props: FormikProps<MyFormProps>) => {
  const { values, touched, errors, handleChange, handleSubmit, setFieldValue } =
    props;

  return (
    <Styles.Wrapper onSubmit={handleSubmit}>
      <DefaultInput
        value={values.name}
        onChange={handleChange}
        inputLabel="Nome Completo"
        name="name"
        error={{ error: errors.name || "", touched: touched.name || false }}
      />
      <DefaultInput
        value={values.email}
        onChange={handleChange}
        inputLabel="Email"
        name="email"
        error={{ error: errors.email || "", touched: touched.email || false }}
      />
      <DefaultInput
        mask="(99) 9 9999-9999"
        value={values.phone}
        onChange={handleChange}
        inputLabel="WhatsApp/Celular"
        name="phone"
        error={{ error: errors.phone || "", touched: touched.phone || false }}
      />
      <ToggleSwitch
        label={"Participante?"}
        value={values.participant}
        onChange={handleChange}
        name={"participant"}
      />
      <DefaultInput
        value={values.message}
        onChange={handleChange}
        inputLabel={"Mensagem"}
        name={"message"}
        error={{
          error: errors.message || "",
          touched: touched.message || false,
        }}
        textArea
      />
      <BorderButton style={{ maxWidth: "100%" }}>ENVIAR</BorderButton>
    </Styles.Wrapper>
  );
};

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Muito curto")
    .max(50, "Muito longo")
    .required("Obrigatório"),
  email: Yup.string().email("Email inválido").required("Obrigatório"),
  phone: Yup.string().min(6, "Número inválido!").required("Obrigatório"),
  participant: Yup.bool(),
  message: Yup.string()
    .min(20, "Mensagem muito curta!")
    .max(1000, "Mensagem muito longa!")
    .required("Obrigatório"),
});

const ContactForm = withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
    participant: false,
  }),

  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    try {
      const mutationResult = await client.mutate({
        mutation: MT_CONTACT,
        variables: {
          nome: values.name,
          email: values.email,
          telefone: values.phone,
          participante: values.participant,
          mensagem: values.message,
        },
      });

      if (mutationResult.errors) {
        customSwal({
          title:
            "Falha ao enviar mensagem, por favor verifique e tente novamente",
          text: "",
          icon: "error",
          confirmButtonText: "Ok",
        });
      } else {
        customSwal({
          title: "Mensagem enviada com sucesso!",
          text: "",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }

      setSubmitting(false);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  },
  validationSchema: formSchema,
})(MyForm);

export default ContactForm;
