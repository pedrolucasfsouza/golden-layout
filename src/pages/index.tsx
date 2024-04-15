import {Accordion} from "@/components/Accordion";
import {Button} from "@/components/Button";
import {Container} from "@/components/Container";
import {Link} from "@/components/Link";
import {Text} from "@/components/Text";
import {Wrapper} from "@/components/Wrapper";
import {useWindow} from "@/hooks/useWindow";
import {DefaultTemplate} from "@/templates/Default";
import {Box, Flex, SimpleGrid, Stack} from "@chakra-ui/react";
import Slide from "react-reveal/Slide";
import ArrowTopRight from "../../public/icons/arrow-right-top.svg";
import ArrowDown from '../../public/icons/arrow-down.svg'
import CoinsIcon from "../../public/icons/coins.svg";
import DARFIcon from "../../public/icons/darf.svg";
import GraphicIcon from "../../public/icons/graphics.svg";
import ContractIcon from "../../public/icons/oportunidades/contracts.svg";
import MarginsIcon from "../../public/icons/oportunidades/margins.svg";
import PerformanceIcon from "../../public/icons/oportunidades/performance.svg";
import PeoplesIcon from "../../public/icons/peoples.svg";
import { useCallback } from "react";

export default function Home() {
    const {isMobile, isMedium} = useWindow({
        onScroll: () => {
        },
        onResize: (dimensions) => {
        },
    });
    const OpportunityItem = ({title, icon}: { title: string; icon?: any }) => {
        return (
            <Flex
                className={`flex-1 bg-gray_1/35 border-gray_1 border rounded-[24px] p-4 items-center gap-6`}
            >
                <Flex
                    className={`w-12 h-12 bg-blue_primary rounded-[12px] justify-center items-center`}
                >
                    {icon}
                </Flex>
                <Text className={`!text-white h2-semibold`}>{title}</Text>
            </Flex>
        );
    };

    const Element = useCallback(({title, description, image, tabletImage, mobileImage, black}: any) => {
      return (
          <Container className={`relative xl:!pb-10   z-50`}>
              <Wrapper
                  className={`my-0 xl:my-auto items-start xl:items-center justify-start xl:justify-center !flex-col gap-10 [&>div]:overflow-hidden`}>
                  <Flex
                      className={`w-full z-50 gap-16 flex-col xl:flex-row ${black ? `bg-1` : `bg-white` } pb-0 px-6 pt-6 xl:px-16 xl:py-32 rounded-[24px] shadow-common relative`}>
                      <Stack spacing={16} className={`xl:w-[46%]`}>
                          <Box className={`bg-blue_primary w-max p-2 rounded-[16px]`}>
                              <img src={`/icons/darf-title.svg`} className={`w-[32px]`}/>
                          </Box>
                          <Text className={`${black ? `!text-white` : `!text-gray_1` }  text-[28px] xl:text-[38px] font-semibold`} style={{
                              lineHeight: `111%`,
                              letterSpacing: `-4% `
                          }}>{title}</Text>
                          <Text className={`${black ? `!text-gray_3` : `!text-gray_2` } inter text-[14px] xl:text-[16px] !mt-8`}>
                              {description}
                          </Text>
                      </Stack>
                      <Flex className={`justify-center items-center w-full xl:w-5/12 h-full xl:absolute right-0 bottom-0`}>
                          <Slide right>
                              <img
                                  src={isMedium ? tabletImage : isMobile ? mobileImage : image}
                                  className={`xl:absolute right-0 bottom-0 max-h-full object-cover`}
                              />
                          </Slide>
                      </Flex>
                  </Flex>
              </Wrapper>
          </Container>
      )
  }, [isMedium, isMobile])


  const ElementRTL = useCallback(({title, description, image, tabletImage, mobileImage}: any) => {
      return (
          <Container className={`relative xl:!pt-0 xl:!pb-12 z-50 `}>
              <Wrapper
                  className={`my-0  xl:my-auto items-start xl:items-center justify-start xl:justify-center !flex-col gap-10 [&>div]:overflow-hidden `}>
                  <Flex
                      className={`w-full !shadow-white z-50 gap-16 flex-col xl:flex-row bg-1 pt-0 px-6 pb-6 xl:px-16 xl:py-32 rounded-[24px] relative justify-end`}>
                      <Flex className={`justify-center items-center w-full xl:w-5/12 h-full xl:absolute left-0 bottom-0`}>
                          <Slide left>
                              <img
                                  src={isMedium ? tabletImage : isMobile ? mobileImage : image}
                                  className={`xl:absolute left-0 top-0 xl:max-h-full object-cover`}
                              />
                          </Slide>
                      </Flex>
                      <Stack spacing={16} className={`xl:w-[46%]`}>
                          <Box className={`bg-blue_primary w-max p-2 rounded-[16px]`}>
                              <img src={`/icons/graphics.svg`} className={`w-[32px]`}/>
                          </Box>
                          <Text className={`!text-white text-[28px] xl:text-[38px] font-semibold`} style={{
                              lineHeight: `111%`,
                              letterSpacing: `-4% `
                          }}>{title}</Text>
                          <Text className={`!text-gray_3 inter text-[14px] xl:text-[16px] !mt-8`}>
                              {description}
                          </Text>
                      </Stack>
                  </Flex>
              </Wrapper>
          </Container>
      )
  }, [isMedium, isMobile])
    return (
        <DefaultTemplate>
             <Container className={`relative !pt-6 xl:pt-24  min-h-screen z-50`}>
                <Wrapper className={`my-0 xl:my-auto items-start xl:items-center justify-start xl:justify-center`}>
                    <img className={`absolute left-0 w-full h-full top-0 hidden xl:block object-cover`}
                         src={`/backgrounds/nossos-servicos-1.png`}/>
                    <img className={`absolute left-0 w-full h-auto bottom-0 ${isMedium && `!hidden`} xl:hidden `}
                         src={`/backgrounds/nossos-servicos-1-mobile.png`}/>
                    <img className={`absolute left-0 w-full h-auto bottom-0 -z-[1] ${!isMedium && `!hidden`} `}
                         src={`/backgrounds/nossos-servicos-1-tablet.png`}/>
                    <img className={`absolute left-0 w-full h-auto bottom-0 -z-[2] ${!isMedium && `!hidden`} `}
                         src={`/backgrounds/quem-somos-5.png`}/>
                    <Slide left>
                        <Flex className={`flex-1 w-full z-50 gap-2 flex-col-reverse xl:flex-row`}>
                            <Stack spacing={isMobile ? 32 : 40} className={`z-50`}>
                            {/* <Text className={`h1-semibold !text-blue_primary`}>100% PRECISÃO</Text> */}
                            <img
                                        src={"/icons/b3.svg"}
                                        className={`w-[140px] xl:w-[140px]`}
                                    />
                          
                                <Text className={`text-[30px] xl:text-[44px] font-semibold max-w-[500px]`} style={{
                                    lineHeight: `111%`,
                                    letterSpacing: `-4% `
                                }}>A sua central de inteligência para seus investimentos na bolsa</Text>
                                <Flex className={`gap-4 cursor-pointer items-center`}
                                     >
                                    <Text className={`!text-gray_3 inter h2-regular xl:text-[18px] max-w-[500px]`}>
                                        Somos a plataforma de gestão de ativos <b>mais precisa do mercado</b>, para que você tenha 100% de controle sobre sua carteira.
                                    </Text>
                                    <ArrowDown className={`scale-75 origin-top xl:scale-100 animate-bounce`}/>

                                    
                                </Flex>

                                <Flex className="gap-4">
                      <Button className={`!py-2 !px-6 !pr-6 !h-max bg-transparent border-white`}>
                      <Flex
                        className={`items-center gap-2 cursor-pointer [&>svg>path]:fill-white`}
                      >
                        {<ArrowTopRight />}
                        <Text
                          className={`h3-semibold-uppercase xl:!h-4 !text-white`}
                        >
                          SAIBA MAIS
                        </Text>
                      </Flex>
                    </Button>

                    <Button className={`!py-2 !h-max !px-6 !pr-6`}>
                      <Flex
                        className={`items-center gap-2 cursor-pointer [&>svg>path]:fill-white`}
                      >
                        {<ArrowTopRight />}
                        <Text
                          className={`h3-semibold-uppercase xl:!h-4 !text-white`}
                        >
                          ACESSAR AGORA
                        </Text>
                      </Flex>
                    </Button>
                    </Flex>
                            </Stack>
                        </Flex>
                    </Slide>
                </Wrapper>
            </Container>
            <Container className={`relative pt-12`}>
                <Wrapper className={`items-center justify-center`}>
                    <Flex
                        className={`flex-1 w-full z-50 gap-16 flex-col xl:flex-row justify-between`}
                    >
    
                        <Stack
                            spacing={isMobile ? 16 : 40}
                            className={`flex-1 justify-center xl:items-start items-center`}
                        >
                            <Flex
                                className={`w-12 h-12 bg-blue_primary rounded-[12px] justify-center items-center`}
                            >
                                <PeoplesIcon/>
                            </Flex>
                            <Text
                                className={`text-[24px] tracking-[-0.12rem] xl:text-[34px] !mt-4 text-center xl:text-left font-semibold`}
                                style={{
                                    lineHeight: `111%`,
                                }}
                            >
                                Todas as corretoras em um só lugar.
                            </Text>
                            <Text
                                className={`!text-gray_3 inter h2-regular xl:text-[16px] text-center xl:text-left`}
                            >
                                Esqueça a necessidade de acessar varias corretoras para manter a sua carteira em dia. Nossa inteligência de dados reúne tudo em um só lugar, com máxima precisão.
                            </Text>
                        </Stack>
                    
                    </Flex>
                </Wrapper>
            </Container>
            <Container className={`relative xl:!py-0`}>
                <Wrapper className={`items-center justify-center`}>
                    <Flex
                        className={`flex-1 w-full z-50 gap-16 flex-col xl:flex-row justify-between`}
                    >
                          
                        <Stack
                            spacing={isMobile ? 16 : 40}
                            className={`flex-1 justify-center xl:items-start items-center`}
                        >
                            <Flex
                                className={`w-12 h-12 bg-blue_primary rounded-[12px] justify-center items-center`}
                            >
                                <PeoplesIcon/>
                            </Flex>
                            <Text
                                className={`text-[24px] tracking-[-0.12rem] xl:text-[34px] !mt-4 text-center xl:text-left font-semibold`}
                                style={{
                                    lineHeight: `111%`,
                                }}
                            >
                                Sua Carteira 100% sincronizada
                            </Text>
                            <Text
                                className={`!text-gray_3 inter h2-regular xl:text-[16px] text-center xl:text-left`}
                            >
                                Nosso algoritmo proprietário é capaz de sincronizar 100% a sua carteira. Ponto. Independente da complexidade das suas operações, o boleta.ai irá te entregar um retrato real dos seus investimentos.
                            </Text>
                            <Button className={`!py-2 !h-max !px-6 !pr-6`}>
                      <Flex
                        className={`items-center gap-2 cursor-pointer [&>svg>path]:fill-white`}
                      >
                        {<ArrowTopRight />}
                        <Text
                          className={`h3-semibold-uppercase xl:!h-4 !text-white`}
                        >
                          ACESSAR AGORA
                        </Text>
                      </Flex>
                    </Button>
                        </Stack>
                        <Stack className={`flex-1 min-w-5/12 mx-auto max-w-[470px]`}>
                            <img src={"/images/home-2.png"} className={`w-full`}/>
                        </Stack>
                    </Flex>
                </Wrapper>
            </Container>
            <Container className="flex-col">
            <Text
                                className={`text-[24px] pb-24 tracking-[-0.08rem] text-center font-semibold`}
                                style={{
                                    lineHeight: `111%`,
                                }}
                            >
                                Bem-vindo! Há um universo de possibilidades.
                            </Text>
        <ElementRTL
                        title={`Visão geral dos investimentos`}
                        description={<>
                            Com o boleta.ai, você tem uma visão completa e detalhada de todos os seus investimentos.
                            Nossa plataforma mostra para você em um único lugar todas as informações importantes
                            sobre suas aplicações financeiras.
                        </>}
                        mobileImage={`/images/nossos-servicos-2-mobile.png`}
                        tabletImage={`/images/nossos-servicos-2-tablet.png`}
                        image={`/images/nossos-servicos-2.png`}
                    />

<Element
                title={`Cálculo de DARF`}
                description={<>
                    Nós sabemos que a declaração do Imposto de Renda pode ser um verdadeiro pesadelo para
                    muitos investidores. Por isso, <span className={`font-semibold`}>oferecemos um serviço completo de cálculo de DARF</span>,
                    que vai ajudar você a declarar seus investimentos de forma correta e sem dor de cabeça.
                </>}
                mobileImage={`/images/nossos-servicos-1-mobile.png`}
                tabletImage={`/images/nossos-servicos-1-tablet.png`}
                image={`/images/nossos-servicos-1.png`}
            />

<ElementRTL
                        title={`Calculo IRPF`}
                        description={<>
                            Com o boleta.ai, você tem uma visão completa e detalhada de todos os seus investimentos.
                            Nossa plataforma mostra para você em um único lugar todas as informações importantes
                            sobre suas aplicações financeiras.
                        </>}
                        mobileImage={`/images/nossos-servicos-2-mobile.png`}
                        tabletImage={`/images/nossos-servicos-2-tablet.png`}
                        image={`/images/nossos-servicos-2.png`}
                    />
            </Container>
            <Container baseClassName={`z-50`} className={`relative !pb-0 z-50 `}>
                <Wrapper className={`items-center justify-center`}>
                    <img
                        className={`absolute left-0 w-full bottom-0 hidden xl:block`}
                        src={`/backgrounds/home-2.png`}
                    />
                    <img
                        className={`absolute left-0 w-full bottom-0 xl:hidden`}
                        src={`/backgrounds/home-2.png`}
                    />
                    <Flex className={`flex-1 w-full z-50 flex-col translate-y-12`}>
                        <Stack
                            spacing={16}
                            className={`flex-1 bg-white xl:bg-1 items-center py-8 xl:py-16 px-6 xl:px-32 rounded-t-[12px] xl:rounded-t-[24px]`}
                        >
                            <Flex className={`flex-col xl:flex-row items-center gap-6`}>
                                <Flex
                                    className={`w-12 h-12 bg-blue_primary rounded-[12px] justify-center items-center`}
                                >
                                    <img
                                        src={"/icons/b3-mini.svg"}
                                        className={`w-[32px] h-[32px]`}
                                    />
                                </Flex>
                                <Text
                                    className={`text-[24px] tracking-[-0.12rem] xl:text-[34px] text-center font-semibold !text-gray_1 xl:!text-white`}
                                    style={{
                                        lineHeight: `111%`,
                                    }}
                                >
                                    Integração com a B3
                                </Text>
                            </Flex>
                            <Text
                                className={`!text-gray_2 xl:!text-gray_3 text-center inter text-[14px] xl:text-[16px]`}
                            >
                                Acreditamos que inteligência e tecnologia andam juntas e são
                                essenciais para que você possa investir com segurança e
                                confiança. Por isso, aqui os dados são coletados diretamente da
                                B3.
                            </Text>
                        </Stack>
                        <Flex
                            className={`w-full h-[160px] xl:h-[320px] bg-cover bg-left xl:bg-center rounded-b-[8px] xl:rounded-b-[24px]`}
                            style={{backgroundImage: `url(/backgrounds/home-3.png)`}}
                        ></Flex>
                    </Flex>
                </Wrapper>
            </Container>
            <Container className={`relative bg-white z-40`}>
                <Wrapper className={`items-center justify-center`}>
                    <Stack spacing={32} className={`flex-1 items-center py-16`}>
                        <Text
                            className={`text-[16px]  xl:text-[28px] !text-gray_1 text-center font-semibold`}
                            style={{
                                lineHeight: `130%`,
                            }}
                        >
                            Você terá acesso a diversos serviços exclusivos, que tornarão a
                            sua vida de investidor muito mais{" "}
                            <span className={`text-blue_primary`}>
                fácil e descomplicada.
              </span>
                        </Text>

            <Link href={`https://app.boleta.ai/cadastro`}>
              <Button className={`!px-6 !py-2 !text-[16px]`}>
                Acessar Agora
                <ArrowTopRight
                  className={`ml-4 xl:ml-12 scale-75 xl:scale-100`}
                />
              </Button>
            </Link>
            {/* <Flex
              className={`w-full h-[500px] bg-[#DFE0E4] rounded-[8px] xl:rounded-[24px] !mt-16`}
            /> */}
          </Stack>
        </Wrapper>
      </Container>
      <Container
        className={`relative !pt-0 bg-cover bg-bottom`}
        style={{ backgroundImage: `url(/backgrounds/home-4.png)` }}
      >
        <Wrapper className={`items-center justify-center bg-cover bg-center`}>
          <Flex className={`flex-1 w-full z-50 flex-col -translate-y-12`}>
            <Stack
              spacing={16}
              className={`flex-1 bg-1 items-center py-8 xl:py-16 px-6 xl:px-32 rounded-t-[12px] xl:rounded-t-[24px]`}
            >
              <Flex className={`flex-col xl:flex-row items-center gap-6`}>
                <Flex
                  className={`w-12 h-12 bg-blue_primary rounded-[12px] justify-center items-center`}
                >
                  <img
                    src={"/icons/medal.svg"}
                    className={`w-[32px] h-[32px]`}
                  />
                </Flex>
                <Text
                  className={`text-[24px] tracking-[-0.12rem] xl:text-[34px] text-center font-semibold`}
                  style={{
                    lineHeight: `111%`,
                  }}
                >
                  Prêmio Centelha
                </Text>
              </Flex>
              <Text
                className={`!text-gray_3 text-center inter text-[14px] xl:text-[16px]`}
              >
                A tecnologia desenvolvida pelo BOLETAAI foi reconhecida como uma
                das melhores inovações do ano de 2022 pelo Centelha/ES.
              </Text>
            </Stack>
            <Flex
              className={`w-full h-[160px] xl:h-[320px] bg-cover bg-center rounded-b-[8px] xl:rounded-b-[24px]`}
              style={{ backgroundImage: `url(/backgrounds/home-5.png)` }}
            ></Flex>
          </Flex>
        </Wrapper>
      </Container>
      <Container className={`relative !pt-0`}>
        <Wrapper className={`items-center justify-center`}>
          <Stack spacing={24} className={`w-full`}>
            <Stack
              spacing={16}
              className={`flex-1 bg-1 rounded-t-[24px] mb-12`}
            >
              <Flex className={`items-center gap-6`}>
                <Text
                  className={`xl:text-[34px] tracking-[-0.12rem]  text-[24px] font-semibold`}
                  style={{
                    lineHeight: `111%`,
                    letterSpacing: `-4% `,
                  }}
                >
                  Perguntas frequentes sobre o Boleta.ai
                </Text>
              </Flex>
              <Text className={`!text-gray_3 inter h2-regular xl:text-[20px]`}>
                Perguntas frequentes e respostas descomplicadas.
              </Text>
            </Stack>
            <Accordion
              defaultExpanded={true}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    1. Qual é o custo do boleta.ai?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                A nossa plataforma é GRATUITA na versão 1.0.
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
            <Accordion
              defaultExpanded={false}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    2. Como faço para receber o convite?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                Você pode receber o convite através de um amigo que tenha
                cadastro na nossa plataforma ou aguardar que sua solicitação na
                lista de espera seja respondida.
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
            <Accordion
              defaultExpanded={false}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    3. Quais vantagens de me cadastrar no boleta.ai?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                No boleta.ai fornecemos diversos serviço exclusivos que pode ser conferido na página "nosso serviços".
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
            <Accordion
              defaultExpanded={false}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    4. Como acesso o boleta.ai?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                Você acessa a nossa plataforma de qualquer navegador, tanto pelo
                celular como no computador.
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
            <Accordion
              defaultExpanded={false}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    5. Quais corretoras funcionam com o boleta.ai?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                TODAS as corretoras funcionam no boleta.ai, não importa se você
                tem conta em mais de uma.
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
            <Accordion
              defaultExpanded={false}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    6. De quais investimentos é feito o cálculo do Imposto de
                    Renda?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                Ações, FIIs (fundos de investimento imobiliário), BDRs
                (Brazilian Depositary Receipts), ETFs (Exchange Traded Funds),
                Futuros e opções.
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
            <Accordion
              defaultExpanded={false}
              header={
                <>
                  <Text className={`text-[18px] font-semibold xl:h1-semibold`}>
                    7. Preciso importar notas de corretagem ou inserir dados
                    mensais?
                  </Text>
                </>
              }
            >
              <Text className={`text-[14px] inter xl:text-[16px] !text-gray_3`}>
                Não. Os seus dados são extraídos diretamente da B3.
              </Text>
            </Accordion>
            <Flex className={`w-full h-[1px] bg-gray_1`} />
          </Stack>
        </Wrapper>
      </Container>
    </DefaultTemplate>
  );
}
