import Label from "components/customHtmlComponents/Labels/Label";
import Spacing from "components/layoutComponents/Spacing";

import * as Styles from "./styles";

const Sobre = () => {
  return (
    <Styles.Wrapper>
      <Spacing size={4} />
      {/* <h1 style={{color: theme.colors.primary}}>Nossa Paróquia</h1> */}
      <Label as="h1" center color="green">
        Nossa Paróquia
      </Label>
      <Spacing size={3} />

      <p>
        Vários historiadores mencionam a fervorosa veneração a Maria Santíssima,
        cultuada no Brasil desde o dia do seu descobrimento. As primeiras
        imagens de Maria Santíssima que aqui chegaram, trazidas pelas caravelas
        portuguesas, foram as de Nossa Senhora da Esperança e Nossa Senhora da
        Piedade. O Brasil nasceu sob a proteção da Virgem Maria. É conhecido,
        também, o fato de que, no Brasil, tanto os missionários jesuítas quanto
        os frades capuchinhos (barbadinhos), desde o século XVII, eram devotos
        ao Coração de Maria e ao Coração de Jesus e procuravam inspirar esta
        devoção no povo nativo, por cuja catequese eram responsáveis.
      </p>
      <p>
        Em 1725, existia na Igreja de Nossa Senhora da Penha de França, no
        Recife, pertencente aos frades capuchinhos, um altar com uma linda
        imagem da Virgem Maria com o Menino Jesus nos braços, conhecida como
        Nossa Senhora dos Divinos Corações. Por volta de 1710, esta imagem já
        era venerada pelos indígenas nas missões católicas existentes no Recife.
        A escultura de 1,5 m, talhada em madeira, era considerada muito original
        porque a virgem apresentava traços indígenas e o Menino parecia um
        mestiço. Ambos exibiam seus corações, feitos em ouro e cercados por
        raios luminosos, como símbolo do amor. Para vários críticos de arte, o
        estilo da imagem indicava que ela havia sido esculpida no Brasil, por
        artistas nativos que criaram um padrão diferente do europeu. Alguns
        historiadores chegaram a supor que esta imagem, na qual se notam
        indícios dos três grupos étnicos formadores do povo brasileiro, teria
        sido inspirada, ou encomendada a algum artista nativo, pelo santo
        missionário jesuíta, Padre José de Anchieta, que devotava a Maria
        Santíssima notável veneração filial. A escultura teria sido venerada nas
        missões jesuítas do início do século XVII, antes de sua extinção em
        1633, quando foram destruídas pelos holandeses protestantes que se havia
        apoderado de Pernambuco. A imagem foi, por certo, descoberta pelos
        missionários capuchinhos franceses, em algum lugar remoto e abandonado,
        por volta de 1641. Isto explica que, em 1725, fosse encontrada, como
        dito acima, na igreja da Ordem dos capuchinhos de Nossa Senhora da Penha
        de Franca, no Recife, onde foi fervorosamente venerada até 1828 sob a
        denominação já conhecida de Nossa Senhora dos Divinos Corações. Os
        adornos que a enfeitavam, oferta daqueles que a ela recorriam, eram
        claros indícios da gratidão dos fiéis pelas graças obtidas através da
        invocação a esta milagrosa imagem.
      </p>
      <p>
        Esta imagem de Nossa Senhora dos Divinos Corações, proclamada pelos
        frades missionários Protetora das Missões, era queridíssima tanto pelo
        povo do local e pelos peregrinos, como pelos frades capuchinhos que
        dirigiam a Igreja de Nossa Senhora da Penha de França, no Recife. Entre
        os missionários deste grupo de capuchinhos havia um frade napolitano,
        Frei Joaquim d´Afragola, que dedicava especial devoção a esta Nossa
        Senhora dos Divinos corações. Em 1828, ele e seus companheiros foram
        ameaçados de repatriação por grupos de nacionalistas brasileiros que,
        depois da Independência do Brasil em 1822, não queriam estrangeiros no
        país. Também em 1828, rompeu em Recife “um movimento quase
        revolucionário em que os sediciosos, furiosos, atacaram as pessoas e
        cousas da Igreja, nada poupando, por santo e venerável que “ (Armas,
        1932). Temendo, assim, a ação dos iconoclastas, Frei Joaquim d´Afragola
        e seu grupo de frades capuchinho decidiram proteger a imagem por eles
        venerada e a enviaram, em sigilo, com todos os seus adornos, para
        Nápoles, mármore e de madeiras douradas, bem como de outros esplendores
        que abrilhantavam o culto á Virgem Mãe de Deus Brasileira.
      </p>
      <Spacing size={4} />
      <Label as="h4" color="primary">
        A DEVOÇÃO
      </Label>
      <Spacing size={1} />
      <p>
        {" "}
        Como a Itália não estava ainda unificada, a cidade de Nápoles, nesta
        época, fazia parte do Reino das Duas Sicilias, sob o poder da dinastia
        francesa dos Bourbon. Neste Reino, “as manifestações sobrenaturais da
        prodigiosa imagem exilada ( de Nossa Senhora dos Divinos Corações)
        tiveram seu início logo após sua entrada no porto de Nápoles” (Armas,
        1932). O atendimento ás preces diárias dos napolitanos que frequentavam
        a Igreja de Santo Efrém levou-os a dirigir orações, render ação de
        graças e dedicar, cada vez mais, especial devoção á Santa originária do
        Brasil. Os títulos Maria do Brasil, Madonna del Brasile e Virgem Mãe de
        Deus Brasileira ( Armas, 1932) afirmaram-se em Nápoles, com
        reconhecimento aos muitos milagres atribuídos á Santa que procedia do
        Brasil. Os fiéis expressavam seus agradecimentos com generosidade, de
        forma que, em pouco tempo, foi possível aos frades capuchinhos construir
        uma suntuosa capela na sua igreja, com altar e nichos ornados demármore
        e de madeiras douradas, bem como de outros esplendores que abrilhantavam
        o culto á Virgem Mãe de Deus Brasileira.
      </p>
      <Spacing size={4} />
      <Label as="h4" color="primary">
        O INCÊNDIO
      </Label>
      <Spacing size={1} />
      <p>
        Na noite de 21 para 22 de fevereiro de 1840, um violento incêndio na
        Igreja de Santo Efrém, o Novo, destruiu a maior parte da igreja,
        inclusive o riquíssimo altar onde estava a imagem da Madonna del
        Brasile. “As chamas devoradoras, encontrando por toda parte madeira seca
        e frágeis abóbadas, atingiu todo o teto, o qual, incandescente, ruiu
        precisamente sobre o altar e o nicho da Santíssima Virgem do Brasil […]”
        (Moraes, 1984) O Padre Provincial não autorizou que os bombeiros a
        retirassem de lá, dizendo.“[…] ela pode nos salvar a todos […] e
        salvar-se também” (Armas, 1932). E a Madonna del Brasile, com seu leve
        vestido branco de seda e seu manto azul todo bordado em relevo, escapou
        ilesa do violento fogo que deixou apenas algumas marcas chamuscadas na
        imagem do Santo Menino enquanto destroçava tudo á sua volta. A notícia
        do prodígio espalhou-se pela cidade e tanto o povo como altas
        personalidades foram pessoalmente verificar, em romaria que durou várias
        semanas, o milagre sua esposa, Dona Maria Teresa Isabel da Áustria,
        foram também venerar a sagrada imagem. O Monarca, que era um dirigente
        dinâmico e progressista, impressionado com a evidência do milagre,
        ordenou a imediata reconstrução da igreja. Durante todo o período da
        reconstrução, a imagem continuou a ser visitada por milhares de
        peregrinos. Estes devotos em muito contribuíram para a notável rapidez
        da reconstrução da igreja, que estava totalmente destruída pelo
        incêndio, e em dezesseis messes a Madonna del Brasile novamente reinava
        em um belo altar, sendo a igreja reaberta ao público com solene
        consagração.
      </p>
      <Spacing size={4} />
      <Label as="h4" color="primary">
        A COROAÇÃO DE NOSSA SENHORA DO BRASIL
      </Label>
      <Spacing size={1} />
      <p>
        Devido ao prodigioso salvamento do terrível incêndio e também como
        resultado da divulgação de vários outros milagres da Madonna del
        Brasile, que resultaram em contínua veneração das multidões de
        peregrinos e de pessoas da nobreza, ocorreu em Nápoles uma grande festa
        para realizar a Coroação de Nossa Senhora do Brasil, em 11 de novembro
        de 1871. Por especial recomendação do Cabido do Vaticano, que nomeou o
        Arcebispo de Nápoles como seu delegado, a celebração na capital do Reino
        das Deus Sicilias foi gloriosa e solene, com procissão pelas ruas
        populosas, e grandes festividades com música especial, ladainhas e
        bênçãos em louvor da Madonana. A imagem brasileira, querida dos frades
        capuchinhos, passou oficialmente a ser conhecida na Europa com o título
        de Nossa Senhora do Brasil depois de receber a coroa de ouro instituída
        pelo Vaticano. O fervor da devoção foi sempre crescendo e Nossa Senhora
        do Brasil continuou realizando notáveis milagres. Evitou o alastramento
        de uma epidemia de cólera na cidade de Nápoles e comprovadamente curou
        muitos doentes, tanto pessoas famosas como gente humilde. Em 1867,
        devido á transformação em cárcere do convento onde ficava a Igreja de
        Santo Efrém, o Novo, a imagem foi conduzida para a Igreja de Santo
        Efrém, o Velho, também em Nápoles, onde permanece devotamente cultuada
        pelos napolitanos.
      </p>
      <Spacing size={4} />
      <Label as="h4" color="primary">
        A NOTÍCIA CHEGA AO BRASIL
      </Label>
      <Spacing size={1} />
      <p>
        Foi por acaso que o Bispo brasileiro, Dom Frederico Benício de Souza
        Costa, descobriu em 1923 a existência de Nossa Senhora do Brasil no
        Convento de Santo Efrém, em Nápoles. A narração deste encontro foi
        publicada em 1924 pela Revista Mensal de Assuntos Marianos em Belém do
        Pará. Conta o Senhor Bispo que, ao visitar o convento, ouviu dos frades
        capuchinhos que eles lá veneravamNossa Senhora do Brasil. A surpresa
        para o Senhor Bispo foi grande, pois pensou ele: “Com? Nossa Senhora do
        Brasil é venerada em Nápoles e desconhecida em nossa terra?” (Armas,
        1932). Em Roma fora publicado também, na Revista Roma e a Terra Santa,
        um texto do Padre José de Castro contando que um certo Frei Arsênio
        estava empenhado em conseguir a transladação para o Brasil da imagem da
        milagrosa Santa eu aqui fora esculpida e aqui fora muito reverenciada
        pelo povo, embora sob outra denominação. Frei Arsênio era o novo nome do
        Senhor Bispo Frederico Costa, que havia renunciado ao alto cargo
        eclesiástico e se tornara frade carmelita.
      </p>
      <p>
        No Brasil, a notícia sobre a descoberta da Nossa Senhora do Brasil
        venerada em Nápoles causou entusiasmo e resultou em uma campanha para
        que se obtivesse o translado da imagem para o país de sua origem. Nada
        foi conseguido neste sentido, mas o conhecimento da existência da
        imagem, a força e variedade de seus milagres e o prestígio de sua
        Coroação, com o reconhecimento do Vaticano, propiciaram a ideia de que
        fosse construída uma igreja Matriz em sua honra no Rio de Janeiro.
      </p>
      <p>
        Foi decidido pelo Cardeal Dom Joaquim Arcoverde que esta igreja ficaria
        no novo bairro da Urca. No dia 1º de janeiro de 1930, no terreno
        recebido pela Igreja Católica como doação, foi colocada a pedra
        fundamental da Igreja Matriz de Nossa Senhora do Brasil, a primeira no
        país a reverenciar a Virgem Mãe de Deus Brasileira. A sua construção foi
        concluída em 17 de dezembro de 1933 e em 8 de setembro de 1934 foi
        criada a Paróquia de Nossa Senhora do Brasil.
      </p>
      <p>
        No anos de 1953 e 1954, houve o recrudescimento de uma forte campanha da
        Ação Católica para trazer de volta ao Brasil a imagem original de Nossa
        Senhora do Brasil, com o argumento de que já dispunha o país de uma
        igreja a ela devotada.
      </p>
      <p>
        O segundo Pároco desta Matriz, Padre Emmanuel Dornellas Barbosa, na
        condição de Assistente-Geral da Confederação Católica Arquidiocesana, e
        com o apoio do Cardeal Dom Jaime de Barros Câmara, desenvolveu
        negociações com os frades capuchinhos para adevolução da bela imagem ao
        seu país de origem. Longa correspondência, muitas publicações em jornais
        brasileiros, e o envolvimento de altas personalidades do clero não
        lograram obter os resultados pretendidos.
      </p>
      <p>
        As duas imagens de Nossa Senhora do Brasil encontradas na Matriz do Rio
        de Janeiro, bem como as outras imagens existentes em outras igrejas
        posteriormente a ela dedicadas neste país, são cópias inspiradas naquela
        que permanece na Igreja de santo Efrém, o Velho, em Nápoles.
      </p>
      <p>
        Conforme consta no Livro de Tombo, a Matriz da Urca possui duas
        relíquias provenientes da milagrosa imagem original. Ambas são pequenas
        parcelas do manto que, cobrindo a Madonna del Brasile, foi
        milagrosamente salvo do incêndio que destruiu a Igreja de Santo Efrém, o
        Novo, em Nápoles. A primeira relíquia foi oferecida à Matriz da Urca, em
        2 de julho de 1945, pelo Padre Gregório Comanseto, Capelão da Força
        Expedicionária Brasileira, que a trouxe de Nápoles, e encontra-se
        visível perto da porta de entrada da cripta de Santa Teresinha. A
        segunda foi trazida da Igreja de Santo Efrém, o Velho, e presenteada à
        Igreja de Nossa Senhora do Brasil, na Urca, por seu segundo Pároco,
        Padre Barbosa, que a entregou à veneração dos fieis em 8 de dezembro do
        Ano Santo de 1950, e que se encontra em um relicário de madeira
        trabalhada, junto ao altar-mor da igreja. Estas valiosas dádivas
        representam, assim, a imagem milagrosa, tornando-a mais próxima à vida e
        à veneração dos brasileiros.
      </p>
    </Styles.Wrapper>
  );
};

export default Sobre;
