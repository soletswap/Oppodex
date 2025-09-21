import React, { useEffect } from 'react'
import { LiFiWidget, useWidgetEvents } from '@lifi/widget'

// Temel stil ve widget yapılandırması
const containerStyle = {
  fontFamily: 'Inter, system-ui, -apple-system, Roboto, sans-serif',
  padding: '20px',
  maxWidth: '980px',
  margin: '0 auto'
}

const widgetConfig = {
  integrator: 'Oppodex',
  config: {
    theme: {
      container: {
        border: '1px solid rgb(234,234,234)',
        borderRadius: '12px',
        padding: '8px'
      },
      colors: {
        primary: '#4F46E5'  // Indigo-600 gibi
      }
    }
  },
  options: {
    allowChains: [1, 137, 56, 10, 42161]  // Ethereum, Polygon, BSC, Optimism, Arbitrum gibi
  }
}

function WidgetEventLogger() {
  const { subscribe } = useWidgetEvents()

  useEffect(() => {
    const unsubscribe = subscribe((event) => {
      console.log('[LI.FI Widget event]', event?.type, event?.payload)
      if (event?.type === 'routeExecutionCompleted') {
        // burada backend loglama ya da kullanıcı geri bildirimi yapılabilir
        // fetch('/api/lifi-event', { method: 'POST', body: JSON.stringify(event.payload) })
      }
    })

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe()
    }
  }, [subscribe])

  return null
}

export default function App() {
  return (
    <div style={containerStyle}>
      <h1>Oppodex</h1>
      <p style={{ color: '#555' }}>
        LI.FI Widget ile EVM zincirlerinde swap / bridge işlemlerini destekleyen demo arayüz.
      </p>

      <WidgetEventLogger />

      <div style={{ marginTop: '12px' }}>
        <LiFiWidget
          integrator={widgetConfig.integrator}
          config={widgetConfig.config}
          options={{ allowChains: widgetConfig.options.allowChains }}
        />
      </div>

      <footer style={{ marginTop: '24px', color: '#666' }}>
        <small>
          Not: Gelişmiş cüzdan UX için wagmi/rainbowkit kullanılması önerilir. Testnet'te kapsamlı
          test yapmadan mainnet'te para gönderme.
        </small>
      </footer>
    </div>
  )
}
