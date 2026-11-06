# HB3XDC – Radio ohne Grenzen

Statische Amateurfunk-Webseite (HTML, CSS, JavaScript), Stand: v51, 06.11.2026.

## GitHub Pages

1. Repository **gianniml19/hb3xdc-website** als **Public** anlegen (ohne README/Template).
2. **Den gesamten entpackten Inhalt** dieses Pakets in die Repository-Wurzel laden, also `index.html` direkt neben `CNAME`, `style.css`, `assets/` und `blog/`. Die ZIP-Datei selbst nicht hochladen.
3. GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.
4. Unter **Custom domain**: `hb3xdc.ch` prüfen oder eintragen. Datei `CNAME` ist bereits enthalten.
5. Bei Infomaniak **nur die Web-DNS-Einträge** auf GitHub Pages ändern; MX, SPF, DKIM, DMARC und weitere Mail-Einträge nicht verändern.
6. HTTPS in GitHub Pages aktivieren, sobald Zertifikat und DNS bereit sind. `https://hb3xdc.ch` und alle Unterseiten prüfen.

### DNS-Werte gemäß GitHub Pages-Dokumentation (prüfen vor dem Setzen)

| Name | Typ | Ziel |
| --- | --- | --- |
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | gianniml19.github.io |

Bestehende widersprechende A/AAAA/CNAME-Einträge für `@` und `www` vorher prüfen. Die vier AAAA-Records sind optional, aber nur dann ergänzen, wenn GitHub die aktuellen Werte bestätigt.

[GitHub-Dokumentation zu Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) · [Infomaniak DNS-Zone](https://www.infomaniak.com/de/support/faq/2000)

## Dateien & Datenschutz

- Keine PHP-/Datenbankanbindung erforderlich. Interaktive Funktionen laufen im Browser.
- `datenschutz.html` wurde **gegenüber der Originaldatei v51** auf das neue Hosting GitHub Pages umgestellt; bitte vor Veröffentlichung inhaltlich prüfen.
- Alle anderen Originaldateien der finalen v51 blieben unverändert; hinzugefügt wurden nur `CNAME`, `.nojekyll` und diese `README.md`.
- Bilder, Screenshots und Inhalte sind über das öffentliche Repository sichtbar. Quellen und Nutzungsrechte vor dem Veröffentlichen prüfen.
