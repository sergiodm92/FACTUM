const ImageSection = () => {
    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-yellow-400/20 dark:from-orange-500/10 dark:to-yellow-500/10 rounded-3xl transform rotate-3"></div>
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          alt="Software Development"
          className="relative rounded-3xl shadow-xl"
        />
      </div>
    );
  };
  
  export default ImageSection;
  