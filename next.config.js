/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: "",
    sessionKey: {
      token: "token",
      user: "user"
    }
  },
  images: {
    domains: []
  }
}

module.exports = nextConfig
