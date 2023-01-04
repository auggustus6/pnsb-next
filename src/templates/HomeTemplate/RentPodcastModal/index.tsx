import * as Yup from "yup";
import theme from "styles/theme";
import { FormikProps, withFormik } from "formik";
import { customSwal } from "utils/customSwal";
import { useRouter } from "next/router";
import client from "graphql/client";
import { MT_WANNA_PARTICIPATE } from "graphql/mutations/pastorals";
import { DefaultButton } from "components/customHtmlComponents/Buttons";
import { DefaultInput } from "components/customHtmlComponents/Inputs";
import { FormSection } from "components/layoutComponents/Sections";
import * as Styles from "./styles";
import { useModal } from "hooks/useModal";

type MyFormProps = {
  name: string;
  email: string;
  phone: string;
};

const RentPodcastModal = (props: FormikProps<MyFormProps>) => {
  const {closeAllModals} = useModal();
  const { values, touched, errors, handleChange, handleSubmit, setFieldValue } =
    props;

  return (
    <Styles.MyFormSection imgUrl="/img/estudio.png">
      <Styles.CloseButton onClick={closeAllModals}/>
      <h4 style={{ color: theme.colors.primary, marginBottom: "1rem" }}>
        Algum Titulo Legal
      </h4>

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

      <DefaultButton
        bgColor={theme.colors.primary}
        height="3rem"
        width="100%"
        textColor="white"
        style={{ borderRadius: "5px" }}
        onClick={handleSubmit}
      >
        Enviar
      </DefaultButton>

      <Styles.Description>
        <h6>
          Ou entre em contato através do nosso telefone:{" "}
          <a href="tel:(17) 3234-5616">(17) 3234-5616</a>
        </h6>
      </Styles.Description>
    </Styles.MyFormSection>
  );
};

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Muito curto")
    .max(50, "Muito longo")
    .required("Obrigatório"),
  email: Yup.string().email("Email inválido").required("Obrigatório"),
  phone: Yup.string().min(6, "Número inválido!").required("Obrigatório"),
});

export const RentPodcastModalForm = withFormik({
  mapPropsToValues: () => ({ name: "", email: "", phone: "" }),

  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    try {
      const mutationResult = await client.mutate({
        mutation: MT_WANNA_PARTICIPATE,
        variables: {
          nome: values.name,
          email: values.email,
          telefone: values.phone,
          participa: true,
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
})(RentPodcastModal);

export default RentPodcastModalForm;
