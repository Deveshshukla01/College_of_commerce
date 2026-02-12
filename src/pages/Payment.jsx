import ApplyNavbar from "../components/ApplyNavbar";
import Footer from "../components/Footer";

export default function Payment() {
  return (
    <>
      <ApplyNavbar />

      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Payment QR Code
          </h1>

          <p className="text-sm text-gray-600 mb-6">
            Scan the QR code below to complete your payment securely.
          </p>

          <img
            src="/images/payment/qr.jpeg"
            alt="Payment QR Code"
            className="mx-auto w-64 h-64 object-contain"
          />

          <p className="text-xs text-gray-500 mt-6">
            For any payment issues, please contact the administration.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
