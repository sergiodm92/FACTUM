interface ContactInfoItemProps {
    icon: JSX.Element;
    title: string;
    description: string | JSX.Element;
  }
  
  const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, description }) => {
    return (
      <div className="flex items-start">
        {icon}
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-1 text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ContactInfoItem;
  