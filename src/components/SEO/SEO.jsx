import React from "react";
import { Helmet } from "react-helmet-async";
import {
  getAbsoluteUrl,
  seoNavigation,
  siteSeo,
} from "../../seo/siteSeoData";

const buildBreadcrumbSchema = (page) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "홈",
      item: getAbsoluteUrl("/"),
    },
    ...(page.path === "/"
      ? []
      : [
          {
            "@type": "ListItem",
            position: 2,
            name: page.menu || page.title,
            item: getAbsoluteUrl(page.path),
          },
        ]),
  ],
});

const buildWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": siteSeo.organizationId,
      name: siteSeo.siteName,
      url: siteSeo.siteUrl,
      logo: getAbsoluteUrl("/logo512.ico"),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+82-${siteSeo.phone.replace(/^0/, "")}`,
        contactType: "customer service",
        areaServed: "KR",
        availableLanguage: "Korean",
      },
    },
    {
      "@type": "WebSite",
      "@id": siteSeo.websiteId,
      url: siteSeo.siteUrl,
      name: siteSeo.siteName,
      inLanguage: "ko-KR",
      publisher: { "@id": siteSeo.organizationId },
    },
  ],
});

const buildNavigationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: seoNavigation.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SiteNavigationElement",
      name: item.name,
      url: getAbsoluteUrl(item.path),
    },
  })),
});

const buildWebPageSchema = (page) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${getAbsoluteUrl(page.path)}#webpage`,
  url: getAbsoluteUrl(page.path),
  name: page.title,
  description: page.description,
  inLanguage: "ko-KR",
  isPartOf: { "@id": siteSeo.websiteId },
  about: { "@id": siteSeo.organizationId },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: getAbsoluteUrl(page.image || siteSeo.ogImage),
  },
});

const SEO = ({ page }) => {
  if (!page) return null;

  const canonicalUrl = getAbsoluteUrl(page.path);
  const imageUrl = getAbsoluteUrl(page.image || siteSeo.ogImage);
  const isHome = page.path === "/";

  const schemas = [
    buildWebPageSchema(page),
    buildBreadcrumbSchema(page),
    ...(isHome ? [buildWebsiteSchema(), buildNavigationSchema()] : []),
  ];

  return (
    <Helmet prioritizeSeoTags>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large"
      />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={siteSeo.locale} />
      <meta property="og:site_name" content={siteSeo.siteName} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
