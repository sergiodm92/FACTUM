import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500 text-gray-800">
      <div className="text-center p-6">
        <h1 className="text-9xl font-bold text-orange-500">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mt-4">Página no encontrada</h2>
        <p className="text-lg md:text-xl mt-2 text-gray-600">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200">
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
