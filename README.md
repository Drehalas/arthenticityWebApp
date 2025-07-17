# Arthenticity

A blockchain-based art verification platform built with Next.js, designed by artists for artists under the European Artist Bank ecosystem.

## About Arthenticity

Arthenticity is an innovative Art Verification Product on Blockchain, Made By Artists for Artists under European Artist Bank. Our platform provides secure, transparent, and immutable authentication for artworks, ensuring provenance and protecting artists' intellectual property rights through advanced blockchain technology.

## Features

- Built with Next.js 14 (App Router)
- Styled with TailwindCSS and DaisyUI
- TypeScript support
- Responsive design
- Theme switching capability
- Blockchain art verification system
- Provenance tracking
- Digital certificate generation
- European Artist Bank integration

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd arthenticity
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
frontendAOAgents/
├── public/             # Static files
├── src/
│   ├── app/            # App router pages
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   └── components/     # Reusable components
├── .gitignore
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
├── postcss.config.js  # PostCSS configuration
├── README.md          # Project documentation
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Adding Agents

This project is designed to be a foundation for adding agents later. You can extend it by:

1. Creating agent-specific components in the `src/components` directory
2. Adding agent state management using React Context or a state management library
3. Implementing agent communication logic
4. Extending the UI to display agent activities and interactions

## Customizing the Theme

This project uses DaisyUI for theming. You can customize the available themes in the `tailwind.config.js` file:

```js
daisyui: {
  themes: ["light", "dark", "cupcake"], // Add or remove themes here
},
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.