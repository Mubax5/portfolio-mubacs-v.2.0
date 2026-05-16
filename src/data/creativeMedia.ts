export type CreativePlatform = "Local" | "Instagram" | "YouTube";
export type CreativeMediaType = "image" | "video" | "pdf" | "external";
export type CreativeLayout = "masonry" | "brand-grid" | "video" | "design-scroll" | "ui-scroll";

export interface CreativeMedia {
  title: string;
  category: string;
  src?: string;
  embedUrl?: string;
  sourceUrl: string;
  platform: CreativePlatform;
  mediaType: CreativeMediaType;
  organization?: string;
  fit?: "cover" | "contain";
  objectPosition?: string;
  section?: string;
}

export interface CreativeDesignGroup {
  slug: string;
  title: string;
  period: string;
  description: string;
  thumbnail?: CreativeMedia;
  items: CreativeMedia[];
  scrollItems: CreativeMedia[];
}

export interface CreativeCollection {
  title: string;
  slug: string;
  description: string;
  layout: CreativeLayout;
  items: CreativeMedia[];
  groups?: CreativeDesignGroup[];
}

export const INSTAGRAM_URL = "https://www.instagram.com/hilmi.m_/";
export const PINTEREST_URL = "https://id.pinterest.com/mubacs/";

const asset = (...parts: string[]) => `/${parts.join("/")}`;
const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const localImage = (
  category: string,
  parts: string[],
  organization?: string,
  title?: string,
  options: Pick<CreativeMedia, "fit" | "objectPosition" | "section"> = {}
): CreativeMedia => {
  const filename = parts[parts.length - 1].replace(/\.(webp|jpg|jpeg|png)$/i, "");
  const src = asset("img", ...parts);
  return {
    title: title ?? filename,
    category,
    src,
    sourceUrl: src,
    platform: "Local",
    mediaType: "image",
    organization,
    ...options,
  };
};

const localPdf = (category: string, parts: string[], organization?: string, title?: string): CreativeMedia => {
  const filename = parts[parts.length - 1].replace(/\.pdf$/i, "");
  const src = asset("img", ...parts);
  return {
    title: title ?? filename,
    category,
    src,
    sourceUrl: src,
    platform: "Local",
    mediaType: "pdf",
    organization,
  };
};

const video = (title: string, sourceUrl: string, embedUrl: string, platform: "Instagram" | "YouTube"): CreativeMedia => ({
  title,
  category: "gmv",
  embedUrl,
  sourceUrl,
  platform,
  mediaType: "video",
});

const imgList = (category: string, base: string[], filenames: string[], organization?: string) =>
  filenames.map((name) => localImage(category, [...base, name], organization));

const withSection = (items: CreativeMedia[], section: string) => items.map((item) => ({ ...item, section }));

const designGroup = (
  title: string,
  period: string,
  description: string,
  items: CreativeMedia[],
  scrollItems: CreativeMedia[] = [],
  thumbnail?: CreativeMedia
): CreativeDesignGroup => ({ slug: slugify(title), title, period, description, thumbnail: thumbnail ?? items[0] ?? scrollItems[0], items, scrollItems });

const personalProjectItems = [
  localImage("personal-project", ["Personal Project", "1.webp"], undefined, "The Form of Emptiness"),
  localImage("personal-project", ["Personal Project", "2.webp"], undefined, "Today Is the Perfect Time to Start"),
  localImage("personal-project", ["Personal Project", "3.webp"], undefined, "Just Lookin Forward"),
  localImage("personal-project", ["Personal Project", "4.webp"], undefined, "Showing Up"),
  localImage("personal-project", ["Personal Project", "5.webp"], undefined, "Find Your Path"),
  localImage("personal-project", ["Personal Project", "6.webp"], undefined, "CTRL + Z Doesn't Work in Real Life"),
  ...imgList("personal-project", ["Personal Project"], [
    "Efesienshit  Story.webp",
    "G30SPKI Infitech Edited.webp",
    "Hari Pahlawan 2024.webp",
    "Lock screen mobile .webp",
    "Lock screen.webp",
    "Oprec UKM Drumband (Remastered 2) Revisi.webp",
    "Page 1@4x.webp",
    "Poster Sumpah Pemuda no logo.webp",
    "Wallpaper.webp",
  ]),
];

const designGroups: CreativeDesignGroup[] = [
  designGroup(
    "Piforia",
    "Selamanya",
    "Visual angkatan 4 SMA Islam Al Azhar 24.",
    imgList("design", ["Design", "Piforia"], [
      "[Pifouria] Eligiboy - Fabyan.webp",
      "[Pifouria] Eligiboy - Ghalib.webp",
      "[Pifouria] Eligiboy - Ismail.webp",
      "[Pifouria] Eligiboy.webp",
      "[Pifouria] Ucapan Idul Fitri.webp",
      "IG Pifouria.webp",
    ], "Piforia")
  ),
  designGroup(
    "OSBA",
    "2021 - 2023",
    "Organisasi Santri Boarding Al Azhar, OSIS SMA Islam Al Azhar 24.",
    [
      ...imgList("design", ["Design", "OSBA"], [
        "Cover - Belajar Design Bareng 2023-2024.webp",
        "Countdown Penutupan MTABS H-7 2023.webp",
        "Sayembara Logo OSBA.webp",
        "Sertifikat CM Basket.webp",
        "Slide 2 - Belajar Design Bareng 2023-2024.webp",
      ], "OSBA"),
      ...imgList("design", ["Design", "OSBA", "Banner"], [
        "Akhirussanah.webp",
        "Banner HUT RI dan Penutupan MTABS 2023.webp",
        "Banner MTABS Aula Rostian1.webp",
        "Banner Pelantikan.webp",
        "Banner Seminar Motivasi 2023 Revisi.webp",
      ], "OSBA"),
    ],
    imgList("design", ["Design", "OSBA"], ["Scroll_part001.webp", "Scroll_part002.webp"], "OSBA")
  ),
  designGroup(
    "BEM PNC 2024/2025",
    "2024 - 2025",
    "Visual komunikasi BEM PNC periode 2024/2025, termasuk Duta Kampus PNC 2025 dan Bulan Pelatihan 2025.",
    [
      ...imgList("design", ["Design", "BEM", "2025"], [
        "Cover - FKMPI.webp",
        "Cover - Sidang AD ART.webp",
        "Cover CP.webp",
        "HARI RAYA IDUL FITRI.webp",
        "LDP BEM 2025.webp",
        "Open Selection Ketua & Wakil BEM.webp",
        "Slide 2 - FKMPI .webp",
        "Slide 2 - Sidang AD ART.webp",
        "Tamplate Live Report.webp",
        "Template New Post.webp",
        "Twibbon LDP 2025.webp",
      ], "BEM PNC"),
      ...imgList("design", ["Design", "BEM", "2025", "Kajian Isu"], [
        "Story Dampak Efesiensi Dana Pendidikan.webp",
        "Story Pernyataan Sikap UU TNI.webp",
      ], "BEM PNC"),
      ...imgList("design", ["Design", "BEM", "2025", "Kajian Isu", "Dampak Efesiensi Anggaran"], [
        "Cover - Dampak Efesiensi Dana Pendidikan.webp",
        "Slide 2 - Dampak Efesiensi Dana Pendidikan.webp",
        "Slide 3 - Dampak Efesiensi Dana Pendidikan.webp",
      ], "BEM PNC"),
      ...imgList("design", ["Design", "BEM", "2025", "Kajian Isu", "Efesiensi Anggaran.webp"], [
        "Cover - Efesiensi Anggaran.webp",
        "Slide 2 - Efesiensi Anggaran.webp",
        "Slide 3 - Efesiensi Anggaran.webp.webp",
        "Slide 4 - Efesiensi Anggaran.webp.webp",
      ], "BEM PNC"),
      ...withSection(
        [localImage("design", ["Logo", "Logo Bulan Pelatihan.webp"], "Bulan Pelatihan", "Logo Bulan Pelatihan")],
        "Bulan Pelatihan 2025 / Juni 2025"
      ),
      ...withSection(
        imgList("design", ["Design", "BEM", "2025", "Duta Kampus"], [
          "BG Gform Duta Kampus 2025.webp",
          "Border Livestream 1 Duta Kampus 2025.webp",
          "Flyer Open Tenant Duta Kampus 2025.webp",
          "Flyer Pemilihan Duta Kampus 2025.webp",
          "Poster Duta Kampus 2025 (Extended) Versi 12 Mei 2025.webp",
          "Story Open Tenant Duta Kampus 2025.webp",
        ], "Duta Kampus PNC"),
        "Duta Kampus PNC 2025 / April - Mei 2025"
      ),
    ],
    withSection(imgList("design", ["Design", "BEM", "2025", "Duta Kampus"], ["Scroll.webp"], "Duta Kampus PNC"), "Duta Kampus PNC 2025 / April - Mei 2025"),
    localImage("design", ["Design", "BEM", "2025", "Cover CP.webp"], "BEM PNC", "Cover CP")
  ),
  designGroup(
    "BEM PNC 2025/2026",
    "2025 - 2026",
    "Visual komunikasi BEM PNC periode 2025/2026, termasuk Open Recruitment, Audiensi Terbuka, dan September Hitam.",
    [
      ...imgList("design", ["Design", "BEM", "2026"], [
        "Cover - Berita Acara Sidang PO 25-26.webp",
        "Cover - Dokumentasi Forumpuan 2026.webp",
        "Cover - Hari Perempuan 2026.webp",
        "Cover - Idul Fitri 2026.webp",
        "Cover - Kajian SPPG Diangkat menjadi P3K.webp",
        "Cover - Perempuan yang melawan.webp",
        "Live Report.webp",
        "New Post.webp",
        "Oprec Atlet Cabor Casen Porseni 2026.webp",
        "Slide 2 - Berita Acara Sidang PO 25-26.webp",
        "Slide 2 - Dokumentasi Forumpuan 2026.webp",
        "Slide 2 - Hari Perempuan.webp",
        "Slide 2 - Kajian SPPG Diangkat menjadi P3K.webp",
        "Slide 2 - Perempuan yang melawan.webp",
      ], "BEM PNC"),
      ...withSection(
        [
          ...imgList("design", ["Design", "BEM", "2026", "Oprec Pengurus"], [
            "BANNER OPEN RECRUITMENT BEM PNC 2025-2026.webp",
            "H-1 OPREC BEM 2025_2026.webp",
            "Header Gform OPREC BEM 2025-2026.webp",
            "OPEN HOUSE BEM 2025-2026.webp",
            "OPREC BEM 2025_2026rev3.webp",
            "Sosialisasi OPREC BEM 2025_2026.webp",
          ], "BEM PNC"),
          ...imgList("design", ["Design", "BEM", "2026", "Oprec Pengurus", "Batch2"], [
            "Closed - OPREC BEM 2025_2026 BATCH 2.webp",
            "Extend - OPREC BEM 2025_2026 BATCH 2.webp",
            "Header Gform OPREC BEM 2025-2026 BATCH 2.webp",
            "OPREC BEM 2025_2026 BATCH 2.webp",
          ], "BEM PNC"),
        ],
        "Open Recruitment Pengurus / September - Oktober 2025"
      ),
      ...withSection(
        imgList("design", ["Design", "BEM", "2026", "Audiensi Terbuka"], [
          "Backdrop Audiensi Terbuka 2025.webp",
          "Border Livestream.webp",
          "Pamflet Audiensi Terbuka 2025.webp",
          "Pamflet Hari H Audiensi Terbuka 2025 1.webp",
        ], "BEM PNC"),
        "Audiensi Terbuka / Desember 2025"
      ),
      ...withSection(
        imgList("design", ["Design", "BEM", "2026", "September Hitam"], [
          "Audiensi Terbuka 2025.webp",
          "Cover - Kajian Isu Etanol.webp",
          "Hasil Konsolidasi 29 Agustus 2025.webp",
          "Kajian Isu Gaji DPR (0).webp",
          "Slide 2 - Kajian Isu Etanol.webp",
        ], "BEM PNC"),
        "September Hitam / Kajian Isu / 2025"
      ),
    ],
    [],
    localImage("design", ["Design", "BEM", "2026", "Cover - Berita Acara Sidang PO 25-26.webp"], "BEM PNC", "Cover - Berita Acara Sidang PO 25-26", { fit: "contain" })
  ),
  designGroup(
    "Ifest Vol 17",
    "Mei 2025 / Koordinator",
    "Diesnatalis Prodi Teknik Informatika.",
    imgList("design", ["Design", "Ifest"], [
      "Banner Digital IFEST_.webp",
      "Lanyard.jpg",
      "Logo IFEST 2025 .webp",
      "PES.webp",
      "Template Story Bolong.webp",
    ], "Ifest"),
    imgList("design", ["Design", "Ifest"], ["Scroll.webp"], "Ifest")
  ),
  designGroup(
    "PKKMB PNC 2025",
    "Juli - Agustus 2025 / Koordinator",
    "Visual system dan kebutuhan publikasi PKKMB PNC 2025.",
    imgList("design", ["Design", "PKKMB"], [
      "Lanyard.webp",
      "New post Story PKKMB 2025.webp",
      "QNA Story PKKMB 2025.webp",
      "Repost Story PKKMB 2025.webp",
      "Twibbon Gambar.webp",
      "Twibon Kakak Manjila.webp",
    ], "PKKMB PNC"),
    imgList("design", ["Design", "PKKMB"], [
      "Scroll_part001.webp",
      "Scroll_part002.webp",
      "Scroll_part003.webp",
      "Scroll_part004.webp",
    ], "PKKMB PNC")
  ),
  designGroup(
    "Diesnatalis PNC 2025",
    "September - Oktober 2025",
    "Visual panggung, gate, blueprint, dan publication scroll Diesnatalis PNC.",
    imgList("design", ["Design", "Diesnatalis", "Blueprint"], [
      "Desain Gate@2x.webp",
      "Desain Stage Dies Natalis PNC @2x.webp",
      "Stage-Part@2x.webp",
    ], "Diesnatalis PNC"),
    imgList("design", ["Design", "Diesnatalis"], [
      "Scroll_part001.webp",
      "Scroll_part002.webp",
      "Scroll_part003.webp",
    ], "Diesnatalis PNC")
  ),
  designGroup(
    "Madani Montessori",
    "Brand Visual",
    "Brand guideline dan visual pendukung dari folder Design.",
    [
      localImage("design", ["Design", "Madani montessori", "Instagram post.webp"], "Madani Montessori"),
      ...imgList("design", ["Design", "Madani montessori", "Visual"], [
        "Brand Guideline 1.webp",
        "Brand Guideline 2.webp",
        "Brand Guideline 3.webp",
        "Brand Guideline 4.webp",
      ], "Madani Montessori"),
    ]
  ),
];

const designPreviewItems = [
  localImage("design", ["Design", "BEM", "2026", "Cover - Berita Acara Sidang PO 25-26.webp"], "BEM PNC 2025/2026", "Cover - Berita Acara Sidang PO 25-26", { fit: "contain" }),
  localImage("design", ["Design", "BEM", "2026", "Cover - Kajian SPPG Diangkat menjadi P3K.webp"], "BEM PNC 2025/2026", "Cover - Kajian SPPG Diangkat menjadi P3K", { fit: "contain" }),
  localImage("design", ["Design", "BEM", "2026", "Oprec Atlet Cabor Casen Porseni 2026.webp"], "BEM PNC 2025/2026", "Oprec Atlet Cabor Casen Porseni 2026", { fit: "contain" }),
];

const designItems = [...designPreviewItems, ...designGroups.flatMap((group) => [...group.items, ...group.scrollItems])];

const brandIdentityItems = [
  localImage("brand-identity", ["Logo", "Logo OSBA 2023.webp"], "OSBA", "OSBA", { fit: "contain" }),
  localImage("brand-identity", ["Logo", "Logo PKKMB 25 v.2.webp"], "PKKMB", "PKKMB", { fit: "contain" }),
  localImage("brand-identity", ["Logo", "Logo Bulan Pelatihan.webp"], "Bulan Pelatihan", "Bulan Pelatihan", { fit: "contain" }),
  localImage("brand-identity", ["Logo", "Logo Pifouria .webp"], "Piforia", "Piforia", { fit: "contain" }),
  localImage("brand-identity", ["Other", "Welcome Feed Infinitech.webp"], "Infinitech", "Infinitech", { fit: "contain" }),
  localImage("brand-identity", ["Logo", "Filosofi Logo KRA 2024.webp"], "Prodi Gizi", "Prodi Gizi", { fit: "contain" }),
  localImage("brand-identity", ["Logo", "Filosofi Logo Kabinet Vikarta Vidya - BEM 2025 .webp"], "BEM PNC 2025", "BEM PNC 2025", { fit: "contain" }),
  localImage("brand-identity", ["Design", "Ifest", "Logo IFEST 2025 .webp"], "Ifest", "Ifest", { fit: "contain" }),
  localImage("brand-identity", ["Logo", "PAC Charcoal Grey@2x.webp"], "Diesnatalis PNC", "Diesnatalis PNC", { fit: "contain" }),
  localImage("brand-identity", ["Logo", "Logo DesainCuy.webp"], "DesainCuy", "DesainCuy", { fit: "contain" }),
  localImage("brand-identity", ["Logo", "Logo Zroxss.webp"], "Zroxss", "Zroxss", { fit: "contain" }),
  localPdf("brand-identity", ["Logo", "Final Logo Identity TI 1 C.pdf"], "Infinitech", "Final Logo Identity TI 1 C"),
  localPdf("brand-identity", ["Logo", "Gizi S1.pdf"], "Prodi Gizi", "Gizi S1 Brand PDF"),
  localPdf("brand-identity", ["Logo", "Logo Identity IFEST 2025.pdf"], "Ifest", "Logo Identity IFEST 2025"),
];

const otherItems = [
  localImage("other", ["Other", "Backdrop Pelatihan Digital Marketing - Baznaz Kabupaten Cilacap Rvs 6.webp"], "Baznas Kabupaten Cilacap", "Backdrop Pelatihan Digital Marketing - Baznas Kabupaten Cilacap", { fit: "contain" }),
];

const uiGroups: CreativeDesignGroup[] = [
  designGroup(
    "IMK",
    "2024",
    "Make-over Yale University of Art website. Dibuat sebagai scroll visual agar file tinggi tetap kebaca jelas.",
    [localImage("ui-visual-exploration", ["UI Visual Exploration", "IMK - Make Over YALE UNIVERSITY OF ART Website.webp"], "IMK", "IMK - Make Over YALE UNIVERSITY OF ART Website", { fit: "cover", objectPosition: "top" })],
    [localImage("ui-visual-exploration", ["UI Visual Exploration", "IMK - Make Over YALE UNIVERSITY OF ART Website.webp"], "IMK", "IMK - Full Scroll")]
  ),
  designGroup(
    "Siakad PNC",
    "2025",
    "Unofficial team project. Asset belum ada di folder visual saat ini.",
    [],
    []
  ),
];

export const creativeCollections: CreativeCollection[] = [
  {
    title: "Personal Project",
    slug: "personal-project",
    description: "Semua visual dari folder Personal Project.",
    layout: "masonry",
    items: personalProjectItems,
  },
  {
    title: "Design",
    slug: "design",
    description: "Semua desain dari folder Design, mengikuti struktur folder dan timeline project.",
    layout: "design-scroll",
    items: designItems,
    groups: designGroups,
  },
  {
    title: "GMV",
    slug: "gmv",
    description: "GMV dan short-form edit dari Instagram Reels dan YouTube Shorts.",
    layout: "video",
    items: [
      video("Instagram Reel / GMV", "https://www.instagram.com/reel/DAXTRhXy7Hm/", "https://www.instagram.com/reel/DAXTRhXy7Hm/embed", "Instagram"),
      video("YouTube Shorts / GMV", "https://www.youtube.com/shorts/l5puIUvimC4", "https://www.youtube.com/embed/l5puIUvimC4", "YouTube"),
    ],
  },
  {
    title: "Logo/Brand Visual",
    slug: "brand-identity",
    description: "Logo dan brand visual dari folder Logo, ditambah asset brand terkait yang ada di folder visual.",
    layout: "brand-grid",
    items: brandIdentityItems,
  },
  {
    title: "Other",
    slug: "other",
    description: "Semua visual dari folder Other.",
    layout: "masonry",
    items: otherItems,
  },
  {
    title: "UI Visual Exploration",
    slug: "ui-visual-exploration",
    description: "Eksplorasi UI dari folder UI Visual Exploration.",
    layout: "ui-scroll",
    items: uiGroups.flatMap((group) => [...group.items, ...group.scrollItems]),
    groups: uiGroups,
  },
];

export const allCreativeMedia = creativeCollections.flatMap((collection) => collection.items);

export function getCreativeCollection(slug?: string) {
  return creativeCollections.find((collection) => collection.slug === slug);
}
