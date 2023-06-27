import React from 'react';
import styles from '../../../../styles/components/CardStyle.module.css';

const Capacitation = () => {
  return (
    <div className="mx-10 2xl:mx-60 my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 pb-20">
        <div className="flex flex-col">
          <div className="pt-12 pb-10">
            <h2 className="text-4xl text-orange-500 font-bold pt-5">
              Capacítate junto a Unne
            </h2>
            <h2 className="text-3xl text-black font-bold  pt-20 ">
              Academia UNNE
            </h2>
            <p className="pt-4 text-gray-600">
              Para nosotros es esencial que estés preparado para los diferentes
              desafíos que te presenta la industria,
              <br />
              es por eso que creamos la “Academia Unne”, en donde te brindaremos
              charlas y cursos gratuitos para <br />
              que te mantengas actualizado constantemente.
            </p>

            <div className="pt-12 pr-10">
              <img
                className="h-max w-max"
                src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1684961059/Projects/unne/img/broker/png/broker_yielyh.png"
                alt="img-broker"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-10">
          <div
            className={`${styles.flipCard} shadow-xl animate-[heart_5s_ease-in-out_infinite]`}
          >
            <div className={`${styles.flipCardInner}`}>
              <div className={`${styles.flipCardFront}`}>
                <h2 className="text-3xl text-orange-500 font-bold pt-16 ">
                  Sistemas
                </h2>
              </div>
              <div className={`${styles.flipCardBack} pt-10`}>
                <p className="text-white">Sistemas y correo electrónico</p>
                <p className="text-white">
                  Estudios y seguimiento de las publicaciones
                </p>
                <p className="text-white">Guía de publicación</p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.flipCard} shadow-xl animate-[heart_5s_ease-in-out_infinite]`}
          >
            <div className={`${styles.flipCardInner}`}>
              <div className={`${styles.flipCardFront}`}>
                <h2 className="text-3xl text-orange-500 font-bold pt-16">
                  Área Comercial
                </h2>
              </div>
              <div className={`${styles.flipCardBack} pt-10`}>
                <p>Captación de cartera</p>
                <p>Técnicas de ventas</p>
                <p>Negociación, técnicas de cierre</p>
                <p>Manejo de objeciones</p>
                <p>Tasación</p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.flipCard} shadow-xl animate-[heart_5s_ease-in-out_infinite]`}
          >
            <div className={`${styles.flipCardInner}`}>
              <div className={`${styles.flipCardFront}`}>
                <h2 className="text-3xl text-orange-500 font-bold pt-16 ">
                  Área Legal
                </h2>
              </div>

              <div className={`${styles.flipCardBack} pt-12`}>
                <p>Ley de Arrendamiento</p>
                <p>Ley de Copropiedad</p>
                <p>Herencias e inmuebles</p>
                <p>FEA: ¿Qué es y para que sirve?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Capacitation;
