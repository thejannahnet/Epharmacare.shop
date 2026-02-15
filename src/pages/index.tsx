import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { fadeInUp, slideUp } from "@/hooks/useScrollAnimation";
import data from "@/data/resume.json";
import {
  HiLocationMarker, HiCalendar, HiUserGroup, HiHome,
  HiMap, HiClock, HiAcademicCap, HiDesktopComputer,
  HiStar, HiGlobeAlt, HiCheckCircle, HiShieldCheck,
  HiBadgeCheck, HiBookOpen
} from "react-icons/hi";

/* Icons for overview key facts — Location, Duration, Programme, Accommodation, Trips, Airports */
const overviewIcons = [HiLocationMarker, HiClock, HiBookOpen, HiHome, HiMap, HiGlobeAlt];

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.site.title}</title>
        <meta name="description" content={data.hero.subtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={data.site.url} />
        <meta property="og:title" content={data.site.title} />
        <meta property="og:description" content={data.hero.subtitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.site.title} />
        <meta name="twitter:description" content={data.hero.subtitle} />
      </Head>

      <Navbar />
      <Hero />

      {/* ═══════ 1. KEY FACTS / OVERVIEW ═══════ */}
      <Section id="overview" className="bg-gray-50 dark:bg-dark-900">
        <motion.div variants={slideUp} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-2">
            {data.overview.heading.split(" ")[0]}{" "}
            <span className="gradient-text">{data.overview.heading.split(" ").slice(1).join(" ")}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mx-auto" />
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.overview.items.map((item, i) => {
            const Icon = overviewIcons[i] || HiCheckCircle;
            return (
              <div key={item.label} className="glass-card p-6 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300 ${i % 2 === 0
                    ? "bg-primary-100 dark:bg-primary-900/30 text-primary-500"
                    : "bg-accent-100 dark:bg-accent-900/30 text-accent-600"
                    }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary-500 mb-1">{item.label}</p>
                    <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">{item.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </Section>

      {/* ═══════ MEET THE DIRECTOR ═══════ */}
      <Section id="about-director">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo — prominent with gradient ring */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary-500 via-accent-400 to-primary-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-accent-400 rounded-2xl" />
                <Image
                  src="/images/tariq-anwar.jpg"
                  alt={`${(data as any).about.name} – Director`}
                  width={450}
                  height={550}
                  className="relative rounded-2xl object-cover object-top w-full max-w-[400px] h-auto shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Bio content */}
          <div>
            <motion.div variants={slideUp}>
              <p className="text-sm font-bold text-accent-500 tracking-widest uppercase mb-2">{(data as any).about.regions}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-1">
                {(data as any).about.heading.split(" ")[0]}{" "}
                <span className="gradient-text">{(data as any).about.heading.split(" ").slice(1).join(" ")}</span>
              </h2>
              <p className="text-xl font-semibold text-primary-500 mb-1">{(data as any).about.name}</p>
              <p className="text-sm text-dark-400 font-medium mb-6">{(data as any).about.role}</p>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mb-6" />
            </motion.div>

            {(data as any).about.bio.map((p: string, i: number) => (
              <motion.p key={i} variants={fadeInUp} className="text-dark-600 dark:text-dark-300 leading-relaxed mb-4">
                {p}
              </motion.p>
            ))}

            <motion.div variants={fadeInUp} className="mt-6 space-y-3">
              {(data as any).about.highlights.map((h: string, i: number) => (
                <div key={h} className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg shrink-0 ${i % 2 === 0
                      ? "bg-primary-100 dark:bg-primary-900/30 text-primary-500"
                      : "bg-accent-100 dark:bg-accent-900/30 text-accent-600"
                    }`}>
                    <HiBadgeCheck className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-dark-700 dark:text-dark-300 font-medium">{h}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ═══════ 2. LOCATION ═══════ */}
      <Section id="location">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div variants={slideUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-2">
                Welcome to{" "}
                <span className="gradient-text">Southampton</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mb-6" />
            </motion.div>

            {data.location.paragraphs.map((p, i) => (
              <motion.p key={i} variants={fadeInUp} className="text-dark-600 dark:text-dark-300 leading-relaxed mb-4">
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div variants={fadeInUp}>
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                <HiStar className="text-accent-400 w-5 h-5" />
                Highlights You&apos;ll Love
              </h3>
              <ul className="space-y-3">
                {data.location.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-dark-600 dark:text-dark-300 font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════ 3. SCHOOL ═══════ */}
      <Section id="school" className="bg-gray-50 dark:bg-dark-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual card */}
          <motion.div variants={fadeInUp} className="flex justify-center order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-full max-w-sm glass-card p-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                    <HiAcademicCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary-500">Since 1976</p>
                    <p className="text-sm text-dark-400 font-medium">50+ Countries Every Year</p>
                  </div>
                  <div className="flex justify-center gap-6 pt-2">
                    <div className="text-center">
                      <p className="text-xl font-bold gradient-text">15</p>
                      <p className="text-xs text-dark-400">Classrooms</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold gradient-text">4</p>
                      <p className="text-xs text-dark-400">Buildings</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold gradient-text">50+</p>
                      <p className="text-xs text-dark-400">Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <motion.div variants={slideUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-2">
                Our{" "}
                <span className="gradient-text">School</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mb-6" />
            </motion.div>

            <motion.p variants={fadeInUp} className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
              {data.school.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3">
              {data.school.features.map((f, i) => {
                const icons = [HiAcademicCap, HiDesktopComputer, HiStar, HiStar, HiShieldCheck, HiLocationMarker];
                const Icon = icons[i] || HiCheckCircle;
                return (
                  <div key={f} className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg shrink-0 ${i % 2 === 0 ? "bg-primary-100 dark:bg-primary-900/30 text-primary-500" : "bg-accent-100 dark:bg-accent-900/30 text-accent-600"
                      }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-dark-700 dark:text-dark-300 font-medium">{f}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ═══════ 4. ACCOMMODATION ═══════ */}
      <Section id="accommodation">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div variants={slideUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-2">
                Homestay{" "}
                <span className="gradient-text">Accommodation</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mb-6" />
            </motion.div>

            <motion.p variants={fadeInUp} className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
              {data.accommodation.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-3">
              {data.accommodation.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-dark-700 dark:text-dark-300 font-medium">{f}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-400 to-primary-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative glass-card p-8 max-w-sm">
                <div className="space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                    <HiHome className="w-8 h-8 text-dark-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                      Home Away From Home
                    </h3>
                    <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">
                      Experience authentic British family life while building lasting friendships with students from around the world.
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {["Twin room", "Meals included", "Wi‑Fi", "Evening activities"].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-xs font-semibold text-primary-700 dark:text-primary-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════ 5. TRIPS & ACTIVITIES ═══════ */}
      <Section id="trips" className="bg-gray-50 dark:bg-dark-900">
        <motion.div variants={slideUp} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-2">
            Weekly Trips{" "}
            <span className="gradient-text">& Activities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mx-auto mb-4" />
          <p className="text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">
            {data.trips.paragraphs[0]}
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
          {data.trips.items.map((item, i) => (
            <div key={item} className="glass-card p-5 flex items-start gap-4 group hover:-translate-y-1 transition-all duration-300">
              <div className={`p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300 ${i % 2 === 0 ? "bg-primary-100 dark:bg-primary-900/30 text-primary-500" : "bg-accent-100 dark:bg-accent-900/30 text-accent-600"
                }`}>
                <HiGlobeAlt className="w-5 h-5" />
              </div>
              <p className="text-sm text-dark-700 dark:text-dark-300 font-medium pt-1">{item}</p>
            </div>
          ))}
        </motion.div>

        <motion.p variants={fadeInUp} className="text-center text-sm text-dark-500 dark:text-dark-400 max-w-2xl mx-auto italic">
          {data.trips.paragraphs[1]}
        </motion.p>
      </Section>

      {/* ═══════ 6. TIMETABLE ═══════ */}
      <Section id="timetable">
        <motion.div variants={slideUp} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-2">
            Sample Weekly{" "}
            <span className="gradient-text">Timetable</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mx-auto" />
        </motion.div>

        <motion.div variants={fadeInUp} className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-separate border-spacing-0 rounded-2xl overflow-hidden shadow-xl">
            <thead>
              <tr className="bg-gradient-to-r from-primary-500 to-primary-700 text-white">
                {data.timetable.headers.map((h) => (
                  <th key={h} className="px-4 py-3.5 text-left text-sm font-bold first:rounded-tl-2xl last:rounded-tr-2xl">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.timetable.rows.map((row, i) => (
                <tr
                  key={row.day}
                  className={`transition-colors duration-200 ${i % 2 === 0
                    ? "bg-white dark:bg-dark-800"
                    : "bg-gray-50 dark:bg-dark-850"
                    } hover:bg-primary-50 dark:hover:bg-primary-900/10`}
                >
                  <td className="px-4 py-3 text-sm font-bold text-primary-600 dark:text-primary-400 border-b border-dark-100 dark:border-dark-700">
                    {row.day}
                  </td>
                  <td className="px-4 py-3 text-sm text-dark-600 dark:text-dark-300 border-b border-dark-100 dark:border-dark-700">
                    {row.morning}
                  </td>
                  <td className="px-4 py-3 text-sm text-dark-600 dark:text-dark-300 border-b border-dark-100 dark:border-dark-700">
                    {row.afternoon}
                  </td>
                  <td className="px-4 py-3 text-sm text-dark-600 dark:text-dark-300 border-b border-dark-100 dark:border-dark-700">
                    {row.evening}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Section>

      {/* ═══════ 7. APPLY ═══════ */}
      <Section id="apply" className="bg-gray-50 dark:bg-dark-900">
        <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-2">
            {data.apply.heading.split("–")[0]}
            <span className="gradient-text"> – {data.apply.heading.split("–")[1]?.trim()}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mx-auto mb-4" />
          <p className="text-dark-500 dark:text-dark-400 max-w-lg mx-auto">
            {data.apply.description}
          </p>
        </motion.div>

        <ContactForm />
      </Section>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}
