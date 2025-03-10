// components/about/Team.tsx
const team = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'With over 15 years of experience in tech, John leads our company with a focus on innovation and customer satisfaction.',
    avatar: '/images/team-1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    bio: `Jane oversees our technical strategy and ensures we're always using the most effective technologies for our clients.`,
    avatar: '/images/team-2.jpg',
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Designer',
    bio: 'Michael brings creative vision to every project, with a keen eye for aesthetics and user experience design.',
    avatar: '/images/team-3.jpg',
  },
  {
    name: 'Sarah Williams',
    role: 'Marketing Director',
    bio: 'Sarah develops our marketing strategies and helps our clients grow their digital presence effectively.',
    avatar: '/images/team-4.jpg',
  },
];

const Team = () => {
  return (
    <div className="py-12">
      <h2 className="mb-8 text-center text-3xl font-bold">Our Team</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <div key={index} className="rounded-lg border bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-gray-200">{/* Placeholder for avatar */}</div>
            <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
            <p className="mb-3 text-sm text-primary">{member.role}</p>
            <p className="text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
