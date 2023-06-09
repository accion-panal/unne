import React from 'react';
import Section from '../../../Section/Section';
// import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <Section>
      {/* <Fade delay={300} direction="right"> */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="flex items-center justify-center flex-col">
          <img
            src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1684800892/Projects/unne/img/about/svg/about_e8mkas.svg"
            alt="about-img"
            className="rounded-full h-[200px] w-[200px] xl:w-[600px] xl:h-[600px]"
          />

          <div className="pt-10">
            <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
              “Un largo camino
              <br />
              se inicia con un solo paso...”
            </h2>
          </div>
        </div>

        <div className="col-span-2 flex flex-col justify-center mx-4 xl:ml-24">
          <h2 className="text-2xl xl:text-5xl text-center xl:text-start text-orange-500 font-bold">
            ¿Quiénes somos?
          </h2>
          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center xl:text-left">
            Unne es una plataforma de corretaje, donde los corredores puedan
            acceder <br />
            a herramientas digitales que de otro modo seria difícil de acceder.
            <br />
            Esperamos que estas les permitan atender a los clientes y cumplir
            sus
            <br />
            expectativas de manera rápida, en un proceso claro y sencillo.
            <br />
            Creamos Unne con la misión de poder arrendar, vender e Invertir en
            <br />
            propiedades de manera informada, rápida, y segura.
            <br />
            “Nuestro propósito es democratizar y profesionalizar esta industria
            a un <br />
            proceso accesible y fácil, brindando información relevante en la
            toma de <br />
            decisiones.”
          </p>

          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center xl:text-left">
            Pablo Ramirez
          </p>
          <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-5 md:text-center xl:text-left">
            Fundador y Gerente General
          </p>

          <div className="w-full">
            <div className="mt-8 ml-8 mr-8 mb-8 hover:scale-110 transition duration-500">
              <div className="w-full xl:w-5/6 h-50 sm:h-auto bg-orange-400 rounded-[50px] overflow-hidden shadow-md">
                <div className="p-14 pl-10">
                  <h2 className="text-xl xl:text-2xl text-white font-bold">
                    ¡Los números nos avalan!
                  </h2>
                  <p className="text-lg xl:text-xl text-white ">
                    Màs de 2.000.000 millones de visitas a nuestras
                    publicaciones mensuales + de 300 corredores ya son parte de
                    Unne Màs de 6.000 propiedades vigentes en cartera
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </Section>
  );
};
export default About;
