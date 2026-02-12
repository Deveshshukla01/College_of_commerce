import { useState, useEffect } from "react";
import ApplyNavbar from "../components/ApplyNavbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function CS() {
  const [active, setActive] = useState("cseet");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ApplyNavbar />

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 text-sm font-semibold text-red-600">
            Company Secretary Program
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-red-600">CS</span> Course
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Structured preparation for CSEET and CS Executive with complete
            syllabus coverage, regular testing, and disciplined teaching.
          </p>

          <Link to="/apply">
            <button className="px-12 py-4 border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition">
              Apply for Admission
            </button>
          </Link>
        </div>
      </section>

      {/* STICKY OPTIONS */}
      <section className="sticky top-16 z-20 bg-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex gap-4 justify-center flex-wrap">
          {[
            { id: "cseet", label: "CSEET" },
            { id: "group1", label: "CS Executive – Group 1" },
            { id: "group2", label: "CS Executive – Group 2" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-6 py-3 border font-semibold transition ${
                active === tab.id
                  ? "bg-red-600 text-white border-red-600"
                  : "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* CONTENT SWITCH */}

      {active === "cseet" && (
        <CourseBlock
          title="CSEET"
          duration="4 Months"
          feeTitle="CSEET – Fee Structure"
          fee="₹38,000"
          subjects={[
            ["Business Communication", "9:15 AM – 10:15 AM"],
            ["Fundamentals of Accounting", "10:15 AM – 11:15 AM"],
            ["Economic & Business Environment", "11:15 AM – 12:15 PM"],
            ["Business Laws & Management", "12:15 PM – 1:15 PM"],
          ]}
          installment={[
            "₹2,000 payable at the time of registration",
            "Remaining ₹36,000 payable in 2 monthly installments of ₹18,000",
          ]}
          salient={[
            {
              title: "Limited Batch Size",
              desc:
                "Batch strength is limited to 35 students to ensure individual attention and better classroom interaction.",
            },
            {
              title: "Complete Syllabus Coverage",
              desc:
                "The entire CSEET syllabus is covered within the specified duration through a structured teaching plan.",
            },
            {
              title: "Support for Missed Classes",
              desc:
                "Students missing classes due to genuine reasons are provided additional academic support.",
            },
            {
              title: "Study Material Provided",
              desc:
                "Comprehensive study material is provided to every student for effective preparation.",
            },
            {
              title: "Online & Offline Classes Available",
              desc:
                "Students can choose between online and offline modes of learning. Live interactive lectures are conducted regularly, and recorded sessions are also provided for revision and flexible learning.",
            },
          ]}
        />
      )}

      {active === "group1" && (
        <CourseBlock
          title="CS Executive – Group 1"
          duration="4 Months"
          feeTitle="CS Executive Group 1 – Fee Structure"
          fee="₹38,000"
          subjects={[
            ["Company Law", "9:30 AM – 10:30 AM"],
            ["Setting up of Business Entities & Closure", "10:30 AM – 11:30 AM"],
            ["Corporate Accounting & Financial Management", "11:30 AM – 12:30 PM"],
            ["Jurisprudence, Interpretation & General Laws", "12:30 PM – 1:30 PM"],
          ]}
          installment={[
            "₹2,000 payable at the time of registration",
            "Remaining amount payable in two monthly installments",
          ]}
          salient={[
            {
              title: "Small Batch Strength",
              desc:
                "Batch size is restricted to 15 students to maintain teaching quality and focused learning.",
            },
            {
              title: "Planned Teaching Methodology",
              desc:
                "Subjects are taught in a systematic manner ensuring full syllabus completion on time.",
            },
            {
              title: "Extra Academic Support",
              desc:
                "Students who miss classes due to unavoidable reasons are given extra academic assistance.",
            },
            {
              title: "Study Material Included",
              desc:
                "Well-structured study material is provided to support classroom learning.",
            },
            {
              title: "Online & Offline Classes Available",
              desc:
                "Students can choose between online and offline modes of learning. Live interactive lectures are conducted regularly, and recorded sessions are also provided for revision and flexible learning.",
            },
          ]}
        />
      )}

      {active === "group2" && (
        <CourseBlock
          title="CS Executive – Group 2"
          duration="4 Months"
          feeTitle="CS Executive Group 2 – Fee Structure"
          fee="₹30,000"
          subjects={[
            ["Capital Market & Securities Laws", "9:30 AM – 10:30 AM"],
            ["Economic, Commercial & IPR Laws", "10:30 AM – 11:30 AM"],
            ["Tax Laws & Practice", "11:30 AM – 12:30 PM"],
          ]}
          installment={[
            "₹2,000 payable at the time of registration",
            "Remaining amount payable in two monthly installments",
          ]}
          salient={[
            {
              title: "Focused Batch Size",
              desc:
                "Limited batch strength ensures effective learning and better student–teacher interaction.",
            },
            {
              title: "Complete Course Coverage",
              desc:
                "The entire syllabus is covered within the scheduled duration using a structured approach.",
            },
            {
              title: "Revision & Test Support",
              desc:
                "Regular revision and assessments are conducted to improve exam preparedness.",
            },
            {
              title: "Academic Support for Absentees",
              desc:
                "Students missing classes due to valid reasons receive additional academic help.",
            },
            {
              title: "Online & Offline Classes Available",
              desc:
                "Students can choose between online and offline modes of learning. Live interactive lectures are conducted regularly, and recorded sessions are also provided for revision and flexible learning.",
            }
            
            ,
          ]}
        />
      )}

      {/* ENQUIRY SECTION — SAME AS 12TH */}
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

/* COURSE BLOCK (SAME SYSTEM AS CA) */
function CourseBlock({
  title,
  duration,
  fee,
  feeTitle,
  subjects,
  installment,
  salient,
}) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>

        <p className="text-gray-600 mb-10">
          Duration:{" "}
          <span className="font-semibold text-red-600">{duration}</span>
        </p>

        {/* SCHEDULE */}
        <div className="overflow-x-auto border mb-10">
          <table className="w-full text-left">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-6 py-4">Subject</th>
                <th className="px-6 py-4">Timing</th>
                <th className="px-6 py-4">Days</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map(([sub, time]) => (
                <tr key={sub} className="border-t">
                  <td className="px-6 py-5 font-semibold">{sub}</td>
                  <td className="px-6 py-5">{time}</td>
                  <td className="px-6 py-5">Monday – Friday</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 mb-12">
          Two tests are conducted every month on Saturday.
        </p>

        {/* FEE STRUCTURE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          {feeTitle}
        </h2>

        <div className="max-w-md border rounded-2xl p-8 transition-shadow hover:shadow-xl hover:shadow-red-600/30 mb-20">
          <p className="text-sm text-gray-500 mb-2">Total Course Fee</p>
          <p className="text-4xl font-bold text-red-600 mb-6">{fee}</p>

          <ul className="space-y-3 text-gray-700">
            {installment.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </div>

        {/* SALIENT FEATURES */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Salient <span className="text-red-600">Features</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {salient.map((item, index) => (
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
  );
}
