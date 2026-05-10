# Mubacs Portfolio Customization Guide

## Intro

File utama: `src/components/WebGLOpening.tsx`

Yang bisa diedit:
- Urutan teks intro: cari `data-intro-word`, ubah `Mubacs/`, `Code/`, `Creative/`, `Visual/`.
- Final lockup: cari `data-final-item`, ubah teks atas, tengah, dan bawah.
- Durasi intro: ubah `duration`, `delay`, dan `stagger` di timeline GSAP.
- Transisi intro ke hero: bagian terakhir timeline mengatur `yPercent: -101` pada `wipeRef.current`, jadi intro slide ke atas dan hero muncul dari bawahnya.

## Intro Style

File style: `src/styles/globals.css`

Class penting:
- `.intro-type`: font khusus intro. Sekarang pakai `Geist`.
- `.intro-shell`: warna dasar intro.
- `.intro-gradient-layer`: gradasi animated background.
- `.intro-texture-layer`: animated texture/noise.
- `.intro-grid-layer`: grid halus di background.

Ubah feel intro:
- Lebih terang: naikkan opacity di `.intro-gradient-layer`.
- Lebih gelap: turunkan opacity layer gradient dan texture.
- Texture lebih kelihatan: naikkan `opacity` di `.intro-texture-layer`.
- Animasi lebih pelan: naikkan durasi `introGradientDrift` atau `introTextureSlide`.
- Timing hero: `WebGLOpening.tsx` memanggil `onRevealStart`, lalu `App.tsx` mengirim prop `heroRevealStarted` ke `HeroStage`.

## Global Text Motion

File: `src/components/GlobalTextMotion.tsx`

Efek semua teks:
- Blur awal: `filter: "blur(28px)"`.
- Jarak muncul dari bawah: `--text-reveal-y: "62px"`.
- Durasi fade-in: `duration: 1.45`.
- Delay antar teks: `stagger: 0.065`.
- Kekuatan parallax: `const depth = ...`.

Catatan:
- Reveal dibuat one-shot. Setelah selesai, `filter` dihapus supaya teks tidak ngeblur lagi saat scroll.
- Untuk mengecualikan elemen dari efek text motion, tambahkan `data-text-motion-ignore` pada parent.

## Section 2 / Manifesto

File: `src/components/ManifestoScene.tsx`

Yang bisa diedit:
- Baris teks: array `lines`.
- Kekuatan blur awal: `filter: "blur(46px)"`.
- Jarak muncul dari bawah: `y: 140`.
- Durasi fade-in: `duration: 1.65`.
- Jeda per baris: `stagger: 0.18`.
- Trigger scroll: `start: "top 88%"`.

Catatan:
- Section ini punya `data-text-motion-ignore`, jadi tidak ditimpa `GlobalTextMotion`.
- Ada fallback `requestAnimationFrame` supaya reveal tetap muncul kalau posisi section sudah masuk viewport saat ScrollTrigger refresh.

## Section Parallax

File: `src/components/ParallaxSection.tsx`

Yang bisa diedit:
- `speed`: seberapa jauh section bergerak.
- `fade`: opacity awal section.
- Section tidak lagi memakai scrub blur supaya tidak ngeblur ulang saat scroll.

## Hero Intro Sync

Files:
- `src/App.tsx`
- `src/components/WebGLOpening.tsx`
- `src/components/HeroStage.tsx`

Catatan:
- Saat intro aktif, scroll dikunci di `App.tsx` lewat `documentElement/body overflow = hidden` dan `lenis.stop()`.
- Intro memanggil `onRevealStart()` tepat sebelum panel intro slide ke atas.
- `App.tsx` mengirim `heroRevealStarted` ke `MainPage`, lalu ke `HeroStage`.
- Hero reveal sekarang pakai CSS transition, bukan GSAP timeline, supaya tidak fade-in dua kali di React StrictMode.

## Hero

File: `src/components/HeroStage.tsx`

Yang bisa diedit:
- Kata besar hero ada di array `heroWords`.
- Parallax scroll per kata ada di `depth`.
- Hero tidak punya hover effect.
- Hero dikecualikan dari `GlobalTextMotion` dengan `data-text-motion-ignore` supaya tidak kena blur/fade-in kedua.

## Gallery

File: `src/components/InfiniteWarpGallery.tsx`

Yang bisa diedit:
- Kemiringan carousel: class `rotate-[3deg]`.
- Ukuran card mobile: `h-[12.5rem] w-[12.5rem]`.
- Ukuran card desktop: `md:h-[18rem] md:w-[23rem]`.
- Jarak antar row: `space-y-16 md:space-y-24`.
- Jarak section: `pb-6 pt-16 md:pb-8 md:pt-20`.
- Jarak section 4 ke 5 juga dikontrol dari `src/components/CapabilityKineticList.tsx` lewat `pt-6 md:pt-8`.

## Section 5 dan 6

Section 5:
- File: `src/components/CapabilityKineticList.tsx`.
- Row reveal/parallax diatur di selector `[data-capability-row]`.

Section 6:
- File: `src/components/EditorialGallery.tsx`.
- Background putih ada di class `bg-white text-black`.
- Panel hover invert di class `hover:bg-black hover:text-white`.

## Responsive Pages

Files:
- `src/pages/PortoDev.tsx`
- `src/pages/PortoVisual.tsx`
- `src/pages/DevProjectDetail.tsx`
- `src/pages/CreativeCategoryPage.tsx`
- `src/pages/CreativeOrganizationPage.tsx`

Tips edit:
- Kalau headline kepotong, pakai `break-words` dan turunkan ukuran `.text-hero` di `src/styles/globals.css`.
- Mobile padding utama ada di `px-5 pt-28`.
- Tablet/desktop padding ada di `md:px-12 md:pt-32`.
- Grid mobile dibuat stack dulu, lalu naik ke `sm:grid-cols-2` atau `md:grid-cols-*`.

## Porto Dev / Visual Text Motion

Files:
- `src/pages/PortoDev.tsx`
- `src/pages/PortoVisual.tsx`
- `src/components/DevProjectIndex.tsx`
- `src/components/CreativeCategoryIndex.tsx`

Yang bisa diedit:
- Hero page text memakai selector `data-page-text`.
- Blur awal page text: `filter: "blur(34px)"`.
- Jarak muncul: `y: 82`.
- Durasi: `duration: 1.35`.
- Parallax tiap hero text: `y: -(14 + i * 6)`.
- List Porto Dev: selector `[data-project-row]`.
- List Visual Creative: selector `[data-cat-row]`.

## Image Guide

Cara paling gampang:
- Taruh gambar di folder `public/images/`.
- Pakai path seperti `/images/nama-file.webp`.
- Format rekomendasi: `.webp` untuk ringan, `.png` hanya kalau butuh transparan.

Ukuran gambar rekomendasi:
- Featured Work visual: `1600x1200` px, rasio `4:3`.
- Dev project hero/detail visual: `1920x960` px, rasio `2:1`.
- Creative works archive: `1600x1200` px, rasio `4:3`.
- Gallery carousel card: `1280x1000` px, rasio sekitar `1.28:1`.
- Category/organization thumbnail kalau nanti ditambah: `1200x900` px, rasio `4:3`.
- Social/layout preview vertikal kalau butuh: `1080x1350` px, rasio `4:5`.
- Story/reel preview kalau butuh: `1080x1920` px, rasio `9:16`.
- Logo/mark transparan: `1000x1000` px `.png`.

Tempat edit gambar sekarang:
- Featured Work placeholder: `src/components/FeaturedProjectSlider.tsx`.
- Dev detail placeholder: `src/pages/DevProjectDetail.tsx`.
- Creative work placeholder: `src/pages/CreativeOrganizationPage.tsx`.
- Data project: `src/data/devProjects.ts`.
- Data visual archive: `src/data/creativeOrganizations.ts`.

Contoh pakai gambar:
```tsx
<img
  src="/images/project-cover.webp"
  alt="Project cover"
  className="h-full w-full object-cover"
/>
```

Rule penting:
- Untuk container `aspect-[4/3]`, pakai gambar `4:3`.
- Untuk container `aspect-[16/8]`, pakai gambar `2:1`.
- Kalau gambar terasa kepotong, ubah `object-cover` jadi `object-contain`, tapi layout jadi ada ruang kosong.

## Cloudflare Deploy

Build Cloudflare:
- Build command: `npm run build`.
- Deploy command untuk form yang wajib diisi: `npx wrangler deploy`.
- Root/path: `/`.

File deploy:
- `wrangler.toml`: deploy sebagai Cloudflare Workers Static Assets dari folder `dist`.
- `not_found_handling = "single-page-application"` di `wrangler.toml`: fallback route React Router supaya `/porto-dev/...` dan `/porto-visual/...` tidak 404.

Catatan:
- Jangan pakai `npx wrangler deploy` tanpa `wrangler.toml`, nanti Wrangler auto-detect Vite dan bisa minta Vite 6.
- Jangan pakai `npx wrangler pages deploy...` di form Worker Build kalau token Cloudflare tidak punya Pages Edit.
- Jangan pakai `public/_redirects` untuk deploy Workers Static Assets ini, karena rule `/* /index.html 200` bisa dianggap infinite loop oleh Cloudflare.
- Warning chunk `>500 kB`, `npm audit`, dan deprecated package tidak bikin deploy gagal.
