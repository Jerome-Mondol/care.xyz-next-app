"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerSlides = [
    {
      title: "Professional Care for Your Loved Ones",
      description: "Trusted baby sitting, elderly care, and special care services at your doorstep",
      image: "/banner1.jpg", // Replace with actual images
      cta: "Book a Caretaker",
      color: "from-blue-500 to-teal-400"
    },
    {
      title: "24/7 Support & Emergency Care",
      description: "Always here when you need us most. Emergency care services available round the clock",
      image: "/banner2.jpg",
      cta: "Emergency Contact",
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Verified & Background-Checked Caretakers",
      description: "All our caretakers undergo thorough verification and training",
      image: "/banner3.jpg",
      cta: "Meet Our Caretakers",
      color: "from-orange-500 to-red-400"
    }
  ];

  const services = [
    {
      id: 1,
      title: "Baby Care Service",
      description: "Professional babysitting services with trained and certified caretakers",
      icon: "👶",
      hourlyRate: 200,
      features: ["Background Checked", "First Aid Certified", "Entertainment Activities", "Meal Preparation"],
      popular: true
    },
    {
      id: 2,
      title: "Elderly Care Service",
      description: "Compassionate care for elderly family members with medical support",
      icon: "👴",
      hourlyRate: 300,
      features: ["Medical Assistance", "Companionship", "Daily Care", "Medication Management"],
      popular: true
    },
    {
      id: 3,
      title: "Special Care Service",
      description: "Specialized care for sick or disabled family members",
      icon: "🏥",
      hourlyRate: 400,
      features: ["Trained Nurses", "24/7 Monitoring", "Therapy Sessions", "Medical Equipment"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Working Mother",
      content: "Care.xyz has been a lifesaver for our family. The babysitter is professional and my kids love her!",
      rating: 5,
      image: "/testimonial1.jpg"
    },
    {
      name: "Robert Chen",
      role: "Son of Elderly Patient",
      content: "The elderly care service for my father has been exceptional. The caretaker is compassionate and skilled.",
      rating: 5,
      image: "/testimonial2.jpg"
    },
    {
      name: "Maria Garcia",
      role: "Special Care User",
      content: "For my husband's post-surgery care, Care.xyz provided excellent nursing support at home.",
      rating: 4,
      image: "/testimonial3.jpg"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families", icon: "🏠" },
    { number: "200+", label: "Verified Caretakers", icon: "👨‍⚕️" },
    { number: "10,000+", label: "Hours of Care", icon: "⏰" },
    { number: "98%", label: "Satisfaction Rate", icon: "⭐" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] overflow-hidden">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-90`}>
              <div className="absolute inset-0 bg-black opacity-40" />
            </div>

            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="text-white max-w-2xl z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {slide.description}
                </p>
                <Link
                  href="/register"
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                >
                  {slide.cta} →
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission: Making Caregiving Accessible
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Care.xyz, we believe every family deserves reliable, trustworthy, and professional care services.
              Our platform connects you with verified caretakers who provide compassionate support for your loved ones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-300 flex items-center justify-center">
                  <span className="text-6xl">👨‍👩‍👧‍👦</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Care.xyz?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Verified Caretakers</h4>
                    <p className="text-gray-600">
                      All caretakers undergo thorough background checks, reference verification, and training.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Quick Booking</h4>
                    <p className="text-gray-600">
                      Book a caretaker in minutes with our easy-to-use platform. Available 24/7.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Secure & Reliable</h4>
                    <p className="text-gray-600">
                      Your safety is our priority. All bookings are insured and monitored for quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Professional Standards</h4>
                    <p className="text-gray-600">
                      Caretakers follow professional protocols and receive ongoing training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Care Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of professional care services designed for every need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2 ${
                  service.popular ? 'border-2 border-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 font-semibold">
                    🏆 Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="text-5xl text-center mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-blue-600">
                      ৳{service.hourlyRate}/hour
                    </div>
                    <div className="text-gray-500 text-sm">Starting rate</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/service/${service.id}`}
                    className="block w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-500 transition-all duration-300"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Families Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what families using Care.xyz have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-300 rounded-full flex items-center justify-center text-white text-2xl">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    ) : (
                      testimonial.name.charAt(0)
                    )}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < testimonial.rating ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="mt-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Verified Caretakers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15 min</div>
                <div className="text-lg opacity-90">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Professional Care?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of families who trust Care.xyz for their caregiving needs.
            Book your first caretaker today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started for Free
            </Link>
            <Link
              href="/caretakers"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Meet Our Caretakers
            </Link>
          </div>
          <p className="text-blue-200 mt-6">
            No credit card required for registration
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
