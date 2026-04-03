import { Head, usePage } from '@inertiajs/react';

type SeoType = 'website' | 'article';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface SeoSharedSettings {
    site_name?: string | null;
    title_suffix?: string | null;
    default_description?: string | null;
    description_template?: string | null;
    default_image?: string | null;
    default_robots?: string | null;
    twitter_site?: string | null;
    twitter_creator?: string | null;
    facebook_app_id?: string | null;
    page_overrides?: Array<{
        path?: string | null;
        title?: string | null;
        description?: string | null;
        image?: string | null;
        robots?: string | null;
        no_index?: boolean | null;
    }> | null;
}

interface SharedPageProps {
    [key: string]: unknown;
    appUrl?: string | null;
    seoSettings?: SeoSharedSettings | null;
}

interface SeoProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    type?: SeoType;
    noIndex?: boolean;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    breadcrumbs?: BreadcrumbItem[];
}

const SITE_NAME = 'Masjid Agung Al-Mukarram';
const DEFAULT_IMAGE = '/images/logomasjid.png';

function toAbsoluteUrl(baseUrl: string, pathOrUrl: string): string {
    if (!pathOrUrl) {
        return baseUrl;
    }

    if (/^https?:\/\//i.test(pathOrUrl)) {
        return pathOrUrl;
    }

    if (!baseUrl) {
        return pathOrUrl;
    }

    const normalizedPath = pathOrUrl.startsWith('/')
        ? pathOrUrl
        : `/${pathOrUrl}`;

    return `${baseUrl}${normalizedPath}`;
}

function resolveStoragePath(path: string | null | undefined): string {
    if (!path) {
        return DEFAULT_IMAGE;
    }

    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('/')) {
        return path;
    }

    return `/storage/${path}`;
}

function normalizePath(path: string): string {
    const cleanPath = path.split('?')[0].trim();

    if (!cleanPath || cleanPath === '/') {
        return '/';
    }

    return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
}

function findPageOverride(
    pagePath: string,
    overrides: SeoSharedSettings['page_overrides'],
) {
    const items = overrides || [];

    // Exact path takes highest priority.
    const exactMatch = items.find((item) => normalizePath(item?.path || '') === pagePath);
    if (exactMatch) {
        return exactMatch;
    }

    // Wildcard support: /berita-detail/*, /opini/*, etc.
    const wildcardMatches = items
        .filter((item) => (item?.path || '').includes('*'))
        .map((item) => ({
            item,
            pattern: normalizePath(item?.path || ''),
        }))
        .filter(({ pattern }) => {
            const prefix = pattern.split('*')[0];
            return pagePath.startsWith(prefix);
        })
        .sort((a, b) => b.pattern.length - a.pattern.length);

    return wildcardMatches[0]?.item;
}

function humanizeSegment(segment: string): string {
    if (segment.toLowerCase() === 'zis') {
        return 'ZIS';
    }

    return segment
        .replace(/[-_]/g, ' ')
        .split(' ')
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function resolveDescriptionTemplate(
    template: string,
    payload: { title: string; site: string; path: string },
): string {
    return template
        .replaceAll('{title}', payload.title)
        .replaceAll('{site}', payload.site)
        .replaceAll('{path}', payload.path);
}

function resolveDescription(
    title: string,
    siteName: string,
    pagePath: string,
    descriptionTemplate?: string | null,
): string {
    const fallbackTemplate = '{title} di {site}. Informasi resmi, terbaru, dan terpercaya.';

    return resolveDescriptionTemplate(descriptionTemplate || fallbackTemplate, {
        title,
        site: siteName,
        path: pagePath,
    });
}

function resolveBreadcrumbs(path: string, title: string): BreadcrumbItem[] {
    const segments = path.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [{ name: 'Beranda', url: '/' }];

    if (segments.length === 0) {
        return items;
    }

    let currentPath = '';
    segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const isLast = index === segments.length - 1;

        let name = humanizeSegment(segment);

        if (isLast && (segments[index - 1] === 'berita-detail' || segments[index - 1] === 'opini-detail')) {
            name = title;
        }

        items.push({ name, url: currentPath });
    });

    return items;
}

export default function Seo({
    title,
    description,
    image,
    url,
    type = 'website',
    noIndex = false,
    author,
    publishedTime,
    modifiedTime,
    breadcrumbs,
}: SeoProps) {
    const page = usePage<SharedPageProps>();
    const appUrl = (page.props.appUrl || '').replace(/\/+$/, '');
    const seoSettings = page.props.seoSettings ?? null;
    const siteName = seoSettings?.site_name || SITE_NAME;
    const titleSuffix = seoSettings?.title_suffix || `| ${siteName}`;
    const defaultDescription = seoSettings?.default_description || null;
    const descriptionTemplate = seoSettings?.description_template || null;
    const defaultImagePath = resolveStoragePath(seoSettings?.default_image);
    const defaultRobots = seoSettings?.default_robots || 'index,follow';
    const pagePath = normalizePath(page.url || '/');
    const pageOverride = findPageOverride(pagePath, seoSettings?.page_overrides);
    const pageTitle = pageOverride?.title?.trim() || title;
    const finalTitle = pageTitle.includes('|') ? pageTitle : `${pageTitle} ${titleSuffix}`;
    const canonicalUrl = toAbsoluteUrl(appUrl, url || pagePath);
    const overrideImagePath = resolveStoragePath(pageOverride?.image);
    const imageUrl = toAbsoluteUrl(appUrl, image || overrideImagePath || defaultImagePath);
    const seoDescription =
        pageOverride?.description?.trim()
        || description
        || defaultDescription
        || resolveDescription(finalTitle, siteName, pagePath, descriptionTemplate);
    const forceNoIndex = noIndex || Boolean(pageOverride?.no_index);
    const robotsContent = forceNoIndex
        ? 'noindex,nofollow'
        : pageOverride?.robots || defaultRobots;
    const breadcrumbItems = breadcrumbs || resolveBreadcrumbs(pagePath, title);

    const schemaGraph: Array<Record<string, unknown>> = [
        {
            '@type': 'Organization',
            name: siteName,
            url: appUrl || canonicalUrl,
        },
        {
            '@type': 'WebPage',
            name: title,
            description: seoDescription,
            url: canonicalUrl,
            isPartOf: {
                '@type': 'WebSite',
                name: siteName,
                url: appUrl || canonicalUrl,
            },
        },
    ];

    if (breadcrumbItems.length > 1) {
        schemaGraph.push({
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbItems.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: toAbsoluteUrl(appUrl, item.url),
            })),
        });
    }

    if (type === 'article') {
        schemaGraph.push({
            '@type': 'Article',
            headline: title,
            description: seoDescription,
            image: [imageUrl],
            author: {
                '@type': 'Person',
                name: author || 'Tim Redaksi',
            },
            publisher: {
                '@type': 'Organization',
                name: siteName,
            },
            mainEntityOfPage: canonicalUrl,
            ...(publishedTime ? { datePublished: publishedTime } : {}),
            ...(modifiedTime ? { dateModified: modifiedTime } : {}),
        });
    }

    const jsonLd = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': schemaGraph,
    });

    return (
        <Head title={finalTitle}>
            <meta name="description" content={seoDescription} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={imageUrl} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={imageUrl} />
            {seoSettings?.twitter_site && (
                <meta name="twitter:site" content={seoSettings.twitter_site} />
            )}
            {seoSettings?.twitter_creator && (
                <meta name="twitter:creator" content={seoSettings.twitter_creator} />
            )}
            {seoSettings?.facebook_app_id && (
                <meta property="fb:app_id" content={seoSettings.facebook_app_id} />
            )}
            <link rel="canonical" href={canonicalUrl} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLd }}
            />
            <meta name="robots" content={robotsContent} />
        </Head>
    );
}
