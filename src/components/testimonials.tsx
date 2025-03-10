const testimonials = [
  {
    name: 'Jane Cooper',
    role: 'CEO at TechCorp',
    content: 'This platform has transformed our digital presence. The modern stack and component architecture is exactly what we needed.',
    avatar: '/images/avatar-1.jpg',
  },
  {
    name: 'John Smith',
    role: 'Marketing Director',
    content: 'The responsive design works flawlessly across all our devices. Our conversion rates have increased by 40% since launch.',
    avatar: '/images/avatar-2.jpg',
  },
  {
    name: 'Emily Johnson',
    role: 'Product Manager',
    content: 'The performance optimizations have made a real difference. Our pages load faster and users stay longer.',
    avatar: '/images/avatar-3.jpg',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{`Don't just take our word for it. Here's what others have to say.`}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
              <p className="mb-4 text-gray-600">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">{/* Placeholder image */}</div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
