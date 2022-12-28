import { DefaultButton } from "components/Buttons";
import { DefaultInput } from "components/Inputs";
import { FormSection } from "components/Sections";
import * as Yup from "yup";
import theme from "styles/theme";
import { withFormik } from "formik";
import { customSwal } from "utils/customSwal";
import { useRouter } from "next/router";
import client from "graphql/client";
import { MT_WANNA_PARTICIPATE } from "graphql/mutations/pastorals";

const MyForm = (props: any) => {
  const { values, touched, errors, handleChange, handleSubmit } = props;
  const router = useRouter();

  return (
    <FormSection imgUrl="/img/jesus.jpg">
      <h4 style={{ color: theme.colors.primary, marginBottom: "1rem" }}>
        Algum Titulo Legal
      </h4>

      <input type="hidden" value={router.asPath.split("/").slice(-1)} />

      <DefaultInput
        state={values.name}
        setState={handleChange}
        inputLabel="Nome Completo"
        name="name"
        error={{ error: errors.name, touched: touched.name }}
      />
      <DefaultInput
        state={values.email}
        setState={handleChange}
        inputLabel="Email"
        name="email"
        error={{ error: errors.email, touched: touched.email }}
      />
      <DefaultInput
        state={values.phone}
        setState={handleChange}
        inputLabel="WhatsApp/Celular"
        name="phone"
        error={{ error: errors.phone, touched: touched.phone }}
      />

      <DefaultButton
        bgColor={theme.colors.primary}
        height="3rem"
        width="100%"
        textColor="white"
        style={{ borderRadius: "5px" }}
        onClick={handleSubmit}
      >
        Participar
      </DefaultButton>
    </FormSection>
  );
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Muito curto")
    .max(50, "Muito longo")
    .required("Obrigatório"),
  email: Yup.string().email("Email inválido").required("Obrigatório"),
  phone: Yup.string()
    .matches(phoneRegExp, "Número de telefone inválido")
    .required("Obrigatório"),
});

export const FormikForm = withFormik({
  mapPropsToValues: () => ({ name: "", email: "", phone: "", pastoral: "" }),
  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    const mutationResult = await client.mutate({
      mutation: MT_WANNA_PARTICIPATE,
      variables: {
        $nome: values.name,
        $email: values.email,
        $telefone: values.phone,
        $participa: true,
        $trabalho: values.pastoral,
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
  },
  validationSchema: formSchema,
})(MyForm);

export default FormikForm;
