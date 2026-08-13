// Integration Dynamics 365 (leads) — reproduit fidelement le contrat trouve
// dans siteweb-nmedia : src/web/api/dynamicsCrm.ts + src/web/server/api/dynamics.ts
//
// Variables d'environnement attendues (voir .env.example) :
//   DYNAMICS_TOKEN_API_URL      URL du endpoint OAuth2 (client_credentials)
//   DYNAMICS_TOKEN_API_CLIENTID
//   DYNAMICS_TOKEN_API_SECRET
//   DYNAMICS_API_BASEURL        "resource" OAuth (base URL de l'organisation Dynamics)
//   DYNAMICS_API_URL            endpoint Web API pour la creation de leads (ex: https://xxx.crm3.dynamics.com/api/data/v9.2/leads)
//   DYNAMICS_CAMPAIGN_ID        GUID de la campagne a associer au lead (odata bind)

export interface DynamicsLead {
  lastname: string;
  firstname: string;
  companyname: string;
  telephone1: string;
  emailaddress1: string;
  description: string;
  subject: number | string;
}

/** Mapping des libelles de service (formulaire) vers les codes numeriques Dynamics */
export const serviceMapping: Record<string, number> = {
  "Analyse et conception numérique": 176000000,
  "Analysis and digital design": 176000000,
  "Commercialisation numérique": 176000002,
  "Digital marketing": 176000002,
  "Développement sur mesure": 176000005,
  "Custom development": 176000005,
  "Expérience mobile": 176000004,
  "Mobile experience": 176000004,
  "Intégration de solutions d'affaires": 176000006,
  "Business solutions integration": 176000006,
  "Plusieurs de vos services": 176000007,
  "Several of your services": 176000007,
  "Intelligence artificielle": 176000009,
  "Artificial intelligence": 176000009,
};

function isDynamicsConfigured() {
  return Boolean(
    process.env.DYNAMICS_TOKEN_API_URL &&
      process.env.DYNAMICS_TOKEN_API_CLIENTID &&
      process.env.DYNAMICS_TOKEN_API_SECRET &&
      process.env.DYNAMICS_API_BASEURL &&
      process.env.DYNAMICS_API_URL
  );
}

async function getDynamicsToken(): Promise<string> {
  const formData = new URLSearchParams();
  formData.append("grant_type", "client_credentials");
  formData.append("client_id", process.env.DYNAMICS_TOKEN_API_CLIENTID!);
  formData.append("client_secret", process.env.DYNAMICS_TOKEN_API_SECRET!);
  formData.append("resource", process.env.DYNAMICS_API_BASEURL!);

  const response = await fetch(process.env.DYNAMICS_TOKEN_API_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Dynamics token request failed: ${response.status}`);
  }

  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error("Dynamics token response missing access_token");
  }
  return data.access_token;
}

/**
 * Cree un lead dans Dynamics 365. En l'absence de configuration (POC local
 * sans secrets), la fonction journalise le lead au lieu d'appeler l'API et
 * retourne { skipped: true } pour ne pas bloquer le formulaire de contact.
 */
export async function createDynamicsLead(
  lead: DynamicsLead,
  utmCampaign?: string
): Promise<{ skipped: boolean }> {
  if (!isDynamicsConfigured()) {
    console.warn(
      "[dynamics] Configuration manquante (.env) — lead journalisé localement au lieu d'être envoyé :",
      lead
    );
    return { skipped: true };
  }

  const token = await getDynamicsToken();

  const requestBody = {
    ...lead,
    ...(process.env.DYNAMICS_CAMPAIGN_ID && {
      ["campaignid@odata.bind"]: `/campaigns(${process.env.DYNAMICS_CAMPAIGN_ID})`,
    }),
    leadsourcecode: 8,
    ...(utmCampaign && { nms_annoncesource: utmCampaign }),
  };

  const response = await fetch(process.env.DYNAMICS_API_URL!, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Dynamics lead creation failed: ${response.status} ${text}`);
  }

  return { skipped: false };
}
