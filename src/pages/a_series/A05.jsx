import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";



export default function A05() {
  return (
    <div>
      <img src="/moblePatterns.png" alt="mobilePatterns" className="flex lg:hidden w-full" />
      <img src="/Patterns.png" alt="patterns" className="hidden lg:flex w-full" />
      <First />
      <Second />
      <Third />
    </div>
  )
}
