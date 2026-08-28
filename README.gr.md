<p align="center">
  <a href="https://nebula.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Nebula logo">
    </picture>
  </a>
</p>
<p align="center">Ο πράκτορας τεχνητής νοημοσύνης ανοικτού κώδικα για προγραμματισμό.</p>
<p align="center">
  <a href="https://nebula.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/nebula-ai"><img alt="npm" src="https://img.shields.io/npm/v/nebula-ai?style=flat-square" /></a>
  <a href="https://github.com/anomalyco/nebula/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/anomalyco/nebula/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a>
</p>

[![Nebula Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://nebula.ai)

---

### Εγκατάσταση

```bash
# YOLO
curl -fsSL https://nebula.ai/install | bash

# Διαχειριστές πακέτων
npm i -g nebula-ai@latest        # ή bun/pnpm/yarn
scoop install nebula             # Windows
choco install nebula             # Windows
brew install anomalyco/tap/nebula # macOS και Linux (προτείνεται, πάντα ενημερωμένο)
brew install nebula              # macOS και Linux (επίσημος τύπος brew, λιγότερο συχνές ενημερώσεις)
sudo pacman -S nebula            # Arch Linux (Σταθερό)
paru -S nebula-bin               # Arch Linux (Τελευταία έκδοση από AUR)
mise use -g nebula               # Οποιοδήποτε λειτουργικό σύστημα
nix run nixpkgs#nebula           # ή github:anomalyco/nebula με βάση την πιο πρόσφατη αλλαγή από το dev branch
```

> [!TIP]
> Αφαίρεσε παλαιότερες εκδόσεις από τη 0.1.x πριν από την εγκατάσταση.

### Εφαρμογή Desktop (BETA)

Το Nebula είναι επίσης διαθέσιμο ως εφαρμογή. Κατέβασε το απευθείας από τη [σελίδα εκδόσεων](https://github.com/anomalyco/nebula/releases) ή το [nebula.ai/download](https://nebula.ai/download).

| Πλατφόρμα             | Λήψη                               |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `nebula-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `nebula-desktop-mac-x64.dmg`     |
| Windows               | `nebula-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm`, ή AppImage         |

```bash
# macOS (Homebrew)
brew install --cask nebula-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/nebula-desktop
```

#### Κατάλογος Εγκατάστασης

Το script εγκατάστασης τηρεί την ακόλουθη σειρά προτεραιότητας για τη διαδρομή εγκατάστασης:

1. `$NEBULA_INSTALL_DIR` - Προσαρμοσμένος κατάλογος εγκατάστασης
2. `$XDG_BIN_DIR` - Διαδρομή συμβατή με τις προδιαγραφές XDG Base Directory
3. `$HOME/bin` - Τυπικός κατάλογος εκτελέσιμων αρχείων χρήστη (εάν υπάρχει ή μπορεί να δημιουργηθεί)
4. `$HOME/.nebula/bin` - Προεπιλεγμένη εφεδρική διαδρομή

```bash
# Παραδείγματα
NEBULA_INSTALL_DIR=/usr/local/bin curl -fsSL https://nebula.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://nebula.ai/install | bash
```

### Πράκτορες

Το Nebula περιλαμβάνει δύο ενσωματωμένους πράκτορες μεταξύ των οποίων μπορείτε να εναλλάσσεστε με το πλήκτρο `Tab`.

- **build** - Προεπιλεγμένος πράκτορας με πλήρη πρόσβαση για εργασία πάνω σε κώδικα
- **plan** - Πράκτορας μόνο ανάγνωσης για ανάλυση και εξερεύνηση κώδικα
  - Αρνείται την επεξεργασία αρχείων από προεπιλογή
  - Ζητά άδεια πριν εκτελέσει εντολές bash
  - Ιδανικός για εξερεύνηση άγνωστων αρχείων πηγαίου κώδικα ή σχεδιασμό αλλαγών

Περιλαμβάνεται επίσης ένας **general** υποπράκτορας για σύνθετες αναζητήσεις και πολυβηματικές διεργασίες.
Χρησιμοποιείται εσωτερικά και μπορεί να κληθεί χρησιμοποιώντας `@general` στα μηνύματα.

Μάθετε περισσότερα για τους [πράκτορες](https://nebula.ai/docs/agents).

### Οδηγός Χρήσης

Για περισσότερες πληροφορίες σχετικά με τη ρύθμιση του Nebula, [**πλοηγήσου στον οδηγό χρήσης μας**](https://nebula.ai/docs).

### Συνεισφορά

Εάν ενδιαφέρεσαι να συνεισφέρεις στο Nebula, διαβάστε τα [οδηγό χρήσης συνεισφοράς](./CONTRIBUTING.md) πριν υποβάλεις ένα pull request.

### Δημιουργία πάνω στο Nebula

Εάν εργάζεσαι σε ένα έργο σχετικό με το Nebula και χρησιμοποιείτε το "nebula" ως μέρος του ονόματός του, για παράδειγμα "nebula-dashboard" ή "nebula-mobile", πρόσθεσε μια σημείωση στο README σας για να διευκρινίσεις ότι δεν είναι κατασκευασμένο από την ομάδα του Nebula και δεν έχει καμία σχέση με εμάς.

---

**Γίνε μέλος της κοινότητάς μας** [Discord](https://discord.gg/nebula) | [X.com](https://x.com/nebula)
