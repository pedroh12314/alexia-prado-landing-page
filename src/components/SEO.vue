<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
    }
  }
</static-query>

<script>
export default {
  metaInfo() {
    const siteName = this.$static.metadata.siteName;
    const siteUrl = this.$static.metadata.siteUrl;
    const postPath = this.$page.post.path;
    const image = this.$page.post.cover_image;
    const imagePath = (image && `${siteUrl}${image.src}`) || "";

    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.excerpt,
        },
        { key: "og:url", property: "og:url", content: `${siteUrl}${postPath}` },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.post.title,
        },
        {
          key: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.post.excerpt,
        },
        {
          key: "og:image",
          property: "og:image",
          content: imagePath,
        },
        {
          key: "og:image:width",
          property: "og:image:width",
          content: (image && image.size.width) || "",
        },
        {
          key: "og:image:height",
          property: "og:image:height",
          content: (image && image.size.height) || "",
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.excerpt,
        },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: image ? "summary_large_image" : "summary",
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: imagePath,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.post.title,
        },
      ],
      script: [
        {
          type: "application/ld+json",
          json: {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            description: this.$page.post.description,
            datePublished: this.$page.post.date,
            dateModified: this.$page.post.date,
            publisher: {
              "@type": "Person",
              name: siteName
            },
            headline: this.$page.post.title,
            image: imagePath,
          },
        },
      ],
    };
  },
};
</script>