export enum DEV_MODE {
  PROD = 'production',
  DEV = 'development'
}
export const DEV_ENV = process.env.NODE_ENV ?? DEV_MODE.DEV
export const CARMENET_WEBSITE = 'https://www.carmenetreserve.com'

export const CARMENET_STORE = 'https://www.cellar8wine.com'
