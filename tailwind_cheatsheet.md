# Tailwind CSS Cheat Sheet (Tailwind v4)

This cheat sheet covers the most commonly used Tailwind CSS classes. Since you are using Tailwind v4 in your Astro project, these will work perfectly.

## 📐 Layout & Spacing

| Class | Description | Example |
| :--- | :--- | :--- |
| `container` | Sets max-width to min-width of current breakpoint | `<div class="container mx-auto">` |
| `flex`, `grid` | Display as flexbox or grid | `<div class="flex items-center">` |
| `mx-auto` | Centers a block element horizontally | `margin-left: auto; margin-right: auto;` |
| `p-{n}` | Padding (e.g., `p-4`, `px-8`, `py-2`) | `p-4` (1rem / 16px) |
| `m-{n}` | Margin (e.g., `m-4`, `mt-8`, `mb-2`) | `mt-10` (top margin) |
| `w-{n}`, `h-{n}` | Width and Height (e.g., `w-full`, `w-1/2`, `h-screen`) | `w-64` (16rem) |
| `max-w-{size}` | Maximum width (e.g., `max-w-7xl`, `max-w-prose`) | `max-w-5xl` |

## 🎨 Colors & Fonts

| Class | Description | Example |
| :--- | :--- | :--- |
| `text-{color}` | Text color (e.g., `text-primary-600`, `text-white`) | `text-blue-500` |
| `bg-{color}` | Background color | `bg-neutral-100` |
| `font-{name}` | Font family (e.g., `font-sans`, `font-news`) | `font-news` |
| `text-{size}` | Text size (e.g., `text-sm`, `text-lg`, `text-4xl`) | `text-xl` |
| `font-bold` | Font weight | `font-medium`, `font-black` |

## 🏗️ Common UI Utility Classes

| Class | Description |
| :--- | :--- |
| `rounded-{size}` | Border radius (e.g., `rounded-lg`, `rounded-full`) |
| `shadow-{size}` | Box shadow (e.g., `shadow-md`, `shadow-xl`) |
| `border-{n}` | Border width and color (e.g., `border-2 border-gray-200`) |
| `opacity-{n}` | Opacity (e.g., `opacity-50`, `opacity-100`) |
| `cursor-pointer` | Changes cursor to pointer on hover |

## 📱 Responsive Prefixes

Tailwind uses a mobile-first approach. Apply classes for larger screens using prefixes:

- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)
- `xl:` (1280px)
- `2xl:` (1536px)

**Example:** `class="w-full md:w-1/2 lg:w-1/3"`

## ✨ Interactions (Hover/Focus)

- `hover:bg-primary-700` (Change background on hover)
- `group-hover:opacity-100` (Change child opacity when parent is hovered)
- `transition-all duration-300` (Smooth transitions)

---

> [!TIP]
> Since you have custom colors defined in your `global.css` (like `primary-50` through `primary-950`), you can use them exactly like standard Tailwind colors: `text-primary-600` or `bg-secondary-200`.
