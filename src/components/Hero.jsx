export default function Hero() {
  return (
    <section 
      className="border-solid border-1 border-lime-700 w-full flex flex-col items-center justify-center min-h-[50vh] mt-8 p-8
      bg-gradient-to-br from-teal-600 via-green-800 to-emerald-900 shadow-lg leading-relaxed mb-4 rounded-md"
    >
      <div className="w-full max-w-6xl text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to our page!</h1>
        <h1 className="hidden">Warszawa catering</h1>
        <p className="mb-4">We offer the best food at the best prices, with deliveries just under your door!</p>
        <img 
          src="./src/assets/sushiHero.png" 
          alt="hero-bg" 
          className="border-solid border-2 border-emerald-700 rounded-3xl w-full max-w-[800px] h-auto mx-auto mb-4"
        />
        <p className="mb-4">A short and catchy description of what your app or website does.</p>
        <a href="#contact" className="hover:text-emerald-300 text-lg font-semibold">
          Get in Touch with us!
        </a>
      </div>
    </section>
  );
}

