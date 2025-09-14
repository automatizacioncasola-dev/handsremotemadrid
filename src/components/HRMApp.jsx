'use client';
import { useState } from 'react';

export default function HRMApp() {
  const [route, setRoute] = useState('home');
  const [lang, setLang] = useState('en'); // 'en' | 'es'
  const t = (en, es) => (lang === 'en' ? en : es);

  const NavLink = ({ id, children }) => (
    <button
      onClick={() => setRoute(id)}
      className={`px-3 py-2 rounded-xl text-sm font-medium transition ${
        route === id ? 'bg-white text-black' : 'text-white/90 hover:bg-white/10'
      }`}
    >
      {children}
    </button>
  );

  const Hero = () => (
    <section className="relative mt-6 rounded-2xl overflow-hidden">
      <img
        src="/hero.jpg"
        alt="Remote Hands in Madrid"
        className="w-full h-[420px] object-cover opacity-25"
      />
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center px-6">
          <h1 className="text-4xl font-extrabold leading-tight">
            {t('24/7 Remote Hands for Data Centers in Madrid',
               'Manos remotas 24/7 para centros de datos en Madrid')}
          </h1>
          <p className="mt-3 text-white/80 max-w-3xl mx-auto">
            {t(
              'Expert fiber & network engineers for installs, testing and on-site interventions.',
              'Ingenieros expertos en fibra y redes para instalaciones, pruebas e intervenciones in situ.'
            )}
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="https://wa.me/34600906245?text=Hello%2C%20I%20need%20remote%20hands%20in%20a%20Madrid%20data%20center."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400"
            >
              {t('Request Remote Hands', 'Solicitar manos remotas')}
            </a>
            <button
              onClick={() => setRoute('services')}
              className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10"
            >
              {t('View services', 'Ver servicios')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const Services = () => (
    <section className="mt-10 grid md:grid-cols-2 gap-5">
      {[
        {
          title: t('Fast On-Site', 'Rápido en sitio'),
          desc: t('30–90 min to major Madrid DCs.', '30–90 minutos a los principales DCs de Madrid.'),
        },
        {
          title: t('Network & Fiber', 'Red y fibra'),
          desc: t('Switches, servers, cross-connects, OTDR tests.', 'Conmutadores, servidores, cross-connects, pruebas OTDR.'),
        },
        {
          title: t('Event Transmission', 'Transmisión de eventos'),
          desc: t('Sports & culture on fiber. Live circuits.', 'Deportes y cultura sobre fibra. Circuitos en vivo.'),
        },
        {
          title: t('Installations', 'Instalaciones'),
          desc: t('PDUs, optics, transceivers, cabling.', 'PDUs, ópticas, transceptores, cableado.'),
        },
      ].map((c) => (
        <div key={c.title} className="rounded-2xl border border-white/10 p-5">
          <h3 className="font-semibold">{c.title}</h3>
          <p className="text-white/80 mt-2">{c.desc}</p>
        </div>
      ))}
    </section>
  );

  const Contact = () => (
    <section className="mt-10 rounded-2xl border border-white/10 p-6 text-center">
      <h3 className="font-semibold text-xl">{t('Contact', 'Contacto')}</h3>
      <p className="text-white/80 mt-2">
        {t('WhatsApp 24/7 for urgent requests.', 'WhatsApp 24/7 para urgencias.')}
      </p>
      <div className="mt-4 flex items-center justify-center gap-3">
        <a
          className="px-5 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400"
          href="https://wa.me/34600906245?text=Hello%2C%20I%20need%20remote%20hands%20in%20a%20Madrid%20data%20center."
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp +34 600 906 245
        </a>
        <a className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10" href="mailto:automatizacioncasola@gmail.com">
          Email
        </a>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-20 bg-neutral-950/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-black grid place-items-center font-bold">HR</div>
            <div className="leading-tight">
              <div className="font-semibold">Hands Remoto Madrid</div>
              <div className="text-xs text-white/70">
                {t('Experts in networks & data • 24/7', 'Expertos en redes y datos • 24/7')}
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink id="home">{t('Home', 'Hogar')}</NavLink>
            <NavLink id="services">{t('Services', 'Servicios')}</NavLink>
            <NavLink id="contact">{t('Contact', 'Contacto')}</NavLink>
            <a
              href="https://wa.me/34600906245?text=Hello%2C%20I%20need%20remote%20hands%20in%20a%20Madrid%20data%20center."
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-3 py-2 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="ml-2 px-3 py-2 rounded-xl border border-white/20 hover:bg-white/10"
            >
              {lang.toUpperCase()}
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-16">
        {route === 'home' && (<><Hero /><Services /></>)}
        {route === 'services' && <Services />}
        {route === 'contact' && <Contact />}
      </main>

      <footer className="border-t border-white/10 text-center text-white/60 text-sm py-6">
        © {new Date().getFullYear()} Hands Remote Madrid — {t('All rights reserved', 'Todos los derechos reservados')}
      </footer>
    </div>
  );
}
