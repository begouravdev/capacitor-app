import { useEffect, useState } from 'react'
import {
  fetchOfferings,
  purchasePackage,
  setupRevenueCat,
} from '../services/revenuecat'

export default function StorePage() {
  const [packages, setPackages] = useState<any[]>([])

  useEffect(() => {
    ;(async () => {
      await setupRevenueCat()
      const pkgs = await fetchOfferings()
      setPackages(pkgs)
    })()
  }, [])

  return (
    <div>
      <h2>🔥 Subscription Plans</h2>
      {packages.length === 0 && <p>No plans available</p>}

      {packages.map((pkg, idx) => (
        <button key={idx} onClick={() => purchasePackage(pkg)}>
          {pkg.product.title} - {pkg.product.priceString}
        </button>
      ))}
    </div>
  )
}
