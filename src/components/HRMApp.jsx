/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from "react";


// Minimal, single-file React preview of the site structure.
// In the real Next.js app you'll split into pages and connect Supabase.

export default function HRMApp() {
  const [route, setRoute] = useState("home");
  const [portalTab, setPortalTab] = useState("tickets");
  const [lang, setLang] = useState("en");

  const t = (en, es) => (lang === "en" ? en : es);

  const NavLink = ({ id, children }) => (
    <button
      onClick={() => setRoute(id)}
      className={`px-3 py-2 rounded-xl text-sm font-medium transition ${
        route === id
          ? "bg-white text-black"
          : "text-white/90 hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div style={{ fontFamily: "Inter, system-ui, Arial", background: "#0B0F14", color: "#E6ECEF", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 30, backdropFilter: "blur(10px)", background: "rgba(11,15,20,0.7)", borderBottom: "1px solid #1B2430" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div style={{ width: 36, height: 36, borderRadius: 12, background: "linear-gradient(135deg,#00D1B2,#8896A6)", display: "grid", placeItems: "center", boxShadow: "0 6px 20px rgba(0,209,178,0.3)" }}>
              <span style={{ fontWeight: 800, color: "#0B0F14" }}>HRM</span>
            </div>
            <div>
              <div style={{ fontWeight: 700 }}>Hands Remote Madrid</div>
              <div style={{ fontSize: 12, color: "#A8B3C2" }}>Network & Data Experts · 24/7</div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <NavLink id="home">{t("Home", "Inicio")}</NavLink>
            <NavLink id="services">{t("Services", "Servicios")}</NavLink>
            <NavLink id="about">{t("About", "Equipo")}</NavLink>
            <NavLink id="contact">{t("Contact", "Contacto")}</NavLink>
            <NavLink id="portal">{t("Client Portal", "Portal Clientes")}</NavLink>
            <a
              href="https://wa.me/34600906245?text=Hi%20HRM%2C%20I%20need%20remote%20hands"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-xl bg-[#00D1B2] text-black font-semibold"
            >
              WhatsApp
            </a>
            <button onClick={() => setLang(lang === "en" ? "es" : "en")} className="px-3 py-2 rounded-xl text-white/80 hover:bg-white/10">
              {lang === "en" ? "ES" : "EN"}
            </button>
          </nav>
        </div>
      </header>

      {/* Routes */}
      {route === "home" && <Home t={t} />}
      {route === "services" && <Services t={t} />}
      {route === "about" && <About t={t} />}
      {route === "contact" && <Contact t={t} />}
      {route === "portal" && <Portal t={t} portalTab={portalTab} setPortalTab={setPortalTab} />}

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-white/70">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Hands Remote Madrid — All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Cookies</a>
              <a href="#" className="hover:underline">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Container({ children }) {
  return <div className="max-w-6xl mx-auto px-4">{children}</div>;
}

function Home({ t }) {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=2000&auto=format&fit=crop" alt="fiber" style={{ width: "100%", height: 420, objectFit: "cover", opacity: 0.25 }} />
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
          <div className="text-center px-6">
            <h1 style={{ fontSize: 44, lineHeight: 1.1, fontWeight: 800 }}>
              {t("24/7 Remote Hands for Data Centers in Madrid", "Manos Remotas 24/7 para Centros de Datos en Madrid")}
            </h1>
            <p className="mt-4 text-white/80" style={{ fontSize: 18 }}>
              {t(
                "Expert fiber & network engineers for installs, testing and on-site interventions.",
                "Ingenieros expertos en fibra y redes para instalaciones, pruebas e intervenciones on‑site."
              )}
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="https://wa.me/34600906245?text=Hi%20HRM%2C%20I%20need%20remote%20hands" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl bg-[#00D1B2] text-black font-semibold">
                {t("Request Remote Hands", "Solicitar Manos Remotas")}
              </a>
              <a href="#services" onClick={(e)=>{e.preventDefault(); document.querySelector('#services-block')?.scrollIntoView({behavior:'smooth'});}} className="px-5 py-3 rounded-2xl border border-white/15 hover:bg-white/10">
                {t("View Services", "Ver Servicios")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip (placeholders) */}
      <Container>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 opacity-70">
          {["EuroNet", "FiberStream", "CoreLink", "Latencí", "Tier-III DC"].map((name, i) => (
            <div key={i} className="p-4 rounded-xl border border-white/10 text-center">{name}</div>
          ))}
        </div>
      </Container>

      {/* Highlights */}
      <Container>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card title={t("Fast On‑Site", "Llegada Rápida")}
                text={t("30–90 min to main Madrid DCs.", "30–90 min a los principales DC de Madrid.")} />
          <Card title={t("Network & Fiber", "Red y Fibra")}
                text={t("Switches, servers, cross‑connects, OTDR tests.", "Switches, servidores, cross‑connects, pruebas OTDR.")} />
          <Card title={t("Event Transmission", "Eventos en Fibra")}
                text={t("Sports & culture live circuits.", "Directos deportivos y culturales.")} />
        </div>
      </Container>

      {/* Services preview */}
      <div id="services-block">
        <Services t={t} compact />
      </div>
    </>
  );
}

function Card({ title, text }) {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-white/80">{text}</p>
    </div>
  );
}

function Services({ t, compact = false }) {
  const items = [
    { h: t("Smart Hands / Remote Hands", "Smart Hands / Manos Remotas"), p: t("Rack & stack, patching, cross‑connects, labeling, power checks.", "Rack & stack, patching, cross‑connects, rotulado, verificación de potencia.") },
    { h: t("Installations", "Instalaciones"), p: t("Servers, switches, PDUs, optics, transceivers, cabling.", "Servidores, switches, PDUs, ópticas, transceptores y cableado.") },
    { h: t("Testing", "Pruebas"), p: t("Loopbacks, OTDR, light‑level, ping/latency, out‑of‑band.", "Loopbacks, OTDR, niveles de luz, ping/latencia, out‑of‑band.") },
    { h: t("Troubleshooting", "Diagnóstico"), p: t("Power cycle, interface swap, console access, RMA support.", "Reinicio, cambio de interfaz, acceso consola, soporte RMA.") },
    { h: t("Event Transmission", "Transmisión de Eventos"), p: t("Fiber circuits for sports & cultural events.", "Circuitos de fibra para eventos deportivos y culturales.") },
    { h: t("SLA & Coverage", "SLA y Cobertura"), p: t("24/7 availability. English‑first B2B.", "Disponibilidad 24/7. Inglés como idioma principal.") },
  ];

  return (
    <section>
      <Container>
        {!compact && (
          <div className="mt-14">
            <h2 className="text-3xl font-extrabold">{t("Services", "Servicios")}</h2>
            <p className="mt-2 text-white/80">{t("Clear scope for busy technical managers.", "Alcance claro para ingenieros ocupados.")}</p>
          </div>
        )}
        <div className={`mt-6 grid md:grid-cols-3 gap-6 ${compact ? "mt-8" : ""}`}>
          {items.map((it, i) => (
            <Card key={i} title={it.h} text={it.p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function About({ t }) {
  return (
    <section>
      <Container>
        <div className="mt-14">
          <h2 className="text-3xl font-extrabold">{t("Team", "Equipo")}</h2>
          <p className="mt-2 text-white/80">{t("Specialist engineers in connectivity, DC ops, and field deployments.", "Ingenieros especialistas en conectividad, operaciones de DC y despliegues de campo.")}</p>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-4">
                <img src={`https://i.pravatar.cc/100?img=${i}`} alt="avatar" className="w-14 h-14 rounded-xl" />
                <div>
                  <div className="font-semibold">{t("Network Engineer", "Ingeniero de Red")} #{i}</div>
                  <div className="text-sm text-white/70">CCNA · Fiber · Linux</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section>
      <Container>
        <div className="mt-14 max-w-2xl">
          <h2 className="text-3xl font-extrabold">{t("Contact", "Contacto")}</h2>
          <p className="mt-2 text-white/80">{t("Fastest way: WhatsApp. Optionally leave details below.", "Vía más rápida: WhatsApp. Opcionalmente deja tus datos abajo.")}</p>

          <div className="mt-6 p-6 rounded-2xl border border-white/10 bg-white/5">
            <a className="inline-block px-5 py-3 rounded-2xl bg-[#00D1B2] text-black font-semibold" href="https://wa.me/34600906245?text=Hi%20HRM%2C%20I%20need%20remote%20hands" target="_blank" rel="noreferrer">WhatsApp +34 600 906 245</a>
            <form className="mt-6 grid gap-3">
              <input placeholder={t("Company","Empresa")} className="px-4 py-3 rounded-xl bg-transparent border border-white/15" />
              <input placeholder={t("Email","Email")} className="px-4 py-3 rounded-xl bg-transparent border border-white/15" />
              <textarea placeholder={t("What do you need?","¿Qué necesitas?")} className="px-4 py-3 rounded-xl bg-transparent border border-white/15" rows={4} />
              <button type="button" className="px-5 py-3 rounded-2xl border border-white/15 hover:bg-white/10">
                {t("Send (demo)", "Enviar (demo)")}
              </button>
              <p className="text-xs text-white/60">{t("In production this sends via Resend/Formspree.", "En producción enviará vía Resend/Formspree.")}</p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Portal({ t, portalTab, setPortalTab }) {
  // Demo data. In production, fetch from Supabase with RLS.
  const tickets = [
    { id: "T-1021", project: "EuroNet - DC2", eta: "2025-09-14 16:00", est: 3.0, spent: 1.5, rate: 85, engineer: "ENG-02", status: "in-progress" },
    { id: "T-1022", project: "CoreLink - DC1", eta: "2025-09-15 10:30", est: 2.0, spent: 0.0, rate: 85, engineer: "ENG-01", status: "open" },
  ];

  const total = tickets.reduce((s, t) => s + t.spent * t.rate, 0);

  return (
    <section>
      <Container>
        <div className="mt-14">
          <h2 className="text-3xl font-extrabold">{t("Client Portal", "Portal de Clientes")}</h2>
          <p className="mt-2 text-white/80">{t("Track open cases, assigned engineer, ETA and billing.", "Sigue casos abiertos, ingeniero asignado, ETA y facturación.")}</p>
        </div>

        <div className="mt-6 flex gap-2">
          {[
            { id: "tickets", label: t("Tickets", "Tickets") },
            { id: "engineers", label: t("Engineers", "Ingenieros") },
            { id: "billing", label: t("Billing", "Facturación") },
          ].map(tab => (
            <button key={tab.id} onClick={()=>setPortalTab(tab.id)} className={`px-4 py-2 rounded-xl ${portalTab===tab.id?"bg-white text-black":"border border-white/15 hover:bg-white/10"}`}>{tab.label}</button>
          ))}
        </div>

        {portalTab === "tickets" && (
          <div className="mt-6 grid gap-4">
            {tickets.map(tk => (
              <div key={tk.id} className="p-5 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="font-semibold">{tk.id} — {tk.project}</div>
                  <div className="text-sm text-white/70">{t("Status", "Estado")}: {tk.status}</div>
                </div>
                <div className="mt-2 grid md:grid-cols-5 gap-3 text-sm text-white/80">
                  <div>ETA: {tk.eta}</div>
                  <div>{t("Estimated", "Estimadas")}: {tk.est} h</div>
                  <div>{t("Spent", "Consumidas")}: {tk.spent} h</div>
                  <div>{t("Rate", "Tarifa")}: €{tk.rate}/h</div>
                  <div>{t("Assigned", "Asignado")}: {tk.engineer}</div>
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="px-3 py-2 rounded-xl border border-white/15 hover:bg-white/10">{t("Add hours", "Añadir horas")}</button>
                  <button className="px-3 py-2 rounded-xl border border-white/15 hover:bg-white/10">{t("Close ticket", "Cerrar ticket")}</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {portalTab === "engineers" && (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[{id:"ENG-01",name:"Network Engineer #1",on: true},{id:"ENG-02",name:"Network Engineer #2",on:false}].map(e => (
              <div key={e.id} className="p-5 rounded-2xl border border-white/10 bg-white/5">
                <div className="font-semibold">{e.name}</div>
                <div className="text-sm text-white/70">ID: {e.id} · {e.on ? t("On call","De guardia") : t("Off","Fuera de guardia")}</div>
              </div>
            ))}
          </div>
        )}

        {portalTab === "billing" && (
          <div className="mt-6 p-5 rounded-2xl border border-white/10 bg-white/5">
            <div className="text-lg font-semibold">{t("Current charges (demo)", "Cargos actuales (demo)")}</div>
            <div className="mt-2 text-white/80">{t("Sum of hours spent × rate across open tickets.", "Suma de horas consumidas × tarifa en tickets abiertos.")}</div>
            <div className="mt-4 text-3xl font-extrabold">€ {total.toFixed(2)}</div>
            <p className="mt-2 text-xs text-white/60">{t("In production this ties to Supabase invoices/Stripe.", "En producción se vincula a facturas en Supabase/Stripe.")}</p>
          </div>
        )}
      </Container>
    </section>
  );
}
