import ApplyNavbar from "../components/ApplyNavbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import MidSection from "../components/MidLogo";

export default function Tenth() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ApplyNavbar />
      <MidSection/>

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 text-sm font-semibold text-red-600">
            Class 11 Commerce Program
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Class 11 (10+1) <br />
            <span className="text-red-600">Commerce Program</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Strong fundamentals, structured learning, and exam-oriented
            preparation for Commerce students.
          </p>

          <Link to="/apply">
            <button className="px-12 py-4 border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition">
              Apply for Admission
            </button>
          </Link>
        </div>
      </section>

      {/* CLASS SCHEDULE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Class <span className="text-red-600">Schedule</span>
          </h2>

          <p className="text-gray-600 mb-10">
            Academic Year <span className="font-semibold text-red-600">2026–27</span>
          </p>

          <div className="overflow-x-auto border">
            <table className="w-full text-left">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Timing</th>
                  <th className="px-6 py-4">Days</th>
                  <th className="px-6 py-4">Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-5 font-semibold">Accountancy</td>
                  <td className="px-6 py-5">3:15 PM – 4:15 PM</td>
                  <td className="px-6 py-5">Monday – Friday</td>
                  <td className="px-6 py-5 font-bold text-red-600">
                    ₹30,000
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-5 font-semibold">Economics</td>
                  <td className="px-6 py-5">4:15 PM – 5:15 PM</td>
                  <td className="px-6 py-5">Monday – Friday</td>
                  <td className="px-6 py-5 font-bold text-red-600">
                    ₹30,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-gray-600">
            Two tests are conducted every month on Saturday.
          </p>
        </div>
      </section>

      {/* FEE STRUCTURE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Fee <span className="text-red-600">Structure</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {["Accountancy", "Economics"].map((subject) => (
              <div
                key={subject}
                className="group border rounded-2xl p-8 transition-shadow hover:shadow-xl hover:shadow-red-600/30"
              >
                <h3 className="text-2xl font-semibold mb-4">{subject}</h3>

                <p className="text-sm text-gray-500 mb-2">Annual Fee</p>
                <p className="text-4xl font-bold text-red-600 mb-6">
                  ₹30,000
                </p>

                <ul className="space-y-3 text-gray-700">
                  <li>₹5,000 payable at registration</li>
                  <li>5 monthly installments of ₹5,000</li>
                  <li>Student-friendly payment plan</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SALIENT FEATURES — UNTOUCHED CONTENT, MATCHED SHADOW */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              Salient <span className="text-red-600">Features</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Academic Support for Missed Classes",
                  desc:
                    "If a student is unable to attend classes due to emergency reasons, extra academic support and additional time are provided so the student remains in tune with the regular batch.",
                },
                {
                  title: "Complete Course Coverage",
                  desc:
                    "The complete syllabus is covered within the specified duration through a structured and systematic teaching approach, ensuring timely completion of the course.",
                },
                {
                  title: "Full Revision & Test Series",
                  desc:
                    "After completion of the course, full revision sessions are conducted along with a comprehensive test series covering the entire syllabus.",
                },
                {
                  title: "Online & Offline Classes Available",
                  desc:
                    "Students can choose between online and offline modes of learning. Live interactive lectures are conducted regularly, and recorded sessions are also provided for revision and flexible learning.",
                }
                
                ,
              ].map((item, index) => (
                <div
                  key={index}
                  className="group border rounded-2xl p-8 transition-shadow hover:shadow-xl hover:shadow-red-600/30"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-4xl font-light text-gray-200 group-hover:text-red-600 transition">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
         {/* CONTACT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Admissions Open for{" "}
              <span className="text-red-600">2026–27</span>
            </h2>

            <p className="font-semibold mt-6">Call Us</p>
            <p className="text-gray-600">
              9815036812 · 9316131806 <br />
              8288004140 · 9915776601
            </p>

            <p className="font-semibold mt-6">Visit Us</p>
            <p className="text-gray-600">
              SCO 206, Sector 36-D, Chandigarh
            </p>
          </div>

          <div className="border p-10 flex flex-col justify-center">
            <Link to="/apply">
              <button className="w-full px-12 py-4 border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition">
                Apply for Admission
              </button>
            </Link>

            <p className="text-sm text-gray-500 mt-4">
              Our team will contact you within 24 hours
            </p>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
