import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-900">
      <Card className="bg-gray-800 text-white overflow-hidden">
        <CardContent className="p-6 h-full flex flex-col justify-between" style={{
          backgroundImage: "url('/placeholder.svg?height=300&width=400')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div>
            <h2 className="text-xl font-bold mb-2">Endless Possibilities; Immersive Display</h2>
            <p className="text-sm">16.66cm (6.6) HD+ IPS Display</p>
            <p className="text-sm">90Hz Refresh Rate | 180Hz Touch Sampling Rate</p>
          </div>
          <div className="mt-4">
            <img src="/placeholder.svg?height=150&width=150" alt="Smartphone display" className="rounded-lg" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white overflow-hidden">
        <CardContent className="p-6 h-full flex flex-col justify-between" style={{
          backgroundImage: "url('/placeholder.svg?height=300&width=400')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <h2 className="text-xl font-bold mb-2">Long Lasting Experience</h2>
          <p className="text-sm mb-4">5000mAh Battery with 10W Fast Charging Support</p>
          <div className="text-6xl font-bold">5000mAh</div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 text-white overflow-hidden">
        <CardContent className="p-6 h-full flex flex-col justify-between" style={{
          backgroundImage: "url('/placeholder.svg?height=300&width=400')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <h2 className="text-xl font-bold mb-2">Effortless Multi-Tasking</h2>
          <p className="text-sm mb-4">UNISOC T606 Octa-Core</p>
          <div className="bg-purple-600 text-white text-2xl font-bold p-4 rounded-lg inline-block">
            T606
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-rows-2 gap-4">
        <Card className="bg-gray-800 text-white overflow-hidden">
          <CardContent className="p-6 h-full flex items-center justify-between" style={{
            backgroundImage: "url('/placeholder.svg?height=150&width=400')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div>
              <h2 className="text-xl font-bold mb-2">Side-mounted Fingerprint Lock</h2>
            </div>
            <img src="/placeholder.svg?height=100&width=50" alt="Smartphone side view" className="rounded-lg" />
          </CardContent>
        </Card>

        <Card className="bg-gray-800 text-white overflow-hidden">
          <CardContent className="p-6 h-full flex items-center justify-between" style={{
            backgroundImage: "url('/placeholder.svg?height=150&width=400')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div>
              <h2 className="text-xl font-bold mb-2">itel S23's HD Pixel Lens!</h2>
              <p className="text-sm">50MP AI Dual Rear Camera</p>
              <p className="text-sm">8 MP Front Camera</p>
            </div>
            <img src="/placeholder.svg?height=100&width=100" alt="Camera lenses" className="rounded-lg" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}