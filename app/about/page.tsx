// app/about/page.tsx

const AboutPage = () => {
  const values = [
    "Integrity & Trust",
    "Innovation for Impact",
    "Empowering Local Talent",
    "Sustainability & Growth",
    "Global Collaboration",
  ];

  const startups = [
    "Amibara Store",
    "Amibara Furniture",
    "Amibara Learning Hub",
    "Amibara Fintech",
    "Amibara Media",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Innovating Africa&apos;s Future <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            One Business at a Time
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Amibara Global PLC is a diversified group empowering innovation across
          commerce, education, finance, and media — connecting Africa&apos;s markets
          with technology and creativity.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Mission */}
          <div className="space-y-4">
            <div className="inline-block">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-1">
                Mission
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower innovation across commerce, education, finance, and
              media — connecting Africa&apos;s markets with technology and creativity
              through sustainable business practices.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <div className="inline-block">
              <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-1">
                Vision
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become Africa&apos;s most trusted innovation group, driving
              sustainable growth and digital inclusion across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      {/* Core Values */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-block mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Core Values</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, idx) => (
            <div key={value} className="group cursor-pointer">
              <div className="relative p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-500 transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className="absolute -top-3 left-6 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 pt-4 group-hover:text-blue-600 transition-colors">
                  {value}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      {/* Founding Story */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-block mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Story</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </div>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Founded by{" "}
            <span className="font-bold text-gray-900 border-b-2 border-blue-600">
              Mohammed Hussen
            </span>{" "}
            in Samara, Awash7, Amibara Global PLC began as a local initiative to
            unite multiple startups under one visionary brand.
          </p>
          <p className="text-gray-600">
            Today, we are building a diversified ecosystem that empowers
            communities, creates jobs, and drives digital transformation across
            Africa.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      {/* Business Units */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-block mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Business Units
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </div>

        <p className="text-gray-600 mb-12">
          Diverse ventures under one unified vision
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {startups.map((startup, idx) => (
            <a
              key={startup}
              href={`/startups/${startup.toLowerCase().replace(/ /g, "-")}`}
              className="group relative p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors">
                {(idx + 1).toString().padStart(2, "0")}
              </div>
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors relative z-10">
                {startup}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
    </div>
  );
};

export default AboutPage;