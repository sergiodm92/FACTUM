import { Link } from 'react-router-dom';

interface FactumIconProps {
  textColor?: 'light' | 'dark';
}

const FactumIcon = ({ textColor = 'black' }: FactumIconProps) => {

  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <div className="flex items-center">
          <span className={`text-2xl font-bold text-${textColor} dark:text-white`}>
            FAC
          </span>
          <span className="text-2xl font-bold text-orange-500">
            T
          </span>
          <span className={`text-2xl font-bold text-${textColor} dark:text-white`}>
            UM
          </span>
        </div>
      </Link>
    </div>
  );
};

export default FactumIcon;