const stanyMagazynowe = new URL(
  'https://docs.google.com/spreadsheets/d/1Hzu6RTQb8mAENqRCL_DkT2g8hnMAO6uk65LlPDMAdYo/edit?pli=1&gid=43496050#gid=43496050'
)

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/v2/stany-magazynowe',
        destination: stanyMagazynowe.toString(),
        permanent: true,
      },
    ]
  }
}

export default nextConfig
