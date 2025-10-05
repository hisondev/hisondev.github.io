// src/lib/sheets.ts
export type RowObject = Record<string, any>;

export async function fetchGvizAsObjects(
    spreadsheetId: string,
    gid: string | number = 0
): Promise<RowObject[]> {
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&gid=${gid}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`gviz fetch error: ${res.status}`);

    const text = await res.text();
    const json = JSON.parse(text.replace(/^[^{]+/, '').replace(/[^}]+$/, ''));
    const table = json.table as {
        cols: { label?: string }[];
        rows: { c: { v: any }[] }[];
    };

    // label이 비어있을 대비해 string 보장 & fallback
    const headers: string[] = table.cols.map((c, i) => (c.label && String(c.label).trim()) || `col${i}`);

    return table.rows.map((r) => {
        const obj: RowObject = {};
        r.c.forEach((cell, i) => {
        const key = headers[i] ?? `col${i}`;   // ✅ undefined 방어
        obj[key] = cell?.v ?? null;
        });
        return obj;
    });
}