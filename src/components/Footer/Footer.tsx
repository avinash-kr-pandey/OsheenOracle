import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)",
        color: "#fff",
        padding: "2rem 1rem 1rem 1rem",
        marginTop: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Logo & Description */}
        <div style={{ flex: "1 1 220px", marginBottom: "1.5rem" }}>
          <h2 style={{ margin: 0, fontWeight: 700, fontSize: "1.5rem" }}>
            MyApp
          </h2>
          <p style={{ margin: "0.5rem 0 0 0", fontSize: "1rem", opacity: 0.8 }}>
            Making your experience better, every day.
          </p>
        </div>

        {/* Links */}
        <div
          style={{
            flex: "1 1 150px",
            marginBottom: "1.5rem",
            minWidth: "120px",
          }}
        >
          <h4 style={{ marginBottom: "0.5rem" }}>Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>
              <Link
                href="/"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0.85,
                  transition: "opacity 0.2s",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/about"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0.85,
                  transition: "opacity 0.2s",
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  opacity: 0.85,
                  transition: "opacity 0.2s",
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div
          style={{
            flex: "1 1 150px",
            marginBottom: "1.5rem",
            minWidth: "120px",
          }}
        >
          <h4 style={{ marginBottom: "0.5rem" }}>Follow Us</h4>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                opacity: 0.85,
                transition: "opacity 0.2s",
              }}
              aria-label="Twitter"
            >
              <svg width="24" height="24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.21-1.94-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.59 8.59 0 0 1-2.54.7z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                opacity: 0.85,
                transition: "opacity 0.2s",
              }}
              aria-label="Facebook"
            >
              <svg width="24" height="24" fill="currentColor">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
              </svg>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                opacity: 0.85,
                transition: "opacity 0.2s",
              }}
              aria-label="Instagram"
            >
              <svg width="24" height="24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.784 2.226 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.13 4.659.392 3.678 1.373c-.98.98-1.243 2.092-1.301 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.058 1.281.321 2.393 1.301 3.373.981.981 2.093 1.243 3.374 1.301C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.058 2.393-.32 3.374-1.301.98-.98 1.243-2.092 1.301-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.058-1.281-.321-2.393-1.301-3.373-.981-.981-2.093-1.243-3.374-1.301C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr style={{ border: "none", borderTop: "1px solid #fff2", margin: "1.5rem 0" }} />
      <div
        style={{
          textAlign: "center",
          fontSize: "0.95rem",
          opacity: 0.7,
        }}
      >
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
      <style>
        {`
          @media (max-width: 700px) {
            footer > div {
              flex-direction: column !important;
              align-items: stretch !important;
            }
            footer > div > div {
              margin-bottom: 1rem !important;
            }
          }
          footer a:hover {
            opacity: 1 !important;
            text-decoration: underline;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;