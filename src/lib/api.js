const API_URL = import.meta.env.VITE_API_URL;

async function request(path, options) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status}`);
  }
  return res.json();
}

export function createDiagnosticSubmission(payload) {
  return request("/diagnostics", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getDiagnosticSubmission(id) {
  return request(`/diagnostics/${id}`);
}
