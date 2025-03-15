<h1>1=>What is NextJs</h1>
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


<h1>2=>Server-Based Components in Next.js</h1>

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


<h1>3=>Components in nextjs</h1>
<h1>Image, Script, and Link Components in Next.js</h1>
Next.js provides optimized built-in components for handling images, scripts, and links efficiently. Here’s how to use them:

<h2>1️⃣ next/image (Optimized Image Component):</h2>
Next.js provides an *<Image>* component that automatically optimizes images by lazy loading, resizing, and serving them in modern formats.

<h4>Features of next/image</h4>
✅ Automatic Optimization – Images are resized and optimized.<br>
✅ Lazy Loading – Only loads when visible in viewport.<br>
✅ Responsive – Automatically adjusts size for different devices.<br>
✅ Modern Formats – Converts to WebP when supported.

<h2>2️⃣ next/script (Optimized Script Loading):</h2>
The <Script> component optimizes how external scripts are loaded in Next.js, improving performance.

<h4>Script Loading Strategies</h4>
beforeInteractive – Loads script before page is interactive.<br>
afterInteractive (default) – Loads script after hydration.<br>
lazyOnload – Loads script after page fully loads.<br>
✅ Improves performance by deferring unnecessary scripts.<br>
✅ Avoids render-blocking issues.<br>
✅ Better SEO and UX as scripts load efficiently.

<h2>3️⃣ next/link (Optimized Client-side Navigation):</h2>
The <Link> component enables client-side navigation between pages without full page reloads.

<h4>Why Use next/link?</h4>
✅ Pre-fetching – Loads page in the background for instant navigation.<br>
✅ Client-side Routing – No full page reloads.<br>
✅ SEO-friendly – Works with crawlers better than window.location.href.

<h1>4=>Creating an API Route in App Router</h1>
In Next.js (App Router), API routes are handled within the app directory using the Route Handlers feature. Unlike the Pages Router (pages/api/), API routes in the App Router are defined inside the app/api/ directory using the request handlers (GET, POST, etc.) within server components.

<h2>🔹 Creating an API Route in App Router:</h2>
You define API routes inside the app/api/ folder using route.js (JavaScript) .

<h2>🔹 Handling Different HTTP Methods:</h2>
Next.js App Router supports handling multiple HTTP methods in the same file .
Handling GET, POST, PUT, DELETE Requests
import { NextResponse } from "next/server";

export async function POST(request) {}<br>
 export async function GET(request) {}<br>
 export async function HEAD(request) {}<br>
  export async function PUT(request) {}<br>
  export async function DELETE(request) {}<br>
  export async function PATCH(request) {}<br>
  If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and set the appropriate Response `Allow` header depending on the other methods defined in the Route Handler.<br> export async function OPTIONS(request) {}

<h2>🔹 Handling Route Parameters (Dynamic API Routes)</h2>
To create dynamic API routes, use folder-based routing /api/user/:id .

<h1> 5=> Authentication in Next.js</h1>
This guide provides an overview of implementing authentication in a Next.js application. We will use NextAuth.js, a popular authentication library for Next.js, and JWT (JSON Web Tokens) for session management.<br>
<h2>Prerequisites</h2>
Node.js installed<br>
A Next.js application setup<br>
Basic knowledge of React and Next.js

<h2>Installation:</h2>
To get started, install the required dependencies:
npm install next-auth

<h1>Setting Up Authentication with NextAuth.js:</h1>
1.Create an API route for authentication:<br>Inside the pages/api/auth/ directory, create [...nextauth].js<br><br>
2.Set up environment variables:<br>Create a .env.local file in the root of your project:<br> Replace your_github_client_id and your_github_client_secret with actual GitHub OAuth credentials.<br><br>

3.Add authentication to your application:<br>Use useSession from next-auth/react in your components.


<h1>6=>Dynamic Routes:</h1>
Dynamic routing allows for flexible URL structures, enabling pages or endpoints to be generated based on dynamic parameters. This is useful in applications that require user profiles, product pages, or any resource-based navigation.

<h2>Features:</h2>
1) Enables pages to be generated dynamically <br>
2) Uses route parameters to fetch and display relevant content<br>
3) Supports nested and optional routes

<h2>Benefits</h2>

SEO-friendly URLs<br>
Improved user experience<br>
Scalability for large applications

<h2>Using useRouter:</h2>
The useRouter hook in Next.js provides access to the router object, which contains information about the current route. This is useful for fetching dynamic route parameters and handling navigation programmatically.

<h2>Key Features of useRouter</h2>

Access to dynamic route parameters (router.query)<br>
Programmatic navigation using router.push() and router.replace() <br>
Detect route changes with router.events
