import { cpSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const clientDir = resolve(projectRoot, 'dist', 'client');
const outDir = resolve(projectRoot, 'out');

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
cpSync(clientDir, outDir, { recursive: true });

const worker = await import('../dist/server/index.js');
const context = {
  waitUntil() {},
  passThroughOnException() {},
};
const response = await worker.default.fetch(
  new Request('https://capadocce-nogent.netlify.app/'),
  {},
  context,
);

if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}`);
}

const html = await response.text();
writeFileSync(resolve(outDir, 'index.html'), html);

console.log('Static export written to out/index.html');
