module.exports = {
  reactStrictMode: true,
}
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    domains: ['images.unsplash.com', 'scontent-waw1-1.cdninstagram.com', 'telenok.by',
      //'restarauntbistro-obed.herokuapp.com',
      'res.cloudinary.com',
  // examples emages
  'www.edimdoma.ru', 'saveda.ru', 'mircooking.ru', 'static.1000.menu', 'www.patee.ru', 'www.gastronom.ru',
    ],
  },
};