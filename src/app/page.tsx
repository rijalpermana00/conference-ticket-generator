import Form from "@/sections/Form"
import { Hero } from "@/sections/Hero"

export default function Home() {
	return (
		<div className="flex flex-col gap-10 max-w-7xl mx-auto">
			<Hero />
			<Form />
		</div>
	)
}
