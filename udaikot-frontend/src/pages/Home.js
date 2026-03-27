import { useEffect, useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home() {
  const [resort, setResort] = useState(null);

  const [bookingData, setBookingData] = useState({
    fromDate: "",
    toDate: "",
    guests: 1,
  });

  const [showForm, setShowForm] = useState(false);

  const [customerData, setCustomerData] = useState({
    name: "",
    phone: "",
  });


  useEffect(() => {
    const fetchResort = async () => {
      const res = await API.get("/resorts");
      setResort(res.data[0]);
    };
    fetchResort();
  }, []);


  return (
    <div className="bg-[#f5f1e8]">

      {/* ✅ FIXED NAVBAR */}
      <Navbar />

      {/* 🔥 HERO */}
      <div id="home" className="h-screen relative overflow-hidden">

        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src="/assets/resort.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">

          <img
            src="/assets/logo.jpeg"
            className="w-24 mb-6 opacity-90"
            alt="resort view"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="tracking-[6px] text-sm text-[#c9a46c] mb-4"
          >
            WELCOME TO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-light mb-6"
          >
            THE UDAIKOT FARM
          </motion.h1>

          <p className="mb-8 text-lg text-gray-200">
            Experience Luxury in Nature 🌿
          </p>

          <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition">
            Explore Stay
          </button>
        </div>
      </div>

      {/* 🔥 BOOKING BAR */}
      <div id="booking" className="relative -mt-20 z-20 flex justify-center px-5">

        <div className="bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl p-6 w-full max-w-4xl border border-white/30">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">

            <div>
              <label className="text-sm text-gray-800">Check In</label>
              <input
                type="date"
                value={bookingData.fromDate}
                onChange={(e) =>
                  setBookingData({ ...bookingData, fromDate: e.target.value })
                }
                className="w-full mt-1 p-2 rounded bg-white/80"
              />
            </div>

            <div>
              <label className="text-sm text-gray-800">Check Out</label>
              <input
                type="date"
                value={bookingData.toDate}
                onChange={(e) =>
                  setBookingData({ ...bookingData, toDate: e.target.value })
                }
                className="w-full mt-1 p-2 rounded bg-white/80"
              />
            </div>

            <div>
              <label className="text-sm text-gray-800">Guests</label>
              <input
                type="number"
                value={bookingData.guests}
                onChange={(e) =>
                  setBookingData({ ...bookingData, guests: e.target.value })
                }
                className="w-full mt-1 p-2 rounded bg-white/80"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-[#c9a46c]"
              >
                Book Now
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 🔥 ABOUT (ANIMATED) */}
      
      {resort && (
        <motion.div id="about"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="py-32 px-6 md:px-16"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/4.jpeg"
                className="w-full h-[500px] object-cover hover:scale-110 transition duration-700"
                alt="resort view"
              />
            </div>

            <div>
              <p className="text-[#c9a46c] uppercase tracking-[4px] mb-3">
                Luxury Stay
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
                {resort.name}
              </h2>

              <p className="text-gray-600 mb-8 text-lg">
                {resort.description}
              </p>

              {/* <span className="text-3xl text-[#c9a46c] font-semibold">
                ₹{resort.price} / night
              </span> */}
              {/* <p className="text-[#c9a46c] text-lg tracking-wide">
                Premium Luxury Stay
              </p> */}

            </div>

          </div>
        </motion.div>
      )}

      {/* 🔥 GALLERY (ANIMATED) */}
      <motion.div id="gallery"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-black text-white py-32 px-6 md:px-16"
      >
        <div className="text-center mb-12">
          <p className="text-[#c9a46c] uppercase tracking-[4px] mb-3">
            Gallery
          </p>

          <h2 className="text-5xl font-light">
            Experience The Udaikot Farm
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {[
            "/images/1.jpeg",
            "/images/2.jpeg",
            "/images/3.jpeg",
            "/images/4.jpeg",
            "/images/5.jpeg",
            "/images/6.jpeg"
          ].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img
                src={img}
                className="w-full h-[300px] object-cover hover:scale-110 transition duration-700"
                alt="resort view"
              />
            </div>
          ))}

        </div>
      </motion.div>

      {/* 🔥 CONTACT SECTION */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#f5f1e8] py-32 px-6 md:px-16"
        >

          <div className="max-w-5xl mx-auto text-center">

            <p className="text-[#c9a46c] uppercase tracking-[4px] mb-3">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-600 mb-8 text-lg">
              For bookings and inquiries, contact us directly.
            </p>

            <div className="space-y-4 text-gray-700 text-lg">
              <p>📍 Kasniyawad, Udaipur, Rajasthan</p>
              <p>📞 +91 9667207277</p>
              <p>📧 udaikotfarm@gmail.com</p>
            </div>

            {/* MAP */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.735836634948!2d73.64522597461034!3d24.735947750230046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967fd24bf5381ef%3A0x974653fbacd4dbf!2sMG%20Villa!5e0!3m2!1sen!2sin!4v1774639126959!5m2!1sen!2sin"
                width="100%"
                height="250"
                className="rounded-xl border"
                loading="lazy"
                title="Udaikot Farm Location"
              ></iframe>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/918278610098?text=Hello%20I%20want%20to%20book%20Udaikot%20Farm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-[#c9a46c]"
            >
              Chat on WhatsApp
            </a>

          </div>

      </motion.div>

      <a
        href="https://wa.me/918278610098?text=Hello%20I%20want%20to%20book%20Udaikot%20Farm"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          className="w-8 h-8"
          alt="resort view"
        />
      </a>

      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

          <div className="bg-white p-8 rounded-2xl w-[90%] max-w-md shadow-xl relative">

            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center">
              Complete Your Booking
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const message = `Hello, I want to book Udaikot Farm.

                Name: ${customerData.name}
                Phone: ${customerData.phone}
                Check-in: ${bookingData.fromDate}
                Check-out: ${bookingData.toDate}
                Guests: ${bookingData.guests}`;

                const url = `https://wa.me/918278610098?text=${encodeURIComponent(message)}`;

                window.open(url, "_blank");

                setShowForm(false);

                setCustomerData({
                  name: "",
                  phone: "",
                });
              }}
              className="space-y-4"
            >

              <input
                type="text"
                placeholder="Your Name"
                value={customerData.name}
                onChange={(e) =>
                  setCustomerData({ ...customerData, name: e.target.value })
                }
                className="w-full p-3 border rounded"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={customerData.phone}
                onChange={(e) =>
                  setCustomerData({ ...customerData, phone: e.target.value })
                }
                className="w-full p-3 border rounded"
                required
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded hover:bg-[#c9a46c]"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      )}

    </div>

    
  );
}