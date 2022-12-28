import { gql } from "@apollo/client";

export const MT_WANNA_PARTICIPATE = gql`
  mutation WANNA_PARTICIPATE(
    $nome: String
    $email: String
    $telefone: String
    $participa: Boolean
    $trabalho: String
  ) {
    createParticipar(
      data: {
        Nome: $nome
        Email: $email
        Telefone: $telefone
        Participa: $participa
        Trabalho: $trabalho
      }
    ) {
      data {
        attributes {
          Nome
          Email
          Telefone
          Participa
          Trabalho
        }
      }
    }
  }
`;
