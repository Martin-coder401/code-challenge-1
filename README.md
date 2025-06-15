# Week 1 Code Challenges

**Repository:** [Martin-coder401/code-challenge-1](https://github.com/Martin-coder401/code-challenge-1)

This repository contains three JavaScript utilities, each in its own folder reflecting the Week 1 Code Challenges:

* **`chaibora/`** — Chai Bora Ingredient Calculator
* **`bodabodafarecalculator/`** — Boda Boda Ride Fare Estimator
* **`mobileMoneyEstimator/`** — Mobile Money Transaction Fee Estimator

---

## 🔍 Prerequisites

* A modern web browser (Chrome, Firefox, Edge, Safari)
* [Node.js](https://nodejs.org/) (v12+) if you want to run via command line
* (Optional) **Live Server** for auto-reloading:

  ```bash
  npm install -g live-server
  ```

---

## 🚀 Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Martin-coder401/code-challenge-1.git
   cd code-challenge-1
   ```

2. **Install `prompt-sync`** (for Node.js mode):

   ```bash
   npm install prompt-sync
   ```

3. **(Optional) Start Live Server**:

   ```bash
   live-server .
   ```

---

## ▶️ Running the Challenges

You can run each challenge either in the browser (using the built-in `prompt()`) or in Node.js (using `prompt-sync`).

### 1. Chai Bora Ingredient Calculator

* **Folder:** `chaibora/`
* **HTML wrapper:** `chaibora/chai.html`
* **Script:** `chaibora/chai.js`

#### Browser Mode

```bash
# macOS
o pen chaibora/chai.html
# Windows
start chaibora/chai.html
# Linux
xdg-open chaibora/chai.html
```

1. When prompted, enter the number of chai cups.
2. Open **Console** (F12) to view ingredient totals.

#### Node.js Mode

```bash
cd chaibora
node chai.js
```

Enter number of cups at the prompt, then see output in terminal.

---

### 2. Boda Boda Ride Fare Estimator

* **Folder:** `bodabodafarecalculator/`
* **HTML wrapper:** `bodabodafarecalculator/fare.html`
* **Script:** `bodabodafarecalculator/fare.js`

#### Browser Mode

```bash
open bodabodafarecalculator/fare.html
```

1. Enter distance (km) when prompted.
2. Check **Console** for fare breakdown.

#### Node.js Mode

```bash
cd bodabodafarecalculator
node fare.js
```

Enter distance at the prompt; view results in terminal.

---

### 3. Mobile Money Transaction Fee Estimator

* **Folder:** `mobileMoneyEstimator/`
* **HTML wrapper:** `mobileMoneyEstimator/fee.html`
* **Script:** `mobileMoneyEstimator/fee.js`

#### Browser Mode

```bash
open mobileMoneyEstimator/fee.html
```

1. Enter amount (KES) when prompted.
2. View transaction fee and total debit in **Console**.

#### Node.js Mode

```bash
cd mobileMoneyEstimator
node fee.js
```

Enter amount at prompt; view fee and total in terminal.

---

## 📝 Author & License

* **Author:** Martin Muthaura
* **License:** MIT

Feel free to open an issue or submit a pull request for improvements or bug fixes!
