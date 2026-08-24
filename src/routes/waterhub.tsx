import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/waterhub')({
  component: WaterHubComponent,
})

function WaterHubComponent() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe 
        src="https://labs.google.com/u/0/pomelli/website/8U4Q5gaIwulcBuQFz0iOYf" 
        width="100%" 
        height="100%" 
        style={{ border: 'none' }}
        title="WaterHub Nepal"
      />
    </div>
  )
}
