export default function Achievers() {
    return (
      <section className="py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Super Achievers</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Top Rank", "High Score", "Excellence Award"].map((a) => (
            <div key={a} className="bg-white p-6 w-64 rounded-xl shadow">
              {a}
            </div>
          ))}
        </div>
      </section>
    );
  }
  