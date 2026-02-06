import ApplyNavbar from "../components/ApplyNavbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function BCom() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ApplyNavbar />

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 text-sm font-semibold text-red-600">
            Bachelor of Commerce Program
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-red-600">B.Com</span> Course
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Semester-wise coaching for B.Com students with structured teaching
            and exam-focused preparation.
          </p>

          <Link to="/apply">
            <button className="px-12 py-4 border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition">
              Apply for Admission
            </button>
          </Link>
        </div>
      </section>

      {/* 2ND SEMESTER */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            2<sup>nd</sup> <span className="text-red-600">Semester</span>
          </h2>

          <div className="overflow-x-auto border">
            <table className="w-full text-left">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Timing</th>
                  <th className="px-6 py-4">Days</th>
                  <th className="px-6 py-4">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-5 font-semibold">
                    Corporate Accounting
                  </td>
                  <td className="px-6 py-5">3:00 PM – 4:00 PM</td>
                  <td className="px-6 py-5">Monday to Friday</td>
                  <td className="px-6 py-5 font-bold text-red-600">
                    ₹6,800
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4TH SEMESTER */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            4<sup>th</sup> <span className="text-red-600">Semester</span>
          </h2>

          <div className="overflow-x-auto border">
            <table className="w-full text-left">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Timing</th>
                  <th className="px-6 py-4">Days</th>
                  <th className="px-6 py-4">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-5 font-semibold">
                    Cost Management
                  </td>
                  <td className="px-6 py-5">4:00 PM – 5:00 PM</td>
                  <td className="px-6 py-5">Mon, Wed, Fri</td>
                  <td className="px-6 py-5 font-bold text-red-600">
                    ₹6,800
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-5 font-semibold">
                    Advance Accounting
                  </td>
                  <td className="px-6 py-5">4:00 PM – 5:00 PM</td>
                  <td className="px-6 py-5">Tue, Thu, Sat</td>
                  <td className="px-6 py-5 font-bold text-red-600">
                    ₹6,800
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6TH SEMESTER */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            6<sup>th</sup> <span className="text-red-600">Semester</span>
          </h2>

          <div className="overflow-x-auto border">
            <table className="w-full text-left">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Timing</th>
                  <th className="px-6 py-4">Days</th>
                  <th className="px-6 py-4">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-5 font-semibold">
                    Operation Research
                  </td>
                  <td className="px-6 py-5">4:00 PM – 5:00 PM</td>
                  <td className="px-6 py-5">Monday to Friday</td>
                  <td className="px-6 py-5 font-bold text-red-600">
                    ₹6,800
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-5 font-semibold">
                    Direct Tax Laws
                  </td>
                  <td className="px-6 py-5">5:00 PM – 6:00 PM</td>
                  <td className="px-6 py-5">Mon, Wed, Fri</td>
                  <td className="px-6 py-5 font-bold text-red-600">
                    ₹6,800
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-5 font-semibold">
                    Financial Management
                  </td>
                  <td className="px-6 py-5">5:00 PM – 6:00 PM</td>
                  <td className="px-6 py-5">Tue, Thu, Sat</td>
                  <td className="px-6 py-5 font-bold text-red-600">
                    ₹6,800
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    {/* MODE OF FEES */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Mode of <span className="text-red-600">Fees</span>
        </h2>

        <div className="max-w-md border rounded-2xl p-8 transition-shadow hover:shadow-xl hover:shadow-red-600/30">
          <h3 className="text-2xl font-semibold mb-6">
            Payment Structure
          </h3>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-start gap-4">
              <span className="text-red-600 font-bold text-lg">₹3,800</span>
              <p>Payable at the commencement of the course</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-red-600 font-bold text-lg">₹3,000</span>
              <p>Payable after one month of the course</p>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* ENQUIRY SECTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              For Further <span className="text-red-600">Enquiries</span>
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
