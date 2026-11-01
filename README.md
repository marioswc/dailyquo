# DailyQuo

A minimalist web application that delivers a single inspirational quote for each day of the year.

Built to practice modern React patterns—including custom hooks, state management, and clean separation of concerns—while focusing on a distraction-free editorial interface.

## Features

- **Daily Quote Mapping:** Calculates the current day of the year (`0–364` or `0–365` on leap years) to display a consistent quote throughout the day.
- **Automatic Midnight Rollover:** Updates the date and transitions to the next day's quote automatically at `00:00` local time without requiring a page reload.
- **Leap-Year Aware Fetching:** Dynamically requests `365` or `366` quotes from the [DummyJSON Quotes API](https://dummyjson.com/docs/quotes) depending on the current year.
- **Modular React Architecture:** Separates UI components (`Main`, `Header`, `Footer`), custom hooks (`useCurrentDate`, `useQuotes`), and API services (`quotes.js`).

## Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + Inter Variable Font
- **Package Manager:** [pnpm](https://pnpm.io/)

## Project Structure

```text
src/
├── assets/          # Static assets and branding
├── components/      # UI components (Header, Main, Footer)
├── hooks/           # Custom React hooks (useCurrentDate, useQuotes)
└── services/        # External API integration (quotes.js)
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/marioswc/dailyquo.git
   cd dailyquo
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

### Build for Production

```bash
pnpm run build
pnpm run preview
```

## Roadmap & Status

**Status:** Active Development 🚧

- [x] Semantic layout and responsive editorial typography
- [x] Leap-year aware API service (`services/quotes.js`)
- [x] Custom hooks for date tracking and midnight auto-update (`useCurrentDate`, `useQuotes`)
- [x] Copy-to-clipboard functionality for the quote button
- [ ] **In Progress:** Client-side caching with `localStorage` to avoid redundant API requests and enable instant loads
