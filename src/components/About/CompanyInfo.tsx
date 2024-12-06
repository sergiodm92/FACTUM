import { FC } from 'react';

const CompanyInfo: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">About Our Company</h2>
      <p className="text-gray-600 text-xl dark:text-gray-300 mb-8 w-full max-w-3xl">
        We are a company focused on creating innovative solutions that help businesses achieve success.
      </p>
    </div>
  );
};

export default CompanyInfo;
