import Image from "next/image"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function AboutPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1 px-4 sm:px-10 md:px-20 lg:px-40 py-10">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--brand-color-1)] mb-4 font-serif">Our Story</h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl mx-auto">
              At Nature's Bounty, our journey began with a simple belief: that the purest, most flavorful ingredients
              come from a deep respect for nature and traditional farming practices. Founded in the heart of India, our
              brand is a tribute to the rich agricultural heritage of our land, where generations of farmers have
              cultivated the earth with care and wisdom.
            </p>
          </section>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--brand-color-1)] mb-4 font-serif">Our Mission & Vision</h2>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
                Our mission is to bring the authentic taste of India's finest spices, masalas, grains, and organic
                products to your table. We are committed to sourcing directly from local farmers who share our values of
                sustainability and quality.
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                We envision a world where everyone can experience the true flavors of nature, unadulterated and full of
                life. We strive to be a trusted name in every household, synonymous with purity, quality, and the
                vibrant culinary traditions of India.
              </p>
            </div>
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                alt="Indian farm landscape"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyjdn7VFNDaSZCR8xAvJrC--ph3pE3TlsHR6H8T1ppUpvuWr3TU_VJm0CWm3vweEW9SaOfpZX_KdV1X5j6c1YJ72IX62zWi9B5s_vUj-rq1sNJVpgYeHfcRCxV0o66imPmJrL8WPRAYAvyjm1R6HTR2eFP2exUCtW78mxCW05gwrjVa0ymyQD5GhCG52NhlSLz-ZQW3SEiAlza00gAATiKouTKCo2dO5P2XMZfcRsizIpMhcicMl1N5G-b5_u3gy7qWgFnGm-NXlXe"
                width={600}
                height={320}
              />
            </div>
          </div>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-[var(--brand-color-1)] mb-10 font-serif">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  role: "Founder & CEO",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAR5O6VWgQ9bSMUSZiX7Ja_QcNW-q7371u8qrouPfD5pgWE1eB6FBKnCK0yd-y08bS4Uz6n-JEwjZ1pxRjTIQFecl1Q6jCyoFRqb3Yop1Zb4lYjzEAPvVDE799MbkKQve8LVe5uUTGVLph15ZYvh5QagP9ypu-405fPcX30wsriU5loX-lMxSkGAMNwe1nzbtWsVYZPOveYoh7yzw-jCuP94LzhG4zDFSp2z8ySInT_fxYHuGBfL-OopEzUToV-R2ko6wQccQ5lrGlk",
                },
                {
                  name: "Arjun Patel",
                  role: "Head of Sourcing",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAy3RKt0nNJfL4ShLrQ7afRCqLKlvXoimZJSMN9Y7M2EtvWvOPFSzKMQwTvP6WUVMxIMuvm1GPaUVYeHag9KsmaJCflcF4dAcRVkvIqmq5QNsPYuC33-xgcjYEO03aZ8KK3Icd-0di6M6-RyzZiEOHWSfjGDRj5tbTzgYUQwQzAj94Jt6DbIU1zDM4vmbqwvty0iAsYZJuI94lGZJ618kEAzJq7WDOHZi7_ipaM3kOOHyk01NPBePDML7rhQisHRGiaFC-iSgBeWKdz",
                },
                {
                  name: "Meera Kapoor",
                  role: "Quality Control Manager",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCDeFuyrWW3C-K7OMzqjoH5RNWtV93Wo0K9ZA5nbklQvRPXe6y1j9JKUCjJJ2cXv62oCWPJUKSgWGCCjGZuVGDUWkWVxYkIDEXDs7qGaqo9giQuUgk3gr4ZUnPJ2d7YAOWceiNhu-54h0eJWXPO0pYYZtsoBQ1VF6HGNF1tf7UBivg7yzKhaX8ANogGnHiHm19t5m_eMecOaxtSB0N2CGovr5tNk_YS73SSRT9KJLqr4L6bcwVyo86LPk3LedSTZRuHU1gVfaKrZWB7",
                },
              ].map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-block">
                    <Image
                      alt={member.name}
                      className="w-40 h-40 rounded-full object-cover mx-auto mb-4 shadow-md transition-transform duration-300 group-hover:scale-105"
                      src={member.image || "/placeholder.svg"}
                      width={160}
                      height={160}
                    />
                  </div>
                  <h3 className="text-[var(--brand-color-1)] text-lg font-bold leading-normal font-serif">
                    {member.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm font-normal leading-normal">{member.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Commitment Section */}
          <section className="bg-[var(--background-color)] p-8 md:p-12 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-center text-[var(--brand-color-1)] mb-4 font-serif">
              Our Commitment to Purity
            </h2>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed text-center max-w-3xl mx-auto mb-8">
              We are dedicated to maintaining the highest standards of quality and purity. Our products are free from
              artificial additives, preservatives, and pesticides. We believe in transparency and traceability, ensuring
              you know exactly where your food comes from.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                {
                  name: "100% Organic",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuB73XfH5IZ1R8xB8FEl3YSTDv6KpUlR0GT_47AX_Fy4kYN83JEzaelTArlp8BMoSMnNVN3pkPmW0KXO_KbxQG1uTO-JYJ_FQYnI77EI5-g_bkcvMgrY6c0j-k9BGSz0DyKng4oFPopZQfncVsXD4IGr8AKMumamjrP1sV955e2cqSYfvQiujwABEIJB6qeBolIyWhj-dC30gVhgkIBkKai0984spexouFOS9DfG9vkLGPbzEhd6uAnS8ZETTxra21kXkS3ZFPWD7Q4w",
                },
                {
                  name: "Non-GMO",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCvg1bqIYkvSKz0O1__SXwjllCfUWD0YcN9-sa5FBJT06sbkKi46Q7CYAT_Jnega1s0Un7bvsQq4Sujd8sLMGsWWfEAJbrDcb-EFtoMuQJMF8OFRjPx1RTyiTYu3elqfuAWrFh2HGbwKXybJN5gMz9XffbOgEizAuPNOlprCVUYSvEKK6mW8rA7uC19S2XH2Ca7vKdXjX1K4Fq_ObfS5Px97yzFGSJGCTpCKqvPbHkkqKUNfwvJuVOFywLfoIXQTo00kaoCcpvO29oA",
                },
                {
                  name: "Direct from Farm",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuC4Q_sqp3GPrAtD1zvqEJD9gtTvvT39jvYlzmAbUQFuf05Ih_pI9lIFwzRreTNjFDA-k0xsIHyYFuiQtRt5c4eqO4RRQoamfQDLhYP97lxyR90mYZIvP7Q4xOp9tMWZmsXg0zY4tlTLV-MGBW_REvTPhb3Fs-90o7acgIMOeXhxvPA6dE7s1aihioxpnvDQBZ_j6DRrmWlPgH7J71zS82_bGmjX2SPbBUiwQOmZr8AIVEKNUlpg2aDdwGxbOWLv1h09FxJ4pNeYX1yN",
                },
                {
                  name: "Quality Checked",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuD9lqamuYCdSvvrsN4Rs5LkfKT1lzyXxA9Nah0ZlPo6DRzuUyfx-Fl6A4p4VDZ74ZCiXLkJ-m_6R1hEHuebjBcjU_wWLCpZAOCzf-V86Zz4jrg3awoKLBE6y8do1W3KR6iKmMqpphN7OVjBFOSKqYW_YYAsCB_Y3fZUMf5fY5sC6WQjnGorbHfXcqKrzXxZY8O5jlchr8I0BYNOcyD_JVuYdfBcgO3IYXwV2sRvWy8sapYClHtb4K-6WoNS21-D1RMZiRGjcGEG63b8",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-[var(--accent-color)] p-4 rounded-full mb-3">
                    <Image
                      alt={item.name}
                      className="h-12 w-12"
                      src={item.image || "/placeholder.svg"}
                      width={48}
                      height={48}
                    />
                  </div>
                  <h4 className="font-semibold text-[var(--brand-color-1)]">{item.name}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Customer Reviews */}
          <section>
            <h2 className="text-3xl font-bold text-center text-[var(--brand-color-1)] mb-10 font-serif">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Anika Verma",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBxZFeomuqDNuvRMDcqxZbk-koYnzVk6lFGgKP05y8tqpcXZqd4ZuBwPF7sOm85MIC9DWL1cw6-FxRGSGqq9RyG4sFSPbn-H29Ejacs5Oz_j7WMR-YJexCxzVVO-qA2K5l3QTSfjBlOrZvVUArIbrYOvVqFrhwWiOw4Y9T6mU35b7WSigNQ-kQztHgTuQPTHYlnPqXMcV-tysZ2zZa7YONSJA64oV4YwTSecayQlM4C2JxepmbZX3_31sOBbjXOJV9A9EEaKJVz5O-b",
                  text: "I've been using Nature's Bounty spices for a few months now, and the difference in taste is incredible. The flavors are so rich and authentic, it's like cooking with spices straight from the farm. Highly recommend!",
                },
                {
                  name: "Rohan Singh",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDYvW23_pk_p9so_8ryyZ9Q7HphmDKgkiNpi0DfNFkFIprVjlGbF9t47wJKy9E4NSse4CFiija5RZvh6Cic-HBeBumQvrHjJUyRrKGbiY3qbqXsoPFvIpNksuE9eW5cLzwNSvrhUnL-HmR5YerjNbr-1XmfhJuufP5TMLjFvlkVxZEfxuj2dZIkA-fNkPYH_1KcAPMCH3lU0Wh1XuQin4_4i8UxPYtWq18ctln4pL62MUVC0AaSxvn2BuHNz3ElpHyp7FphjoRXaw-W",
                  text: "The quality of the grains and millets from Nature's Bounty is unmatched. I love knowing that I'm supporting local farmers and getting the best organic products for my family. Their commitment to purity is truly commendable.",
                },
              ].map((review, index) => (
                <div key={index} className="bg-[var(--background-color)] p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Image
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      src={review.image || "/placeholder.svg"}
                      width={48}
                      height={48}
                    />
                    <div>
                      <p className="text-[var(--text-primary)] font-bold">{review.name}</p>
                      <div className="flex text-[var(--primary-color)]">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            fill="currentColor"
                            height="16"
                            viewBox="0 0 256 256"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed">"{review.text}"</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
