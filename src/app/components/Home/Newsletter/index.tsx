import Image from 'next/image'

const Newsletter = () => {
  return (
    <section id="join-section" className="relative -mb-64 overflow-visible">
      <div className="relative">
        <div className="mx-auto w-full py-10 md:py-14 px-4 sm:px-6 md:max-w-7xl lg:px-24 rounded-lg bg-[#C5A972] relative overflow-hidden z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* left column: actual content and form */}
            <div className="flex flex-col justify-center pr-6 md:pr-12 lg:pr-20">
              <h3 className="text-5xl font-bold mb-3 text-black"> Abonnez-vous à notre newsletter </h3>
              <h4 className="text-lg font-medium mb-7 text-black">
                Recevez nos offres exclusives, promotions et bien plus encore en vous abonnant à notre newsletter.
              </h4>
              <div className="w-full">
                <div className="flex gap-2">
                  <input
                    type="email"
                    name="q"
                    className="py-3 flex-1 text-base px-4 bg-white transition-all duration-500 focus:border-primary focus:outline-1 rounded-lg"
                    placeholder="Enter your email"
                    autoComplete="off"
                  />
                  <button className="bg-[#102C46] cursor-pointer text-white font-medium py-3 px-5 rounded-sm hover:opacity-90">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* right column kept empty to allow the overlay image to sit into the viewport */}
            <div className="hidden md:block" />
          </div>

          {/* overlay moved inside the container to sit on top of the rectangle */}
          <div className="absolute inset-y-0 right-0 pointer-events-none hidden md:block w-[45vw] lg:w-1/2 z-20">
            <Image
              src="/images/newsletter/hands.png"
              alt="Decorative hands overlay"
              fill
              sizes="(min-width:1024px) 45vw, 60vw"
              style={{ objectFit: 'contain', objectPosition: '100% 50%', opacity: 0.95 }}
              className="pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
