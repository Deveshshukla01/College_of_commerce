import { Link } from "react-router-dom";

export default function Admissions() {
  return (
    <section className="bg-red-600 py-12 px-4">
      <div className="max-w-7xl mx-auto text-white">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-wide">
          PROGRAMS OFFERED:
        </h2>
        <p className="text-center text-lg md:text-xl mt-3 font-semibold">
          11th & 12th Commerce | B.Com | BBA | CA | CS
        </p>

        <p className="text-center max-w-4xl mx-auto mt-6 text-white/90 leading-relaxed">
          Our commitment to <strong>quality education</strong>,
          <strong> personalized mentoring</strong>, and
          <strong> consistently proven results</strong> has made us a
          preferred choice for aspiring commerce professionals.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">

          {/* Card 1 */}
          <div className="bg-white text-gray-800 rounded-3xl p-10 min-h-[560px]
            shadow-md hover:shadow-2xl hover:-translate-y-2
            transition-all duration-300">

            <div className="flex items-center gap-5 mb-8">
              <img
                src="/images/faculty/manish.png"
                alt="Manish Dhingra"
                className="w-20 h-20 rounded-full object-cover border-4 border-red-600"
              />
              <div>
                <h3 className="font-bold text-xl tracking-wide">
                  MANISH DHINGRA
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  B.Com | MFC | FCS | Rank Holder
                </p>
              </div>
            </div>

            <p className="text-[15px] leading-relaxed text-gray-700">
              <strong>Manish Dhingra</strong> is a highly respected commerce
              educator whose life’s mission is to inspire academic excellence
              through <strong>conceptual clarity</strong>. A
              <strong> Rank Holder in B.Com, MFC, and FCS</strong>, he laid the
              foundation of his commerce coaching institute in
              <strong> 1994</strong>, driven by a commitment to
              <strong> quality education and student success</strong>.
              <br /><br />
              With <strong>decades of dedicated teaching experience</strong>,
              he has shaped the careers of innumerable students who today
              stand well-established in the fields of
              <strong> commerce, finance, and business</strong>. His teaching
              philosophy is rooted in the belief that true learning begins
              with a <strong>strong understanding of fundamentals</strong>,
              empowering students to think analytically and perform with
              confidence.
              <br /><br />
              For <strong>Manish Dhingra</strong>, teaching is not merely a
              profession—it is a <strong>purposeful passion</strong>. His
              <strong> unwavering dedication</strong>,
              <strong> disciplined approach</strong>, and
              <strong> student-centric methodology</strong> continue to
              motivate learners to achieve
              <strong> academic distinction</strong> and
              <strong> long-term professional success</strong>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-gray-800 rounded-3xl p-10 min-h-[560px]
            shadow-md hover:shadow-2xl hover:-translate-y-2
            transition-all duration-300">

            <div className="flex items-center gap-5 mb-8">
              <img
                src="/images/faculty/charanjeev.png"
                alt="Charanjeev Kaur"
                className="w-20 h-20 rounded-full object-cover border-4 border-red-600"
              />
              <div>
                <h3 className="font-bold text-xl tracking-wide">
                  CHARANJEEV KAUR
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  B.Com | M.Com | MFC | B.Ed | Rank Holder
                </p>
              </div>
            </div>

            <p className="text-[15px] leading-relaxed text-gray-700">
              <strong>Charanjeev Kaur</strong> is an experienced educator with
              <strong> over 20 years of teaching experience</strong> in the
              field of commerce education and a
              <strong> Rank Holder in both post-graduation programs</strong>.
              She brings <strong>academic excellence</strong> and
              <strong> depth of subject mastery</strong> to her teaching and
              is highly dedicated to her profession, considering teaching a
              responsibility carried out with
              <strong> commitment and integrity</strong>.
              <br /><br />
              She emphasizes <strong>conceptual clarity</strong> and
              <strong> structured learning</strong>, ensuring that students
              develop a <strong>strong academic foundation</strong>. Firmly
              believing that <strong>each child is unique</strong>, she makes
              consistent efforts to understand
              <strong> individual learning needs</strong> and adapt her
              teaching methods accordingly.
              <br /><br />
              Her role as an educator extends
              <strong> beyond classroom instruction</strong>. She focuses on
              instilling <strong>discipline, values, and confidence</strong>
              in students, preparing them not only for
              <strong> academic success</strong> but also for
              <strong> life beyond academics</strong>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center mt-20 text-white/90 italic text-lg">
          True education is a shared journey, where parents, teachers and
          students move forward together.
        </p>

       {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/apply"
            className="relative inline-block px-14 py-4
              border-2 border-black
              bg-white
              text-red-600
              font-bold
              tracking-wide
              overflow-hidden
              transition-colors duration-300
              group"
          >
            {/* Red Fill Animation */}
            <span
              className="absolute inset-0 bg-red-600
                transform -translate-x-full
                group-hover:translate-x-0
                transition-transform duration-500 ease-out"
            />

            {/* Button Text */}
            <span className="relative z-10 group-hover:text-white">
              APPLY NOW
            </span>
          </Link>
        </div>


      </div>
    </section>
  );
}
