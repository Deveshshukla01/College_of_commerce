

import { useState } from "react";
import ApplyNavbar from "../components/ApplyNavbar";
import Footer from "../components/Footer";

export default function Apply() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [paid, setPaid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.target;

    const courses = Array.from(
      form.querySelectorAll('input[name="course"]:checked')
    )
      .map((el) => el.value)
      .join(", ");

    if (!courses) {
      setError("Please select at least one course.");
      setLoading(false);
      return;
    }

    if (paid && !form.transaction_id.value) {
      setError("Please enter Transaction ID.");
      setLoading(false);
      return;
    }

    const data = {
      class: form.class.value,
      courses,
      student_name: form.student_name.value,
      dob: form.dob.value,
      guardian_name: form.guardian_name.value,
      profession: form.profession.value,
      official_address: form.official_address.value,
      office_phone: form.office_phone.value,
      correspondence_address: form.correspondence_address.value,
      father_contact: form.father_contact.value,
      mother_contact: form.mother_contact.value,
      student_contact: form.student_contact.value,
      last_exam: form.last_exam.value,
      session: form.session.value,
      percentage: form.percentage.value,
      board: form.board.value,
      transaction_id: paid ? form.transaction_id.value : "",
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzOzff0gW_B9GofBjl1PWOPtsLKR6WsPgJsT1YVOX62BJ_XxQ8B0iez3sGVHmN7-IqINQ/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      setSuccess(true);
      form.reset();
      setPaid(false);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <ApplyNavbar />

      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 py-20 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">

          {/* HOW TO APPLY */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10">
            <h3 className="text-xl font-bold text-red-600 text-center mb-4">
              How to Apply
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p><span className="font-semibold text-red-600">Step 1:</span> Scan the QR code and pay the admission amount.</p>
              <p><span className="font-semibold text-red-600">Step 2:</span> Fill the admission form carefully.</p>
              <p><span className="font-semibold text-red-600">Step 3:</span> Enter Transaction ID after payment.</p>
              <p className="font-medium text-center pt-2">
                The College of Commerce will contact you after verification.
              </p>
            </div>
          </div>

          {/* HEADER */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-red-600">Admission Form</h2>
            <p className="text-gray-500 text-sm mt-1">
              Please fill all details carefully
            </p>
          </div>

          {/* QR CODE */}
          <div className="border-2 border-dashed rounded-2xl p-6 text-center mb-10 bg-gray-50">
            <p className="text-sm text-gray-500 mb-3">Scan QR Code to Pay</p>

            <img
              src="/images/payment/qr.jpeg"
              alt="Payment QR Code"
              className="mx-auto h-44 w-44 object-contain rounded-xl shadow-md bg-white p-2"
            />

            <p className="text-xs text-gray-500 mt-3">
              After payment, please note down your Transaction ID
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">

            <Section title="Basic Details">
              <input name="class" required placeholder="Class" className="input" />
            </Section>

            <Section title="Course You Wish To Join">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {[
                  "Accounts","CPT","IPCC","Tax",
                  "CS Foundation","CS Executive","CS Final","Others",
                ].map((course) => (
                  <label key={course} className="flex items-center gap-2">
                    <input type="checkbox" name="course" value={course} />
                    {course}
                  </label>
                ))}
              </div>
            </Section>

            <Section title="Personal Details">
              <input name="student_name" required placeholder="Student Name" className="input" />
              <input name="dob" type="date" required className="input" />
              <input name="guardian_name" required placeholder="Father / Guardian Name" className="input" />
              <input name="profession" placeholder="Profession & Designation" className="input" />
              <textarea name="official_address" required placeholder="Official Address" className="input" />
              <input name="office_phone" placeholder="Telephone No. (Office)" className="input" />
              <textarea name="correspondence_address" required placeholder="Address for Correspondence" className="input" />
            </Section>

            <Section title="Contact Details">
              <div className="grid md:grid-cols-3 gap-4">
                <input name="father_contact" required placeholder="Father Contact No." className="input" />
                <input name="mother_contact" placeholder="Mother Contact No." className="input" />
                <input name="student_contact" required placeholder="Student Contact No." className="input" />
              </div>
            </Section>

            <Section title="Qualification Details">
              <input name="last_exam" required placeholder="Last Examination Passed" className="input" />
              <input name="session" placeholder="Session" className="input" />
              <input name="percentage" placeholder="Percentage" className="input" />
              <input name="board" placeholder="Board / University" className="input" />
            </Section>

            <Section title="Payment Details">
              <label className="flex items-center gap-2 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={paid}
                  onChange={(e) => setPaid(e.target.checked)}
                />
                I have completed the payment
              </label>

              {paid && (
                <input
                  name="transaction_id"
                  placeholder="Transaction ID"
                  className="input mt-4"
                  required
                />
              )}
            </Section>

            {error && <p className="text-red-600 text-center text-sm">{error}</p>}
            {success && <p className="text-green-600 text-center text-sm">Application submitted successfully!</p>}

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          {/* HELP & SUPPORT */}
          <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
            <p className="font-semibold text-gray-800 mb-1">
              Need Help or Facing Any Issue?
            </p>
            <p className="text-sm text-gray-600">
              If payment is successful but the form does not submit,  
              or if anything goes wrong, please contact our admission support.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="tel:+919815036812"
                className="px-5 py-2 rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-700"
              >
                📞 Call: +91 98150 36812
              </a>

              <a
                href="https://wa.me/919815036812"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full border border-green-500 text-green-600 text-sm font-medium hover:bg-green-50"
              >
                💬 WhatsApp Support
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            Admission will be confirmed after payment verification.
          </p>
        </div>

        <style>{`
          .input {
            width: 100%;
            border: 1px solid #e5e7eb;
            padding: 14px;
            border-radius: 10px;
            outline: none;
          }
          .input:focus {
            border-color: #ef4444;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.25);
          }
        `}</style>
      </section>
      <Footer/>
    </>
  );
}

function Section({ title, children }) {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-red-600 border-b pb-2">
        {title}
      </h4>
      {children}
    </div>
  );
}