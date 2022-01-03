import Image from "next/image";
import { motion } from "framer-motion";
import PresentationStyles from "../styles/parts/PresentationWrapper.module.sass";

const PresentationHome = () => {
  return (
    <div className={PresentationStyles.presentationWrapper}>
      <div className={PresentationStyles.presentationA}>
        <div className={PresentationStyles.heading}>
          <h1
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          >
            <span className="highlight-color">Diseñador</span> y{" "}
            <span className="highlight-color">desarrollador frontend</span>.
          </h1>
        </div>
        <div className={PresentationStyles.data}>
          <div className={PresentationStyles.img}>
            <Image
              src="/img/me_3.webp"
              alt="Este soy yo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={PresentationStyles.space}>
            <p>
              Mi trabajo consiste es diseñar y desarrollar{" "}
              <span className="highlight-color">
                sitios web y aplicaciones a medida para marcas y personas
              </span>
              . Me involucro desde el principio con las personas para aprender
              de sus proyectos y así poder crear productos interesantes,
              funcionales y que resuelvan sus necesidades.
            </p>
          </div>
        </div>
      </div>
      <div className={PresentationStyles.presentationB}>
        <div
          className={`${PresentationStyles.arrowWrapper} ${PresentationStyles.onHome}`}
        >
          <svg
            className={PresentationStyles.arrow}
            width="85"
            height="221"
            viewBox="0 0 85 221"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.5 0L42.5 218M1.73538 178.255L43.1729 219.693M83.1397 178.255L41.7022 219.693"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className={PresentationStyles.img}>
          <Image
            src="/img/me_6.webp"
            alt="Este soy yo trabajando"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={PresentationStyles.space}></div>
      </div>
    </div>
  );
};

export default PresentationHome;
