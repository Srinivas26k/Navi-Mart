import Link from "next/link"
import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
      <Header />

      <main className="flex flex-1 flex-col">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-green)] to-[var(--accent-color)] opacity-80"></div>
          <div
            className="min-h-[550px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAeJumOBUE0PoN1PRUVz4_7gHj8OKKGUHR6EpxBBTwYIgFAteaghHLnMbh07OCfoSS6cLV5qLW_7pTlYPKKUZxxdQZO93aLaL5iyYmA6f2ot2LyMDiZFJmeEssY_o4BZTreYmCCizQfs1tt2VQBnMj5ImsPbtTVbsBY3JlyCVPJEUu0b7vgYlRSmj1ZX-hovGNusMJzgHROqzafG3JLF0xwrFXYWVe2M0Lr-08S5QGrI__NrDQ-KjEw07bJq2YMZY1KJ-8qSsPxQlhP")',
            }}
          >
            <div className="relative z-10 text-center text-white p-8 max-w-4xl">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 font-serif"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
              >
                Taste the Essence of Nature
              </h1>
              <p
                className="text-lg md:text-xl font-normal leading-relaxed mb-8"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
              >
                Discover our range of natural and organic agro products, crafted with care from the heart of India.
              </p>
              <Link
                href="/shop"
                className="bg-[var(--primary-color)] text-[var(--deep-green)] py-3 px-8 rounded-full text-lg font-bold hover:bg-[var(--turmeric-yellow)] transition-colors duration-300 ease-in-out shadow-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 pattern-bg">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] leading-snug mb-3 font-serif">
                Our Product Categories
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Explore our wide range of authentic Indian agro products.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                {
                  name: "Masalas",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCQmFPuB94yFDCq4SQRRELPliMK1HMU42kcqFKJDNSws1iLRpLJAKhecWUMPB6tDyBCWa4DzVMFoRAVjzVYhcI47noDNPwvF-dfuShT-HBolpM8qlu4OPtVGKI0llOJ4uxC1gonyxjxenHreAWZm45_bzjxKe49OtI0cwQXYyadR30pmodj5bTEx73hoqUMzJOM7VJmUMXswj7k-EJyBC7p_6tdl5jf28bw_7nvHP1TgKguBgDzv4NGVLoYPPuFGo2CMnBy_AqUHz7A",
                  border: "border-[var(--primary-color)]",
                },
                {
                  name: "Powders",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuChTaa8qOeQz-EgPKgDlSaWt8XBajzVmUWfToQdRaweaNXXPDQ6iGQs4BWWT7VOZ4tUXP-DXwo9q0D10DcbiIyl9r7IeKirBui6oNLWl5-8u-Dmky9hApuJSyNmeOzIg-Fh1fsAwQhs2xi72ogEpTS49hS6-hdfB7Yk_NrJe1bf86s2Wms10eTFXiLR7-UJiefHN--lwJ3En8pYjpCMK0khxe1J9Vji5tajkS3aOZMHMO9r70-H-IYIzS0bGTabGUt0dkdKF6HaEJcM",
                  border: "border-[var(--turmeric-yellow)]",
                },
                {
                  name: "Grains",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCfdVLeYg9WNgBTUWcSnhXHG6OhtW5DF9KzUeDXwjqnbgnxcCi2u2SriWevWuyifYDmStxTt0KRsD4QcHhrnaRf4rHU_erYH1CmNkWIfB_9iZhu0nSeNmXZUjdx0ljG02TLvGbf3l-eLziL5EbPxVV13RMUzBdZm5mdNWe9sB9GwreUdO9YDEveIKJztRR8Z1oEZT7bjJRm-ob0y69CfbfwNTf0JNx2Njxu0TYHrg_IiuxRDGGzH6lYPt7eu5Py2evzKwiaOG0OgkKM",
                  border: "border-[var(--deep-green)]",
                },
                {
                  name: "Millets",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBkHz7wIRvskNDQuz63WJZL4KvWKSWehy6lDYFNJtZYh5BvZqDCaAqfzW_MCcdfTkVWMBQ9nOMDp2ATsemV1fWGe0iQ1QaWVHEu59xDVWmvPKpHh9oU-V3p4dR9TZtuToSkb4TubkJ_XNswfHGdB_sxSuo0x6Dmt_lNq1h6HoOvRJNPuDsglZPA_ufNUQzGyqxA4D7BOolgsbLZ8nYOVnYG0iN6bJT9P1Q__B-HRUcg8nOLkYdukuRVMkl5_1FU-Ds6_MgSc9wDNVY4",
                  border: "border-[var(--accent-color)]",
                },
                {
                  name: "Oils",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDqRxPdSpy4nVaSlaV0XAjztKpywNfzWz7YCe_-pD75F62UYLn7B_OkE4edayTkB3F8zi81IJNsxDD4BGEpItM1OCW81t4IVGYnXRZPudaMBDnurJrKQVWHkUpxHFLt9zxJjhBrNuqvLEh1aD4gmGht6BnvCAwsNDfcf8obEXHy_6bwozwVqF5F8j_VMwGCYWVl_OZ7yHLgElf1AuCs-msaUM5KCErCdHrS4-kFBkIKbFx3Rqxn8ktNwO6Gp7PP269gj9tLjiQ60H5F",
                  border: "border-[var(--primary-color)]",
                },
                {
                  name: "Seasonal Specials",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDI0llVTtDRzZ8A8kmh1OhWxaG893FOTrxNRvz1oNuKv_61V9xw6xkfyMi5TzC6gUUiVxbd6ZddcgNB7O3L64x29MYK9yfzhucKtfczp1vIhQ1PF2Gw_CEa43QDSu61fppRxoZXwMz-IWDRX4WVZOfCs-igtBJF1-QZM-jmrfeFolPvJj1JPu0MS04NUc5l1pTqWJbr92asFnHWJKmfJtjhsI_nr9FiP5G-veQ5gQ7Z-6ecdm1fuU5ETh5dDSvEEFlWPuXS-oRaNanP",
                  border: "border-[var(--turmeric-yellow)]",
                },
              ].map((category, index) => (
                <div key={index} className="group flex flex-col items-center gap-4 text-center">
                  <div
                    className={`w-40 h-40 bg-cover bg-center rounded-full shadow-lg transform group-hover:scale-105 transition-transform duration-300 border-4 ${category.border}`}
                    style={{ backgroundImage: `url("${category.image}")` }}
                  ></div>
                  <p className="text-lg font-semibold text-[var(--text-primary)]">{category.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-[var(--secondary-color)] to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] leading-snug mb-3 font-serif">
                Why Choose Agro Delight?
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Our commitment to quality, purity, and tradition.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[var(--primary-color)]">
                <div className="flex justify-center mb-4">
                  <div className="bg-[var(--accent-color)] text-[var(--primary-color)] rounded-full p-4">
                    <svg
                      fill="currentColor"
                      height="32px"
                      viewBox="0 0 256 256"
                      width="32px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">100% Natural & Organic</h3>
                <p className="text-base text-[var(--text-secondary)]">
                  Our products are free from artificial additives and preservatives, ensuring a natural and healthy
                  choice.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[var(--turmeric-yellow)]">
                <div className="flex justify-center mb-4">
                  <div className="bg-[var(--accent-color)] text-[var(--primary-color)] rounded-full p-4">
                    <svg
                      fill="currentColor"
                      height="32px"
                      viewBox="0 0 256 256"
                      width="32px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Ethically Sourced</h3>
                <p className="text-base text-[var(--text-secondary)]">
                  We work directly with farmers, ensuring fair practices and supporting local communities.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[var(--deep-green)]">
                <div className="flex justify-center mb-4">
                  <div className="bg-[var(--accent-color)] text-[var(--primary-color)] rounded-full p-4">
                    <svg
                      fill="currentColor"
                      height="32px"
                      viewBox="0 0 256 256"
                      width="32px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M208,56a87.53,87.53,0,0,0-31.85,6c-14.32-29.7-43.25-44.46-44.57-45.12a8,8,0,0,0-7.16,0c-1.33.66-30.25,15.42-44.57,45.12A87.53,87.53,0,0,0,48,56a8,8,0,0,0-8,8v80a88,88,0,0,0,176,0V64A8,8,0,0,0,208,56ZM120,215.56A72.1,72.1,0,0,1,56,144V128.44A72.1,72.1,0,0,1,120,200Zm0-66.1a88,88,0,0,0-64-37.09V72.44A72.1,72.1,0,0,1,120,144ZM94.15,69.11c9.22-19.21,26.41-31.33,33.85-35.9,7.44,4.58,24.63,16.7,33.84,35.9A88.61,88.61,0,0,0,128,107.36,88.57,88.57,0,0,0,94.15,69.11ZM200,144a72.1,72.1,0,0,1-64,71.56V200a72.1,72.1,0,0,1,64-71.56Zm0-31.63a88,88,0,0,0-64,37.09V144a72.1,72.1,0,0,1,64-71.56Z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Traditional Farming</h3>
                <p className="text-base text-[var(--text-secondary)]">
                  We use traditional methods to preserve the natural goodness and flavor of our products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 testimonial-pattern">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] leading-snug mb-3 font-serif">
                What Our Customers Say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuD5gHodBvORcmi6WX14Dr8XUkOgtIVphRc6MlOHEVlVgQ5VBLSoLCEu0Fr7Tc71vP9Ccj6GOlJ8GChXhbX-6mk7OxjMOaXaG4tjh9UGWOyhehh0aD0zHMGIMGkJUGh--LsUbk8rUuWNLkDIywOOx5-Je47HnSdCPH14Fvyy126CxplvfHJjwkLQnwQukV4xTgGTK0HUVqvQvaBYCnwGZQyjc08whrXw2ef5D89WrbdOTZW-ERyM7G0y2sJHTQmKy6aGHyrH9XY6x93w",
                  text: "I love the rich aroma and authentic taste of Agro Delight's masalas. They add a special touch to my cooking!",
                  border: "border-[var(--primary-color)]",
                },
                {
                  name: "Arjun Verma",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBEegAl8IsfZbujerBZ0iqDapF-lcUXrbr2vl_OZa1lZx5Sa4I3kzxzEtbx_wFevZH4iWDOICVQUxpa4iOqpLWOfoP6z24Jn_5JH5k3leGahjZT7sJtkmLeaIgJYSlx8vlBT-tb884Z9uIaFSkBNN8Ye3lx-hV1_7NSkluC8_D6XhHzH1Efdc0XTL8bR1ZZ5VRb_WmYLr5gNVb12SGmsAGrMzA4QVJDpbPp2T38ThMXbg7pjSpmNvFEaH3iCSjAwbHUjIxW9OrXaDsM",
                  text: "The quality of the grains is excellent. I can feel the difference in taste and freshness compared to other brands.",
                  border: "border-[var(--turmeric-yellow)]",
                },
                {
                  name: "Deepika Patel",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDBaQ_vO0D3FNFWM9mVy2v0U9ysHJPzCjMJSeSoo03Uxa4D3pTsot84qO6l7aVznSLZubRRE-Y4Kih8fi05NwJ_Z0KZJszWvUBy7c2rTJYs8dLrPPptcmNtrqAGC2akILGHlEyqW4hz1bLHvlt2y_0qIR2ceGAQ0xRS1gABZHVrkTE3H4TqV611-MUI2vk13Vz2zIFYwaUC17-t6mOLqaMO4eLVC3-w_RdI5qZT86QpJEk88eQnyMUCpQMJ8BYfcUze8Wp-_-lWSnys",
                  text: "The organic oils are a game-changer. They are light, healthy, and perfect for everyday use.",
                  border: "border-[var(--deep-green)]",
                },
              ].map((testimonial, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${testimonial.border}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                      style={{ backgroundImage: `url("${testimonial.image}")` }}
                    ></div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">{testimonial.name}</p>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[var(--text-secondary)] italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gradient-to-br from-white to-[var(--secondary-color)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] leading-snug mb-3 font-serif">
                Our Certifications
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Committed to the highest standards of quality and authenticity.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAhIgXKujay_h5DGqJj_Z4w9sRLD9B4XB86Ks568OFRzK0uoB5TVPW7hvUCmWtdOl-SpWNHpZHxlHTQfsLbsx_aiKDP2Vh8Ztb3woMhmbh5qC7b7H9W2zuNNiQ31IGNrVfGhpAJPV5ILY7-oSFjQusDWlfFDWQUivBAh19YhKaWV0ELjjQbGMALAyWQKlN_gT2D2x3DPiQx9Hq579WhYoPa7xQ1Wepoa_f3yHgXiFR1Wsv4wr3xXiHCQj4X_dolMliL7-mnu-F7Gj83",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCcNOGcmz3mmeMahTfq5-YuMf96VMPCldHMY7fNennYOOJwUIpJ-MGwjBWFGo2HFXBSxxzzHX6LlgYfTSzWkrixUHSZJeuzZW8jrnsNZRdhrniDFVIMk0-tApYCFTUIte38LbLKMm-6Tv1EfQ4nyhhEQ12FPKiedawv1XHnE2UNI0ghRxWU8F7ZCTwguxJ-JWOL7xXuJbkqXCf9rO_zZKfw0wTDRgcApRHeJ0L38Rv6S_fO2q1qyRF5hdFOcE6VITE6DN8ETNfQNMbL",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAaVd23Nsnqk-BFICjLlYWx2FXFRAfSKUE5s_xQtcdTAy-l737Tg1seB40-yKY8Yl9faRSxE7ldGCvnUf1EEDDJuhyHF0YQQmlQVtSz7KJEazuQglu2R48KJSi2HFuPpUW8j6RzDKTvIvf4kvx0Gy7playhvtDKu1QZ_Qqe68ydYkw_Mlskl9USdA-vXrbKFdRtyhjB1jlmjgQCPdBibls4Q0Dy0qYVA_f9Z5Vv_JK6U_7XSvMPJ1Ql57BEBJdN7WsGioyCROzFodz1",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCU_L5g6ji1tvOgkJS96XSUz3gugsYFUr3trRzEnOseYBek7ffFnvksxm0OFb0opabByS5bOmOyuEpUfSx2nXWdvNZjMqSkY67pgqsHMceVWdkB6OBJHvmSVuWksZInnFouEO6vCQQferjDrK4HVUn73nRwAJNOshLqbv3AFd0T7vDfWcAgUcHcKPb9gGXErCqsjj3WZsN-vnKk9xQ3id1vWxD65y4KVSykp8xInqJny0ldY1Vt1x3R7CljSNBW_YTyxo70Txm3DRak",
              ].map((cert, index) => (
                <div key={index} className="p-4 flex justify-center">
                  <Image
                    alt={`Certification ${index + 1}`}
                    className="h-24 object-contain"
                    src={cert || "/placeholder.svg"}
                    width={120}
                    height={96}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
