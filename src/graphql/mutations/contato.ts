import { gql } from "@apollo/client";

export const MT_CONTACT = gql`
  mutation CONTACT(
    $nome: String
    $email: String
    $telefone: String
    $participante: Boolean
  ) {
    createContato(
      data: {
        Nome: $nome
        Email: $email
        Telefone: $telefone
        Participante: $participante
      }
    ) {
      data {
        attributes {
          Nome
          Email
          Telefone
          Participante
        }
      }
    }
  }
`;
