import { FC } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

const TeamMember: FC<TeamMemberProps> = ({ name, role, image, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{name}</h3>
        <p className="text-orange-600 dark:text-orange-500 mb-4">{role}</p>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
