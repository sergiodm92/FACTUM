interface FeaturesItemProps {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  
  const FeaturesItem: React.FC<FeaturesItemProps> = ({ icon, title, description }) => {
    return (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    );
  };
  
  export default FeaturesItem;
  