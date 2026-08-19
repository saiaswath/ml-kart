import MobileNav from "./MobileNav";

const processSteps = [
  ["01", "Discover", "Map the workflow, pain, tools, volume and ROI target."],
  ["02", "Configure", "Select modules, agent behaviors, data sources and rules."],
  ["03", "Integrate", "Connect systems, documents, email, data and voice."],
  ["04", "Deploy", "Add security, approvals, monitoring and evaluation."],
  ["05", "Improve", "Measure outcomes, review corrections and expand."],
] as const;

const industries = [
  ["Real estate", "Lead qualification, showing schedules, voice answering and property documents."],
  ["Healthcare", "Administrative intake, reminders, FAQs and internal knowledge."],
  ["Financial services", "Document intelligence, investigations and operational review."],
  ["Restaurants", "Voice reservations, catering intake, ordering and customer service."],
  ["Home services", "24/7 call answering, issue intake, scheduling and technician routing."],
  ["Professional services", "Client intake, document review, scheduling and billing workflows."],
] as const;

const plans = [
  ["Launch", "$2.5K–$7.5K", "$199–$499 / mo", "Website, lead capture and AI-ready foundations"],
  ["Growth", "$5K–$15K", "$500–$2K / mo", "Website, chatbot, voice and CRM automation"],
  ["Automate", "$10K–$30K", "$1K–$5K / mo", "One agent or workflow automation"],
  ["Enterprise", "$25K–$150K+", "$3K–$25K+ / mo", "Multi-system AI Layer, governance and integrations"],
] as const;

const inquiryFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSca2Cqpd7uB5qGf0X6Li-dnczUwuZOXr0tNvVTYsjfUxWxAwg/viewform";

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
    </svg>
  );
}

function Wordmark() {
  return <span className="wordmark"><b>ML</b><span>KART</span></span>;
}

function HeroProduct() {
  return (
    <div className="hero-product" role="img" aria-label="ML Kart orchestration view connecting business requests to approved actions">
      <div className="product-toolbar">
        <Wordmark />
        <div className="toolbar-center"><span>Operations workspace</span><b>Live</b></div>
        <div className="toolbar-user">AK</div>
      </div>
      <div className="product-layout">
        <aside className="product-sidebar">
          <p>Sources</p>
          <ul>
            <li className="is-current"><i /> All activity <span>24</span></li>
            <li><i /> Salesforce <span>8</span></li>
            <li><i /> Email <span>7</span></li>
            <li><i /> Documents <span>5</span></li>
            <li><i /> Voice <span>4</span></li>
          </ul>
          <div className="sidebar-note"><span>Core status</span><b><i /> All systems normal</b></div>
        </aside>

        <div className="product-workspace">
          <div className="workspace-heading">
            <div><small>Today</small><strong>Work moving now.</strong></div>
            <span className="live-pill"><i /> 3 agents active</span>
          </div>
          <div className="flow-list">
            <div className="flow-row flow-blue">
              <div className="source-mark">S</div>
              <div className="flow-copy"><small>New lead · Salesforce</small><strong>Northwind Property Group</strong></div>
              <div className="flow-progress"><span /><i /></div>
              <div className="flow-outcome"><small>Sales agent</small><strong>Qualified · meeting booked</strong></div>
              <span className="flow-time">Now</span>
            </div>
            <div className="flow-row flow-violet">
              <div className="source-mark">D</div>
              <div className="flow-copy"><small>Invoice · Documents</small><strong>INV-2048</strong></div>
              <div className="flow-progress"><span /><i /></div>
              <div className="flow-outcome"><small>Finance agent</small><strong>Validated · ready for review</strong></div>
              <span className="flow-time">2m</span>
            </div>
            <div className="flow-row flow-green">
              <div className="source-mark">E</div>
              <div className="flow-copy"><small>Support · Email</small><strong>Service-area question</strong></div>
              <div className="flow-progress"><span /><i /></div>
              <div className="flow-outcome"><small>Support agent</small><strong>Answered from knowledge</strong></div>
              <span className="flow-time">4m</span>
            </div>
          </div>
        </div>

        <aside className="product-inspector">
          <p>Selected action</p>
          <div className="inspector-person"><span>NP</span><div><strong>Northwind Property Group</strong><small>Qualified lead</small></div></div>
          <dl>
            <div><dt>Intent</dt><dd>Book a consultation</dd></div>
            <div><dt>Fit</dt><dd>Service area matched</dd></div>
            <div><dt>Next step</dt><dd>Tuesday, 10:30 AM</dd></div>
          </dl>
          <div className="approval"><span><i /> Approval policy</span><b>Auto-approved</b></div>
          <div className="inspector-action">CRM updated <span>✓</span></div>
        </aside>
      </div>
    </div>
  );
}

function LayerVisual() {
  return (
    <div className="layer-visual" role="img" aria-label="CRM, data and documents flow through the ML Kart AI Layer to employees, customers and systems">
      <div className="layer-sources">
        <span><i /> CRM <small>Salesforce · HubSpot</small></span>
        <span><i /> Data <small>Databases · warehouses</small></span>
        <span><i /> Docs <small>PDFs · contracts · forms</small></span>
      </div>
      <div className="layer-connect layer-connect-in"><span /></div>
      <div className="layer-engine">
        <p>ML KART</p>
        <strong className="engine-title">AI Layer</strong>
        <div><span>Understand</span><span>Reason</span><span>Decide</span><span>Act</span></div>
      </div>
      <div className="layer-connect layer-connect-out"><span /></div>
      <div className="layer-destinations">
        <span><i /> Employees <small>Copilots · recommendations</small></span>
        <span><i /> Customers <small>Responses · service</small></span>
        <span><i /> Systems <small>Updates · actions</small></span>
      </div>
    </div>
  );
}

function WebVisual() {
  return (
    <div className="web-visual" role="img" aria-label="AI website assistant qualifying a request and offering appointment times">
      <div className="mini-browser"><i /><i /><i /><span>Acme Services</span></div>
      <div className="web-canvas">
        <div className="web-page-copy"><small>Home services</small><strong>Help is already on the way.</strong><span>Fast, qualified service for the work that cannot wait.</span></div>
        <div className="assistant-card">
          <div className="assistant-title"><i /> Assistant <span>Online</span></div>
          <p>What can we help with?</p>
          <div className="user-message">My air conditioner stopped working.</div>
          <div className="assistant-message">I can check your service area and find the next appointment.</div>
          <div className="time-options"><span>Today 4:30</span><span>Tomorrow 9:00</span></div>
        </div>
      </div>
    </div>
  );
}

function AgentsVisual() {
  return (
    <div className="agents-visual" role="img" aria-label="Reusable agents for sales, support, operations and finance coordinated through one core">
      <div className="agent-orchestrator"><span>ML</span><small>Orchestrator</small></div>
      <div className="agent-stack">
        <div><span className="agent-icon agent-sales">S</span><p><b>Sales agent</b><small>Qualifying 3 leads</small></p><i>Active</i></div>
        <div><span className="agent-icon agent-support">C</span><p><b>Support agent</b><small>Searching knowledge</small></p><i>Active</i></div>
        <div><span className="agent-icon agent-ops">O</span><p><b>Operations agent</b><small>Waiting for approval</small></p><i className="waiting">Review</i></div>
        <div><span className="agent-icon agent-finance">F</span><p><b>Finance agent</b><small>Validating documents</small></p><i>Active</i></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="global-header">
        <nav className="global-nav" aria-label="Primary">
          <a href="#top" aria-label="ML Kart home"><Wordmark /></a>
          <div className="global-links">
            <a href="#products">Products</a>
            <a href="#layer">AI Layer</a>
            <a href="#industries">Industries</a>
            <a href="#plans">Pricing</a>
            <a href={inquiryFormUrl} target="_blank" rel="noreferrer">Contact</a>
          </div>
          <a className="overview-link" href="/ML_Kart_Company_Overview.pdf" download>Overview <Arrow /></a>
          <MobileNav />
        </nav>
      </header>

      <nav className="local-nav" aria-label="ML Kart">
        <div className="local-nav-inner">
          <a href="#top"><strong>ML Kart</strong><span>The AI Layer for Business</span></a>
          <div>
            <a className="local-explore" href="#products">Explore</a>
            <a className="button button-small" href={inquiryFormUrl} target="_blank" rel="noreferrer">Start a project</a>
          </div>
        </div>
      </nav>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">ML Kart</p>
            <h1 id="hero-title">The AI layer<br />{" for business."}</h1>
            <p className="hero-subhead">Keep your systems. Replace the manual work between them.</p>
            <div className="actions">
              <a className="button" href="#products">Explore the platform</a>
              <a className="text-link" href="#layer">See how it works <Arrow /></a>
            </div>
          </div>
          <div className="hero-media-shell">
            <HeroProduct />
            <p className="media-caption">One operating view for the requests, decisions and actions moving through your business.</p>
          </div>
        </section>

        <section className="promise" aria-labelledby="promise-title">
          <div className="narrow-shell">
            <p className="eyebrow">The promise</p>
            <h2 id="promise-title"><span>Your tools already know what happened.</span> ML Kart helps them decide what happens next.</h2>
          </div>
          <div className="integration-list" aria-label="Example integrations">
            <span>Salesforce</span><span>HubSpot</span><span>SAP</span><span>NetSuite</span><span>ServiceNow</span><span>Email</span><span>Databases</span>
          </div>
        </section>

        <section className="products" id="products" aria-labelledby="products-title">
          <div className="wide-shell">
            <div className="section-heading">
              <p className="eyebrow">Product ecosystem</p>
              <h2 id="products-title">Three ways to put AI to work.</h2>
              <p>Each deployment uses the same reusable ML Kart core—not a new one-off codebase.</p>
            </div>

            <article className="product-feature product-layer">
              <div className="product-copy">
                <p className="product-label">01 · AI Layer</p>
                <h3>Connect intelligence across the company.</h3>
                <p>Bring data, applications and workflows into one layer that can understand, reason, recommend and act.</p>
                <a className="text-link" href="#layer">Explore the AI Layer <Arrow /></a>
              </div>
              <LayerVisual />
            </article>

            <div className="product-pair">
              <article className="product-feature product-web">
                <div className="product-copy">
                  <p className="product-label">02 · AI Web</p>
                  <h3>A storefront that can answer back.</h3>
                  <p>Websites, portals, chat and voice that qualify, sell, schedule and support.</p>
                </div>
                <WebVisual />
              </article>

              <article className="product-feature product-agents">
                <div className="product-copy">
                  <p className="product-label">03 · AI Agents</p>
                  <h3>Digital workers. Real boundaries.</h3>
                  <p>Reusable agents configured around company data, tools, policies and approvals.</p>
                </div>
                <AgentsVisual />
              </article>
            </div>
          </div>
        </section>

        <section className="mechanism" id="layer" aria-labelledby="mechanism-title">
          <div className="standard-shell mechanism-intro">
            <p className="eyebrow">ML Kart AI Layer</p>
            <h2 id="mechanism-title">Understand.<br />{" Reason."}<br />{" Decide."}<br />{" Act."}</h2>
            <p>Connect AI to the systems a company already uses, then automate the work between them.</p>
          </div>
          <div className="mechanism-proof">
            <div className="mechanism-line" aria-hidden="true"><span /><i /><b /><em /></div>
            <ol>
              <li><span>01</span><div><h3>Understand</h3><p>Extract and retrieve the right company context.</p></div></li>
              <li><span>02</span><div><h3>Reason</h3><p>Apply policies, permissions and business rules.</p></div></li>
              <li><span>03</span><div><h3>Decide</h3><p>Recommend, classify, route or escalate.</p></div></li>
              <li><span>04</span><div><h3>Act</h3><p>Trigger APIs, workflows and approved updates.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="delivery" id="delivery" aria-labelledby="delivery-title">
          <div className="standard-shell">
            <div className="section-heading section-heading-left">
              <p className="eyebrow">How we deliver</p>
              <h2 id="delivery-title">Start with one measurable workflow.</h2>
              <p>The experience feels tailored. The technology underneath stays reusable.</p>
            </div>
            <ol className="steps">
              {processSteps.map(([number, title, description]) => (
                <li key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </li>
              ))}
            </ol>
            <div className="core-note">
              <strong>Reusable ML Kart Core</strong>
              <p>Identity · Model gateway · Voice · Agent orchestration · Knowledge · Connectors · Approvals · Monitoring · Evaluation · Security</p>
            </div>
          </div>
        </section>

        <section className="industries" id="industries" aria-labelledby="industries-title">
          <div className="wide-shell">
            <div className="section-heading section-heading-left">
              <p className="eyebrow">Industry solutions</p>
              <h2 id="industries-title">Built around the work, not the demo.</h2>
              <p>Pre-packaged workflows for valuable problems, configured on the same platform.</p>
            </div>
            <div className="industry-grid">
              {industries.map(([name, description], index) => (
                <article key={name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <p className="legal-note">Healthcare and regulated-industry deployments require customer-specific security, privacy and compliance review before production use.</p>
          </div>
        </section>

        <section className="plans" id="plans" aria-labelledby="plans-title">
          <div className="wide-shell">
            <div className="section-heading">
              <p className="eyebrow">Commercial model</p>
              <h2 id="plans-title">Begin where the value is clear.</h2>
              <p>Illustrative packaging. Price around business value, complexity, integrations and usage—not developer hours.</p>
            </div>
            <div className="plans-grid">
              {plans.map(([name, setup, recurring, description], index) => (
                <article key={name}>
                  <span className="plan-index">0{index + 1}</span>
                  <h3>{name}</h3>
                  <div className="plan-setup"><strong>{setup}</strong><span>{index < 2 ? "setup" : "implementation"}</span></div>
                  <div className="plan-recurring"><strong>{recurring}</strong><span>recurring platform</span></div>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <div className="narrow-shell">
            <p className="eyebrow">ML Kart</p>
            <h2 id="closing-title">Embed AI. Automate work. Grow the business.</h2>
            <p>Start with one workflow. Expand as ML Kart connects more customer touchpoints, teams and systems.</p>
            <div className="actions">
              <a className="button" href={inquiryFormUrl} target="_blank" rel="noreferrer">Start a conversation</a>
              <a className="text-link" href="/ML_Kart_Company_Overview.pdf" download>Download company overview <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <Wordmark />
          <p>The AI Layer for Business</p>
          <div className="footer-contact">
            <a href={inquiryFormUrl} target="_blank" rel="noreferrer">Project inquiry</a>
            <a href="mailto:mlkarthrteam@gmail.com">mlkarthrteam@gmail.com</a>
            <a href="tel:+12024305142">+1 (202) 430-5142</a>
          </div>
        </div>
      </footer>
    </>
  );
}
