import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

type DemoRequest = {
  nombre?: unknown;
  apellidos?: unknown;
  organizacion?: unknown;
  cargo?: unknown;
  email?: unknown;
  telefono?: unknown;
  pais?: unknown;
  tipo?: unknown;
  territorio?: unknown;
  mensaje?: unknown;
  website?: unknown;
  locale?: unknown;
};

function text(value: unknown, maxLength = 500) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export const Route = createFileRoute("/api/demo")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: DemoRequest;

        try {
          body = (await request.json()) as DemoRequest;
        } catch {
          return json({ ok: false, error: "Invalid JSON body" }, 400);
        }

        // Honeypot anti-spam. Los usuarios reales nunca rellenan este campo.
        if (text(body.website, 200)) {
          return json({ ok: true });
        }

        const nombre = text(body.nombre, 120);
        const apellidos = text(body.apellidos, 120);
        const organizacion = text(body.organizacion, 180);
        const cargo = text(body.cargo, 180);
        const email = text(body.email, 254);
        const telefono = text(body.telefono, 80);
        const pais = text(body.pais, 120);
        const tipo = text(body.tipo, 180);
        const territorio = text(body.territorio, 300);
        const mensaje = text(body.mensaje, 5000);
        const locale = text(body.locale, 20);

        if (!nombre || !apellidos || !organizacion || !email || !tipo) {
          return json({ ok: false, error: "Missing required fields" }, 400);
        }

        if (!isValidEmail(email)) {
          return json({ ok: false, error: "Invalid email" }, 400);
        }

        const apiKey = process.env["RESEND_API_KEY"];
        const to = process.env["DEMO_TO_EMAIL"] || "demo@taranisapp.com";
        const from = process.env["DEMO_FROM_EMAIL"] || "TARANIS Web <no-reply@taranisapp.com>";

        if (!apiKey) {
          console.error("RESEND_API_KEY is not configured");
          return json({ ok: false, error: "Email service is not configured" }, 500);
        }

        const resend = new Resend(apiKey);

        const subject = `Nueva solicitud de demostración TARANIS — ${organizacion}`;

        const message = [
          "Nueva solicitud de demostración TARANIS",
          "",
          `Nombre: ${nombre}`,
          `Apellidos: ${apellidos}`,
          `Organización: ${organizacion}`,
          `Cargo: ${cargo || "No indicado"}`,
          `Email: ${email}`,
          `Teléfono: ${telefono || "No indicado"}`,
          `País: ${pais || "No indicado"}`,
          `Tipo de organización: ${tipo}`,
          `Territorio de interés: ${territorio || "No indicado"}`,
          `Idioma de la web: ${locale || "No indicado"}`,
          "",
          "Mensaje:",
          mensaje || "Sin mensaje adicional",
        ].join("\n");

        try {
          const { data, error } = await resend.emails.send({
            from,
            to: [to],
            replyTo: email,
            subject,
            text: message,
          });

          if (error) {
            console.error("Resend error:", error);
            return json({ ok: false, error: "Email delivery failed" }, 502);
          }

          return json({ ok: true, id: data?.id });
        } catch (error) {
          console.error("Unexpected demo email error:", error);
          return json({ ok: false, error: "Unexpected email error" }, 500);
        }
      },
    },
  },
});
