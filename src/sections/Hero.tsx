export const Hero = () => {
	return (
		<div className="flex flex-col gap-5 text-neutral-200 font-semibold text-center desktop:max-w-4xl max-w-xl mx-auto">
			<div>
				<h1 className="desktop:text-[59px] text-[30px] leading-none">
					Your Journey to Coding Conf {new Date().getFullYear()} Start
					Here!
				</h1>
			</div>
			<div className="max-w-3xl mx-auto">
				<p className="font-normal text-center desktop:text-[23px] text-xl dark:text-slate-400 text-slate-600">
					Secure your spot at next year&apos;s biggest coding
					conference.
				</p>
			</div>
		</div>
	)
}
