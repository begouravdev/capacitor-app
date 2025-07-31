import { useEffect } from 'react'
import { setupRevenueCat, purchasePackage } from '../services/revenuecat'

export default function StorePage() {
  // 🔹 Hardcoded Product (Example)
  const staticPackage = {
    identifier: 'com.hirelinkmobile.dev.Lifetime',
    product: {
      title: 'Lifetime Access',
      priceString: '$9.99',
    },
  }

  useEffect(() => {
    // ✅ Initialize RevenueCat once
    setupRevenueCat()
  }, [])

  return (
    <div>
      <h2>🔥 Subscription Plan</h2>
      <button onClick={() => purchasePackage(staticPackage)}>
        {staticPackage.product.title} - {staticPackage.product.priceString}
      </button>
    </div>
  )
}
