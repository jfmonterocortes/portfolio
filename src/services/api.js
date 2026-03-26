const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

async function apiFetch(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const json = await res.json();
  return json.data;
}

export function getProjects() {
  return apiFetch('/api/v1/projects');
}

export function getProject(slug) {
  return apiFetch(`/api/v1/projects/${slug}`);
}

export function getSkills() {
  return apiFetch('/api/v1/skills');
}
