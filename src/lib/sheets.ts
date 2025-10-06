export type RowObject = Record<string, any>;

interface GvizCell { v?: any; f?: string }
interface GvizRow  { c?: GvizCell[] }
interface GvizTable{ cols?: { label?: string }[]; rows?: GvizRow[] }

export async function fetchGvizAsObjects(
  spreadsheetId: string,
  gid: string | number = 0,
  opts?: {
    headerRowIndex?: number;
    fallbackBase?: number;
    skipEmptyHeaderRows?: boolean;
  }
): Promise<RowObject[]> {
  const headerRowIndex = opts?.headerRowIndex ?? 0;
  const fallbackBase   = opts?.fallbackBase ?? 1;
  const skipEmptyHeaderRows = opts?.skipEmptyHeaderRows ?? false;

  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&headers=0&gid=${gid}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`gviz fetch error: ${res.status}`);

  const text = await res.text();
  const json = JSON.parse(text.replace(/^[^{]+/, '').replace(/[^}]+$/, ''));
  const table: GvizTable | undefined = json?.table;
  const allRows: GvizRow[] = Array.isArray(table?.rows) ? table!.rows! : [];
  if (!allRows.length) return [];

  let headerIdx = headerRowIndex;
  if (skipEmptyHeaderRows) {
    while (headerIdx < allRows.length) {
      const c = allRows[headerIdx]?.c ?? [];
      const hasAny = c.some(cell => cell?.v !== undefined && String(cell.v).trim() !== '');
      if (hasAny) break;
      headerIdx++;
    }
    if (headerIdx >= allRows.length) return [];
  }

  const headerCells = Array.isArray(allRows[headerIdx]?.c) ? allRows[headerIdx]!.c! : [];
  const headers: string[] = headerCells.map((cell, i) => {
    const raw = cell?.v;
    const key = (typeof raw === 'string' || typeof raw === 'number') ? String(raw).trim() : '';
    return key || `col${i + fallbackBase}`;
  });

  const dataRows = allRows.slice(headerIdx + 1);
  return dataRows.map(r => {
    const obj: RowObject = {};
    const cells = Array.isArray(r?.c) ? r.c! : [];
    headers.forEach((key, i) => {
      obj[key] = cells[i]?.v ?? null;
    });
    return obj;
  });
}