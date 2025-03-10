const features = [
  {
    title: 'Modern Stack',
    description: 'Built with Next.js, TypeScript, Tailwind CSS and shadcn/ui for a modern development experience.',
    icon: '🚀',
  },
  {
    title: 'Responsive Design',
    description: 'Fully responsive layouts that work perfectly on desktop, tablet, and mobile devices.',
    icon: '📱',
  },
  {
    title: 'Component-Based',
    description: 'Modular component architecture for easy maintenance and scalability.',
    icon: '🧩',
  },
  {
    title: 'Performance Optimized',
    description: 'Optimized for performance to provide the best user experience possible.',
    icon: '⚡',
  },
];

const Features = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Key Features</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">Everything you need to build amazing digital products</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
