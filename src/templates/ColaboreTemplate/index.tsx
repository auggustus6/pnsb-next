import Container from "components/layoutComponents/Container";
import Spacing from "components/layoutComponents/Spacing";
import DefaultLayout from "layouts/DefaultLayout";
import { ReactNode } from "react";
import { useTheme } from "styled-components";
import { repeatJSX } from "utils/repeatJSX";
import * as Styles from "./styles";

type ColaboreTemplateProps = {
  children?: ReactNode;
  className?: string;
};

const ColaboreTemplate = ({ children, className }: ColaboreTemplateProps) => {
  const theme = useTheme();
  return (
    <DefaultLayout breadCrumbs>
      <Container>
        <Styles.IntroSectionContainer>
          <Styles.IntroContent>
            <h1>Seja Dizimista</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              maximus magna vitae sollicitudin commodo. Aliquam auctor egestas
              elit, non tristique quam commodo et. Ut sollicitudin justo et
              tortor convallis molestie. Etiam ornare ex eget auctor gravida.
              Donec et aliquet magna. Vestibulum tellus urna, vehicula.
            </p>

            <h4>Lorem Impsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              maximus magna vitae sollicitudin commodo. Aliquam auctor egestas
              elit, non tristique quam commodo et. Ut sollicitudin justo et
              tortor convallis molestie. Etiam ornare ex eget auctor gravida.
              Donec et aliquet magna. Vestibulum tellus urna, vehicula.
            </p>
          </Styles.IntroContent>
          <Styles.FlexImage src="/img/colabore.jpg" objectFit="cover" />
        </Styles.IntroSectionContainer>

        <Spacing size={6} />

        <Styles.WaysOfHelpContainer>
          <Styles.Method>
            <Styles.FlexImage src="/img/colabore.jpg" objectFit="cover" />
            <Styles.MethodContent>
              <h4 style={{ color: theme.colors.green }}>Pix</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                maximus magna vitae sollicitudin commodo. Aliquam auctor egestas
                elit, non tristique quam commodo et. Ut sollicitudin justo et
                tortor convallis molestie. Etiam ornare ex eget.
              </p>
              <b>
                Chave PIX: CNPJ
                <br />
                99.999.999/0999-99
                <br />
                BANCO
                <br />
                <br />
                PAROQUIA NOSSA SENHORA DO BRASIL
              </b>
            </Styles.MethodContent>
          </Styles.Method>
          <Styles.Method>
            <Styles.FlexImage src="/img/colabore.jpg" objectFit="cover" />
            <Styles.MethodContent>
              <h4 style={{ color: theme.colors.green }}>Pix</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                maximus magna vitae sollicitudin commodo. Aliquam auctor egestas
                elit, non tristique quam commodo et. Ut sollicitudin justo et
                tortor convallis molestie. Etiam ornare ex eget.
              </p>
              <b>
                Chave PIX: CNPJ
                <br />
                99.999.999/0999-99
                <br />
                BANCO
                <br />
                <br />
                PAROQUIA NOSSA SENHORA DO BRASIL
              </b>
            </Styles.MethodContent>
          </Styles.Method>
        </Styles.WaysOfHelpContainer>

        <Spacing size={8} />

        <Styles.SocialWorkItem>
          <Styles.FlexImage
            src="/img/obrasocial1.jpg"
            caption="Crianças atendidas pela nossa obra social"
            objectFit="cover"
          />
          <Styles.SocialWorkContent>
            <div>
              <h2 style={{ color: theme.colors.green }}>Nossa Obra Social</h2>
              <p>
                Nossa Obra Social auxilia crianças de 07 a 12 anos com educação,
                esporte, atendimento psicológico e muito mais.
              </p>
              <p>Cliente no botão abaixo e visite o site</p>
              <Styles.CustomButton>VER MAIS</Styles.CustomButton>
            </div>
          </Styles.SocialWorkContent>
        </Styles.SocialWorkItem>

        <Styles.SocialWorkItem $inverse>
          <Styles.FlexImage
            src="/img/obrasocial2.jpg"
            caption="Chuveiro usado pelos moradores em situação de rua"
            objectFit="cover"
          />
          <Styles.SocialWorkContent>
            <div>
              <h2 style={{ color: theme.colors.secondary }}>
                Doações aos Moradores em situação de rua
              </h2>
              <p>
                Você pode ajudar nossos irmãos em situação de rua doando roupas,
                sabonete, aparelho de barbear descartável, shampoo e também
                ajudar seus animais doando ração, vermífugos e shampoo.
              </p>
              <p>Sua doação pode ser deixada na secretaria da paróquia.</p>
            </div>
          </Styles.SocialWorkContent>
        </Styles.SocialWorkItem>

        <Styles.SocialWorkItem>
          <Styles.FlexImage
            src="/img/obrasocial3.jpg"
            caption="Chuveiro usado pelos moradores em situação de rua"
            objectFit="cover"
          />
          <Styles.SocialWorkContent>
            <div>
              <h2 style={{ color: theme.colors.primary }}>
                Doações aos cães em situação de rua
              </h2>
              <p>
                Aos sábados e domingos de manhã, damos banhos, fornecemos ração,
                vermifugamos e prestamos outros cuidados aos cães dos moradores
                em situação de rua, com supervisão de veterinários.
              </p>
              <p>
                Você pode ajudar sendo voluntário ou doando ração, shampoo e
                outros produtos de higiene e medicamentos na secretaria da
                paróquia.
              </p>
            </div>
          </Styles.SocialWorkContent>
        </Styles.SocialWorkItem>

        <Styles.SocialWorkItem $inverse>
          <Styles.FlexImage
            src="/img/obrasocial4.jpg"
            caption="Pedágio Solidário dos Vicentinos de nossa paróquia"
            objectFit="cover"
          />
          <Styles.SocialWorkContent>
            <div>
              <h2 style={{ color: theme.colors.green }}>
                Doações de alimentos para cestas básicas
              </h2>
              <p>
                Mensalmente doamos cestas básicas à famílias carentes, você pode
                ajudar deixando sua doação na secretaria da paróquia.
              </p>
            </div>
          </Styles.SocialWorkContent>
        </Styles.SocialWorkItem>

        <Spacing size={8} />
        <h2 style={{ color: theme.colors.primary }}>
          Para onde vai o seu Dízimo:
        </h2>
        <Spacing size={2} />
        <Styles.List>
          <div>
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <li>
                  {`Curabitur vulputate neque sed nibh molestie, sollicitudin
                dignissim eros cursus. Morbi eleifend, est semper convallis
                fringilla, urna enim lobortis dui, nec viverra purus est at
                metus. Maecenas interdum sapien ac est laoreet vehicula.`.slice(
                    0,
                    Math.random() * 400,
                  )}
                </li>
              ))}
          </div>
          <div>
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <li>
                  {`Curabitur vulputate neque sed nibh molestie, sollicitudin
                dignissim eros cursus. Morbi eleifend, est semper convallis
                fringilla, urna enim lobortis dui, nec viverra purus est at
                metus. Maecenas interdum sapien ac est laoreet vehicula.`.slice(
                    0,
                    Math.random() * 400,
                  )}
                </li>
              ))}
          </div>
        </Styles.List>

        <Spacing size={6} />

        <p>
          O dízimo é uma prática que começou no Antigo Testamento, na Lei de
          Moisés, que ordenou ao povo de Deus de dar a décima parte das suas
          colheitas e rebanhos para a manutenção do templo e o atendimento aos
          pobres, órfãos e viúvas. Era o reconhecimento de que os bens materiais
          foram dados pelo Senhor e que todos eram responsáveis pela comunidade
          religiosa.
        </p>

        <Spacing size={4} />
      </Container>
    </DefaultLayout>
  );
};

export default ColaboreTemplate;
