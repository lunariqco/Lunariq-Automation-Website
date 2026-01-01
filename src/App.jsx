export default function App() {
  const year = new Date().getFullYear();

  const mailto = "mailto:lunariq.co@gmail.com?subject=Lunariq%20Automation%20-%20Project%20Inquiry&body=Hi%20Lunariq%2C%0A%0AI%27m%20interested%20in%20automation%20for%20my%20business.%0A%0ABusiness%20type%3A%0AWhat%20I%20want%20automated%3A%0AMy%20budget%3A%0ABest%20way%20to%20reach%20me%3A%0A%0AThanks!"
  
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", color: "#eaeaea", background: "#0b0f17", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 20px" }}>
        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: "linear-gradient(135deg,#7c3aed,#22c55e)" }} />
            <div>
              <div style={{ fontWeight: 800, letterSpacing: 0.3 }}>Lunariq Automation</div>
              <div style={{ fontSize: 12, opacity: 0.8 }}>AI + n8n automations for small business</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#services" style={linkStyle}>Services</a>
            <a href="#pricing" style={linkStyle}>Pricing</a>
            <a href="#faq" style={linkStyle}>FAQ</a>
            <a href={mailto} style={{ ...btnStyle, background: "#22c55e", color: "#08110a" }}>Contact</a>
          </div>
        </div>

        {/* Hero */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 20, alignItems: "stretch" }}>
          <div style={cardStyle}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", padding: "6px 10px", borderRadius: 999, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.35)", marginBottom: 14 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: "#7c3aed" }} />
              <span style={{ fontSize: 12, opacity: 0.95 }}>Book more clients. Do less busywork.</span>
            </div>

            <h1 style={{ fontSize: 44, lineHeight: 1.06, margin: "8px 0 12px", letterSpacing: -0.6 }}>
              Automations that save time, capture leads, and follow up instantly.
            </h1>

            <p style={{ fontSize: 16, opacity: 0.9, lineHeight: 1.6, margin: "0 0 20px" }}>
              I build practical AI + n8n workflows for small businesses: lead capture, instant replies, CRM updates, appointment booking, email/SMS follow-ups, and reporting.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
              <a href={mailto} style={{ ...btnStyle, background: "#22c55e", color: "#08110a" }}>Get a quote</a>
              <a href="#example" style={{ ...btnStyle, background: "transparent", border: "1px solid rgba(255,255,255,0.18)" }}>See an example</a>
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 14, opacity: 0.9 }}>
              <Pill>⚡ Fast setup</Pill>
              <Pill>🔒 Secure practices</Pill>
              <Pill>📈 Measurable ROI</Pill>
            </div>
          </div>

          <div style={{ ...cardStyle, background: "linear-gradient(180deg, rgba(34,197,94,0.12), rgba(124,58,237,0.10))" }}>
            <h3 style={{ margin: 0, fontSize: 16, letterSpacing: 0.2 }}>Best starter automation</h3>
            <p style={{ margin: "8px 0 14px", opacity: 0.9, lineHeight: 1.5 }}>
              <b>AI Lead Qualifier</b>: Website form → AI qualifies the lead → your inbox/CRM gets a clean summary → automatic follow-up.
            </p>

            <div style={{ display: "grid", gap: 10 }}>
              <Step n="1" t="Lead submits form" d="Name, email, message, budget" />
              <Step n="2" t="AI summarizes + scores" d="Intent + priority + next action" />
              <Step n="3" t="Auto follow-up" d="Email/SMS reply + booking link" />
              <Step n="4" t="CRM + spreadsheet log" d="Track every lead + status" />
            </div>

            <div style={{ marginTop: 14 }}>
              <a href={mailto} style={{ ...btnStyle, width: "100%", textAlign: "center", background: "#7c3aed" }}>Build this for my business</a>
            </div>
          </div>
        </div>

        {/* Example */}
        <div id="example" style={{ marginTop: 22, ...cardStyle }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Example workflow (what you get)</h2>
          <p style={{ margin: "10px 0 0", opacity: 0.9, lineHeight: 1.6 }}>
            A simple link or form collects leads → n8n receives it → OpenAI writes a short summary + priority score → we notify you (email/Discord/Slack) →
            we store it in Google Sheets or your CRM → optional auto-reply with next steps.
          </p>
        </div>

        {/* Services */}
        <div id="services" style={{ marginTop: 22 }}>
          <h2 style={{ margin: "6px 0 12px", fontSize: 22 }}>Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            <Service title="Lead capture + auto follow-up" desc="Forms, webhooks, AI replies, booking prompts, tagging + routing." />
            <Service title="CRM / Sheets automation" desc="Auto-create/update contacts, deal stages, notes, and reports." />
            <Service title="Content + ops automation" desc="Draft emails, summarize calls, create tasks, send weekly reports." />
          </div>
        </div>

        {/* Pricing */}
        <div id="pricing" style={{ marginTop: 22 }}>
          <h2 style={{ margin: "6px 0 12px", fontSize: 22 }}>Simple pricing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            <Price
              name="Starter"
              price="$199–$399"
              items={["1 core automation", "Email notifications", "Basic logging (Sheets)", "1 revision"]}
            />
            <Price
              name="Growth"
              price="$499–$999"
              highlight
              items={["2–4 automations", "AI summarization", "CRM integration", "Priority support", "2 revisions"]}
            />
            <Price
              name="Monthly Care"
              price="$149+/mo"
              items={["Monitoring + fixes", "Small improvements", "Monthly report", "Cost optimization"]}
            />
          </div>

          <div style={{ marginTop: 14, opacity: 0.9 }}>
            Want a custom quote? <a href={mailto} style={{ color: "#22c55e" }}>Email me</a>.
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" style={{ marginTop: 22, ...cardStyle }}>
          <h2 style={{ margin: 0, fontSize: 22 }}>FAQ</h2>
          <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
            <QA q="What tools do you use?" a="n8n for workflows, OpenAI for AI steps, plus Google Sheets/CRMs/email/SMS depending on your setup." />
            <QA q="How fast can this be done?" a="Most starter automations can be built in 1–3 days once we confirm your exact inputs/outputs." />
            <QA q="Do I need a website?" a="Not necessarily. We can use a simple form link, or connect to your existing site, Facebook, or email." />
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 28, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.10)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, opacity: 0.85 }}>
          <div>© {year} Lunariq Automation</div>
          <div style={{ display: "flex", gap: 14 }}>
            <a href="#services" style={linkStyle}>Services</a>
            <a href="#pricing" style={linkStyle}>Pricing</a>
            <a href={mailto} style={linkStyle}>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span style={{ fontSize: 12, padding: "6px 10px", borderRadius: 999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
      {children}
    </span>
  );
}

function Step({ n, t, d }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 10, padding: 10, borderRadius: 14, background: "rgba(0,0,0,0.18)", border: "1px solid rgba(255,255,255,0.10)" }}>
      <div style={{ width: 28, height: 28, borderRadius: 10, background: "rgba(255,255,255,0.08)", display: "grid", placeItems: "center", fontWeight: 700 }}>{n}</div>
      <div>
        <div style={{ fontWeight: 700 }}>{t}</div>
        <div style={{ fontSize: 13, opacity: 0.9, marginTop: 2 }}>{d}</div>
      </div>
    </div>
  );
}

function Service({ title, desc }) {
  return (
    <div style={cardStyle}>
      <div style={{ fontWeight: 800, marginBottom: 6 }}>{title}</div>
      <div style={{ opacity: 0.9, lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}

function Price({ name, price, items, highlight }) {
  return (
    <div
      style={{
        ...cardStyle,
        border: highlight ? "1px solid rgba(34,197,94,0.55)" : "1px solid rgba(255,255,255,0.10)",
        boxShadow: highlight ? "0 0 0 1px rgba(34,197,94,0.18), 0 20px 60px rgba(0,0,0,0.35)" : cardStyle.boxShadow
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
        <div style={{ fontWeight: 900, fontSize: 16 }}>{name}</div>
        <div style={{ fontWeight: 900, color: highlight ? "#22c55e" : "#eaeaea" }}>{price}</div>
      </div>
      <ul style={{ margin: "10px 0 0", paddingLeft: 18, opacity: 0.92, lineHeight: 1.7 }}>
        {items.map((x) => <li key={x}>{x}</li>)}
      </ul>
    </div>
  );
}

function QA({ q, a }) {
  return (
    <div style={{ padding: 12, borderRadius: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}>
      <div style={{ fontWeight: 800 }}>{q}</div>
      <div style={{ marginTop: 6, opacity: 0.9, lineHeight: 1.6 }}>{a}</div>
    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 20,
  padding: 18,
  boxShadow: "0 20px 60px rgba(0,0,0,0.30)",
};

const btnStyle = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 14,
  fontWeight: 800,
  textDecoration: "none",
};

const linkStyle = {
  color: "rgba(234,234,234,0.88)",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 13,
};
