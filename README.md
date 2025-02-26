<h1>What is NextJs</h1>
Next.js is a React framework used for building fast and scalable web applications. It provides features like server-side rendering (SSR), static site generation (SSG), client-side rendering (CSR), and API routes, making it ideal for both static websites and dynamic web applications.

<h1>Key Features of Next.js:</h1>
1) Server-Side Rendering (SSR) – Renders pages on the server for better SEO and performance.<br>
2) Static Site Generation (SSG) – Pre-renders pages at build time for fast loading.<br>
3) Incremental Static Regeneration (ISR) – Updates static content without rebuilding the entire site.<br>
4) API Routes – Allows building backend APIs within the Next.js app.<br>
5) Automatic Code Splitting – Loads only necessary JavaScript for better performance.<br>
6) Image Optimization – Uses the next/image component for efficient image handling.<br>
7) Middleware & Edge Functions – Handles requests before they reach the final destination.

<h1>Why Use Next.js?</h1>
1) SEO-friendly – SSR and SSG improve search engine rankings.<br>
2) Performance Optimized – Faster page loads with automatic optimizations.<br>
3) Built-in Routing – Uses a file-based routing system (pages/ directory).<br>
4) Full-stack Capabilities – Can handle both frontend and backend logic.


<h1>Server-Based Components in Next.js</h1>

In Next.js, server-based components (or Server Components) are a key feature introduced in React Server Components (RSC). They allow developers to render components entirely on the server, reducing client-side JavaScript and improving performance.
<h2>1. Default Server Components</h2>
By default, all components in the app/ directory are Server Components unless explicitly marked as Client Components.<br>This component renders on the server and sends only HTML to the client.
<h2>2. Fetching Data in Server Components</h2>
One advantage of Server Components is the ability to directly fetch data from databases or APIs without needing API routes or useEffect.<br>
The fetch runs on the server, and only static HTML is sent to the client.


<h2>3. When to Use Client Components?</h2>
Sometimes, we need Client Components when using:<br>

State (useState)<br>
Effects (useEffect)<br>
Event Listeners (onClick, onChange)<br>
Browser APIs (localStorage, window, document)

**📌 To create a Client Component, use "use client" at the top.**
1) Server Components (default in app/ directory) run on the server and send only HTML.<br>
2) They allow direct data fetching without exposing API routes.<br>
3) Client Components are needed for state, effects, and event listeners ("use client").<br>
4) You can mix Client Components inside Server Components.<br>
