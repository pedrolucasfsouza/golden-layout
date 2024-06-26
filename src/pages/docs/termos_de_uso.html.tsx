import { useWindow } from "@/hooks/useWindow";
import styled from "styled-components";

export default function TermoDeUso() {
  const { isMobile, isMedium } = useWindow({});

  const Container = styled.div`
    @apply container;
    background-color: #050616;
    color: white;
  `;

  const Content = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;

    p {
      margin: 10px 0px;
    }
    h2 {
      font-size: 18px;
      font-weight: 600;
      margin-top: 20px;
    }
    h1 {
      font-size: 24px;
      font-weight: 600;
      margin-top: 20px;
    }
  `;

  return (
    <Container>
      <Content>
        <h1>Termo de Uso - BOLETAAI</h1>

        <p>
          Última Atualização: 04 de julho de 2023
          <br />
          <br />
          Obrigado por utilizar o BOLETAAI! Esta aplicação e seu conteúdo
          ("BOLETAAI") são controlados e operados pelo próprio BOLETAAI. Todos
          os direitos reservados. Estes termos de uso têm por objeto definir as
          regras a serem seguidas para a utilização do BOLETAAI ("Termos de
          Uso"), sem prejuízo da aplicação da legislação vigente. AO UTILIZAR O
          BOLETAAI, VOCÊ AUTOMATICAMENTE CONCORDA COM ESTES TERMOS DE USO,
          RESPONSABILIZANDO-SE INTEGRALMENTE POR TODOS E QUAISQUER ATOS
          PRATICADOS POR VOCÊ NO BOLETAAI OU EM SERVIÇOS A ELE RELACIONADOS, BEM
          COMO CONCORDA COM OS TERMOS DESCRITOS EM NOSSA POLÍTICA DE
          PRIVACIDADE. CASO VOCÊ NÃO CONCORDE COM QUALQUER DOS TERMOS E
          CONDIÇÕES ABAIXO ESTABELECIDOS, VOCÊ NÃO DEVE UTILIZAR O BOLETAAI.
          Caso queira nos dar algum feedback sobre o BOLETAAI, tenha dúvidas ou
          precise tratar de qualquer assunto relacionado a estes Termos de Uso,
          entre em contato conosco através do e-mail contato@boleta.ai.
        </p>

        <h2>1. O QUE É O BOLETAAI?</h2>
        <p>
          1.1. Serviços. O BOLETAAI é uma plataforma que oferece os seguintes
          serviços: aplicativo que calcula o valor do imposto devido pelo
          investidor, com base nas informações que ele preenche junto com a
          importação automática de informações, levando em conta as ressalvas
          listadas abaixo e ao longo do termo:
        </p>

        <p>
          1.2. Ressalvas: Ao utilizar o BOLETAAI, você reconhece que o
          aplicativo utiliza a B3, a bolsa oficial brasileira, como fonte de
          dados do mercado e que a EMPRESA não se responsabiliza pelo
          fornecimento de dados equivocados por parte da referida instituição. O
          Aplicativo utiliza as seguintes regras para o cálculo: a) Cálculo do
          IRPF para operações comuns de ações, units, FIIs e opções de ações, b)
          Consideração da isenção de imposto de renda para vendas brutas abaixo
          de R$ 20.000,00 (vinte mil reais) em operações comuns de ações e
          units, c) Cálculo do IRPF para day trade de ações, units, FIIs e
          opções de ações, d) Cálculo do IRPF para posições vendidas de ações
          ,units, FIIs e lançamento de opções de ações, e) Dedução do lucro
          tributável por meio de compensações de prejuízos de operações comuns,
          day trade e FII. O aplicativo não considera custos de corretagem,
          emolumentos, e taxa de liquidação para os seus cálculos. Qualquer
          diferença de valor por conta de alguma regra não listada não é
          responsabilidade da EMPRESA, por isso pedimos para que o usuário
          verifique, até 5º dia útil do mês, os cálculos feitos no aplicativo
          antes de realizar o pagamento do tributo. Ressalta ainda que as
          informações prestadas no momento do preenchimento dos dados são de
          total responsabilidade do usuário.
        </p>

        <p>
          1.3. Suspensão. Nós nos reservamos o direito de suspender ou cancelar,
          a qualquer momento, o seu acesso à aplicação em caso de suspeita de
          fraude, obtenção de benefício ou vantagem de forma ilícita, ou pelo
          não cumprimento de quaisquer condições previstas nestes Termos de Uso,
          na Política de Privacidade ou na legislação aplicável. Nesses casos,
          não será devida qualquer indenização a você, e o BOLETAAI poderá
          promover a competente ação de regresso, se necessário, bem como tomar
          quaisquer outras medidas necessárias para perseguir e resguardar seus
          interesses.
        </p>

        <h2>2. COMO ACESSO O BOLETAAI?</h2>
        <p>
          2.1. Acesso. Para acessar o BOLETAAI e utilizar suas funcionalidades é
          necessário efetuar um cadastro. Para cadastrar-se, você nos fornecerá
          informações pessoais, conforme descrito em nossa Política de
          Privacidade. Para saber mais sobre a privacidade de suas informações
          pessoais no BOLETAAI, acesse nossa Política de Privacidade.
        </p>

        <p>
          2.2. Titularidade. A partir do cadastro, você será titular de uma
          conta que somente poderá ser acessada por você. Caso o BOLETAAI
          detecte alguma conta feita a partir de informações falsas, por
          usuários que, por exemplo, não possuem a idade mínima permitida, essa
          conta será automaticamente deletada, cabendo ressaltar que é da
          responsabilidade e escolha do BOLETAAI o rol de motivos ao quais
          considere fraudulento quanto à titularidade da conta.
        </p>
        <p>
          2.3. Atualização das Informações. Desde já, você se compromete a
          manter as suas informações pessoais atualizadas. Você também concorda
          que irá manter o seu login e senha seguros e fora do alcance de
          terceiros, e não permitirá que a sua conta no BOLETAAI seja usada por
          outras pessoas. Dessa forma, o usuário responsabiliza-se por todas as
          ações realizadas em sua conta.
        </p>

        <h2>3. COMO SÃO FEITOS OS PAGAMENTOS NO BOLETAAI?</h2>
        <p>
          3.1. Meio de Pagamento. Os pagamentos efetuados no BOLETAAI deverão
          ser realizados dentro da aplicação, por meio de cartão de crédito ou
          boleto.
        </p>

        <p>
          3.2. Valor. Nos planos Mensal e Anual, o BOLETAAI cobra uma
          mensalidade ou anuidade, respectivamente, com valor acordado no
          momento da contratação. Os valores mais atuais podem ser consultados
          em http://boleta.ai
        </p>

        <p>
          3.3. Preço Final. O preço pago por você é final e não reembolsável, a
          menos que diversamente determinado pelo BOLETAAI. O BOLETAAI
          reserva-se o direito de estabelecer, remover e/ou revisar o preço
          relativo a todos os serviços ou bens obtidos por meio do uso da
          aplicação a qualquer momento. Nunca alteraremos o valor sem antes
          avisá-lo.
        </p>

        <p>
          3.4. Recolhimento de Impostos sobre o valor do aplicativo. Se houver a
          incidência de qualquer imposto sobre o valor pago ao aplicativo, o
          usuário será responsável por seu recolhimento. Em caso de eventual
          recolhimento por parte da aplicação, a mesma explicita que repassará
          ao usuário no preço.
        </p>

        <p>
          3.5. Confirmação. A confirmação do pagamento por meio da aplicação
          ocorrerá em até 5 (cinco) dias úteis. O processamento das informações
          de pagamento e a confirmação do pagamento serão realizados por
          sistemas de terceiros (ex. instituição financeira ou administradora do
          cartão de crédito), sendo o aplicativo uma mera interface entre o
          cliente e esses sistemas.
        </p>
        <p>
          3.6. Prazo mínimo. Certos produtos ou promoções do BOLETAAI podem
          exigir um prazo mínimo de assinatura. É importante que o usuário
          esteja ciente de que, caso decida não utilizar mais tais produtos
          antes do prazo mínimo de assinatura, podem ser cobradas tarifas
          adicionais.
        </p>

        <p>
          3.7. Código Promocional. Caso o BOLETAAI crie algum código promocional
          (por exemplo, cupom de desconto), este deve ser usado de forma legal
          para a finalidade e o público ou usuário específico a que se destina,
          seguindo todas suas condições. O código promocional pode ser cancelado
          caso se verifique que foi transferido, vendido ou utilizado com erro,
          fraude, ilegalidade ou violação às condições do respectivo código.
        </p>

        <h2>4. QUAIS SÃO OS DIREITOS DO BOLETAAI SOBRE A APLICAÇÃO?</h2>

        <p>
          4.1. Nossos Direitos. Todos os direitos relativos ao BOLETAAI e suas
          funcionalidades são de propriedade exclusiva do BOLETAAI, inclusive no
          que diz respeito aos seus textos, imagens, layouts, software, códigos,
          bases de dados, gráficos, artigos, fotografias e demais conteúdos
          produzidos direta ou indiretamente pelo BOLETAAI (“Conteúdo do
          BOLETAAI”). O Conteúdo do BOLETAAI é protegido pela lei de direitos
          autorais e de propriedade intelectual. É proibido usar, copiar,
          reproduzir, modificar, traduzir, publicar, transmitir, distribuir,
          executar, fazer o upload, exibir, licenciar, vender ou explorar e
          fazer engenharia reversa do Conteúdo do BOLETAAI, para qualquer
          finalidade, sem o consentimento prévio e expresso do BOLETAAI.
          Qualquer uso não autorizado do Conteúdo do BOLETAAI será considerado
          como violação dos direitos autorais e de propriedade intelectual do
          BOLETAAI.
        </p>

        <h2>
          5. PROPRIEDADE INTELECTUAL SOBRE O SOFTWARE E OS MATERIAIS
          DISPONIBILIZADOS
        </h2>

        <p>
          5.1. Propriedade Intelectual. Para nós do BOLETAAI, a qualidade dos
          materiais disponibilizados ao usuário é de suma importância. A criação
          deles é fruto de muito trabalho e dedicação de nossos desenvolvedores.
          Por isso, reafirmamos que o BOLETAAI garante que todos os direitos,
          título e interesse (incluindo, mas não apenas, os direitos autorais,
          marcários e outros de propriedade intelectual) sobre o serviço
          disponibilizado por nós permanecerão sob a titularidade do BOLETAAI.
        </p>

        <p>
          5.2. Não-aquisição de Direitos. O usuário não adquirirá nenhum direito
          de propriedade sobre os serviços e conteúdos do BOLETAAI, exceto
          quando haja outorga expressa neste Termos de Uso.
        </p>

        <p>
          5.3. Download de Conteúdo. É proibido que o usuário faça o download de
          nosso conteúdo com o intuito de armazená-lo em banco de dados para si
          ou para oferecer à terceiro, ressalvando conteúdo que seja autorizado
          o seu download, desde que para uso próprio. Veda-se, também, o uso do
          conteúdo disponibilizado por nós para criar uma base de dados ou um
          serviço que possa concorrer de qualquer maneira com o nosso negócio.
        </p>

        <h2>6. RECLAMAÇÕES SOBRE VIOLAÇÃO DE DIREITO AUTORAL</h2>
        <p>
          6.1. Infringência de Direitos. Alegações de infringência de direito
          autoral de qualquer conteúdo disponível no BOLETAAI devem ser
          encaminhadas por meio do e-mail contato@boleta.ai.
        </p>

        <h2>7. RESPONSABILIDADES DO USUÁRIO E DO BOLETAAI</h2>
        <p>
          7.1. Responsabilidade pelo Uso. Você é exclusivamente responsável pelo
          uso do BOLETAAI e deverá respeitar as regras destes Termos de Uso, bem
          como a legislação aplicável ao BOLETAAI.
        </p>
        <p>
          7.2. Responsabilização por Eventuais Danos. O BOLETAAI, seu
          controlador, suas afiliadas, parceiras ou funcionários não serão, em
          hipótese alguma, responsabilizados por danos diretos ou indiretos que
          resultem de, ou que tenham relação com o acesso, uso ou a incapacidade
          de acessar ou utilizar o BOLETAAI.
        </p>

        <p>
          7.3. Não-Responsabilização. TENDO EM VISTA AS CARACTERÍSTICAS
          INERENTES AO AMBIENTE DA INTERNET, O BOLETAAI NÃO SE RESPONSABILIZA
          POR INTERRUPÇÕES OU SUSPENSÕES DE CONEXÃO, TRANSMISSÕES DE COMPUTADOR
          INCOMPLETAS OU QUE FALHEM, BEM COMO POR FALHA TÉCNICA DE QUALQUER
          TIPO, INCLUINDO, MAS NÃO SE LIMITANDO, AO MAU FUNCIONAMENTO ELETRÔNICO
          DE QUALQUER REDE, HARDWARE OU SOFTWARE. A INDISPONIBILIDADE DE ACESSO
          À INTERNET OU AO BOLETAAI, ASSIM COMO QUALQUER INFORMAÇÃO INCORRETA OU
          INCOMPLETA SOBRE O BOLETAAI E QUALQUER FALHA HUMANA, TÉCNICA OU DE
          QUALQUER OUTRO TIPO NO PROCESSAMENTO DAS INFORMAÇÕES DO BOLETAAI NÃO
          SERÃO CONSIDERADAS RESPONSABILIDADE DO BOLETAAI. O BOLETAAI SE EXIME
          DE QUALQUER RESPONSABILIDADE PROVENIENTE DE TAIS FATOS E/OU ATOS.
        </p>

        <p>
          7.4. Perda de Lucros. Quando permitido por lei, o BOLETAAI e os
          fornecedores ou distribuidores não serão responsáveis por perda de
          lucros, perda de receita, perda de dados, perdas financeiras ou por
          danos indiretos, especiais, consequenciais, exemplares ou punitivos.
        </p>
        <p>
          7.5. Manutenção. É de sua inteira responsabilidade manter o ambiente
          de seu dispositivo (computador, celular, tablet, entre outros) seguro,
          com o uso de ferramentas disponíveis, como antivírus, firewall, entre
          outras, de modo a contribuir na prevenção de riscos eletrônicos. 7.6.
          Links Externos. É possível que o BOLETAAI possa conter links para
          sites e aplicativos de terceiros, assim como ter tecnologias
          integradas. Isso não implica, de maneira alguma, que o BOLETAAI
          endossa, verifica, garante ou possui qualquer ligação com os
          proprietários desses sites ou aplicativos, não sendo responsável pelo
          seu conteúdo, precisão, políticas, práticas ou opiniões. O BOLETAAI
          recomenda que você leia os termos de uso e políticas de privacidade de
          cada site de terceiros ou serviço que o usuário vier a visitar ou
          utilizar.
        </p>

        <h2>
          8. COMO O BOLETAAI LIDA COM AS INFORMAÇÕES QUE VOCÊ E OUTROS USUÁRIOS
          INSEREM?
        </h2>
        <p>
          8.1. A Política de Privacidade pode ser encontrada
          em https://boleta.ai/politica-de-privacidade.html
        </p>
        <p>
          8.2. Exclusão de Informação. O BOLETAAI poderá, mas não se obriga a:
          analisar, monitorar e remover Informação do Usuário, sendo feito à
          critério exclusivo do BOLETAAI, a qualquer momento e por qualquer
          motivo, sem nenhum aviso a você.
        </p>

        <h2>9. O QUE MAIS EU PRECISO SABER SOBRE ESTES TERMOS DE USO?</h2>

        <p>
          9.1. Alterações. Para melhorar sua experiência, o BOLETAAI está sempre
          sendo atualizado. Por esse motivo, estes Termos de Uso podem ser
          alterados, a qualquer tempo, a fim de refletir os ajustes realizados.
          No entanto, sempre que ocorrer qualquer modificação, você será
          previamente informando pelo endereço de e-mail fornecido por você no
          momento do cadastro ou por um aviso em destaque na aplicação. Caso
          você não concorde com os novos Termos de Uso, você poderá rejeitá-los,
          mas, infelizmente, isso significa que você não poderá mais ter acesso
          e fazer uso do BOLETAAI. Se de qualquer maneira você utilizar o
          BOLETAAI mesmo após a alteração destes Termos de Uso, isso significa
          que você concorda com todas as modificações.
        </p>

        <p>
          9.2. Conflito entre Disposições. Em caso de conflito entre estes
          termos e os termos modificador, os termos posteriores prevalecerão com
          relação a esse conflito.
        </p>
        <p>
          9.3. Lei e Foro. Estes Termos de Uso são regidos pelas leis da
          República Federativa do Brasil. Quaisquer dúvidas e situações não
          previstas nestes Termos de Uso serão primeiramente resolvidas pelo
          BOLETAAI e, caso persistam, deverão ser solucionadas pelo Foro da
          Comarca de Vila Velha, Espírito Santo, com exclusão de qualquer outro,
          por mais privilegiado que seja ou venha a ser.
        </p>
        <p>
          9.4. Dúvidas. Caso você tenha alguma dúvida, comentário ou sugestão,
          por favor, entre em contato conosco por meio do e-mail
          contato@boleta.ai.
        </p>
      </Content>
    </Container>
  );
}
