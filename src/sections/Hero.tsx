export const Hero = () => {
    return(
        <div className="flex flex-col gap-5 text-neutral-200 font-semibold text-center">
            <div>
                <h1
                    className="text-[59px] leading-none"
                >
                    Your Journey to Coding Conf <br /> {new Date().getFullYear()} Start Here!
                </h1>
            </div>
            <div className="max-w-3xl mx-auto">
                <p
                    className="font-normal text-center text-[23px] dark:text-slate-400 text-slate-600"
                >
                    Secure your spot at next year's biggest coding conference.
                </p>
            </div>
        </div>
    )
}