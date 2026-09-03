import { credentialId, ledger } from "../data";

const KEY = "aidisha-credentials";

export type Issued = {
  id: string;
  name: string;
  cohort: string;
  issued: string;
};

function loadIssued(): Issued[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Issued[]) : [];
  } catch {
    return [];
  }
}

export function issueCredential(name: string): Issued {
  const record: Issued = {
    id: credentialId(name),
    name: name.trim() || "Fellow",
    cohort: "07",
    issued: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
  };
  const next = [record, ...loadIssued().filter((r) => r.id !== record.id)].slice(0, 40);
  localStorage.setItem(KEY, JSON.stringify(next));
  return record;
}

export function lookupCredential(query: string): Issued | undefined {
  const q = query.trim().toUpperCase();
  if (!q) return undefined;
  const all: Issued[] = [
    ...ledger.map((r) => ({ id: r.id, name: r.name, cohort: r.cohort, issued: r.issued })),
    ...loadIssued(),
  ];
  return all.find((r) => r.id.toUpperCase() === q || r.name.toUpperCase() === q);
}

export function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
