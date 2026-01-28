import SectionHeading from './ui/SectionHeading';
import cardImage1 from '../assets/card-image-1.png';
import cardImage2 from '../assets/card-image-2.png';
import ServiceCard from './ui/ServiceCard';

const Services = () => {
  return (
    <section id="services" className="mx-auto container px-6 py-20">
      <SectionHeading
        heading="Services"
        text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          <ServiceCard
            titleLine1="Search engine"
            titleLine2="optimization"
            image={cardImage1}
            bgColor="#F3F3F3"
            textColor="black"
            highlightColor="#B9FF66"
            arrowBg="black"
            arrowColor="#B9FF66"
          />
          <ServiceCard
            titleLine1="Pay-per-click"
            titleLine2="advertising"
            image={cardImage2}
            bgColor="#B9FF66"
            textColor="black"
            highlightColor="#FFFFFF"
            arrowBg="black"
            arrowColor="#B9FF66"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
