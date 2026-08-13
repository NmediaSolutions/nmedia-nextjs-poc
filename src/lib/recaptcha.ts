// Verification serveur du jeton reCAPTCHA v2. Le site source ne validait le
// jeton que cote client (presence non nulle) ; ici on ajoute la verification
// serveur aupres de Google (bonne pratique), avec repli permissif si
// RECAPTCHA_SECRET_KEY n'est pas configuree (POC local).

export async function verifyRecaptcha(token: string | null | undefined): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    console.warn("[recaptcha] RECAPTCHA_SECRET_KEY non configurée — vérification ignorée (POC).");
    return true;
  }

  if (!token) return false;

  const params = new URLSearchParams({ secret, response: token });
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const data = (await response.json()) as { success?: boolean };
  return Boolean(data.success);
}
