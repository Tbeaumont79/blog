
import { getHighlighter, Highlighter } from 'shiki';

let highlighter: Highlighter;

export async function initShiki() {
  if (!highlighter) {
    highlighter = await getHighlighter({
      // Vous pouvez spécifier le thème de votre choix ici
      // Consultez la liste des thèmes disponibles sur le repo Shiki
      theme: 'nord',
    });
  }
}

export function highlightCode(code: string, lang: string) {
  return highlighter.codeToHtml(code, { lang });
}
