"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useSectionInView } from '../../hooks/hooks';

export default function Actividades(){

    const {ref} = useSectionInView('Actividades', 0.44);

    const actividadesRef = useRef(null);

    const { scrollYProgress } = useScroll({
    target: actividadesRef,
    offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 0.92]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const cards = data.map((card, index) => (
        <Card key={index} card={card} index={index} />
    ));

    return(
    <div id="actividades" ref={ref} className="h-[75vh] pb-4 bg-pistachio-600 bg-cover bg-center scroll-mt-28">
        <motion.div
        ref={actividadesRef}
        style={{
            scale: scaleProgess,
            opacity: opacityProgess,
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        >
            <div className="w-full h-full pt-5">
                <h1 className="text-4xl sm:text-2xl font-bold text-start drop-shadow-xl text-pistachio-100">Dentro de las actividades y estrategias que llevaremos a cabo destacamos las siguientes:</h1>
                <div className='h-fit'>
                    <Carousel items={cards} />
                </div>
            </div>
        </motion.div>
    </div>
    )
}

const DummyContent = ({texto}) => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] p-2 rounded-3xl"
            >
              <p className="text-neutral-600 rounded-lg text-base sm:text-sm md:text-md font-sans p-2 text-justify">
                {texto}
              </p>
            </div>
          );
        })}
      </>
    );
  };
   
  const data = [
    {
      title: "Modelos de Naciones Unidas",
      content: <DummyContent texto={"Son simulaciones en las que los estudiantes asumen el papel de diplomáticos para resolver problemas de trascendencia internacional. Estas actividades ayudan a los participantes a expandir sus conocimientos sobre asuntos internacionales, ampliar su visión del mundo y adquirir habilidades esenciales tanto para el mundo universitario como el laboral. Algunas ideas que han surgido de distintos modelos incluyen crear algoritmos en las redes sociales que detecten discursos de odio, establecer una base de datos internacional de oportunidades de empleo para refugiados, implementar programas de salud mental en escuelas, entre muchas otras cosas. "} />,
    },
    {
      title: "Visitas a embajadas y organismos internacionales",
      content: <DummyContent texto={"Organizar visitas a embajadas y organismos internacionales permitirá a los estudiantes conocer de cerca el trabajo diplomático y las relaciones internacionales. Esto puede incluir reuniones con diplomáticos, participación en conferencias o eventos, y la oportunidad de hacer preguntas y aprender sobre diferentes culturas y perspectivas. Mantener esto en el tiempo generará vínculos fuertes entre Astræa y estos actores internacionales, abriendo puertas para oportunidades bilaterales así como posibilidades de pasantías auspiciadas."} />,
    },
    {
      title: "Organizar instancias de intercambio y diálogo",
      content: <DummyContent texto={"Estos eventos pueden incluir conferencias, mesas redondas, debates y charlas en las que los participantes puedan discutir temas de actualidad y aprender de expertos en el campo de la diplomacia y las relaciones internacionales."} />,
    },
   
    {
      title: "Difundir información y recursos sobre diplomacia y relaciones internacionales",
      content: <DummyContent texto={"Proporcionar a los estudiantes acceso a materiales educativos, libros, documentales, sitios web y otras fuentes de información sobre diplomacia y relaciones internacionales les permitirá aprender de forma autodidacta y profundizar en los temas que les interesen. Esto ayudará a los futuros profesionales a perfilarse a áreas donde puedan especializarse y aportar aún más a la comunidad."} />,
    },
    {
      title: "Fomentar la participación en concursos y desafíos relacionados con la diplomacia y las relaciones internacionales",
      content: <DummyContent texto={"Estos concursos y desafíos pueden incluir ensayos, proyectos de investigación, presentaciones o actividades prácticas en las que los estudiantes puedan aplicar sus conocimientos y habilidades en el campo de la diplomacia y las relaciones internacionales. "} />,
    },
    {
      title: "Establecer alianzas con otras organizaciones y proyectos similares",
      content: <DummyContent texto={"Trabajar en colaboración con otras organizaciones y proyectos que tengan objetivos similares puede ayudar a fortalecer y ampliar el impacto de tu proyecto Astræa. Buscar oportunidades de colaboración, intercambio de ideas y apoyo mutuo para lograr un mayor alcance y éxito en nuestra misión de acercar el mundo de la diplomacia y las relaciones internacionales a los estudiantes universitarios."} />,
    },
  ];