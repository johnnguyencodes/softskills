module.exports = {
  siteMetadata: {
    title: "Developing soft skills",
    subtitle: "How I leveraged LFZ's Career Services to land a job in tech",
    author: "John Nguyen",
    authorSubtitle: "Zymo Research",
    authorImage: "author.jpg", // this image should go in /static
    courseImage: "courseImage.jpg", // this also should go in /static
    twitter: "https://twitter.com/holtbt", // make empty string to omit socials
    linkedin: "https://linkedin.com/in/btholt",
    github: "https://github.com/btholt",
    description:
      "This is the description that will show up when people share as well as on search engines",
    keywords: [
      "this is",
      "a list of keywords and phrase",
      "that search engines",
      "will index your page for",
    ],
  },
  pathPrefix: "softskills",
  // pathPrefix: "/my-repo-name", // if you're using GitHub Pages, put the name of the repo here with a leading slash
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
};
