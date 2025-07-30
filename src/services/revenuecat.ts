import { Purchases } from '@revenuecat/purchases-capacitor'

// Initialize RevenueCat
export const setupRevenueCat = async () => {
  await Purchases.configure({ apiKey: 'YOUR_REVENUECAT_PUBLIC_API_KEY' })
}

// Fetch available offerings
export const fetchOfferings = async () => {
  try {
    const offerings = await Purchases.getOfferings()
    return offerings.current?.availablePackages || []
  } catch (err) {
    console.error('Error fetching offerings:', err)
    return []
  }
}

// Purchase a package
export const purchasePackage = async (pkg: any) => {
  try {
    const result = await Purchases.purchasePackage({ aPackage: pkg })
    console.log('Purchase Success:', result)
    return result
  } catch (err: any) {
    if (!err.userCancelled) console.error('Purchase Failed:', err)
  }
}

// Restore purchases
export const restorePurchases = async () => {
  try {
    const restored = await Purchases.restorePurchases()
    console.log('Restored:', restored)
  } catch (err) {
    console.error('Restore Error:', err)
  }
}

// Check user entitlements
export const checkEntitlements = async () => {
  try {
    const info: any = await Purchases.getCustomerInfo()
    console.log('Active Entitlements:', info.entitlements.active)
    return info.entitlements.active
  } catch (err) {
    console.error('Entitlement Error:', err)
  }
}
