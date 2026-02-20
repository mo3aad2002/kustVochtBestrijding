import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    const { name, email, phone, address, message } = formData;

    if (!name || !email || !phone || !address) {
      return new Response(
        JSON.stringify({ error: "Alle verplichte velden moeten ingevuld zijn" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY niet geconfigureerd");
      return new Response(
        JSON.stringify({ error: "Email configuratie ontbreekt" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const timestamp = new Date().toLocaleString("nl-BE", {
      timeZone: "Europe/Brussels",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const emailHtml = `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nieuw Contact Formulier</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #34B8C3 0%, #2a9aa3 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; letter-spacing: -0.5px;">
                Nieuw Contact Formulier
              </h1>
              <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                Kust Vochtbestrijding
              </p>
            </td>
          </tr>

          <!-- Timestamp -->
          <tr>
            <td style="padding: 20px 30px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef;">
              <p style="margin: 0; color: #6c757d; font-size: 14px; text-align: center;">
                📅 Ontvangen op: <strong>${timestamp}</strong>
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">

              <!-- Name -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                <tr>
                  <td style="padding-bottom: 8px;">
                    <p style="margin: 0; color: #34B8C3; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Naam
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #34B8C3; border-radius: 4px;">
                    <p style="margin: 0; color: #212529; font-size: 16px; font-weight: 500;">
                      ${name}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Email -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                <tr>
                  <td style="padding-bottom: 8px;">
                    <p style="margin: 0; color: #34B8C3; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      E-mail
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #34B8C3; border-radius: 4px;">
                    <p style="margin: 0; color: #212529; font-size: 16px;">
                      <a href="mailto:${email}" style="color: #34B8C3; text-decoration: none;">${email}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Phone -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                <tr>
                  <td style="padding-bottom: 8px;">
                    <p style="margin: 0; color: #34B8C3; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Telefoonnummer
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #34B8C3; border-radius: 4px;">
                    <p style="margin: 0; color: #212529; font-size: 16px;">
                      <a href="tel:${phone}" style="color: #34B8C3; text-decoration: none;">${phone}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Address -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                <tr>
                  <td style="padding-bottom: 8px;">
                    <p style="margin: 0; color: #34B8C3; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Adres
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #34B8C3; border-radius: 4px;">
                    <p style="margin: 0; color: #212529; font-size: 16px;">
                      ${address}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              ${message ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                <tr>
                  <td style="padding-bottom: 8px;">
                    <p style="margin: 0; color: #34B8C3; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Bericht
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-left: 4px solid #34B8C3; border-radius: 4px;">
                    <p style="margin: 0; color: #212529; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">
                      ${message}
                    </p>
                  </td>
                </tr>
              </table>
              ` : ''}

              <!-- Action Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 35px;">
                <tr>
                  <td align="center" style="padding: 20px; background: linear-gradient(135deg, #f0f9fa 0%, #e6f5f7 100%); border-radius: 8px;">
                    <p style="margin: 0 0 15px 0; color: #495057; font-size: 14px;">
                      Klik hieronder om direct te antwoorden
                    </p>
                    <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #34B8C3 0%, #2a9aa3 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 2px 4px rgba(52, 184, 195, 0.3);">
                      Beantwoord E-mail
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0 0 10px 0; color: #6c757d; font-size: 14px; font-weight: 600;">
                Kust Vochtbestrijding
              </p>
              <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 13px;">
                Kemmelbergstraat 40, Oostende
              </p>
              <p style="margin: 0 0 5px 0; color: #6c757d; font-size: 13px;">
                📞 <a href="tel:+32467616349" style="color: #34B8C3; text-decoration: none;">+32 467 61 63 49</a>
              </p>
              <p style="margin: 0; color: #6c757d; font-size: 13px;">
                ✉️ <a href="mailto:info@kustvochtbestrijding.be" style="color: #34B8C3; text-decoration: none;">info@kustvochtbestrijding.be</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const emailText = `
Nieuw Contact Formulier - Kust Vochtbestrijding

Ontvangen op: ${timestamp}

NAAM:
${name}

E-MAIL:
${email}

TELEFOONNUMMER:
${phone}

ADRES:
${address}

${message ? `BERICHT:\n${message}` : ''}

---
Kust Vochtbestrijding
Kemmelbergstraat 40, Oostende
Tel: +32 467 61 63 49
Email: info@kustvochtbestrijding.be
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Kust Vochtbestrijding <noreply@kustvochtbestrijding.be>",
        to: ["info@kustvochtbestrijding.be"],
        reply_to: email,
        subject: `Nieuw Contact Formulier: ${name}`,
        html: emailHtml,
        text: emailText,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error("Resend API error:", errorData);
      return new Response(
        JSON.stringify({ error: "Email verzenden mislukt" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const resendData = await resendResponse.json();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email succesvol verzonden",
        emailId: resendData.id,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "Er is een fout opgetreden bij het verzenden",
        details: error instanceof Error ? error.message : "Onbekende fout",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
