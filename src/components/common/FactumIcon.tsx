import Link  from 'next/link';

interface FactumIconProps {
  textColor?: 'white' | 'black';
}

const FactumIcon = ({ textColor = 'black' }: FactumIconProps) => {

  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center">
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