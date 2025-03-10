import ServiceCard from './service-card';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies that scale with your business.',
    icon: '💻',
    link: '/services/web-development',
  },
  {
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
    icon: '📱',
    link: '/services/mobile-applications',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user engagement and drive conversions.',
    icon: '🎨',
    link: '/services/ui-ux-design',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your audience and increase your online presence.',
    icon: '📈',
    link: '/services/digital-marketing',
  },
  {
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platforms that help you sell products and services online.',
    icon: '🛒',
    link: '/services/ecommerce',
  },
  {
    title: 'Content Management',
    description: 'Easy-to-use content management systems that give you full control over your content.',
    icon: '📝',
    link: '/services/content-management',
  },
];

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServiceList;
