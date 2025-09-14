//* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';

export default function HRMApp() {
  // Navegación simple (home / services / about / contact / portal)
  const [route, setRoute] = useState('home');
  const [lang, setLang] = useState('en'); // 'en' | 'es'
  const t = (en, es) => (lang === 'en' ? en : es);

  // Datos demo para el Portal (puedes conectar Supabase después)
  const [tickets, setTickets] = useState([
    { id: 'T-91A2BC3D', project: 'EURO DC2', eta: '4h', est: 3.0, spent: 1.5, rate: 85, engineer: 'ENG-01', status: 'in-progress' },
    { id: 'T-62F1AA7B', project: 'CORE-LINK', eta: '8h', est: 5.0, spent: 0.0, rate: 95, engineer: 'ENG-02', status: 'open' },
  ]);

  const addHours = (id, h = 1) => {
    setTickets((prev) =>
      prev.map((tk) => (tk.id === id ? { ...tk, spent: Number(tk.spent) + Number(h) } : tk))
    );
  };

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
      {/* IMAGEN DEL HERO: coloca tu archivo en /public/hero.jpg */}
      <img
        src="/hero.jpg"
        alt="Remote Hands in Madrid"
        className="w-full h-[420px] object-cover"
        style={{ opacity: 0.25 }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center px-6">
          <h1 style={{ fontSize: 44, lineHeight: 1.1, fontWeight: 800 }}>
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

  const Logos = () => (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {['EuroNet', 'FiberStream', 'CoreLink', 'Latencf'].map((name) => (
        <div key={name} className="rounded-xl border border-white/10 px-4 py-3 text-center text-white/70">
          {name}
        </div>
      ))}
    </div>
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
          title: t('Smart/Remote Hands', 'Manos inteligentes / remotas'),
          desc: t('Rack & stack, patching, labeling, loopbacks.', 'Rack & stack, parcheo, etiquetado, loopbacks.'),
        },
        {
          title: t('Installations', 'Instalaciones'),
          desc: t('PDUs, optics, transceivers, cabling.', 'PDUs, ópticas, transceptores, cableado.'),
        },
        {
          title: t('Testing', 'Ensayo'),
          desc: t('OTDR, light level, ping/latency, out-of-band.', 'OTDR, nivel de luz, ping/latencia, fuera de banda.'),
        },
      ].map((c) => (
        <div key={c.title} className="rounded-2xl border border-white/10 p-5">
          <h3 className="font-semibold">{c.title}</h3>
          <p className="text-white/80 mt-2">{c.desc}</p>
        </div>
      ))}
    </section>
  );

  const About = () => (
    <section className="mt-10 grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-white/10 p-5">
        <h3 className="font-semibold">{t('Why us', 'Por qué nosotros')}</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-white/80">
          <li>{t('B2B focus. Engineers talking to engineers.', 'Enfoque B2B. Ingenieros hablando con ingenieros.')}</li>
          <li>{t('24/7 on-call for Madrid DCs.', 'Guardia 24/7 para DCs de Madrid.')}</li>
          <li>{t('Experience in live event transmission.', 'Experiencia en transmisiones de eventos en vivo.')}</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-white/10 p-5">
        <h3 className="font-semibold">{t('Coverage', 'Cobertura')}</h3>
        <p className="text-white/80 mt-2">
          {t('Core Madrid data centers (DC1–DC4, Alcobendas, Las Rozas…).', 'DCs principales de Madrid (DC1–DC4, Alcobendas, Las Rozas…).')}
        </p>
      </div>
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

  const Portal = () => (
    <section className="mt-10 rounded-2xl border border-white/10 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl">{t('Client Portal (MVP demo)', 'Portal del cliente (demo MVP)')}</h3>
        <button
          onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          className="px-3 py-2 rounded-xl border border-white/20 hover:bg-white/10"
        >
          {lang.toUpperCase()}
        </button>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-white/70">
            <tr>
              <th className="text-left py-2">ID</th>
              <th className="text-left py-2">{t('Project', 'Proyecto')}</th>
              <th className="text-left py-2">ETA</th>
              <th className="text-right py-2">{t('Est. h', 'H. est')}</th>
              <th className="text-right py-2">{t('Spent h', 'H. invert')}</th>
              <th className="text-right py-2">€/h</th>
              <th className="text-right py-2">{t('Amount', 'Importe')}</th>
              <th className="text-left py-2">{t('Engineer', 'Técnico')}</th>
              <th className="text-left py-2">{t('Status', 'Estado')}</th>
              <th className="text-left py-2">{t('Actions', 'Acciones')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {tickets.map((tkt) => (
              <tr key={tkt.id}>
                <td className="py-2">{tkt.id}</td>
                <td className="py-2">{tkt.project}</td>
                <td className="py-2">{tkt.eta}</td>
                <td className="py-2 text-right">{tkt.est.toFixed(1)}</td>
                <td className="py-2 text-right">{tkt.spent.toFixed(1)}</td>
                <td className="py-2 text-right">{tkt.rate}</td>
                <td className="py-2 text-right">{(tkt.spent * tkt.rate).toFixed(2)} €</td>
                <td className="py-2">{tkt.engineer}</td>
                <td className="py-2">{tkt.status}</td>
                <td className="py-2">
                  <button
                    onClick={() => addHours(tkt.id, 1)}
                    className="text-emerald-400 hover:underline"
                  >
                    +1h
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-white/60 mt-3 text-xs">
          {t(
            'Demo data. In production this table reads/writes from Supabase.',
            'Datos de demo. En producción esta tabla lee/escribe de Supabase.'
          )}
        </p>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Topbar */}
      <header className="sticky top-0 z-20 bg-neutral-950/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-black grid place-items-center font-bold">HR</div>
            <div className="leading-tight">
              <div className="font-semibold">Hands Remoto Madrid</div>
              <div className="text-xs text-white/70">{t('Experts in networks & data • 24/7', 'Expertos en redes y datos • 24/7')}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink id="home">{t('Home', 'Hogar')}</NavLink>
            <NavLink id="services">{t('Services', 'Servicios')}</NavLink>
            <NavLink id="about">{t('About', 'Acerca de')}</NavLink>
            <NavLink id="contact">{t('Contact', 'Contacto')}</NavLink>
            <NavLink id="portal">{t('Client Portal', 'Portal del cliente')}</NavLink>
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

      {/* Body */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        {route === 'home' && (
          <>
            <Hero />
            <Logos />
            <Services />
          </>
        )}
        {route === 'services' && <Services />}
        {route === 'about' && <About />}
        {route === 'contact' && <Contact />}
        {route === 'portal' && <Portal />}
      </main>

      <footer className="border-t border-white/10 text-center text-white/60 text-sm py-6">
        © {new Date().getFullYear()} Hands Remote Madrid — {t('All rights reserved', 'Todos los derechos reservados')}
      </footer>
    </div

/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';

export default function HRMApp() {
  // Navegación simple (home / services / about / contact / portal)
  const [route, setRoute] = useState('home');
  const [lang, setLang] = useState('en'); // 'en' | 'es'
  const t = (en, es) => (lang === 'en' ? en : es);

  // Datos demo para el Portal (puedes conectar Supabase después)
  const [tickets, setTickets] = useState([
    { id: 'T-91A2BC3D', project: 'EURO DC2', eta: '4h', est: 3.0, spent: 1.5, rate: 85, engineer: 'ENG-01', status: 'in-progress' },
    { id: 'T-62F1AA7B', project: 'CORE-LINK', eta: '8h', est: 5.0, spent: 0.0, rate: 95, engineer: 'ENG-02', status: 'open' },
  ]);

  const addHours = (id, h = 1) => {
    setTickets((prev) =>
      prev.map((tk) => (tk.id === id ? { ...tk, spent: Number(tk.spent) + Number(h) } : tk))
    );
  };

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
      {/* IMAGEN DEL HERO: coloca tu archivo en /public/hero.jpg */}
      <img
        src="/hero.jpg"
        alt="Remote Hands in Madrid"
        className="w-full h-[420px] object-cover"
        style={{ opacity: 0.25 }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center px-6">
          <h1 style={{ fontSize: 44, lineHeight: 1.1, fontWeight: 800 }}>
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

  const Logos = () => (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {['EuroNet', 'FiberStream', 'CoreLink', 'Latencf'].map((name) => (
        <div key={name} className="rounded-xl border border-white/10 px-4 py-3 text-center text-white/70">
          {name}
        </div>
      ))}
    </div>
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
          title: t('Smart/Remote Hands', 'Manos inteligentes / remotas'),
          desc: t('Rack & stack, patching, labeling, loopbacks.', 'Rack & stack, parcheo, etiquetado, loopbacks.'),
        },
        {
          title: t('Installations', 'Instalaciones'),
          desc: t('PDUs, optics, transceivers, cabling.', 'PDUs, ópticas, transceptores, cableado.'),
        },
        {
          title: t('Testing', 'Ensayo'),
          desc: t('OTDR, light level, ping/latency, out-of-band.', 'OTDR, nivel de luz, ping/latencia, fuera de banda.'),
        },
      ].map((c) => (
        <div key={c.title} className="rounded-2xl border border-white/10 p-5">
          <h3 className="font-semibold">{c.title}</h3>
          <p className="text-white/80 mt-2">{c.desc}</p>
        </div>
      ))}
    </section>
  );

  const About = () => (
    <section className="mt-10 grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-white/10 p-5">
        <h3 className="font-semibold">{t('Why us', 'Por qué nosotros')}</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-white/80">
          <li>{t('B2B focus. Engineers talking to engineers.', 'Enfoque B2B. Ingenieros hablando con ingenieros.')}</li>
          <li>{t('24/7 on-call for Madrid DCs.', 'Guardia 24/7 para DCs de Madrid.')}</li>
          <li>{t('Experience in live event transmission.', 'Experiencia en transmisiones de eventos en vivo.')}</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-white/10 p-5">
        <h3 className="font-semibold">{t('Coverage', 'Cobertura')}</h3>
        <p className="text-white/80 mt-2">
          {t('Core Madrid data centers (DC1–DC4, Alcobendas, Las Rozas…).', 'DCs principales de Madrid (DC1–DC4, Alcobendas, Las Rozas…).')}
        </p>
      </div>
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

  const Portal = () => (
    <section className="mt-10 rounded-2xl border border-white/10 p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl">{t('Client Portal (MVP demo)', 'Portal del cliente (demo MVP)')}</h3>
        <button
          onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          className="px-3 py-2 rounded-xl border border-white/20 hover:bg-white/10"
        >
          {lang.toUpperCase()}
        </button>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-white/70">
            <tr>
              <th className="text-left py-2">ID</th>
              <th className="text-left py-2">{t('Project', 'Proyecto')}</th>
              <th className="text-left py-2">ETA</th>
              <th className="text-right py-2">{t('Est. h', 'H. est')}</th>
              <th className="text-right py-2">{t('Spent h', 'H. invert')}</th>
              <th className="text-right py-2">€/h</th>
              <th className="text-right py-2">{t('Amount', 'Importe')}</th>
              <th className="text-left py-2">{t('Engineer', 'Técnico')}</th>
              <th className="text-left py-2">{t('Status', 'Estado')}</th>
              <th className="text-left py-2">{t('Actions', 'Acciones')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {tickets.map((tkt) => (
              <tr key={tkt.id}>
                <td className="py-2">{tkt.id}</td>
                <td className="py-2">{tkt.project}</td>
                <td className="py-2">{tkt.eta}</td>
                <td className="py-2 text-right">{tkt.est.toFixed(1)}</td>
                <td className="py-2 text-right">{tkt.spent.toFixed(1)}</td>
                <td className="py-2 text-right">{tkt.rate}</td>
                <td className="py-2 text-right">{(tkt.spent * tkt.rate).toFixed(2)} €</td>
                <td className="py-2">{tkt.engineer}</td>
                <td className="py-2">{tkt.status}</td>
                <td className="py-2">
                  <button
                    onClick={() => addHours(tkt.id, 1)}
                    className="text-emerald-400 hover:underline"
                  >
                    +1h
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-white/60 mt-3 text-xs">
          {t(
            'Demo data. In production this table reads/writes from Supabase.',
            'Datos de demo. En producción esta tabla lee/escribe de Supabase.'
          )}
        </p>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Topbar */}
      <header className="sticky top-0 z-20 bg-neutral-950/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-black grid place-items-center font-bold">HR</div>
            <div className="leading-tight">
              <div className="font-semibold">Hands Remoto Madrid</div>
              <div className="text-xs text-white/70">{t('Experts in networks & data • 24/7', 'Expertos en redes y datos • 24/7')}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink id="home">{t('Home', 'Hogar')}</NavLink>
            <NavLink id="services">{t('Services', 'Servicios')}</NavLink>
            <NavLink id="about">{t('About', 'Acerca de')}</NavLink>
            <NavLink id="contact">{t('Contact', 'Contacto')}</NavLink>
            <NavLink id="portal">{t('Client Portal', 'Portal del cliente')}</NavLink>
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

      {/* Body */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        {route === 'home' && (
          <>
            <Hero />
            <Logos />
            <Services />
          </>
        )}
        {route === 'services' && <Services />}
        {route === 'about' && <About />}
        {route === 'contact' && <Contact />}
        {route === 'portal' && <Portal />}
      </main>

      <footer className="border-t border-white/10 text-center text-white/60 text-sm py-6">
        © {new Date().getFullYear()} Hands Remote Madrid — {t('All rights reserved', 'Todos los derechos reservados')}
      </footer>
    </div
