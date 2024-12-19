export default function Hero() {
    return (
      <div className="relative h-[80vh] bg-cover bg-center" style={{backgroundImage: "url('/images/hero-home.jpg')"}}>
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Find Your Dream Home in Kenya
            </h1>
            <p className="text-xl text-white mb-8">
              Discover luxury properties in prime locations
            </p>
            {/* Search Component */}
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl">
              {/* Add search filters here */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  