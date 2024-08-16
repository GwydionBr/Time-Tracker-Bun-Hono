import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import './App.css'

function App() {
  const [someCount, setCount] = useState(0)

  useEffect(() => {
    async function fetchInfo() {
      const response = await fetch('/api/test')
      const data = await response.json()
      setCount(data.count)
    }
    fetchInfo()
  }, [])



  return (
    <Card>
      <CardHeader>
        <CardTitle>Test Information</CardTitle>
        <CardDescription>Some Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{someCount}</p>
        <Button onClick={() => setCount(someCount + 1)}>Increment</Button>
        <Button onClick={() => setCount(someCount - 1)}>Decrement</Button>
      </CardContent>
    </Card>
  )
}

export default App
