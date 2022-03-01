import React from "react";
import Link from "/components/Link";
import { PageSEO } from "/components/SEO";
import StyledButton from "/components/Buttons/Button";
import Flensburger from "../components/icons/svg/SVGFlensburger";
import Ganter from "../components/icons/svg/SVGGanter";
import Astra from "../components/icons/svg/SVGAstra";
import Astraflasche from"/components/icons/svg/SVGAstraflasche";
import Skyline from "../components/icons/svg/SVGSkyline_weiss_3.js";
import SCLogo from "../components/icons/svg/SCLogo";
import FlensDose from '../components/icons/svg/SVGFlensdose';
import Image from "next/image";
import Modal6 from "../components/Modal6";
import Arena from "../components/icons/svg/SVGArena";
import InfoBar from "../components/InfoBar";
import sketchy from "theme-ui-sketchy-preset";
import { PhoneIcon } from "@heroicons/react/solid";
import { AtSymbolIcon } from "@heroicons/react/solid";
import { MailIcon } from "@heroicons/react/solid";
import Tag from "/components/Tag";
import siteMetadata from "/data/siteMetadata";
import { getAllFilesFrontMatter } from "/lib/mdx";
import formatDate from "/lib/utils/formatDate";
import NewsletterForm from "/components/NewsletterForm";
import SectionContainer from "../components/SectionContainer";
import Slider2 from "../components/Slider/Slider2";
import {
  jsx,
  Flex,
  Box,
  NavLink,
  ThemeProvider,
  Button,
  Card,
  Text,
  Label,
  Checkbox,
  Select,
  Textarea,
  Radio,
  Input,
  Badge,
  Alert,
  Divider,
  Styled as S,
} from "theme-ui";

const theme = {
  ...sketchy,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },
};



const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <SectionContainer>
        <div className="mx-auto bg-slate-900 min-h-screen flex flex-col w-12/12">
          <section className="mt-5 mx-auto flex-grow-1 border-t-4 border-b-4 border-amber-400 bg-[url('/Hero3.SVG')] w-full h-[calc(100vh-40vh)] bg-contain bg-center md:bg-[url('/Hero.png')] md:bg-cover bg-no-repeat md:w-[100vw] md:h-[calc(100vh-12vh-16vh)]"></section>
          <section className="hidden lg:block lg:mx-auto lg:mt-2 lg:rounded-3xl lg:w-screen bg-slate-900 lg:h-[14vh] ">
            <div className="grid grid-cols-1 md:grid md:grid-cols-[7fr_6fr]  items-center justify-center">
              <div className="">
                <h1 className=" ml-5 headingB text--600 lg:text-xl xl:text-1xl px-4 2xl:text-[3.33rem] font-black">
                  Dein Treffpunkt in Freiburg !!!
                </h1>
              </div>
              <div className="">
                <Skyline width="100%" height="8vh" />
              </div>
            </div>
          </section>
          {/*======================================================================= SECTION A ===========================================================*/}

          <section className="mt-[3vh] mx-auto w-full md:-mt-[13vh] lg:mt-[3vh]">
            <div className=" w-11/12 h-96  mx-auto grid grid-cols-1 lg:grid lg:grid-cols-[1fr_2fr] lg:content-stretch lg:justify-between lg:gap-x-6">
              <div className=" w-full h-36 py-2">
                <p className="mb-2 text-center text-3xl font-bold tracking-tight text-yellow-500 dark:text-white uppercase md:text-4xl xl:text-5xl">
                  öfffnungzeiten
                </p>
                <p className="text-center mt-2 text-sm sm:text-1xl text-gray-300 md:text-base lg:text-xl">
                  Montag-Donnerstag: 18 bis 24 Uhr
                </p>
                <p className="text-center text-sm
                 sm:text-1xl md:text-base  text-gray-300 lg:text-xl xl:text-">
                  Freitag und Samstag: 15 bis 03 Uhr
                </p>
                <p className="text-center text-lg sm:text-1xl md:text-base  text-gray-300 lg:text-xl xl:text-">
                  Sonntag: Ruhetag
                </p>
 


              </div>
{/*================================================ Modale6 =======================================================================================*/}
              <div className="mt-16 w-11/12 h-24 rounded-2xl text-4xl px-8 bg-orange-600 hover:bg-slate-500 mx-auto md:hidden">
                <Modal6 className="h-8"></Modal6>
              </div>
{/*=============n=================================== Modale6 ende =======================================================================================*/}

                <div className="mx-auto mt-5 w-11/12 flex flex-col items-center bg-red-900 rounded-2xl border shadow-md md:flex-row lg:w-11/12 -gray-700 dark:bg-gray-800 ">
                <img className="p-3" src="/portrait-mick1.png" alt="portrait" />
                <div className="w-full flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-5 text-2xl font-bold tracking-tight text-yellow-500 dark:text-white xl:text-5xl">
                    "Moin Moin"
                  </h5>
                  <p className="md:newspaperA mb-1 font-normal text- text-gray-100 dark:text-gray-400">
                    In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben
                    wir im Herzen von Freiburg ein Lokal eröffnet, welches es so
                    südlich der Elbe wohl kein zweites Mal gibt. Ausgebaut im
                    Stile eines Schiffrumpfes, ist der im Herzen der Altstadt
                    gelegene Rettungsanker-Freiburg idealer Treffpunkt um nach

                    Wir sind stolz auf unser buntes, internationales Publikum.
                    Unser Rettungsanker ist auch ideale Location zur
                    Durchführung Ihres privaten oder geschäftlichen Events.
                    Sprechen Sie uns an oder kontaktieren Sie uns vor Ort oder
                    schreiben Sie uns eine email. Wir freuen uns Sie im
                    Rettungsanker begrüsssen zu dürfen <br />
                    <br />
                    Michael Schreck und das Team des Rettungsankers</p>
                </div>
              </div>
            </div>
            
            <div className=" mt-[125vh] mx-auto flex flex-col w-full md:-mt-40 px-12 md:w-4/12 md:absolute left-16 items-start justify-start">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-xl md:text-4xl font-medium font-sans text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 lg:mb-6">
                        <a className="ui btn" href="mailto:rettungsanker-freiburg@gmx.de?Subject=Enquiry"><MailIcon className="mr-1 w-12 h-12 fill-slate-700 inline" />SOS Rettungsanker</a>
                  </button>
                  <p className="mt-5 text-justify text-white text-sm">Schreiben Sie uns gerne Ihre Eindrücke zu Ihrem Besuch im Rettungsanker. Am wichtigsten aber: geben Sie uns Reflexion, wenn etwas nicht zu Ihrer Zufriedenheit vorgefallen ist! Nur so können wir uns als Ihr Gastgeber stetig verbessern und Ihnen als Gast zukünftig noch besser gerechtwerden.  </p>
                  unseren Gästen
                </div>
          </section>

          {/*========================== ENDE SECTION A ===================================================*/}
        
          <div className="mt-12 flex flex-col md:flex md:flex-row items-baseline">
            <div className="w-4/12 absolute left-32 transform translate-y-36 md:relative md:transform md:-translate-y-10 md:w-4/12 xl:w-3/12 xl:transform: xl:-translate-y-48">
              <Image
                src="/lighthousebw.svg"
                cIOIC
                alt="illustration"
                layout="responsive"
                height={473}
                width={473}
              />
            </div>
            <div className=" absolute w-4/12  left-36 p-2 transform translate-y-[55vh] md:static md:py-0 md:w-8/12 md:-translate-y-1 md:right-16 lg:w-3/12 xl:w-3/12 float-right md:transform md:-translate-y- xl:transforn z-20 xl:-translate-y-[vh]">
              <Image
                className=""
                src="/Astraballons.png"
                alt="astraballons"
                layout="responsive" 
                height={2764}
                width={1739}
              />
            </div>
            <div className="absolute left-16 z-20 transform translate-y-[85vh] w-3/6  md:relative md:block md:left-10  md:1/12 md:transform md:-translate-y-12 md:transform:-md:translate-y-6 lg:w-3/12 xl:transform xl:-translate-y-[0vh]">
              <Image
                src="/rettungsring.png"
                alt="illustration"
                layout="responsive"
                height={473}
                width={473}
              />
            </div>
            <div className="hidden md:block transform -translate-y-12 right w-5/12  md:transform:-translate-y-24 lg:transform lg:w-3/12 lg:-transform: lg:-translate-y-24">
              <Image
                src="/Graffity_StPauli.png"
                alt="llustration"
                layout="responsive"
                height={473}
                width={473}
              />
            </div>
          </div>

          {/*======================================= Section B =======================================================================*/}
          <section className="mt-[vh] xl:-mt-48 xl:p-12">
            <div className="grid overflow-hidden grid-cols-1 md:grid md:grid-cols-3 grid-rows-2 gap-3">
              <div className="mx-auto w-10/12 md:w-11/12">
                <Image
                  width="619"
                  height="696"
                  src="/bulleye.png"
                  layout="responsive"
                  alt="Bullauge"
                />
              </div>
              <div className="mx-auto w-10/12 md:w-11/12">
                <Image
                  width="619"
                  height="696"
                  src="/bulleye.png"
                  layout="responsive"
                  alt="Bullauge"
                />
              </div>
              <div className="mx-auto w-10/12 md:w-11/12">
                <Image
                  width="619"
                  height="696"
                  src="/bulleye.png"
                  layout="responsive"
                  alt="Bullauge"
                />
              </div>
            </div>
          </section>

          {/*======================================= Ende Section B =======================================================================*/}

          <h1 className="mt-10 headingA relative left-1 text-[3rem] text-yellow-500 text-center md:text-8xl lg:text-[10rem] xl:-mt-[66vh]">
            Die Kneipe
          </h1>

          {/*========================================================== section E ===============================================================*/}

          <section className=" xl:mt-[16vh]">
            <div className="container mx-auto rounded-2xl bg-slate-800 w-11/12">
              <p className="lg:newspaperB lg:mt-0 text-gray-100  text-lg px-4 lg:-mb-16 lg:text-3xl lg:leading-10">
                Gemütlich nordisches Ambiente im Herzen der Altstadt Freiburgs
                gelegen. Orginales Waterkant-Feeling mit Astra <Astraflasche className="hidden md:inline w-20 h-16"></Astraflasche>, Flens & Co. <FlensDose className="hidden md:inline w-20 h-12"></FlensDose>
                Jeden Samstag Bundesliga Saison Spieltag{" "}
                <SCLogo
                  className="inline h-16 w-80"> 
                </SCLogo>
                <br /> Live in unserer{" "}
                <Link href="/sportareNa">
                  <a className="text-yellow-600 hover:text-amber-300 hover:border-b-4 hover:border-slate-400 text-sm lg:text-4xl">
                    Sportarena.
                  </a>
                </Link>{" "}
                <Arena className="inline" height="70" width="90"></Arena> Bei
                Top Spielen mit grosser Nachfrage sind Reservierungen über unser
                Booking-Tool zu empfehlen.
              </p>
            </div>

            <ThemeProvider theme={theme}>
              <div className="-mt-20 mx-auto p-16 lg:-mt-14 lg:w-11/12 lg:max-w-8xl grid grid-cols-1 justify-center items-center md:p-6  md:grid-cols-3 md:justify-around lg:item11s-center lg:gap-x-5">
                <Card
                  className="justify-self-center"
                  mb={3}
                  mt={20}
                  sx={{
                    maxWidth: 700,
                    padding: "12px",
                    color: "#ffffff",
                    backgroundColor: "orange",
                    border: "3px white solid",
                    boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
                  }}
                  onGotPointerCapture={2}
                >
                  <div className="mx-auto border- border-gray-100">
                    <Astra
                      object-fit="cover"
                      height="25vh"
                      width="100%"
                    ></Astra>
                  </div>
                  <Text>
                    <p className="mt-10 text-2xl text-center text uppercase font-bold">
                      Astra Bier
                    </p>
                    <p className="text-xl text-center">
                      natürlich direkt vom Kiez in den Anker
                    </p>
                  </Text>
                </Card>

                <Card
                  className="justify-self-center"
                  mb={3}
                  mt={20}
                  sx={{
                    maxWidth: 700,
                    padding: "12px",
                    color: "#ffffff",
                    backgroundColor: "orange",
                    border: "3px white solid",
                    boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
                  }}
                  onGotPointerCapture={2}
                >
                  <div className="mx-auto border- border-gray-100">
                    <Ganter
                      aobject-fit="cover"
                      height="25vh"
                      width="100%"
                    ></Ganter>
                  </div>
                  <Text>
                    <p className="mt-10 text-2xl text-center text uppercase font-bold">
                      Ganter Bier
                    </p>
                    <p className="text-xl text-center">
                      frisches köstliches Ganter-Bräu vom Fass
                    </p>
                  </Text>
                </Card>
                <Card
                  className="justify-self-center"
                  mb={3}
                  mt={20}
                  sx={{
                    maxWidth: 700,
                    padding: "12px",
                    color: "#ffffff",
                    backgroundColor: "orange",
                    border: "3px white solid",
                    boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
                  }}
                  onGotPointerCapture={2}
                >
                  <div className="mx-auto border- border-gray-100">
                    <Flensburger
                      o
                      
                      bject-fit="cover"
                      height="25vh"
                      width="100%"
                    ></Flensburger>
                  </div>
                  <Text>
                    <p className="mt-10 text-2xl text-center text uppercase font-bold">
                      Flensburger
                    </p>
                    <p className="text-xl text-center">
                      das blonde Herbe aus dem hohen Norden
                    </p>
                  </Text>
                </Card>
              </div>
            </ThemeProvider>
          </section>
          {/*========================================================== section E =ende ==============================================================*/}
          <h1 className="z-20 relative headingB text-[2rem] text-center text-gray-50 lg:headingA lg:text-yellow-500 lg:text-[4.66rem] lg:mt-24">
            Impressionen Rettungsanker
          </h1>
          <div className="w-3/12 lg:w-3/12 lg:p-8 lg:transform lg:-translate-y-16 xl:transform xl-translate-y-16">
            <Image
              src="/Albers_Illu_white.png"
              alt="Impressionen"
              height="208 "
              width="195"
              layout="responsive"
            />
          </div>
          {/*========================================================== section F ==============================================================*/}
          
            
                      <section className=" md:-mt-80 mx-auto">
                        <div className="w-9/12 mx-auto border-8 border-slate-200">
                          
                              <Slider2></Slider2>
                        </div>
                        <p className="mt-2 text-xs text-white text-center lg:text-lg">Impressionen aus dem Rettungsanker</p>

                      </section>
            
          
          {/*========================================================== section F ende==============================================================*/}

          {/*========================================================== section G =================================================*/}
          <section className="">
            <div>
              <hr className="w-48 mt-12 mx-auto md:w-9/12" />

              <div className="w-36 mt-6 md:mt-20 mx-auto md:w-2/12 lg:m">
                <Image
                  src="/LogoNeu.png"
                  alt="LogoNeu"
                  layout="responsive"
                  height="1060"
                  width="1920"
                />
              </div>

              <h1 className="headingB text-white mt-2 text-[3rem] text-center lg:headingA lg:text-[6rem] lg:text-gray-600">
                Impressum
              </h1>
              <div>
                <div className="mt-8 flex flex-col items-center justify-between">
                  <h1 className="mx-auto w-9/12 md:text-4xl text-gray-100 text-center">
                    Rettungsanker Freiburg GbR
                  </h1>
                  <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    Adelhauserstrasse 7c
                  </h1>
                  <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    79098 Freiburg / Breisgau
                  </h1>
                </div>

                <div className="mt-12">
                  <h1 className="mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center">
                    Geschäftsführung:
                  </h1>
                  <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    Michael Schreck
                  </h1>
                </div>

                <div className="mt-12">
                  <h1 className="mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center">
                    Steuernummer:
                  </h1>
                  <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    1234567890
                  </h1>
                </div>
                <div className="mt-12">
                  <h1 className="mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center">
                    Gerichtsstand:
                  </h1>
                  <h1 className="mb-10 mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                    Freiburg/ Breisgau
                  </h1>
                </div>
              </div>
            </div>
          </section>
          
                  
          {/*========================================================== section G ende==============================================================*/}

          {/*=======================================  Section C =======================================================================*/}
        </div>
      

</SectionContainer>
    </>
    
    
)
 async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
  
}

}