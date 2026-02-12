

import { useState, useEffect } from "react";

import ApplyNavbar from "../components/ApplyNavbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function BCom() {
  const [semesterType, setSemesterType] = useState("even");
  
useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [semesterType]);
  

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

      {/* EVEN / ODD TOGGLE */}
      <section className="sticky top-16 z-20 bg-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex gap-4 justify-center">
          {["even", "odd"].map((type) => (
            <button
              key={type}
              onClick={() => setSemesterType(type)}
              className={`px-8 py-3 border font-semibold transition ${
                semesterType === type
                  ? "bg-red-600 text-white border-red-600"
                  : "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              }`}
            >
              {type === "even" ? "Even Semester" : "Odd Semester"}
            </button>
          ))}
        </div>
      </section>

      {/* ================= EVEN SEMESTER ================= */}
      {semesterType === "even" && (
        <>
          {/* 2ND SEM */}
          <SemesterTable
            title="2nd Semester"
            rows={[
              ["Corporate Accounting", "3:00 PM – 4:00 PM", "Mon–Fri", "₹6,800"],
            ]}
          />

          {/* 4TH SEM */}
          <SemesterTable
            title="4th Semester"
            rows={[
              ["Cost Management", "4:00 PM – 5:00 PM", "Mon, Wed, Fri", "₹6,800"],
              ["Advance Accounting", "4:00 PM – 5:00 PM", "Tue, Thu, Sat", "₹6,800"],
            ]}
          />

          {/* 6TH SEM */}
          <SemesterTable
            title="6th Semester"
            rows={[
              ["Operation Research", "4:00 PM – 5:00 PM", "Mon–Fri", "₹6,800"],
              ["Direct Tax Laws", "5:00 PM – 6:00 PM", "Mon, Wed, Fri", "₹6,800"],
              ["Financial Management", "5:00 PM – 6:00 PM", "Tue, Thu, Sat", "₹6,800"],
            ]}
          />

          <FeeMode first="₹3,800" second="₹3,000" />
        </>
      )}

      {/* ================= ODD SEMESTER ================= */}
      {semesterType === "odd" && (
        <>
          {/* 1ST SEM */}
          <SemesterTable
            title="1st Semester"
            rows={[
              ["Financial Accounting (1st Batch)", "2:15 PM – 3:15 PM", "Mon–Fri", "₹7,800"],
              ["Financial Accounting (2nd Batch)", "7:00 PM – 7:45 PM", "Mon–Fri", "₹7,800"],
            ]}
          />

          {/* 3RD SEM */}
          <SemesterTable
            title="3rd Semester"
            rows={[
              ["Cost Accounting", "5:15 PM – 6:00 PM", "Mon–Fri", "₹7,800"],
            ]}
          />

          {/* 5TH SEM */}
          <SemesterTable
            title="5th Semester"
            rows={[
              ["Direct Taxes", "6:00 PM – 7:00 PM", "Mon, Wed, Fri", "₹7,800"],
              ["Management Accounting", "6:00 PM – 7:00 PM", "Tue, Thu, Sat", "₹7,800"],
            ]}
          />

          <FeeMode first="₹4,800" second="₹3,000" />
        </>
      )}

      {/* ENQUIRY */}
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

/* REUSABLE COMPONENTS */

function SemesterTable({ title, rows }) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          {title.split(" ")[0]} <span className="text-red-600">Semester</span>
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
              {rows.map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="px-6 py-5 font-semibold">{r[0]}</td>
                  <td className="px-6 py-5">{r[1]}</td>
                  <td className="px-6 py-5">{r[2]}</td>
                  <td className="px-6 py-5 font-bold text-red-600">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FeeMode({ first, second }) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Mode of <span className="text-red-600">Fees</span>
        </h2>

        <div className="max-w-md border rounded-2xl p-8 hover:shadow-xl hover:shadow-red-600/30">
          <div className="space-y-5 text-gray-700">
            <div className="flex gap-4">
              <span className="text-red-600 font-bold">{first}</span>
              <p>Payable at the commencement of the course</p>
            </div>
            <div className="flex gap-4">
              <span className="text-red-600 font-bold">{second}</span>
              <p>Payable after one month of the course</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

